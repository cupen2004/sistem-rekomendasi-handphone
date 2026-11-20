// Detail Page JavaScript
document.addEventListener('DOMContentLoaded', async () => {
  const detailLoading = document.getElementById('detail-loading');
  const detailError = document.getElementById('detail-error');
  const detailContent = document.getElementById('detail-content');

  // Get phone ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const phoneId = urlParams.get('id');

  if (!phoneId) {
    detailLoading.style.display = 'none';
    detailError.style.display = 'block';
    detailError.textContent = 'ID HP tidak ditemukan';
    return;
  }

  try {
    const data = await api.getPhoneById(phoneId);
    
    detailLoading.style.display = 'none';

    if (data.success && data.data) {
      detailContent.style.display = 'block';
      renderPhoneDetail(data.data);
    } else {
      detailError.style.display = 'block';
      detailError.textContent = 'HP tidak ditemukan';
    }
  } catch (error) {
    detailLoading.style.display = 'none';
    detailError.style.display = 'block';
    detailError.textContent = 'Gagal memuat data. Pastikan backend server sudah berjalan di http://localhost:5000';
  }
});

function renderPhoneDetail(phone) {
  // Set title and price
  document.getElementById('phone-title').textContent = `${phone.brand} ${phone.model}`;
  document.getElementById('phone-price').textContent = formatPrice(phone.price);

  // Set image
  const phoneImage = document.getElementById('phone-image');
  if (phone.image_url) {
    phoneImage.innerHTML = `<img src="${phone.image_url}" alt="${phone.brand} ${phone.model}">`;
  }

  // Set specs
  document.getElementById('spec-chipset').textContent = phone.chipset || 'N/A';
  document.getElementById('spec-os').textContent = phone.os || 'N/A';
  document.getElementById('spec-ram').textContent = formatRAM(phone.ram);
  document.getElementById('spec-storage').textContent = formatStorage(phone.storage);
  document.getElementById('spec-camera-main').textContent = formatCamera(phone.camera_main);
  document.getElementById('spec-camera-front').textContent = formatCamera(phone.camera_front);
  document.getElementById('spec-battery').textContent = formatBattery(phone.battery);
  
  // Display
  let displayText = formatDisplay(phone.display_size);
  if (phone.display_type) {
    displayText += `<div style="font-size: 0.875rem; color: var(--gray-400); margin-top: 0.25rem;">${phone.display_type}</div>`;
  }
  document.getElementById('spec-display').innerHTML = displayText;

  // Release date
  if (phone.release_date) {
    document.getElementById('release-row').style.display = 'grid';
    document.getElementById('spec-release').textContent = phone.release_date;
  }

  // Scores (if available)
  if (phone.scores) {
    const scoreCard = document.getElementById('score-card');
    const scoreDetails = document.getElementById('score-details');
    const totalScore = document.getElementById('total-score');

    scoreCard.style.display = 'block';
    totalScore.textContent = (phone.scores.total * 100).toFixed(1);

    // Render individual scores
    const scoreEntries = Object.entries(phone.scores)
      .filter(([key]) => key !== 'total')
      .map(([key, value]) => {
        const percentage = value * 100;
        return `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="color: var(--gray-300); text-transform: capitalize;">${key}</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 8rem; height: 0.5rem; background-color: var(--dark-700); border-radius: 9999px; overflow: hidden;">
                <div style="height: 100%; background: linear-gradient(to right, var(--primary-600), var(--primary-500)); width: ${percentage}%;"></div>
              </div>
              <span style="color: var(--primary-500); font-weight: bold; width: 3rem; text-align: right;">
                ${percentage.toFixed(0)}
              </span>
            </div>
          </div>
        `;
      });

    scoreDetails.innerHTML = scoreEntries.join('');
  }
}
