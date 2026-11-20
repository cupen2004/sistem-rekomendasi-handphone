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
    // Clear saved results
    sessionStorage.removeItem('lastSearchResults');
    sessionStorage.removeItem('lastSearchFilters');
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
      // Use recommendations endpoint if we have filters, otherwise use phones endpoint
      const hasFilters = Object.keys(params).length > 0;
      const data = hasFilters 
        ? await api.getRecommendations(params)
        : await api.getPhones({ limit: 20 });

      resultsLoading.style.display = 'none';

      if (data.success && data.data && data.data.length > 0) {
        resultsSection.style.display = 'block';
        resultsTitle.textContent = hasFilters ? 'Hasil Rekomendasi' : 'Semua HP';
        resultsCount.textContent = `Ditemukan ${data.data.length} HP`;
        renderResults(data.data, hasFilters);
        
        // Save results and filters to sessionStorage
        sessionStorage.setItem('lastSearchResults', JSON.stringify(data.data));
        sessionStorage.setItem('lastSearchFilters', JSON.stringify({ filters, hasFilters }));
      } else {
        resultsSection.style.display = 'block';
        resultsTitle.textContent = 'Hasil Pencarian';
        resultsCount.textContent = '';
        resultsList.innerHTML = `
          <div class="empty">
            <div class="empty-icon">😔</div>
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

  function renderResults(data, showScore = false) {
    resultsList.innerHTML = data.map(item => {
      const phone = item.phone || item;
      const score = item.score;
      const matchReasons = item.match_reasons || [];
      
      return `
      <div class="card phone-card">
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
            ${showScore && score ? `
              <div class="phone-score">
                <div class="score-value ${getScoreColor(score)}">
                  ${formatScore(score)}
                </div>
                <div class="score-label">Match</div>
              </div>
            ` : ''}
          </div>

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
  }

  function restoreSavedResults() {
    const savedResults = sessionStorage.getItem('lastSearchResults');
    const savedFilters = sessionStorage.getItem('lastSearchFilters');
    
    if (savedResults && savedFilters) {
      try {
        const results = JSON.parse(savedResults);
        const { filters, hasFilters } = JSON.parse(savedFilters);
        
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
        resultsTitle.textContent = hasFilters ? 'Hasil Rekomendasi' : 'Semua HP';
        resultsCount.textContent = `Ditemukan ${results.length} HP`;
        renderResults(results, hasFilters);
      } catch (error) {
        console.error('Error restoring results:', error);
        sessionStorage.removeItem('lastSearchResults');
        sessionStorage.removeItem('lastSearchFilters');
      }
    }
  }
});
