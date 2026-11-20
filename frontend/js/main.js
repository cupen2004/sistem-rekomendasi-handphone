// Homepage JavaScript
document.addEventListener('DOMContentLoaded', async () => {
  const phonesList = document.getElementById('phones-list');
  const phonesLoading = document.getElementById('phones-loading');
  const phonesError = document.getElementById('phones-error');

  try {
    // Fetch latest 6 phones
    const data = await api.getPhones({ limit: 6 });
    
    phonesLoading.style.display = 'none';
    
    if (data.success && data.data && data.data.length > 0) {
      renderPhones(data.data);
    } else {
      phonesList.innerHTML = `
        <div class="empty">
          <div class="empty-icon">📱</div>
          <p>Belum ada data HP tersedia</p>
        </div>
      `;
    }
  } catch (error) {
    phonesLoading.style.display = 'none';
    phonesError.style.display = 'block';
    phonesError.textContent = 'Gagal memuat data. Pastikan backend server sudah berjalan di http://localhost:5000';
  }
});

function renderPhones(phones) {
  const phonesList = document.getElementById('phones-list');
  
  phonesList.innerHTML = phones.map(phone => `
    <div class="card phone-card">
      <div class="phone-image">
        ${phone.image_url 
          ? `<img src="${phone.image_url}" alt="${phone.brand} ${phone.model}">`
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

        <div class="phone-actions">
          <a href="detail.html?id=${phone.id}" class="btn-detail">Detail</a>
        </div>
      </div>
    </div>
  `).join('');
}
