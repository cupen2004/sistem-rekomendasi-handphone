# 📱 PhoneRec - Sistem Rekomendasi Handphone

Aplikasi web untuk memberikan rekomendasi handphone yang sesuai dengan budget dan kebutuhan pengguna menggunakan algoritma **Content-Based Filtering** dengan **Cosine Similarity**.

🔗 **GitHub Repo**: [github.com/cupen2004/sistem-rekomendasi-handphone](https://github.com/cupen2004/sistem-rekomendasi-handphone)  
🌐 **Live Website**: [cupen2004.github.io/sistem-rekomendasi-handphone](https://cupen2004.github.io/sistem-rekomendasi-handphone/)

---

## 🎯 Fitur Utama

### Rekomendasi Cerdas
- **Rekomendasi berdasarkan Kategori** - Pilih kebutuhan: Gaming, Kerja & Produktivitas, Sosial Media, Fotografi, Multimedia, atau Budget Friendly
- **Multi-kategori** - Gabungkan beberapa kategori sekaligus untuk rekomendasi yang lebih spesifik
- **Smart Scoring System** - Algoritma menilai HP berdasarkan bobot kategori yang dipilih
- **Filter Lengkap** - Cari HP berdasarkan harga, brand, RAM, storage, baterai, dan kamera
- **Rating Bintang** - Visualisasi tingkat kesesuaian dengan rating 1-5 bintang
- **Badge Kategori** - HP terbaik mendapat badge khusus (Best for Gaming, Camera Beast, Budget King, dll)

### Fitur Lainnya
- **Quick Compare** - Centang hingga 4 HP untuk dibandingkan langsung
- **Sort & Filter** - Urutkan hasil berdasarkan: Paling Cocok, Termurah, Termahal, atau Terbaru
- **Perbandingan HP** - Bandingkan spesifikasi hingga 3 HP sekaligus secara side-by-side
- **Detail Lengkap** - Lihat spesifikasi lengkap dan harga setiap handphone
- **Dark/Light Mode** - Toggle theme dengan persistent preference
- **Responsive Design** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Modern UI** - Clean, professional design dengan smooth animations

---

## 🛠️ Tech Stack

### Frontend
- **HTML5, CSS3, JavaScript (Vanilla)** - No framework, ringan dan cepat
- **CSS Variables** - Dynamic theming untuk dark/light mode
- **Fetch API** - Komunikasi dengan backend
- **SVG Icons** - Icon vector untuk performa optimal
- **LocalStorage** - Menyimpan preference theme

### Backend
- **Python 3.10+** - Programming language
- **FastAPI** - Modern web framework untuk REST API
- **scikit-learn** - Machine learning library (Cosine Similarity)
- **NumPy** - Numerical computing
- **Uvicorn** - ASGI server

### Algoritma
- **Content-Based Filtering** - Rekomendasi berdasarkan kesamaan fitur HP
- **Category-Based Recommendation** - Scoring khusus per kategori kebutuhan
- **Chipset Tier System** - Klasifikasi processor (Flagship, High, Mid, Entry)
- **Cosine Similarity** - Menghitung tingkat kemiripan antar HP
- **Weighted Scoring** - Bobot dinamis berdasarkan kategori yang dipilih

---

## 📁 Struktur Proyek

```
sistem-rekomendasi-handphone/
├── backend/                    # Backend API (Python + FastAPI)
│   ├── app/
│   │   ├── main.py            # FastAPI entry point
│   │   ├── models.py          # Data models (Pydantic)
│   │   ├── database.py        # JSON database handler
│   │   ├── recommendation.py  # Algoritma Content-Based & Category-Based
│   │   └── routes/
│   │       └── phones.py      # API endpoints
│   ├── data/
│   │   ├── phones.json        # Database HP (110+ phones)
│   │   └── phones_database.csv
│   └── requirements.txt       # Python dependencies
├── css/
│   └── style.css              # Stylesheet dengan dark/light mode
├── js/
│   ├── api.js                 # API communication
│   ├── main.js                # Homepage logic
│   ├── rekomendasi.js         # Recommendation page dengan category & sort
│   ├── compare.js             # Compare page
│   ├── theme-toggle.js        # Dark/light mode handler
│   ├── mobile-menu.js         # Mobile navigation
│   └── typing-animation.js    # Hero text animation
├── images/                    # Image assets (110+ HP photos)
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

### 1. Cari Rekomendasi HP Berdasarkan Kategori
1. Buka halaman **Rekomendasi**
2. Pilih kategori kebutuhan:
   - **Gaming** - Chipset kuat, RAM tinggi, layar AMOLED
   - **Kerja & Produktivitas** - RAM cukup, battery awet, storage lega
   - **Sosial Media** - Kamera selfie bagus, storage cukup
   - **Fotografi** - Kamera utama tinggi, chipset image processing bagus
   - **Multimedia** - Layar besar, battery jumbo, storage lega
   - **Budget Friendly** - Harga terjangkau tapi spek decent
3. Bisa pilih **lebih dari satu kategori** untuk kombinasi kebutuhan
4. Optional: Atur filter budget, brand, RAM minimal, dll
5. Klik **Terapkan Filter**
6. Sistem akan tampilkan HP dengan **rating bintang tertinggi**
7. HP terbaik akan dapat **badge kategori** (Best for Gaming, Camera Beast, dll)

### 2. Quick Compare
1. Centang checkbox di card HP yang ingin dibandingkan (max 4)
2. Compare bar akan muncul di bawah
3. Klik **Bandingkan Sekarang** untuk langsung ke halaman compare

### 3. Sort Hasil
Gunakan dropdown **Urutkan** untuk mengurutkan hasil:
- **Paling Cocok** - Berdasarkan rating tertinggi (default)
- **Termurah** - Harga rendah ke tinggi
- **Termahal** - Harga tinggi ke rendah
- **Terbaru** - RAM tertinggi (proxy HP baru)

### 4. Bandingkan HP Manual
1. Buka halaman **Bandingkan**
2. Pilih hingga 3 HP dari search box
3. Lihat perbandingan spesifikasi lengkap side-by-side

### 5. Dark/Light Mode
- Klik toggle theme di header (desktop: setelah menu, mobile: sebelah kiri hamburger)
- Preference tersimpan otomatis

---

## 🔌 API Endpoints

### 📱 Phones
```
GET  /api/phones              # Get all phones (dengan filter)
GET  /api/phones/{id}         # Get phone by ID
GET  /api/phones/search/{query}  # Search phones
GET  /api/brands              # Get all available brands
```

### 🎯 Recommendations

#### Standard Recommendations
```
POST /api/recommendations     # Get recommendations dengan filter biasa
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

#### Category-Based Recommendations
```
POST /api/recommendations/by-category     # Get recommendations berdasarkan kategori
```

**Request Body:**
```json
{
  "categories": ["gaming", "fotografi"],
  "min_price": 5000000,
  "max_price": 15000000,
  "brand": "Samsung",
  "limit": 20
}
```

**Valid Categories:**
- `gaming` - HP untuk gaming
- `kerja` - HP untuk produktivitas
- `sosmed` - HP untuk sosial media
- `fotografi` - HP untuk fotografi
- `multimedia` - HP untuk hiburan
- `budget` - HP budget friendly

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "phone": {
        "id": 1,
        "brand": "Samsung",
        "model": "Galaxy S24 Ultra",
        "price": 19999000,
        "ram": 12,
        "storage": 512,
        "battery": 5000,
        "camera_main": 200,
        "chipset": "Snapdragon 8 Gen 3"
      },
      "score": 95.8,
      "categories": ["gaming", "fotografi"],
      "match_reasons": [
        "Chipset Snapdragon 8 Gen 3 kencang untuk gaming",
        "RAM 12GB mantap untuk multitasking game",
        "Kamera utama 200MP detail tinggi"
      ]
    }
  ],
  "message": "Found 15 recommendations for gaming, fotografi"
}
```

📚 **API Documentation Lengkap**: http://localhost:5000/docs (saat server running)

---

## 🧠 Cara Kerja Algoritma

### Category-Based Scoring System

Sistem memberikan score berbeda untuk setiap kategori:

#### 1. Gaming (40% chipset, 30% RAM, 20% display, 10% battery)
- **Chipset Tier**: Flagship (100%), High (75%), Mid (50%), Entry (25%)
- **RAM Score**: Dinormalisasi ke 16GB (ideal gaming)
- **Display Quality**: AMOLED/OLED = 100%, IPS = 50%
- **Battery**: Dinormalisasi ke 6000mAh

#### 2. Kerja & Produktivitas (30% RAM, 30% battery, 25% storage, 15% chipset)
- Fokus pada multitasking dan daya tahan
- RAM dan battery mendapat bobot tertinggi

#### 3. Sosial Media (40% camera front, 25% storage, 20% RAM, 15% chipset)
- **Camera Front**: Dinormalisasi ke 50MP (selfie quality)
- Storage untuk menyimpan foto/video

#### 4. Fotografi (50% camera main, 30% chipset, 20% storage)
- **Camera Main**: Dinormalisasi ke 200MP
- Chipset untuk image processing

#### 5. Multimedia (30% battery, 25% display size, 25% storage, 20% chipset)
- Display size dinormalisasi ke 7 inch
- Battery untuk streaming/hiburan lama

#### 6. Budget Friendly (60% price value, 40% specs balance)
- **Price Value**: Inverse dari harga (lebih murah = score lebih tinggi)
- **Specs Balance**: Kombinasi RAM, storage, battery, camera

### Multi-Category Scoring
Jika user memilih multiple kategori:
```
final_score = average(score_category_1, score_category_2, ...)
```

### Chipset Tier Classification
- **Flagship**: Snapdragon 8 Gen 3, A18 Pro, Dimensity 9400, dll
- **High**: Snapdragon 7+ Gen 3, A16 Bionic, Dimensity 8300, dll
- **Mid**: Snapdragon 7s Gen 3, Helio G100, dll
- **Entry**: Snapdragon 680, Helio G85, dll

---

## 🎨 Design System

### Color Palette
#### Light Mode
- **Primary**: `#2563eb` (Blue)
- **Background**: `#ffffff` (White)
- **Card**: `#f8f9fa` (Light Gray)
- **Text**: `#212529` (Dark Gray)

#### Dark Mode
- **Primary**: `#3b82f6` (Light Blue)
- **Background**: `#1a1a1a` (Dark)
- **Card**: `#2d2d2d` (Dark Gray)
- **Text**: `#f8f9fa` (Light Gray)

### Typography
- **Font**: Inter, system-ui, sans-serif
- **Sizes**: 14px (body), 16px-32px (headings)

### UI Components
- **Slider Toggle** - iOS-style theme switcher dengan sun/moon icon
- **Category Pills** - Rounded pills dengan gradient active state
- **Badge System** - Color-coded badges per kategori
- **Star Rating** - 1-5 stars untuk visualisasi score
- **Glass Effect** - Removed (pakai solid colors untuk professional look)

---

## 📊 Data HP

Database berisi **110+ handphone** dari berbagai brand:
- Samsung (10 models)
- Apple iPhone (8 models)
- Xiaomi & Redmi (10 models)
- OPPO (8 models)
- Vivo (7 models)
- Realme (8 models)
- OnePlus (4 models)
- POCO (2 models)
- Infinix (5 models)
- Tecno (4 models)
- Google Pixel (4 models)
- Nothing (3 models)
- Motorola (3 models)
- Sony Xperia (3 models)
- ASUS ROG (3 models)
- Honor (3 models)
- Huawei (3 models)

Range harga: **Rp 999.000 - Rp 26.999.000**

---

## ✨ Fitur Tambahan yang Telah Diimplementasi

- ✅ Rekomendasi berdasarkan kategori kebutuhan
- ✅ Multi-kategori selection
- ✅ Smart scoring per kategori
- ✅ Rating bintang (1-5 stars)
- ✅ Badge kategori untuk HP terbaik
- ✅ Quick compare dengan checkbox
- ✅ Sort results (Paling Cocok, Termurah, Termahal, Terbaru)
- ✅ Dark/Light mode toggle
- ✅ Tooltip kategori (hover untuk info)
- ✅ Category match reasons
- ✅ Responsive mobile layout
- ✅ Feature cards dengan SVG icons
- ✅ Compare bar sticky bottom

---

## 📝 TODO / Future Improvements

- [ ] Kombinasi kategori dengan prioritas slider (Gaming 70% + Fotografi 30%)
- [ ] Filter chipset brand preference (Snapdragon, MediaTek, Apple)
- [ ] Filter refresh rate untuk Gaming (60Hz, 90Hz, 120Hz, 144Hz)
- [ ] Save/Favorit HP (localStorage)
- [ ] Share results via link/WhatsApp
- [ ] Statistik & insights (rata-rata harga HP gaming, dll)
- [ ] User authentication & preferences
- [ ] Review & rating system
- [ ] Price tracking & alert notification
- [ ] Collaborative filtering algorithm
- [ ] Mobile app version
- [ ] Integrasi API harga real-time dari marketplace

---

## 🤝 Contributing

Contributions welcome! Buat Pull Request atau buka Issue untuk bug reports dan feature requests.

---

## 👨‍💻 Author

**PhoneRec - Sistem Rekomendasi Handphone**  
Proyek Tugas Semester 5 - 2026

---

## 📄 License

Proyek ini dibuat untuk keperluan akademik.

---

## 🙏 Acknowledgments

- FastAPI Documentation
- scikit-learn Documentation
- MDN Web Docs
- Inter Font by Rasmus Andersson
- Inspiration dari berbagai sistem rekomendasi e-commerce

---

⭐ **Star repo ini jika bermanfaat!**
