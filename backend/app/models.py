from pydantic import BaseModel, Field
from typing import Optional, List


class Phone(BaseModel):
    id: int
    brand: str
    model: str
    price: int
    ram: int
    storage: int
    battery: int
    camera_main: int
    camera_front: float
    chipset: str
    os: str
    display_size: float
    display_type: str
    image_url: str


class PhoneResponse(BaseModel):
    success: bool
    data: Phone | List[Phone] | None = None
    message: Optional[str] = None


class RecommendationRequest(BaseModel):
    min_price: Optional[int] = Field(None, ge=0)
    max_price: Optional[int] = Field(None, ge=0)
    brand: Optional[str] = None
    min_ram: Optional[int] = Field(None, ge=0)
    min_storage: Optional[int] = Field(None, ge=0)
    min_battery: Optional[int] = Field(None, ge=0)
    min_camera: Optional[int] = Field(None, ge=0)
    os: Optional[str] = None
    display_type: Optional[str] = None
    limit: Optional[int] = Field(10, ge=1, le=50)


class CategoryRecommendationRequest(BaseModel):
    categories: List[str] = Field(..., min_items=1)
    min_price: Optional[int] = Field(None, ge=0)
    max_price: Optional[int] = Field(None, ge=0)
    brand: Optional[str] = None
    limit: Optional[int] = Field(10, ge=1, le=50)


class RecommendationResponse(BaseModel):
    success: bool
    data: List[dict]
    message: Optional[str] = None
