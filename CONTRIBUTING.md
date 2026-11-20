# Contributing to PhoneRec

Terima kasih sudah tertarik berkontribusi! Kami senang menerima kontribusi dari siapa saja.

## 🚀 Cara Kontribusi

### 1. Fork & Clone
```bash
# Fork repo ini lewat GitHub
# Clone fork kamu
git clone https://github.com/YOUR_USERNAME/sistem-rekomendasi-handphone.git
cd sistem-rekomendasi-handphone
```

### 2. Buat Branch Baru
```bash
# Buat branch dari main/gh-pages
git checkout -b feature/nama-fitur-kamu

# Atau untuk bugfix
git checkout -b fix/nama-bug
```

### 3. Development

#### Setup Environment
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 5000

# Frontend
# Buka index.html dengan live server
```

#### Coding Guidelines
- **JavaScript**: Gunakan ES6+, hindari var, pakai const/let
- **CSS**: Ikuti naming convention yang ada (kebab-case)
- **Python**: Follow PEP 8, type hints recommended
- **Commit message**: Clear dan descriptive

Format commit message:
```
<type>: <subject>

[optional body]

Types: feat, fix, docs, style, refactor, test, chore
```

Contoh:
```
feat: Add filter by processor type

- Add processor dropdown in filter form
- Update recommendation algorithm to include processor
- Add processor field to phones.json
```

### 4. Testing
```bash
# Test backend
python backend/test_backend.py

# Test frontend
# Buka test-integration.html dan pastikan semua pass

# Manual testing
# Coba semua fitur: filter, search, compare, detail
```

### 5. Commit & Push
```bash
git add .
git commit -m "feat: Add awesome feature"
git push origin feature/nama-fitur-kamu
```

### 6. Create Pull Request
1. Buka repo di GitHub
2. Klik "New Pull Request"
3. Pilih branch kamu
4. Isi deskripsi PR dengan jelas:
   - Apa yang diubah
   - Kenapa diubah
   - Screenshot (jika UI changes)
   - Testing yang sudah dilakukan

## 📋 Apa yang Bisa Dikontribusikan?

### Bug Reports
Temukan bug? Buat issue dengan format:
- **Judul**: Deskripsi singkat bug
- **Steps to reproduce**: Langkah replikasi bug
- **Expected behavior**: Yang seharusnya terjadi
- **Actual behavior**: Yang terjadi
- **Screenshots**: Jika memungkinkan
- **Environment**: Browser, OS, Python version

### Feature Requests
Punya ide fitur baru? Buat issue dengan format:
- **Judul**: Nama fitur
- **Problem**: Masalah yang diselesaikan
- **Solution**: Solusi yang diusulkan
- **Alternatives**: Alternatif lain yang dipertimbangkan

### Code Contributions
Yang kami butuhkan:
- ✅ **Bug fixes** - Perbaikan bug yang ada
- ✅ **New features** - Fitur baru (diskusikan dulu via issue)
- ✅ **Documentation** - Perbaiki atau tambah dokumentasi
- ✅ **Tests** - Tambah test coverage
- ✅ **Refactoring** - Clean up code, improve performance
- ✅ **UI/UX** - Perbaiki tampilan dan pengalaman pengguna

### Areas for Improvement
Prioritas tinggi:
- [ ] Tambah filter processor & display size
- [ ] Integrasi real-time price API
- [ ] User authentication & preferences
- [ ] Mobile app version
- [ ] Dark/light theme toggle
- [ ] Export comparison as PDF
- [ ] Add more phone data
- [ ] Improve recommendation accuracy

## 🎨 Style Guide

### JavaScript
```javascript
// Good
const phoneList = await fetchPhones();
const filteredPhones = phoneList.filter(phone => phone.price < maxPrice);

// Avoid
var phone_list = await fetchPhones();
var filtered = phone_list.filter(function(phone) {
  return phone.price < maxPrice;
});
```

### CSS
```css
/* Good - BEM-like naming */
.phone-card { }
.phone-card__title { }
.phone-card__image { }
.phone-card--featured { }

/* Avoid */
.phoneCard { }
.phone_title { }
```

### Python
```python
# Good
def calculate_similarity(phone1: dict, phone2: dict) -> float:
    """Calculate cosine similarity between two phones."""
    return similarity_score

# Avoid
def calc(p1, p2):
    return score
```

## ✅ Pull Request Checklist

Sebelum submit PR, pastikan:
- [ ] Code berjalan tanpa error
- [ ] Testing sudah dilakukan (manual/automated)
- [ ] Dokumentasi sudah diupdate (jika perlu)
- [ ] Commit message jelas
- [ ] Branch up-to-date dengan main/gh-pages
- [ ] No console.log() atau debugging code
- [ ] Code style konsisten dengan existing code

## 🤝 Code of Conduct

### Do's
- ✅ Be respectful dan professional
- ✅ Gunakan bahasa yang sopan
- ✅ Berikan feedback yang konstruktif
- ✅ Help others yang bertanya
- ✅ Focus on what is best for the project

### Don'ts
- ❌ Harassment atau discriminatory language
- ❌ Spam atau off-topic comments
- ❌ Trolling atau inflammatory remarks
- ❌ Personal attacks

## 💬 Questions?

Ada pertanyaan? Jangan ragu untuk:
- Buat issue dengan label "question"
- Comment di PR atau issue yang relevan

## 📝 License

Dengan berkontribusi, kamu setuju bahwa kontribusi kamu akan dilisensikan di bawah MIT License yang sama dengan proyek ini.

---

Terima kasih sudah berkontribusi! 🎉
