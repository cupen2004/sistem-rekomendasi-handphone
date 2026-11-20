// Auto-update image URLs to local photos
(function() {
  if (!window.DUMMY_PHONES) return;
  
  // Manual mapping untuk nama yang special
  const specialMappings = {
    'Apple iPhone 16 Pro Max': 'iphone-16-pro-max.jpg',
    'Apple iPhone 16 Pro': 'iphone-16-pro.jpg',
    'Apple iPhone 16 Plus': 'iphone-16-plus.jpg',
    'Apple iPhone 16': 'iphone-16.jpg',
    'Apple iPhone 15 Pro Max': 'iphone-15-pro-max.jpg',
    'Apple iPhone 15': 'iphone-15.jpg',
    'Apple iPhone 14': 'iphone-14.jpg',
    'Apple iPhone SE 2024': 'iphone-se-2024.jpg',
    'Samsung Galaxy S24 Ultra': 'samsung-s24-ultra.jpg',
    'Samsung Galaxy S24+': 'samsung-s24-plus.jpg',
    'Samsung Galaxy S24': 'samsung-s24.jpg',
    'Samsung Galaxy Z Fold6': 'samsung-z-fold6.jpg',
    'Samsung Galaxy Z Flip6': 'samsung-z-flip6.jpg',
    'Samsung Galaxy A55': 'samsung-a55.jpg',
    'Samsung Galaxy A35': 'samsung-a35.jpg',
    'Samsung Galaxy A25': 'samsung-a25.jpg',
    'Samsung Galaxy A15': 'samsung-a15.jpg',
    'Samsung Galaxy M55': 'samsung-m55.jpg',
    'Samsung Galaxy F15': 'samsung-f15.jpg',
    'Samsung Galaxy A05s': 'samsung-a05s.jpg',
    'Google Pixel 9 Pro XL': 'pixel-9-pro-xl.jpg',
    'Google Pixel 9 Pro': 'pixel-9-pro.jpg',
    'Google Pixel 9': 'pixel-9.jpg',
    'Google Pixel 8a': 'pixel-8a.jpg',
    'Google Pixel 8 Pro': 'pixel-8-pro.jpg',
    'Nothing Phone (2a) Plus': 'nothing-phone-2a-plus.jpg',
    'Nothing Phone (2a)': 'nothing-phone-2a.jpg',
    'Nothing Phone (2)': 'nothing-phone-2.jpg',
    'Nothing Phone (1)': 'nothing-phone-1.jpg',
  };
  
  // Mapping function: convert brand + model to filename
  function getImagePath(brand, model) {
    const fullName = `${brand} ${model}`;
    
    // Check manual mapping first
    if (specialMappings[fullName]) {
      return `images/phones/${specialMappings[fullName]}`;
    }
    
    // Auto-generate filename
    const cleanBrand = brand.toLowerCase();
    const cleanModel = model.toLowerCase()
      .replace(/\s+/g, '-')  // space to dash
      .replace(/\+/g, '-plus')  // + to -plus
      .replace(/\(/g, '')  // remove (
      .replace(/\)/g, '')  // remove )
      .replace(/\//g, '-')  // / to -
      .replace(/'/g, '')  // remove '
      .replace(/,/g, '')  // remove comma
      .replace(/-+/g, '-')  // multiple dash to single
      .replace(/^-|-$/g, '');  // remove leading/trailing dash
    
    return `images/phones/${cleanBrand}-${cleanModel}.jpg`;
  }
  
  // Update all phones
  let successCount = 0;
  window.DUMMY_PHONES.forEach(phone => {
    const imagePath = getImagePath(phone.brand, phone.model);
    phone.image_url = imagePath;
    successCount++;
  });
  
  console.log(`✅ Updated ${successCount} phone images to local photos!`);
  console.log('First 5 phones:', window.DUMMY_PHONES.slice(0, 5).map(p => ({
    name: `${p.brand} ${p.model}`,
    image: p.image_url
  })));
})();
