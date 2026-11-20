# PhoneRec Backend API

Backend sistem rekomendasi handphone menggunakan **Python + FastAPI** dengan algoritma **Content-Based Filtering**.

## Tech Stack
- **FastAPI** - Modern web framework
- **Pydantic** - Data validation
- **scikit-learn** - Machine learning (Cosine Similarity)
- **NumPy** - Numerical computing

## Setup

### 1. Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2. Run Server
```bash
# Development mode dengan auto-reload
uvicorn app.main:app --reload --host 0.0.0.0 --port 5000

# Atau langsung
python -m app.main
```

### 3. Access API
- **API**: http://localhost:5000
- **Docs (Swagger)**: http://localhost:5000/docs
- **ReDoc**: http://localhost:5000/redoc

## API Endpoints

### 📱 Phones
- `GET /api/phones` - Get all phones (with filters)
- `GET /api/phones/{id}` - Get phone by ID
- `GET /api/phones/search/{query}` - Search phones

### 🎯 Recommendations
- `POST /api/recommendations` - Get recommendations (Content-Based Filtering)

### 🏷️ Brands
- `GET /api/brands` - Get all available brands

## Content-Based Filtering

Sistem menggunakan **Cosine Similarity** untuk menghitung kesamaan antar HP berdasarkan:
- Price range
- RAM
- Storage
- Battery capacity
- Camera quality
- Display size
- Brand preference

### Contoh Request
```json
POST /api/recommendations
{
  "min_price": 2000000,
  "max_price": 5000000,
  "min_ram": 8,
  "min_storage": 256,
  "min_battery": 5000,
  "brand": "Samsung",
  "limit": 10
}
```

### Response
```json
{
  "success": true,
  "data": [
    {
      "phone": { ... },
      "score": 92.5,
      "similarity": 87.3,
      "match_reasons": [
        "Harga sesuai budget",
        "RAM 8GB memenuhi kebutuhan",
        "Baterai 5000mAh awet"
      ]
    }
  ]
}
```

## Project Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI entry point
│   ├── models.py            # Pydantic models
│   ├── database.py          # JSON file handler
│   ├── recommendation.py    # Content-Based Filtering
│   └── routes/
│       ├── __init__.py
│       └── phones.py        # API endpoints
├── data/
│   └── phones.json          # Phone database
└── requirements.txt
```

## Features
✅ RESTful API dengan FastAPI
✅ Content-Based Filtering dengan Cosine Similarity
✅ Auto-generated docs (Swagger UI)
✅ CORS enabled untuk frontend
✅ Filter & search functionality
✅ Scoring & ranking system
✅ Match reasons untuk setiap rekomendasi
