// Compare Page JavaScript
let allPhones = [];
let selectedPhones = [null, null, null];

document.addEventListener('DOMContentLoaded', async () => {
  // Load all phones for search
  try {
    const data = await api.getPhones({ limit: 100 });
    if (data.success && data.data) {
      allPhones = data.data;
      setupSearchInputs();
    }
  } catch (error) {
    console.error('Error loading phones:', error);
  }
});

function setupSearchInputs() {
  for (let i = 1; i <= 3; i++) {
    const input = document.getElementById(`search-${i}`);
    const dropdown = document.getElementById(`dropdown-${i}`);

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      
      if (query.length < 2) {
        dropdown.style.display = 'none';
        return;
      }

      const filtered = allPhones.filter(phone => {
        const name = `${phone.brand} ${phone.model}`.toLowerCase();
        return name.includes(query) && !selectedPhones.some(p => p && p.id === phone.id);
      });

      if (filtered.length > 0) {
        dropdown.innerHTML = filtered.slice(0, 10).map(phone => `
          <div class="datalist-option" data-index="${i - 1}" data-phone-id="${phone.id}" style="background-color: #ffffff !important; color: #000000 !important;">
            <div class="option-name" style="color: #000000 !important; background-color: #ffffff !important; display: block;">${phone.brand} ${phone.model}</div>
            <div class="option-price" style="color: #666666 !important; background-color: #ffffff !important; display: block;">${formatPrice(phone.price)}</div>
          </div>
        `).join('');
        dropdown.style.display = 'block';

        // Add click handlers
        dropdown.querySelectorAll('.datalist-option').forEach(option => {
          option.addEventListener('click', () => {
            const phoneId = parseInt(option.dataset.phoneId);
            const index = parseInt(option.dataset.index);
            const phoneName = option.querySelector('.option-name').textContent;
            selectPhone(phoneId, index);
            dropdown.style.display = 'none';
            input.value = phoneName; // Set nama HP ke input box
            input.setAttribute('data-selected-id', phoneId); // Simpan ID
          });
        });
      } else {
        dropdown.style.display = 'none';
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }
}

async function selectPhone(phoneId, index) {
  try {
    const data = await api.getPhoneById(phoneId);
    if (data.success && data.data) {
      selectedPhones[index] = data.data;
      renderComparison();
    }
  } catch (error) {
    console.error('Error loading phone:', error);
  }
}

function removePhone(index) {
  selectedPhones[index] = null;
  renderComparison();
}

function renderComparison() {
  const compareResult = document.getElementById('compare-result');
  const compareEmpty = document.getElementById('compare-empty');
  const comparisonGrid = document.getElementById('comparison-grid');

  const validPhones = selectedPhones.filter(p => p !== null);

  if (validPhones.length < 2) {
    compareResult.style.display = 'none';
    compareEmpty.style.display = 'block';
    return;
  }

  compareEmpty.style.display = 'none';
  compareResult.style.display = 'block';

  comparisonGrid.innerHTML = selectedPhones
    .map((phone, index) => {
      if (!phone) return '';
      
      return `
        <div class="card compare-card">
          <button class="compare-remove" onclick="removePhone(${index})">×</button>
          
          <div class="compare-phone-image">
            ${phone.image_url 
              ? `<img src="${phone.image_url}" alt="${phone.brand} ${phone.model}">`
              : `<div class="detail-image-placeholder">📱</div>`
            }
          </div>

          <h3 class="compare-phone-name">${phone.brand} ${phone.model}</h3>
          <div class="compare-phone-price">${formatPrice(phone.price)}</div>

          <div class="compare-specs">
            <div class="compare-spec-item">
              <div class="compare-spec-label">Processor</div>
              <div class="compare-spec-value" style="color: var(--gray-100);">${phone.chipset || 'N/A'}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">OS</div>
              <div class="compare-spec-value" style="color: var(--gray-100);">${phone.os || 'N/A'}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">🧠 RAM</div>
              <div class="compare-spec-value" style="color: var(--primary-500);">${formatRAM(phone.ram)}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">💾 Storage</div>
              <div class="compare-spec-value" style="color: var(--primary-500);">${formatStorage(phone.storage)}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">📷 Kamera Utama</div>
              <div class="compare-spec-value" style="color: var(--primary-500);">${formatCamera(phone.camera_main)}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">🤳 Kamera Depan</div>
              <div class="compare-spec-value" style="color: var(--primary-500);">${formatCamera(phone.camera_front)}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">🔋 Battery</div>
              <div class="compare-spec-value" style="color: var(--primary-500);">${formatBattery(phone.battery)}</div>
            </div>

            <div class="compare-spec-item">
              <div class="compare-spec-label">📺 Display</div>
              <div class="compare-spec-value" style="color: var(--gray-100);">${formatDisplay(phone.display_size)}</div>
            </div>

            ${phone.display_type ? `
              <div class="compare-spec-item">
                <div class="compare-spec-label">Display Type</div>
                <div class="compare-spec-value" style="color: var(--gray-100);">${phone.display_type}</div>
              </div>
            ` : ''}

            ${phone.release_date ? `
              <div class="compare-spec-item">
                <div class="compare-spec-label">📅 Tanggal Rilis</div>
                <div class="compare-spec-value" style="color: var(--gray-100);">${phone.release_date}</div>
              </div>
            ` : ''}

            ${phone.scores ? `
              <div class="compare-spec-item">
                <div class="compare-spec-label">⭐ Skor</div>
                <div class="compare-spec-value" style="color: var(--primary-500); font-size: 1.5rem;">
                  ${formatScore(phone.scores.total)}
                </div>
              </div>
            ` : ''}
          </div>

          <a href="detail.html?id=${phone.id}" class="btn btn-outline" style="width: 100%; margin-top: 1rem; text-align: center;">
            Lihat Detail
          </a>
        </div>
      `;
    })
    .filter(html => html !== '')
    .join('');
}

// Make removePhone globally accessible
window.removePhone = removePhone;
