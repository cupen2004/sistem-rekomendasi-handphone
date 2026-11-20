# 📱 PhoneRec - Sistem Rekomendasi Handphone

Aplikasi web untuk memberikan rekomendasi handphone yang sesuai dengan budget dan kebutuhan pengguna menggunakan algoritma **Content-Based Filtering**.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎯 Fitur Utama

- **Rekomendasi Pintar** - Sistem rekomendasi berbasis Content-Based Filtering dengan Cosine Similarity
- **Filter Lengkap** - Filter berdasarkan harga, brand, RAM, storage, baterai, dan kamera
- **Perbandingan HP** - Bandingkan spesifikasi hingga 3 HP sekaligus
- **Detail Lengkap** - Informasi spesifikasi lengkap setiap handphone
- **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan custom properties dan animations
- **Vanilla JavaScript** - Interaktivitas tanpa framework
- **Fetch API** - Komunikasi dengan backend

### Backend
- **Python 3.10+** - Programming language
- **FastAPI** - Modern web framework
- **scikit-learn** - Machine learning library (Cosine Similarity)
- **NumPy** - Numerical computing
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Algoritma
- **Content-Based Filtering** - Rekomendasi berdasarkan kesamaan fitur
- **Cosine Similarity** - Menghitung similarity antar HP
- **Feature Weighting** - Bobot pada fitur penting (price, RAM, storage, battery, camera)

## 📁 Struktur Proyek

```
SEMESTER 5/Sistem Rekomendasi Handphone/
├── backend/                    # Backend API (Python + FastAPI)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py            # Entry point FastAPI
│   │   ├── models.py          # Pydantic models
│   │   ├── database.py        # JSON database handler
│   │   ├── recommendation.py  # Content-Based Filtering logic
│   │   └── routes/
│   │       ├── __init__.py
│   │       └── phones.py      # API endpoints
│   ├── api/
│   │   └── index.py           # Vercel serverless entry
│   ├── data/
│   │   └── phones.json        # Database HP
│   ├── requirements.txt       # Python dependencies
│   └── README.md              # Backend documentation
├── css/
│   └── style.css              # Main stylesheet
├── js/
│   ├── api.js                 # API communication layer
│   ├── dummy-data.js          # Fallback data
│   ├── main.js                # Homepage logic
│   ├── mobile-menu.js         # Mobile navigation
│   ├── typing-animation.js    # Hero typing effect
│   ├── rekomendasi.js         # Recommendation page
│   ├── compare.js             # Compare page
│   ├── detail.js              # Detail page
│   └── update-images.js       # Image URL handler
├── images/                    # Image assets
├── index.html                 # Homepage
├── rekomendasi.html           # Recommendation page
├── compare.html               # Compare page
├── detail.html                # Detail page
├── test-integration.html      # Integration testing
└── README.md                  # This file
```

## 🚀 Cara Install & Run

### Prerequisites
- **Python 3.10+** ([Download](https://www.python.org/downloads/))
- **pip** (biasanya sudah include dengan Python)
- **Browser modern** (Chrome, Firefox, Edge, Safari)

### 1. Clone Repository
```bash
git clone <repository-url>
cd "SEMESTER 5/Sistem Rekomendasi Handphone"
```

### 2. Setup Backend

#### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Run Server
```bash
# Development mode dengan auto-reload
uvicorn app.main:app --reload --host 0.0.0.0 --port 5000

# Atau
python -m app.main
```

Server akan berjalan di: **http://localhost:5000**

API Documentation: **http://localhost:5000/docs**

### 3. Setup Frontend

Buka file HTML langsung di browser atau gunakan live server:

#### Opsi 1: Direct Open
```bash
# Buka index.html di browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

#### Opsi 2: Python HTTP Server
```bash
# Di root folder proyek
python -m http.server 8000
```

Akses di: **http://localhost:8000**

#### Opsi 3: VS Code Live Server
1. Install extension "Live Server"
2. Right-click `index.html` → "Open with Live Server"

### 4. Testing
```bash
# Test backend API
python backend/test_backend.py

# Test integration frontend-backend
# Buka test-integration.html di browser
```

## 📖 Cara Pakai

### 1. Cari Rekomendasi HP
1. Buka halaman **Rekomendasi**
2. Atur filter sesuai kebutuhan:
   - **Budget** (min-max)
   - **Brand** (opsional)
   - **RAM** minimal
   - **Storage** minimal
   - **Baterai** minimal
   - **Kamera** minimal
3. Klik **Cari HP Sekarang**
4. Sistem akan menampilkan HP yang paling cocok dengan score similarity

### 2. Bandingkan HP
1. Buka halaman **Bandingkan**
2. Pilih hingga 3 HP dari daftar
3. Klik **Bandingkan Sekarang**
4. Lihat perbandingan spesifikasi side-by-side

### 3. Lihat Detail HP
- Klik card HP mana saja
- Akan tampil detail lengkap: spesifikasi, harga, dan fitur

## 🔌 API Endpoints

### Phones
```
GET  /api/phones              # Get all phones (dengan query params filter)
GET  /api/phones/{id}         # Get phone by ID
GET  /api/phones/search/{query}  # Search phones by name
```

### Recommendations
```
POST /api/recommendations     # Get recommendations
```

**Request Body:**
```json
{
  "min_price": 2000000,
  "max_price": 5000000,
  "min_ram": 8,
  "min_storage": 128,
  "min_battery": 5000,
  "min_camera": 50,
  "brand": "Samsung",
  "limit": 10
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "phone": {
        "id": "samsung-a55",
        "name": "Samsung Galaxy A55 5G",
        "price": 4299000,
        "specs": { ... }
      },
      "score": 92.5,
      "similarity": 87.3,
      "match_reasons": [
        "Harga sesuai budget Rp 2.000.000 - Rp 5.000.000",
        "RAM 8GB memenuhi kebutuhan minimal",
        "Baterai 5000mAh sangat awet"
      ]
    }
  ],
  "total": 1,
  "filters_applied": { ... }
}
```

### Brands
```
GET  /api/brands              # Get all available brands
```

Dokumentasi lengkap API: **http://localhost:5000/docs**

## 🧠 Algoritma Rekomendasi

Sistem menggunakan **Content-Based Filtering** dengan langkah:

1. **Feature Extraction** - Ekstrak fitur numerik:
   - Price (normalized)
   - RAM (GB)
   - Storage (GB)
   - Battery (mAh)
   - Camera (MP)
   - Brand (one-hot encoding)

2. **Feature Weighting** - Bobot pada fitur penting:
   - Price: 30%
   - RAM: 20%
   - Storage: 15%
   - Battery: 15%
   - Camera: 10%
   - Brand: 10%

3. **Similarity Calculation** - Cosine Similarity:
   ```
   similarity = (A · B) / (||A|| * ||B||)
   ```

4. **Scoring** - Kombinasi similarity dan match criteria:
   ```
   final_score = similarity * 0.7 + criteria_match * 0.3
   ```

5. **Ranking** - Urutkan berdasarkan score tertinggi

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Surface**: `#1a1a2e` (Dark Blue)
- **Card**: `#252541` (Slate)
- **Text**: `#e5e7eb` (Light Gray)
- **Accent**: `#818cf8` (Light Indigo)

### Typography
- **Font**: Inter (system-ui fallback)
- **Sizes**: 14px (body), 16px (large), 20px+ (headings)

### Components
- Cards dengan glass effect subtil
- Smooth animations (200-300ms)
- Focus states accessible (keyboard navigation)
- Mobile-first responsive breakpoints

## 🧪 Testing

### Manual Testing
1. Buka `test-integration.html`
2. Jalankan test suite
3. Verifikasi semua test pass

### Test Coverage
- ✅ API connectivity
- ✅ Phone list fetch
- ✅ Phone detail fetch
- ✅ Search functionality
- ✅ Recommendation algorithm
- ✅ Filter application
- ✅ Compare functionality

## 📝 Catatan Pengembangan

### Known Issues
- Data HP hardcoded di `phones.json` (bisa ditambah integrasi API real-time)
- Image handling masih pakai placeholder (bisa ditambah image upload)

### Future Improvements
- [ ] Tambah filter display size & processor
- [ ] User authentication & saved preferences
- [ ] Review & rating system
- [ ] Price tracking & alert
- [ ] Collaborative filtering algorithm
- [ ] Mobile app (React Native / Flutter)
- [ ] Database migration ke PostgreSQL/MongoDB

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

1. Fork repo ini
2. Buat branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Proyek ini menggunakan MIT License. Lihat file `LICENSE` untuk detail.

## 👥 Author

**Sistem Rekomendasi Handphone**  
Semester 5 Project

## 🙏 Acknowledgments

- FastAPI documentation
- scikit-learn documentation
- MDN Web Docs
- Inspiration from various e-commerce recommendation systems

---

⭐ Star repo ini jika membantu!
