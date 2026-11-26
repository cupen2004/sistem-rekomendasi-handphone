from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List
from app.database import db
from app.recommendation import recommender, category_recommender
from app.models import PhoneResponse, RecommendationRequest, RecommendationResponse, CategoryRecommendationRequest

router = APIRouter(prefix="/api", tags=["phones"])


@router.get("/phones", response_model=PhoneResponse)
async def get_phones(
    limit: Optional[int] = Query(None, ge=1, le=200),
    brand: Optional[str] = None,
    min_price: Optional[int] = None,
    max_price: Optional[int] = None,
    min_ram: Optional[int] = None
):
    """
    Get all phones with optional filters
    """
    try:
        phones = db.filter_phones(
            min_price=min_price,
            max_price=max_price,
            brand=brand,
            min_ram=min_ram
        )
        
        if limit:
            phones = phones[:limit]
        
        return PhoneResponse(
            success=True,
            data=[phone.model_dump() for phone in phones]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/phones/{phone_id}", response_model=PhoneResponse)
async def get_phone_by_id(phone_id: int):
    """
    Get phone by ID
    """
    phone = db.get_phone_by_id(phone_id)
    
    if not phone:
        raise HTTPException(status_code=404, detail="Phone not found")
    
    return PhoneResponse(
        success=True,
        data=phone.model_dump()
    )


@router.get("/phones/search/{query}", response_model=PhoneResponse)
async def search_phones(query: str):
    """
    Search phones by brand, model, or chipset
    """
    phones = db.search_phones(query)
    
    return PhoneResponse(
        success=True,
        data=[phone.model_dump() for phone in phones],
        message=f"Found {len(phones)} phones"
    )


@router.post("/recommendations", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendationRequest):
    """
    Get phone recommendations using Content-Based Filtering
    """
    try:
        filtered_phones = db.filter_phones(
            min_price=request.min_price,
            max_price=request.max_price,
            brand=request.brand,
            min_ram=request.min_ram,
            min_storage=request.min_storage,
            min_battery=request.min_battery,
            min_camera=request.min_camera,
            os=request.os,
            display_type=request.display_type
        )
        
        if not filtered_phones:
            return RecommendationResponse(
                success=True,
                data=[],
                message="No phones match your criteria"
            )
        
        recommendations = recommender.recommend(
            phones=filtered_phones,
            min_price=request.min_price,
            max_price=request.max_price,
            brand=request.brand,
            min_ram=request.min_ram,
            min_storage=request.min_storage,
            min_battery=request.min_battery,
            min_camera=request.min_camera,
            limit=request.limit
        )
        
        return RecommendationResponse(
            success=True,
            data=recommendations,
            message=f"Found {len(recommendations)} recommendations"
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/recommendations/by-category", response_model=RecommendationResponse)
async def get_recommendations_by_category(request: CategoryRecommendationRequest):
    """
    Get phone recommendations based on usage categories (gaming, kerja, sosmed, etc)
    """
    try:
        valid_categories = ['gaming', 'kerja', 'sosmed', 'fotografi', 'multimedia', 'budget']
        
        invalid_cats = [cat for cat in request.categories if cat not in valid_categories]
        if invalid_cats:
            raise HTTPException(
                status_code=400, 
                detail=f"Invalid categories: {', '.join(invalid_cats)}. Valid: {', '.join(valid_categories)}"
            )
        
        filtered_phones = db.filter_phones(
            min_price=request.min_price,
            max_price=request.max_price,
            brand=request.brand
        )
        
        if not filtered_phones:
            return RecommendationResponse(
                success=True,
                data=[],
                message="No phones match your criteria"
            )
        
        recommendations = category_recommender.recommend_by_category(
            phones=filtered_phones,
            categories=request.categories,
            min_price=request.min_price,
            max_price=request.max_price,
            brand=request.brand,
            limit=request.limit
        )
        
        return RecommendationResponse(
            success=True,
            data=recommendations,
            message=f"Found {len(recommendations)} recommendations for {', '.join(request.categories)}"
        )
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/brands")
async def get_brands():
    """
    Get all available brands
    """
    brands = db.get_brands()
    return {
        "success": True,
        "data": brands
    }
