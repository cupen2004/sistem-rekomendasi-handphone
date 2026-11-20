from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.phones import router as phones_router

app = FastAPI(
    title="PhoneRec API",
    description="Sistem Rekomendasi Handphone dengan Content-Based Filtering",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(phones_router)


@app.get("/")
async def root():
    return {
        "message": "PhoneRec API - Sistem Rekomendasi Handphone",
        "version": "1.0.0",
        "docs": "/docs",
        "endpoints": {
            "phones": "/api/phones",
            "phone_detail": "/api/phones/{id}",
            "search": "/api/phones/search/{query}",
            "recommendations": "/api/recommendations",
            "brands": "/api/brands"
        }
    }


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "message": "API is running"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
