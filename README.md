# 📱 PhoneRec - Sistem Rekomendasi Handphone

Aplikasi web untuk memberikan rekomendasi handphone yang sesuai dengan budget dan kebutuhan pengguna menggunakan algoritma **Content-Based Filtering** dengan **Cosine Similarity**.

🔗 **GitHub Repo**: [github.com/cupen2004/sistem-rekomendasi-handphone](https://github.com/cupen2004/sistem-rekomendasi-handphone)  
🌐 **Live Website**: [cupen2004.github.io/sistem-rekomendasi-handphone](https://cupen2004.github.io/sistem-rekomendasi-handphone/)

---

## 🎯 Fitur Utama

- **Rekomendasi Pintar** - Sistem AI yang merekomendasikan HP berdasarkan preferensi dan budget kamu
- **Filter Lengkap** - Cari HP berdasarkan harga, brand, RAM, storage, baterai, dan kamera
- **Perbandingan HP** - Bandingkan spesifikasi hingga 3 HP sekaligus secara side-by-side
- **Detail Lengkap** - Lihat spesifikasi lengkap dan harga setiap handphone
- **Responsive Design** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)

---

## 🛠️ Tech Stack

### Frontend
- **HTML5, CSS3, JavaScript (Vanilla)** - No framework, ringan dan cepat
- **Fetch API** - Komunikasi dengan backend

### Backend
- **Python 3.10+** - Programming language
- **FastAPI** - Modern web framework untuk REST API
- **scikit-learn** - Machine learning library (Cosine Similarity)
- **NumPy** - Numerical computing
- **Uvicorn** - ASGI server

### Algoritma
- **Content-Based Filtering** - Rekomendasi berdasarkan kesamaan fitur HP
- **Cosine Similarity** - Menghitung tingkat kemiripan antar HP (0-100%)
- **Weighted Features** - Prioritas pada harga, RAM, storage, baterai, kamera

---

## 📁 Struktur Proyek

```
sistem-rekomendasi-handphone/
├── backend/                    # Backend API (Python + FastAPI)
│   ├── app/
│   │   ├── main.py            # FastAPI entry point
│   │   ├── models.py          # Data models (Pydantic)
│   │   ├── database.py        # JSON database handler
│   │   ├── recommendation.py  # Algoritma Content-Based Filtering
│   │   └── routes/
│   │       └── phones.py      # API endpoints
│   ├── data/
│   │   └── phones.json        # Database HP (120+ phones)
│   └── requirements.txt       # Python dependencies
├── css/
│   └── style.css              # Stylesheet
├── js/
│   ├── api.js                 # API communication
│   ├── main.js                # Homepage logic
│   ├── rekomendasi.js         # Recommendation page
│   ├── compare.js             # Compare page
│   └── detail.js              # Detail page
├── images/                    # Image assets (120+ HP photos)
├── index.html                 # Homepage
├── rekomendasi.html           # Halaman rekomendasi
├── compare.html               # Halaman perbandingan
└── detail.html                # Halaman detail HP
```

---

## 🚀 Cara Install & Jalankan

### 1️⃣ Clone Repository
```bash
git clone https://github.com/cupen2004/sistem-rekomendasi-handphone.git
cd sistem-rekomendasi-handphone
```

### 2️⃣ Setup Backend (Python API)

#### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Jalankan Server
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 5000
```

Server akan running di: **http://localhost:5000**  
API Docs (Swagger UI): **http://localhost:5000/docs**

### 3️⃣ Setup Frontend

Buka file HTML langsung di browser atau pakai HTTP server:

#### Opsi A: Direct Open
```bash
# Buka index.html di browser
start index.html        # Windows
open index.html         # macOS
```

#### Opsi B: Python HTTP Server
```bash
# Di root folder proyek
python -m http.server 8000
```
Akses di: **http://localhost:8000**

#### Opsi C: VS Code Live Server
1. Install extension **Live Server**
2. Right-click `index.html` → **Open with Live Server**

---

## 📖 Cara Pakai

### 1. Cari Rekomendasi HP
1. Buka halaman **Rekomendasi**
2. Atur filter:
   - **Budget** (harga min-max)
   - **Brand** (Samsung, iPhone, Xiaomi, dll) - opsional
   - **RAM** minimal
   - **Storage** minimal
   - **Baterai** minimal
   - **Kamera** minimal
3. Klik **Cari HP Sekarang**
4. Sistem akan tampilkan HP dengan **score similarity tertinggi**

### 2. Bandingkan HP
1. Buka halaman **Bandingkan**
2. Pilih hingga 3 HP dari daftar
3. Klik **Bandingkan Sekarang**
4. Lihat perbandingan spesifikasi lengkap side-by-side

### 3. Lihat Detail HP
- Klik card HP mana saja untuk melihat detail lengkap

---

## 🔌 API Endpoints

### 📱 Phones
```
GET  /api/phones              # Get all phones (dengan filter)
GET  /api/phones/{id}         # Get phone by ID
GET  /api/phones/search/{query}  # Search phones
```

**Contoh dengan filter:**
```
GET /api/phones?min_price=2000000&max_price=5000000&min_ram=8
```

### 🎯 Recommendations
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
        "brand": "Samsung",
        "specs": {
          "ram": 8,
          "storage": 256,
          "battery": 5000,
          "camera": 50
        }
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
  "total": 1
}
```

### 🏷️ Brands
```
GET  /api/brands              # Get all available brands
```

📚 **API Documentation Lengkap**: http://localhost:5000/docs (saat server running)

---

## 🧠 Cara Kerja Algoritma

### Content-Based Filtering

Sistem menggunakan **Cosine Similarity** untuk menghitung kesamaan antar HP:

1. **Feature Extraction** - Ambil fitur numerik:
   - Price (dinormalisasi)
   - RAM (GB)
   - Storage (GB)
   - Battery (mAh)
   - Camera (MP)
   - Brand (one-hot encoding)

2. **Feature Weighting** - Bobot kepentingan:
   - 💰 Price: **30%**
   - 🧠 RAM: **20%**
   - 💾 Storage: **15%**
   - 🔋 Battery: **15%**
   - 📷 Camera: **10%**
   - 🏷️ Brand: **10%**

3. **Cosine Similarity** - Hitung kemiripan:
   ```
   similarity(A, B) = (A · B) / (||A|| × ||B||)
   ```
   Nilai: 0% (beda banget) hingga 100% (identik)

4. **Scoring & Ranking** - Kombinasi similarity + kriteria match:
   ```
   final_score = (similarity × 0.7) + (criteria_match × 0.3)
   ```

5. **Hasil** - HP diurutkan berdasarkan score tertinggi

---

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Background**: `#1a1a2e` (Dark Blue)
- **Card**: `#252541` (Slate)
- **Text**: `#e5e7eb` (Light Gray)

### Typography
- **Font**: Inter, system-ui, sans-serif
- **Sizes**: 14px (body), 16px-32px (headings)

---

## 📊 Data HP

Database berisi **120+ handphone** dari berbagai brand:
- 📱 Samsung (15 models)
- 📱 Apple iPhone (8 models)
- 📱 Xiaomi & Redmi (18 models)
- 📱 OPPO (13 models)
- 📱 Vivo (10 models)
- 📱 Realme (11 models)
- 📱 OnePlus (6 models)
- 📱 POCO (3 models)
- 📱 Infinix (8 models)
- 📱 Tecno (7 models)
- 📱 Google Pixel (5 models)
- 📱 Nothing (4 models)
- 📱 Motorola (4 models)
- 📱 Sony Xperia (4 models)
- 📱 ASUS ROG (4 models)
- 📱 Honor (3 models)
- 📱 Huawei (3 models)

Range harga: **Rp 1.000.000 - Rp 30.000.000**

---

## 🧪 Testing

### Manual Testing
Buka `test-integration.html` di browser untuk menjalankan test suite:
- ✅ API connectivity
- ✅ Fetch phones
- ✅ Search functionality
- ✅ Recommendation algorithm
- ✅ Filter application
- ✅ Compare feature

---

## 📝 TODO / Future Improvements

- [ ] Tambah filter processor & display size
- [ ] User authentication & save preferences
- [ ] Review & rating system
- [ ] Price tracking & alert notification
- [ ] Collaborative filtering algorithm
- [ ] Mobile app version (React Native/Flutter)
- [ ] Integrasi API harga real-time dari marketplace

---

## 🤝 Contributing

Contributions welcome! Buat Pull Request atau buka Issue untuk bug reports dan feature requests.

---

## 👨‍💻 Author

**PhoneRec - Sistem Rekomendasi Handphone**  
Proyek Tugas Semester 5

---

## 📄 License

Proyek ini dibuat untuk keperluan akademik.

---

## 🙏 Acknowledgments

- FastAPI Documentation
- scikit-learn Documentation
- MDN Web Docs
- Inspiration dari berbagai sistem rekomendasi e-commerce

---

⭐ **Star repo ini jika bermanfaat!**
