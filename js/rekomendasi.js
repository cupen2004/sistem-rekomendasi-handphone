// Rekomendasi Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.getElementById('filter-form');
  const resetBtn = document.getElementById('reset-btn');
  
  const resultsLoading = document.getElementById('results-loading');
  const resultsError = document.getElementById('results-error');
  const resultsSection = document.getElementById('results-section');
  const resultsList = document.getElementById('results-list');
  const resultsTitle = document.getElementById('results-title');
  const resultsCount = document.getElementById('results-count');
  const initialState = document.getElementById('initial-state');

  // Category selection state
  let selectedCategories = [];
  const categoryPills = document.querySelectorAll('.category-pill');

  // Compare functionality
  let compareList = [];
  const compareBar = document.getElementById('compare-bar');
  const compareCount = document.getElementById('compare-count');
  const compareBtn = document.getElementById('compare-btn');
  const compareClearBtn = document.getElementById('compare-clear-btn');

  // Sort functionality
  const sortSelect = document.getElementById('sort-select');
  let currentData = [];
  let currentShowScore = false;

  // Handle category pill clicks
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.category;
      
      if (pill.classList.contains('active')) {
        pill.classList.remove('active');
        selectedCategories = selectedCategories.filter(c => c !== category);
      } else {
        pill.classList.add('active');
        selectedCategories.push(category);
      }

      // Auto search when category is selected/deselected
      if (selectedCategories.length > 0) {
        searchPhones();
      }
    });
  });

  // Handle sort change
  sortSelect.addEventListener('change', () => {
    if (currentData.length > 0) {
      applySorting();
      renderResults(currentData, currentShowScore);
    }
  });

  // Handle compare actions
  compareBtn.addEventListener('click', () => {
    if (compareList.length > 0) {
      const ids = compareList.join(',');
      window.location.href = `compare.html?ids=${ids}`;
    }
  });

  compareClearBtn.addEventListener('click', () => {
    compareList = [];
    updateCompareBar();
    document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
  });

  // Restore saved results on page load
  restoreSavedResults();

  // Handle form submit
  filterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await searchPhones();
  });

  // Handle reset
  resetBtn.addEventListener('click', () => {
    filterForm.reset();
    resultsSection.style.display = 'none';
    resultsError.style.display = 'none';
    initialState.style.display = 'block';
    
    // Reset category selection
    selectedCategories = [];
    categoryPills.forEach(pill => pill.classList.remove('active'));
    
    // Reset compare
    compareList = [];
    updateCompareBar();
    
    // Clear saved results
    sessionStorage.removeItem('lastSearchResults');
    sessionStorage.removeItem('lastSearchFilters');
    sessionStorage.removeItem('lastSelectedCategories');
  });

  async function searchPhones() {
    // Get filter values
    const filters = {
      minPrice: document.getElementById('min-price').value,
      maxPrice: document.getElementById('max-price').value,
      brand: document.getElementById('brand').value,
      minRam: document.getElementById('min-ram').value,
      minStorage: document.getElementById('min-storage').value,
      minBattery: document.getElementById('min-battery').value,
      minCamera: document.getElementById('min-camera').value,
    };

    // Build query params
    const params = {};
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    if (filters.brand) params.brand = filters.brand;
    if (filters.minRam) params.minRam = filters.minRam;
    if (filters.minStorage) params.minStorage = filters.minStorage;
    if (filters.minBattery) params.minBattery = filters.minBattery;
    if (filters.minCamera) params.minCamera = filters.minCamera;

    // Show loading
    initialState.style.display = 'none';
    resultsSection.style.display = 'none';
    resultsError.style.display = 'none';
    resultsLoading.style.display = 'block';

    try {
      let data;
      let hasFilters = Object.keys(params).length > 0;
      let usesCategorySearch = selectedCategories.length > 0;

      // Prioritize category-based search if categories are selected
      if (usesCategorySearch) {
        params.categories = selectedCategories;
        data = await api.getRecommendationsByCategory(params);
      } else if (hasFilters) {
        data = await api.getRecommendations(params);
      } else {
        data = await api.getPhones({ limit: 20 });
      }

      resultsLoading.style.display = 'none';

      if (data.success && data.data && data.data.length > 0) {
        resultsSection.style.display = 'block';
        
        // Store current data for sorting
        currentData = [...data.data];
        currentShowScore = hasFilters || usesCategorySearch;
        
        // Apply initial sorting
        applySorting();
        
        // Set title based on search type
        if (usesCategorySearch) {
          const categoryNames = {
            'gaming': 'Gaming',
            'kerja': 'Kerja & Produktivitas',
            'sosmed': 'Sosial Media',
            'fotografi': 'Fotografi',
            'multimedia': 'Multimedia',
            'budget': 'Budget Friendly'
          };
          const selectedNames = selectedCategories.map(c => categoryNames[c] || c);
          resultsTitle.textContent = `Rekomendasi untuk ${selectedNames.join(', ')}`;
        } else if (hasFilters) {
          resultsTitle.textContent = 'Hasil Rekomendasi';
        } else {
          resultsTitle.textContent = 'Semua HP';
        }
        
        resultsCount.textContent = `Ditemukan ${currentData.length} HP`;
        renderResults(currentData, currentShowScore);
        
        // Save results and filters to sessionStorage
        sessionStorage.setItem('lastSearchResults', JSON.stringify(currentData));
        sessionStorage.setItem('lastSearchFilters', JSON.stringify({ filters, hasFilters }));
        sessionStorage.setItem('lastSelectedCategories', JSON.stringify(selectedCategories));
      } else {
        resultsSection.style.display = 'block';
        resultsTitle.textContent = 'Hasil Pencarian';
        resultsCount.textContent = '';
        resultsList.innerHTML = `
          <div class="empty">
            <div class="empty-icon">Tidak ditemukan</div>
            <p>Tidak ada HP yang sesuai dengan kriteria kamu. Coba ubah filter dan cari lagi.</p>
          </div>
        `;
      }
    } catch (error) {
      resultsLoading.style.display = 'none';
      resultsError.style.display = 'block';
      resultsError.textContent = 'Gagal memuat data. Pastikan backend server sudah berjalan di http://localhost:5000';
    }
  }

  function applySorting() {
    const sortValue = sortSelect.value;
    
    currentData.sort((a, b) => {
      const phoneA = a.phone || a;
      const phoneB = b.phone || b;
      
      switch(sortValue) {
        case 'best-match':
          const scoreA = a.score || 0;
          const scoreB = b.score || 0;
          return scoreB - scoreA;
        
        case 'price-low':
          return phoneA.price - phoneB.price;
        
        case 'price-high':
          return phoneB.price - phoneA.price;
        
        case 'newest':
          return phoneB.ram - phoneA.ram;
        
        default:
          return 0;
      }
    });
  }

  function updateCompareBar() {
    compareCount.textContent = compareList.length;
    if (compareList.length > 0) {
      compareBar.classList.add('active');
    } else {
      compareBar.classList.remove('active');
    }
  }

  function handleCompareToggle(phoneId, isChecked) {
    if (isChecked) {
      if (compareList.length < 4 && !compareList.includes(phoneId)) {
        compareList.push(phoneId);
      } else if (compareList.length >= 4) {
        const checkbox = document.querySelector(`input[value="${phoneId}"]`);
        if (checkbox) checkbox.checked = false;
        alert('Maksimal 4 HP untuk dibandingkan');
        return;
      }
    } else {
      compareList = compareList.filter(id => id !== phoneId);
    }
    updateCompareBar();
  }

  function getBestCategoryBadge(phone, score, categories) {
    if (!score || !categories || categories.length === 0) return '';
    
    const badges = {
      'gaming': { label: 'Best for Gaming', class: 'badge-gaming' },
      'kerja': { label: 'Produktivitas Pro', class: 'badge-kerja' },
      'sosmed': { label: 'Selfie Expert', class: 'badge-sosmed' },
      'fotografi': { label: 'Camera Beast', class: 'badge-fotografi' },
      'multimedia': { label: 'Entertainment King', class: 'badge-multimedia' },
      'budget': { label: 'Budget King', class: 'badge-budget' }
    };
    
    if (score >= 85 && categories.length === 1) {
      const category = categories[0];
      const badge = badges[category];
      return badge ? `<span class="category-badge ${badge.class}">${badge.label}</span>` : '';
    }
    
    return '';
  }

  function renderResults(data, showScore = false) {
    resultsList.innerHTML = data.map(item => {
      const phone = item.phone || item;
      const score = item.score;
      const matchReasons = item.match_reasons || [];
      const categories = item.categories || [];
      const badge = getBestCategoryBadge(phone, score, categories);
      
      return `
      <div class="card phone-card">
        <div class="phone-compare">
          <input type="checkbox" id="compare-${phone.id}" class="compare-checkbox" value="${phone.id}" onchange="handleCompareToggle(${phone.id}, this.checked)">
          <label for="compare-${phone.id}" class="compare-label"></label>
        </div>
        
        <div class="phone-image">
          ${phone.image_url 
            ? `<img src="${phone.image_url}" alt="${phone.brand} ${phone.model}" onerror="this.parentElement.innerHTML='<div class=\\'phone-image-placeholder\\'>📱</div>'">`
            : `<div class="phone-image-placeholder">📱</div>`
          }
        </div>
        
        <div class="phone-info">
          <div class="phone-header">
            <div>
              <h3 class="phone-name">${phone.brand} ${phone.model}</h3>
              <p class="phone-price">${formatPrice(phone.price)}</p>
            </div>
          </div>

          ${badge ? `<div class="phone-badges">${badge}</div>` : ''}

          ${showScore && score ? `
            <div class="phone-rating">
              <div class="star-rating">${getStarRating(score)}</div>
              <span class="rating-label">Kesesuaian</span>
            </div>
          ` : ''}

          <div class="phone-specs">
            <div class="phone-spec">
              <span class="phone-spec-icon">🧠</span>
              <span class="phone-spec-value">${formatRAM(phone.ram)}</span>
            </div>
            <div class="phone-spec">
              <span class="phone-spec-icon">💾</span>
              <span class="phone-spec-value">${formatStorage(phone.storage)}</span>
            </div>
            <div class="phone-spec">
              <span class="phone-spec-icon">🔋</span>
              <span class="phone-spec-value">${formatBattery(phone.battery)}</span>
            </div>
            <div class="phone-spec">
              <span class="phone-spec-icon">📷</span>
              <span class="phone-spec-value">${formatCamera(phone.camera_main)}</span>
            </div>
          </div>

          ${showScore && matchReasons.length > 0 ? `
            <div class="match-reasons">
              ${matchReasons.map(reason => `<span class="match-reason">✓ ${reason}</span>`).join('')}
            </div>
          ` : ''}

          <div class="phone-actions">
            <a href="detail.html?id=${phone.id}" class="btn-detail">Detail</a>
          </div>
        </div>
      </div>
      `;
    }).join('');
    
    // Re-attach compare event listeners
    document.querySelectorAll('.compare-checkbox').forEach(checkbox => {
      const phoneId = parseInt(checkbox.value);
      if (compareList.includes(phoneId)) {
        checkbox.checked = true;
      }
    });
  }

  // Make handleCompareToggle global
  window.handleCompareToggle = handleCompareToggle;

  function restoreSavedResults() {
    const savedResults = sessionStorage.getItem('lastSearchResults');
    const savedFilters = sessionStorage.getItem('lastSearchFilters');
    const savedCategories = sessionStorage.getItem('lastSelectedCategories');
    
    if (savedResults && savedFilters) {
      try {
        const results = JSON.parse(savedResults);
        const { filters, hasFilters } = JSON.parse(savedFilters);
        
        // Restore category selection
        if (savedCategories) {
          selectedCategories = JSON.parse(savedCategories);
          categoryPills.forEach(pill => {
            if (selectedCategories.includes(pill.dataset.category)) {
              pill.classList.add('active');
            }
          });
        }
        
        // Restore form values
        if (filters.minPrice) document.getElementById('min-price').value = filters.minPrice;
        if (filters.maxPrice) document.getElementById('max-price').value = filters.maxPrice;
        if (filters.brand) document.getElementById('brand').value = filters.brand;
        if (filters.minRam) document.getElementById('min-ram').value = filters.minRam;
        if (filters.minStorage) document.getElementById('min-storage').value = filters.minStorage;
        if (filters.minBattery) document.getElementById('min-battery').value = filters.minBattery;
        if (filters.minCamera) document.getElementById('min-camera').value = filters.minCamera;
        
        // Restore results
        initialState.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Set title based on saved state
        if (selectedCategories.length > 0) {
          const categoryNames = {
            'gaming': 'Gaming',
            'kerja': 'Kerja & Produktivitas',
            'sosmed': 'Sosial Media',
            'fotografi': 'Fotografi',
            'multimedia': 'Multimedia',
            'budget': 'Budget Friendly'
          };
          const selectedNames = selectedCategories.map(c => categoryNames[c] || c);
          resultsTitle.textContent = `Rekomendasi untuk ${selectedNames.join(', ')}`;
        } else {
          resultsTitle.textContent = hasFilters ? 'Hasil Rekomendasi' : 'Semua HP';
        }
        
        resultsCount.textContent = `Ditemukan ${results.length} HP`;
        renderResults(results, hasFilters || selectedCategories.length > 0);
      } catch (error) {
        console.error('Error restoring results:', error);
        sessionStorage.removeItem('lastSearchResults');
        sessionStorage.removeItem('lastSearchFilters');
        sessionStorage.removeItem('lastSelectedCategories');
      }
    }
  }
});
