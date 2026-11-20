# 🎨 PhoneRec Frontend

Frontend aplikasi PhoneRec menggunakan **Vanilla JavaScript**, **HTML5**, dan **CSS3** tanpa framework. Ringan, cepat, dan mudah dikustomisasi.

## 📁 Struktur Folder

```
frontend/
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
└── test-integration.html      # Integration testing
```

## 🚀 Cara Menjalankan

### Opsi 1: Direct Open (Simple)
```bash
# Buka langsung di browser
start index.html  # Windows
open index.html   # macOS
```

### Opsi 2: Python HTTP Server
```bash
# Di folder frontend
python -m http.server 8000

# Akses di: http://localhost:8000
```

### Opsi 3: VS Code Live Server
1. Install extension "Live Server"
2. Right-click `index.html`
3. Pilih "Open with Live Server"

### Opsi 4: Node HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run
http-server -p 8000
```

## 🔌 Koneksi ke Backend

Edit file `js/api.js` untuk mengatur URL backend:

```javascript
// Development (local)
const API_URL = 'http://localhost:5000/api';

// Production (deployed)
const API_URL = 'https://your-backend-url.com/api';
```

## 🎨 Design System

### Color Palette
```css
--primary: #6366f1        /* Indigo - primary actions */
--primary-light: #818cf8  /* Light indigo - hover states */
--surface: #1a1a2e        /* Dark blue - main background */
--card: #252541           /* Slate - card background */
--text: #e5e7eb           /* Light gray - main text */
--text-muted: #9ca3af     /* Gray - secondary text */
--border: #374151         /* Dark gray - borders */
--success: #10b981        /* Green - success states */
--error: #ef4444          /* Red - error states */
```

### Typography
- **Font**: Inter, system-ui, sans-serif
- **Body**: 14px / 1.6 line-height
- **Headers**: 20px - 32px (responsive)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing Scale
```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
```

### Border Radius
```css
--radius-sm: 0.375rem   /* 6px - small elements */
--radius: 0.5rem        /* 8px - cards */
--radius-lg: 0.75rem    /* 12px - large cards */
--radius-full: 9999px   /* pills/circles */
```

## 📄 Halaman

### 1. Homepage (`index.html`)
- Hero section dengan typing animation
- Feature cards
- Latest phones grid
- Script: `main.js`, `typing-animation.js`

### 2. Rekomendasi (`rekomendasi.html`)
- Filter form (budget, brand, specs)
- Result grid dengan score
- Empty state & loading state
- Script: `rekomendasi.js`

### 3. Compare (`compare.html`)
- Phone selection (max 3)
- Side-by-side comparison table
- Highlight differences
- Script: `compare.js`

### 4. Detail (`detail.html`)
- Full specifications
- Image gallery
- Price info
- Similar phones
- Script: `detail.js`

### 5. Test Integration (`test-integration.html`)
- API connectivity tests
- Feature tests
- Manual test suite
- Useful untuk debugging

## 🧩 JavaScript Modules

### `api.js` - API Layer
```javascript
// Fetch all phones
const phones = await fetchPhones();

// Get phone by ID
const phone = await fetchPhoneById('samsung-a55');

// Search phones
const results = await searchPhones('samsung');

// Get recommendations
const recommendations = await getRecommendations({
  min_price: 2000000,
  max_price: 5000000,
  min_ram: 8
});
```

### `dummy-data.js` - Fallback Data
Digunakan jika backend tidak tersedia. Berisi sample data untuk development.

### `mobile-menu.js` - Navigation
Handle mobile menu toggle dan responsive navigation.

### `update-images.js` - Image Handler
Fallback untuk image yang gagal load.

## 🎭 States & UI Feedback

### Loading State
```javascript
showLoading(container);
// Shows spinner with text
```

### Error State
```javascript
showError(container, message);
// Shows error message with retry button
```

### Empty State
```javascript
showEmptyState(container, message);
// Shows no results message
```

### Success State
Tampilkan data dengan smooth transition.

## ♿ Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels untuk interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible states
- ✅ Color contrast WCAG AA compliant
- ✅ Responsive touch targets (44px minimum)

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px) { }   /* sm: tablets */
@media (min-width: 768px) { }   /* md: small laptops */
@media (min-width: 1024px) { }  /* lg: desktops */
@media (min-width: 1280px) { }  /* xl: large screens */
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Homepage loads dengan typing animation
- [ ] Navigation links work
- [ ] Mobile menu toggle
- [ ] Filter form validation
- [ ] Search functionality
- [ ] Recommendation results
- [ ] Compare selection (max 3)
- [ ] Detail page display
- [ ] Image fallback
- [ ] Error handling
- [ ] Loading states
- [ ] Responsive pada mobile/tablet

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## 🔧 Customization

### Ubah Warna Tema
Edit `css/style.css`:
```css
:root {
  --primary: #your-color;
  --surface: #your-background;
}
```

### Tambah Halaman Baru
1. Copy struktur HTML dari halaman existing
2. Import CSS & JS modules yang dibutuhkan
3. Tambah link di navigation

### Modifikasi API Endpoint
Edit `js/api.js` dan sesuaikan function yang dibutuhkan.

## 🐛 Troubleshooting

### CORS Error
Backend harus enable CORS. Cek `backend/app/main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Image Not Loading
Pastikan path image benar atau fallback image tersedia.

### API Not Responding
1. Cek backend sudah running di port 5000
2. Cek URL di `js/api.js` sudah benar
3. Lihat console untuk error details

### Styling Tidak Apply
1. Clear browser cache (Ctrl+Shift+R)
2. Cek CSS file path di HTML
3. Inspect element untuk debug specificity

## 📝 Best Practices

### Performance
- ✅ Minimize DOM manipulation
- ✅ Use event delegation
- ✅ Lazy load images
- ✅ Debounce search input

### Code Quality
- ✅ Use ES6+ features (const, let, arrow functions)
- ✅ Async/await untuk asynchronous code
- ✅ Descriptive variable names
- ✅ Comment complex logic

### Maintainability
- ✅ Separate concerns (API, UI, logic)
- ✅ Reusable functions
- ✅ Consistent naming conventions
- ✅ Keep functions small and focused

---

Happy coding! 🚀
