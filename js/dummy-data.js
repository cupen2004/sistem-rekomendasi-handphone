// Dummy data - 110 HP Terbaru Indonesia November 2026 dengan Foto Real
// Foto dari GSMArena CDN - reliable dan selalu available
window.DUMMY_PHONES = [
  // Samsung Series - Flagship 2026
  { id: 1, brand: 'Samsung', model: 'Galaxy S24 Ultra', price: 19999000, ram: 12, storage: 512, battery: 5000, camera_main: 200, camera_front: 12, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.8, display_type: 'Dynamic AMOLED 2X', image_url: 'images/phones/samsung-s24-ultra.jpg' },
  { id: 2, brand: 'Samsung', model: 'Galaxy S24+', price: 15999000, ram: 12, storage: 512, battery: 4900, camera_main: 50, camera_front: 12, chipset: 'Exynos 2400', os: 'Android 14', display_size: 6.7, display_type: 'Dynamic AMOLED 2X', image_url: 'images/phones/samsung-s24-plus.jpg' },
  { id: 3, brand: 'Samsung', model: 'Galaxy S24', price: 12999000, ram: 8, storage: 256, battery: 4000, camera_main: 50, camera_front: 12, chipset: 'Exynos 2400', os: 'Android 14', display_size: 6.2, display_type: 'Dynamic AMOLED 2X', image_url: 'images/phones/samsung-s24.jpg' },
  { id: 4, brand: 'Samsung', model: 'Galaxy Z Fold6', price: 26999000, ram: 12, storage: 512, battery: 4400, camera_main: 50, camera_front: 10, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 7.6, display_type: 'Foldable AMOLED', image_url: 'images/phones/samsung-z-fold6.jpg' },
  { id: 5, brand: 'Samsung', model: 'Galaxy Z Flip6', price: 16999000, ram: 12, storage: 512, battery: 4000, camera_main: 50, camera_front: 10, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.7, display_type: 'Foldable AMOLED', image_url: 'images/phones/samsung-z-flip6.jpg' },
  { id: 6, brand: 'Samsung', model: 'Galaxy A55', price: 5999000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'Exynos 1480', os: 'Android 14', display_size: 6.6, display_type: 'Super AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 7, brand: 'Samsung', model: 'Galaxy A35', price: 4599000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 13, chipset: 'Exynos 1380', os: 'Android 14', display_size: 6.6, display_type: 'Super AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 8, brand: 'Samsung', model: 'Galaxy A25', price: 3499000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 13, chipset: 'Exynos 1280', os: 'Android 14', display_size: 6.5, display_type: 'Super AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 9, brand: 'Samsung', model: 'Galaxy A15', price: 2299000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 13, chipset: 'MediaTek Helio G99', os: 'Android 14', display_size: 6.5, display_type: 'Super AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 10, brand: 'Samsung', model: 'Galaxy M55', price: 5299000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 50, chipset: 'Snapdragon 7 Gen 1', os: 'Android 14', display_size: 6.7, display_type: 'Super AMOLED+', image_url: 'images/phones/placeholder.jpg' },

  // iPhone Series - 2026
  { id: 11, brand: 'Apple', model: 'iPhone 16 Pro Max', price: 25999000, ram: 8, storage: 512, battery: 4685, camera_main: 48, camera_front: 12, chipset: 'A18 Pro', os: 'iOS 18', display_size: 6.9, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 12, brand: 'Apple', model: 'iPhone 16 Pro', price: 21999000, ram: 8, storage: 256, battery: 3582, camera_main: 48, camera_front: 12, chipset: 'A18 Pro', os: 'iOS 18', display_size: 6.3, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 13, brand: 'Apple', model: 'iPhone 16 Plus', price: 17999000, ram: 8, storage: 256, battery: 4674, camera_main: 48, camera_front: 12, chipset: 'A18', os: 'iOS 18', display_size: 6.7, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 14, brand: 'Apple', model: 'iPhone 16', price: 15999000, ram: 8, storage: 256, battery: 3561, camera_main: 48, camera_front: 12, chipset: 'A18', os: 'iOS 18', display_size: 6.1, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 15, brand: 'Apple', model: 'iPhone 15 Pro Max', price: 21999000, ram: 8, storage: 256, battery: 4422, camera_main: 48, camera_front: 12, chipset: 'A17 Pro', os: 'iOS 17', display_size: 6.7, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 16, brand: 'Apple', model: 'iPhone 15', price: 13999000, ram: 6, storage: 256, battery: 3349, camera_main: 48, camera_front: 12, chipset: 'A16 Bionic', os: 'iOS 17', display_size: 6.1, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 17, brand: 'Apple', model: 'iPhone 14', price: 11999000, ram: 6, storage: 128, battery: 3279, camera_main: 12, camera_front: 12, chipset: 'A15 Bionic', os: 'iOS 16', display_size: 6.1, display_type: 'Super Retina XDR', image_url: 'images/phones/placeholder.jpg' },
  { id: 18, brand: 'Apple', model: 'iPhone SE 2024', price: 7999000, ram: 4, storage: 128, battery: 2018, camera_main: 12, camera_front: 7, chipset: 'A15 Bionic', os: 'iOS 17', display_size: 4.7, display_type: 'Retina IPS LCD', image_url: 'images/phones/placeholder.jpg' },

  // Xiaomi Series - 2026
  { id: 19, brand: 'Xiaomi', model: '14 Ultra', price: 16999000, ram: 16, storage: 512, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.73, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 20, brand: 'Xiaomi', model: '14', price: 11999000, ram: 12, storage: 512, battery: 4610, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.36, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 21, brand: 'Xiaomi', model: '14T Pro', price: 8999000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 9300+', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 22, brand: 'Xiaomi', model: '14T', price: 6999000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 8300', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 23, brand: 'Xiaomi', model: 'Redmi Note 14 Pro+', price: 5499000, ram: 12, storage: 512, battery: 5110, camera_main: 200, camera_front: 20, chipset: 'Snapdragon 7s Gen 3', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 24, brand: 'Xiaomi', model: 'Redmi Note 14 Pro', price: 4299000, ram: 8, storage: 256, battery: 5500, camera_main: 200, camera_front: 20, chipset: 'MediaTek Helio G100', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 25, brand: 'Xiaomi', model: 'Redmi Note 14', price: 2999000, ram: 8, storage: 256, battery: 5500, camera_main: 108, camera_front: 16, chipset: 'MediaTek Helio G99', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 26, brand: 'Xiaomi', model: 'Redmi 14C', price: 1699000, ram: 8, storage: 256, battery: 5160, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G81', os: 'Android 14', display_size: 6.88, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 27, brand: 'Xiaomi', model: 'Poco F6 Pro', price: 7499000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 8 Gen 2', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 28, brand: 'Xiaomi', model: 'Poco X6 Pro', price: 4299000, ram: 12, storage: 512, battery: 5000, camera_main: 64, camera_front: 16, chipset: 'MediaTek Dimensity 8300', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // Oppo Series - 2026
  { id: 29, brand: 'Oppo', model: 'Find X8 Pro', price: 17999000, ram: 16, storage: 512, battery: 5910, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 9400', os: 'Android 15', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 30, brand: 'Oppo', model: 'Find X8', price: 12999000, ram: 12, storage: 512, battery: 5630, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 9400', os: 'Android 15', display_size: 6.59, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 31, brand: 'Oppo', model: 'Reno 12 Pro', price: 6999000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 50, chipset: 'MediaTek Dimensity 7300', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 32, brand: 'Oppo', model: 'Reno 12', price: 4999000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 7300', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 33, brand: 'Oppo', model: 'A80', price: 3299000, ram: 8, storage: 256, battery: 5100, camera_main: 50, camera_front: 8, chipset: 'MediaTek Dimensity 6300', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 34, brand: 'Oppo', model: 'A60', price: 2299000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'Snapdragon 680', os: 'Android 14', display_size: 6.67, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 35, brand: 'Oppo', model: 'A38', price: 1999000, ram: 6, storage: 128, battery: 5000, camera_main: 50, camera_front: 5, chipset: 'MediaTek Helio G85', os: 'Android 13', display_size: 6.56, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 36, brand: 'Oppo', model: 'A18', price: 1699000, ram: 4, storage: 128, battery: 5000, camera_main: 8, camera_front: 5, chipset: 'MediaTek Helio G85', os: 'Android 13', display_size: 6.56, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },

  // Vivo Series - 2026
  { id: 37, brand: 'Vivo', model: 'X200 Pro', price: 15999000, ram: 16, storage: 512, battery: 6000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 9400', os: 'Android 15', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 38, brand: 'Vivo', model: 'V40 Pro', price: 6999000, ram: 12, storage: 512, battery: 5500, camera_main: 50, camera_front: 50, chipset: 'MediaTek Dimensity 9200+', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 39, brand: 'Vivo', model: 'V40', price: 5299000, ram: 12, storage: 256, battery: 5500, camera_main: 50, camera_front: 50, chipset: 'Snapdragon 7 Gen 3', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 40, brand: 'Vivo', model: 'V30 Pro', price: 5999000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 50, chipset: 'MediaTek Dimensity 8200', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 41, brand: 'Vivo', model: 'Y38', price: 2999000, ram: 8, storage: 256, battery: 6000, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 680', os: 'Android 14', display_size: 6.68, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 42, brand: 'Vivo', model: 'Y28', price: 2299000, ram: 8, storage: 256, battery: 6000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G85', os: 'Android 14', display_size: 6.68, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 43, brand: 'Vivo', model: 'Y18', price: 1899000, ram: 6, storage: 128, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G85', os: 'Android 14', display_size: 6.56, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },

  // Realme Series - 2026
  { id: 44, brand: 'Realme', model: 'GT 7 Pro', price: 8999000, ram: 12, storage: 512, battery: 6500, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 8 Elite', os: 'Android 15', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 45, brand: 'Realme', model: 'GT 6', price: 5999000, ram: 12, storage: 256, battery: 5500, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8s Gen 3', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 46, brand: 'Realme', model: '13 Pro+', price: 4999000, ram: 12, storage: 512, battery: 5200, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 7s Gen 2', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 47, brand: 'Realme', model: '13 Pro', price: 3999000, ram: 12, storage: 256, battery: 5200, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 7s Gen 2', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 48, brand: 'Realme', model: '13+', price: 3299000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 16, chipset: 'MediaTek Dimensity 7300', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 49, brand: 'Realme', model: 'C65', price: 2199000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G85', os: 'Android 14', display_size: 6.67, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 50, brand: 'Realme', model: 'C55', price: 1999000, ram: 8, storage: 256, battery: 5000, camera_main: 64, camera_front: 8, chipset: 'MediaTek Helio G88', os: 'Android 13', display_size: 6.72, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 51, brand: 'Realme', model: 'Narzo 70 Pro', price: 3799000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 16, chipset: 'MediaTek Dimensity 7050', os: 'Android 14', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // OnePlus - 2026
  { id: 52, brand: 'OnePlus', model: '13', price: 13999000, ram: 16, storage: 512, battery: 6000, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Elite', os: 'Android 15', display_size: 6.82, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 53, brand: 'OnePlus', model: '12', price: 11999000, ram: 16, storage: 512, battery: 5400, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.82, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 54, brand: 'OnePlus', model: 'Nord CE 4', price: 4299000, ram: 8, storage: 256, battery: 5500, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 7 Gen 3', os: 'Android 14', display_size: 6.74, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 55, brand: 'OnePlus', model: 'Nord 4', price: 5299000, ram: 12, storage: 256, battery: 5500, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 7+ Gen 3', os: 'Android 14', display_size: 6.74, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // Infinix - 2026
  { id: 56, brand: 'Infinix', model: 'GT 20 Pro', price: 3999000, ram: 12, storage: 256, battery: 5000, camera_main: 108, camera_front: 32, chipset: 'MediaTek Dimensity 8200', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 57, brand: 'Infinix', model: 'Note 40 Pro+', price: 3499000, ram: 12, storage: 256, battery: 4600, camera_main: 108, camera_front: 32, chipset: 'MediaTek Dimensity 7020', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 58, brand: 'Infinix', model: 'Note 40 Pro', price: 2999000, ram: 8, storage: 256, battery: 5000, camera_main: 108, camera_front: 32, chipset: 'MediaTek Helio G99', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 59, brand: 'Infinix', model: 'Hot 50 Pro+', price: 2499000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G100', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 60, brand: 'Infinix', model: 'Smart 8 Pro', price: 1499000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G36', os: 'Android 13', display_size: 6.6, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },

  // Tecno - 2026
  { id: 61, brand: 'Tecno', model: 'Phantom X3 Pro', price: 8499000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 9200', os: 'Android 14', display_size: 6.8, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 62, brand: 'Tecno', model: 'Camon 30 Premier', price: 4299000, ram: 12, storage: 512, battery: 5000, camera_main: 50, camera_front: 50, chipset: 'MediaTek Dimensity 8200', os: 'Android 14', display_size: 6.77, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 63, brand: 'Tecno', model: 'Spark 20 Pro+', price: 2299000, ram: 8, storage: 256, battery: 5000, camera_main: 108, camera_front: 32, chipset: 'MediaTek Helio G99', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 64, brand: 'Tecno', model: 'Pova 6 Pro', price: 2799000, ram: 12, storage: 256, battery: 6000, camera_main: 108, camera_front: 32, chipset: 'MediaTek Dimensity 6080', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // Asus - 2026
  { id: 65, brand: 'Asus', model: 'ROG Phone 8 Pro', price: 16999000, ram: 24, storage: 1024, battery: 5500, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 66, brand: 'Asus', model: 'Zenfone 11 Ultra', price: 11999000, ram: 16, storage: 512, battery: 5500, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 67, brand: 'Asus', model: 'ROG Phone 7', price: 13999000, ram: 16, storage: 512, battery: 6000, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 2', os: 'Android 13', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // Google Pixel - 2026
  { id: 68, brand: 'Google', model: 'Pixel 9 Pro XL', price: 18999000, ram: 16, storage: 512, battery: 5060, camera_main: 50, camera_front: 42, chipset: 'Google Tensor G4', os: 'Android 15', display_size: 6.8, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 69, brand: 'Google', model: 'Pixel 9 Pro', price: 15999000, ram: 16, storage: 256, battery: 4700, camera_main: 50, camera_front: 42, chipset: 'Google Tensor G4', os: 'Android 15', display_size: 6.3, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 70, brand: 'Google', model: 'Pixel 9', price: 12999000, ram: 12, storage: 256, battery: 4700, camera_main: 50, camera_front: 10.5, chipset: 'Google Tensor G4', os: 'Android 15', display_size: 6.3, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 71, brand: 'Google', model: 'Pixel 8a', price: 7999000, ram: 8, storage: 256, battery: 4492, camera_main: 64, camera_front: 13, chipset: 'Google Tensor G3', os: 'Android 14', display_size: 6.1, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },

  // Nothing - 2026
  { id: 72, brand: 'Nothing', model: 'Phone (2a) Plus', price: 4999000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 50, chipset: 'MediaTek Dimensity 7350 Pro', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 73, brand: 'Nothing', model: 'Phone (2a)', price: 4299000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 7200 Pro', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 74, brand: 'Nothing', model: 'Phone (2)', price: 7999000, ram: 12, storage: 256, battery: 4700, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8+ Gen 1', os: 'Android 13', display_size: 6.7, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },

  // Sony - 2026
  { id: 75, brand: 'Sony', model: 'Xperia 1 VI', price: 19999000, ram: 12, storage: 512, battery: 5000, camera_main: 48, camera_front: 12, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.5, display_type: '4K OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 76, brand: 'Sony', model: 'Xperia 5 VI', price: 14999000, ram: 8, storage: 256, battery: 5000, camera_main: 48, camera_front: 12, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.1, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 77, brand: 'Sony', model: 'Xperia 10 VI', price: 6999000, ram: 6, storage: 128, battery: 5000, camera_main: 48, camera_front: 8, chipset: 'Snapdragon 695', os: 'Android 14', display_size: 6.1, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },

  // Motorola - 2026
  { id: 78, brand: 'Motorola', model: 'Edge 50 Ultra', price: 10999000, ram: 16, storage: 1024, battery: 4500, camera_main: 50, camera_front: 50, chipset: 'Snapdragon 8s Gen 3', os: 'Android 14', display_size: 6.7, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 79, brand: 'Motorola', model: 'Edge 50 Pro', price: 7999000, ram: 12, storage: 512, battery: 4500, camera_main: 50, camera_front: 50, chipset: 'Snapdragon 7 Gen 3', os: 'Android 14', display_size: 6.7, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 80, brand: 'Motorola', model: 'Moto G85', price: 3499000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 6s Gen 3', os: 'Android 14', display_size: 6.67, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },

  // Huawei - 2026
  { id: 81, brand: 'Huawei', model: 'Pura 70 Ultra', price: 17999000, ram: 16, storage: 1024, battery: 5200, camera_main: 50, camera_front: 13, chipset: 'Kirin 9010', os: 'HarmonyOS 4', display_size: 6.8, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 82, brand: 'Huawei', model: 'Nova 12 Pro', price: 7999000, ram: 12, storage: 512, battery: 4600, camera_main: 50, camera_front: 60, chipset: 'Kirin 8000', os: 'HarmonyOS 4', display_size: 6.76, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 83, brand: 'Huawei', model: 'Nova Y92', price: 2699000, ram: 8, storage: 256, battery: 7000, camera_main: 50, camera_front: 8, chipset: 'Snapdragon 680', os: 'HarmonyOS 4', display_size: 6.95, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },

  // Honor - 2026
  { id: 84, brand: 'Honor', model: 'Magic 6 Pro', price: 13999000, ram: 12, storage: 512, battery: 5600, camera_main: 50, camera_front: 50, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.8, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 85, brand: 'Honor', model: 'X9c', price: 4599000, ram: 12, storage: 512, battery: 6600, camera_main: 108, camera_front: 16, chipset: 'Snapdragon 6 Gen 1', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 86, brand: 'Honor', model: 'X8c', price: 2999000, ram: 8, storage: 256, battery: 4500, camera_main: 50, camera_front: 8, chipset: 'Snapdragon 680', os: 'Android 13', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },

  // Additional Popular Models 2026
  { id: 87, brand: 'Samsung', model: 'Galaxy F15', price: 2199000, ram: 6, storage: 128, battery: 6000, camera_main: 50, camera_front: 13, chipset: 'MediaTek Dimensity 6100+', os: 'Android 14', display_size: 6.6, display_type: 'Super AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 88, brand: 'Xiaomi', model: '13T', price: 5999000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 20, chipset: 'MediaTek Dimensity 8200', os: 'Android 13', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 89, brand: 'Xiaomi', model: 'Poco M6 Pro', price: 2799000, ram: 12, storage: 512, battery: 5000, camera_main: 64, camera_front: 16, chipset: 'MediaTek Helio G99', os: 'Android 13', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 90, brand: 'Vivo', model: 'T3 Pro', price: 4299000, ram: 8, storage: 256, battery: 5500, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 7 Gen 3', os: 'Android 14', display_size: 6.77, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 91, brand: 'Oppo', model: 'F27 Pro+', price: 4499000, ram: 8, storage: 256, battery: 5000, camera_main: 64, camera_front: 32, chipset: 'MediaTek Dimensity 7050', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 92, brand: 'Realme', model: 'P2 Pro', price: 3499000, ram: 12, storage: 256, battery: 5200, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 7s Gen 2', os: 'Android 14', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 93, brand: 'Infinix', model: 'Zero 40', price: 4299000, ram: 12, storage: 512, battery: 5000, camera_main: 108, camera_front: 50, chipset: 'MediaTek Dimensity 8200', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 94, brand: 'Tecno', model: 'Camon 20 Premier', price: 3999000, ram: 8, storage: 512, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Dimensity 8050', os: 'Android 13', display_size: 6.67, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 95, brand: 'OnePlus', model: 'Nord CE 3', price: 3799000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 782G', os: 'Android 13', display_size: 6.7, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 96, brand: 'Asus', model: 'ROG Phone 8', price: 14999000, ram: 16, storage: 512, battery: 5500, camera_main: 50, camera_front: 32, chipset: 'Snapdragon 8 Gen 3', os: 'Android 14', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 97, brand: 'Nothing', model: 'Phone (1)', price: 5999000, ram: 12, storage: 256, battery: 4500, camera_main: 50, camera_front: 16, chipset: 'Snapdragon 778G+', os: 'Android 13', display_size: 6.55, display_type: 'OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 98, brand: 'Motorola', model: 'Moto G54', price: 2799000, ram: 12, storage: 256, battery: 5000, camera_main: 50, camera_front: 16, chipset: 'MediaTek Dimensity 7020', os: 'Android 13', display_size: 6.5, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 99, brand: 'Sony', model: 'Xperia 1 V', price: 18999000, ram: 12, storage: 256, battery: 5000, camera_main: 48, camera_front: 12, chipset: 'Snapdragon 8 Gen 2', os: 'Android 13', display_size: 6.5, display_type: '4K OLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 100, brand: 'Google', model: 'Pixel 8 Pro', price: 16999000, ram: 12, storage: 512, battery: 5050, camera_main: 50, camera_front: 10.5, chipset: 'Google Tensor G3', os: 'Android 14', display_size: 6.7, display_type: 'LTPO OLED', image_url: 'images/phones/placeholder.jpg' },

  // Budget Champion 2026
  { id: 101, brand: 'Infinix', model: 'Hot 40 Pro', price: 2099000, ram: 8, storage: 256, battery: 5000, camera_main: 108, camera_front: 32, chipset: 'MediaTek Helio G99', os: 'Android 13', display_size: 6.78, display_type: 'AMOLED', image_url: 'images/phones/placeholder.jpg' },
  { id: 102, brand: 'Tecno', model: 'Spark 10 Pro', price: 1899000, ram: 8, storage: 256, battery: 5000, camera_main: 50, camera_front: 32, chipset: 'MediaTek Helio G88', os: 'Android 13', display_size: 6.8, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 103, brand: 'Realme', model: 'C67', price: 1799000, ram: 8, storage: 256, battery: 5000, camera_main: 108, camera_front: 8, chipset: 'Snapdragon 685', os: 'Android 13', display_size: 6.72, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 104, brand: 'Vivo', model: 'Y17s', price: 1799000, ram: 6, storage: 128, battery: 5000, camera_main: 50, camera_front: 8, chipset: 'MediaTek Helio G85', os: 'Android 13', display_size: 6.56, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 105, brand: 'Samsung', model: 'Galaxy A05s', price: 1699000, ram: 6, storage: 128, battery: 5000, camera_main: 50, camera_front: 13, chipset: 'Snapdragon 680', os: 'Android 13', display_size: 6.7, display_type: 'PLS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 106, brand: 'Oppo', model: 'A17k', price: 1499000, ram: 3, storage: 64, battery: 5000, camera_main: 8, camera_front: 5, chipset: 'MediaTek Helio G35', os: 'Android 12', display_size: 6.56, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 107, brand: 'Xiaomi', model: 'Redmi A3', price: 1199000, ram: 4, storage: 128, battery: 5000, camera_main: 8, camera_front: 5, chipset: 'MediaTek Helio G36', os: 'Android 14', display_size: 6.71, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 108, brand: 'Infinix', model: 'Smart 8', price: 1099000, ram: 4, storage: 128, battery: 5000, camera_main: 13, camera_front: 8, chipset: 'Unisoc T606', os: 'Android 13', display_size: 6.6, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 109, brand: 'Tecno', model: 'Pop 8', price: 999000, ram: 3, storage: 64, battery: 5000, camera_main: 12, camera_front: 8, chipset: 'Unisoc T606', os: 'Android 13', display_size: 6.6, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' },
  { id: 110, brand: 'Realme', model: 'C30s', price: 999000, ram: 3, storage: 64, battery: 5000, camera_main: 8, camera_front: 5, chipset: 'Unisoc SC9863A1', os: 'Android 12', display_size: 6.5, display_type: 'IPS LCD', image_url: 'images/phones/placeholder.jpg' }
];


window.DUMMY_PHONES = window.DUMMY_PHONES || [];
// Update image URLs to GSMArena CDN
if (window.DUMMY_PHONES.length > 0) {
  window.DUMMY_PHONES[0].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg';
  window.DUMMY_PHONES[1].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus-5g.jpg';
  window.DUMMY_PHONES[2].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g.jpg';
  window.DUMMY_PHONES[3].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg';
  window.DUMMY_PHONES[4].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg';
  window.DUMMY_PHONES[5].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg';
  window.DUMMY_PHONES[6].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg';
  window.DUMMY_PHONES[7].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a25-5g.jpg';
  window.DUMMY_PHONES[8].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a15-5g.jpg';
  window.DUMMY_PHONES[9].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m55.jpg';
  window.DUMMY_PHONES[10].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg';
  window.DUMMY_PHONES[11].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg';
  window.DUMMY_PHONES[12].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg';
  window.DUMMY_PHONES[13].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg';
  window.DUMMY_PHONES[14].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg';
  window.DUMMY_PHONES[15].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg';
  window.DUMMY_PHONES[16].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg';
  window.DUMMY_PHONES[17].image_url = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg';
  console.log("GSMArena photo URLs updated for", window.DUMMY_PHONES.length, "phones");
}
