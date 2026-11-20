// API Service
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : '/api';

const api = {
  // Get all phones with filters
  async getPhones(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = `${API_BASE_URL}/phones${queryString ? '?' + queryString : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Backend not available, using dummy data');
      // Use window.DUMMY_PHONES from dummy-data.js
      const dataSource = window.DUMMY_PHONES || [];
      const limit = params.limit || dataSource.length;
      return {
        success: true,
        data: dataSource.slice(0, limit)
      };
    }
  },

  // Get phone by ID
  async getPhoneById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/phones/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Backend not available, using dummy data');
      const dataSource = window.DUMMY_PHONES || [];
      const phone = dataSource.find(p => p.id === parseInt(id));
      return {
        success: true,
        data: phone || dataSource[0]
      };
    }
  },

  // Get recommendations with Content-Based Filtering
  async getRecommendations(params = {}) {
    try {
      const body = {
        min_price: params.minPrice ? parseInt(params.minPrice) : null,
        max_price: params.maxPrice ? parseInt(params.maxPrice) : null,
        brand: params.brand || null,
        min_ram: params.minRam ? parseInt(params.minRam) : null,
        min_storage: params.minStorage ? parseInt(params.minStorage) : null,
        min_battery: params.minBattery ? parseInt(params.minBattery) : null,
        min_camera: params.minCamera ? parseInt(params.minCamera) : null,
        limit: params.limit || 20
      };

      const response = await fetch(`${API_BASE_URL}/recommendations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Backend not available, using dummy data');
      const dataSource = window.DUMMY_PHONES || [];
      let filtered = [...dataSource];
      
      if (params.minPrice) {
        filtered = filtered.filter(p => p.price >= parseInt(params.minPrice));
      }
      if (params.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseInt(params.maxPrice));
      }
      if (params.brand) {
        filtered = filtered.filter(p => p.brand === params.brand);
      }
      if (params.minRam) {
        filtered = filtered.filter(p => p.ram >= parseInt(params.minRam));
      }
      if (params.minStorage) {
        filtered = filtered.filter(p => p.storage >= parseInt(params.minStorage));
      }
      if (params.minBattery) {
        filtered = filtered.filter(p => p.battery >= parseInt(params.minBattery));
      }
      if (params.minCamera) {
        filtered = filtered.filter(p => p.camera_main >= parseInt(params.minCamera));
      }
      
      return {
        success: true,
        data: filtered
      };
    }
  },

  // Search phones
  async searchPhones(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/phones/search/${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Backend not available, using dummy data');
      const dataSource = window.DUMMY_PHONES || [];
      const filtered = dataSource.filter(p => 
        `${p.brand} ${p.model}`.toLowerCase().includes(query.toLowerCase())
      );
      return {
        success: true,
        data: filtered
      };
    }
  },

  // Get all brands
  async getBrands() {
    try {
      const response = await fetch(`${API_BASE_URL}/brands`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Backend not available, using dummy data');
      const dataSource = window.DUMMY_PHONES || [];
      const brands = [...new Set(dataSource.map(p => p.brand))].sort();
      return {
        success: true,
        data: brands
      };
    }
  }
};

// Utility functions
const formatPrice = (price) => {
  if (!price) return 'N/A';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const formatRAM = (ram) => {
  if (!ram) return 'N/A';
  return `${ram} GB`;
};

const formatStorage = (storage) => {
  if (!storage) return 'N/A';
  return storage >= 1024 ? `${storage / 1024} TB` : `${storage} GB`;
};

const formatBattery = (battery) => {
  if (!battery) return 'N/A';
  return `${battery} mAh`;
};

const formatCamera = (camera) => {
  if (!camera) return 'N/A';
  return `${camera} MP`;
};

const formatDisplay = (size) => {
  if (!size) return 'N/A';
  return `${size}"`;
};

const formatScore = (score) => {
  if (!score) return 'N/A';
  return typeof score === 'number' ? Math.round(score) : score;
};

const getScoreColor = (score) => {
  if (!score) return '';
  const percentage = typeof score === 'number' ? score : parseFloat(score);
  if (percentage >= 80) return 'score-excellent';
  if (percentage >= 60) return 'score-good';
  if (percentage >= 40) return 'score-fair';
  return 'score-poor';
};
