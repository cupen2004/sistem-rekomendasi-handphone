import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
from typing import List, Dict, Optional
from app.models import Phone


class ContentBasedRecommender:
    def __init__(self):
        self.scaler = MinMaxScaler()
        self.feature_weights = {
            'price': 0.30,
            'ram': 0.20,
            'storage': 0.15,
            'battery': 0.15,
            'camera_main': 0.15,
            'display_size': 0.05
        }
    
    def extract_features(self, phones: List[Phone]) -> np.ndarray:
        features = []
        for phone in phones:
            features.append([
                phone.price,
                phone.ram,
                phone.storage,
                phone.battery,
                phone.camera_main,
                phone.display_size
            ])
        return np.array(features)
    
    def calculate_similarity_scores(
        self,
        phones: List[Phone],
        target_price: Optional[int] = None,
        target_ram: Optional[int] = None,
        target_storage: Optional[int] = None,
        target_battery: Optional[int] = None,
        target_camera: Optional[int] = None,
        target_display: Optional[float] = None
    ) -> List[float]:
        phone_features = self.extract_features(phones)
        
        normalized_features = self.scaler.fit_transform(phone_features)
        
        user_profile = np.array([[
            target_price if target_price else 5000000,
            target_ram if target_ram else 8,
            target_storage if target_storage else 256,
            target_battery if target_battery else 5000,
            target_camera if target_camera else 50,
            target_display if target_display else 6.5
        ]])
        
        normalized_profile = self.scaler.transform(user_profile)
        
        similarities = cosine_similarity(normalized_profile, normalized_features)[0]
        return similarities.tolist()
    
    def recommend(
        self,
        phones: List[Phone],
        min_price: Optional[int] = None,
        max_price: Optional[int] = None,
        brand: Optional[str] = None,
        min_ram: Optional[int] = None,
        min_storage: Optional[int] = None,
        min_battery: Optional[int] = None,
        min_camera: Optional[int] = None,
        limit: int = 10
    ) -> List[Dict]:
        if not phones:
            return []
        
        target_price = ((min_price or 0) + (max_price or 50000000)) // 2
        
        similarities = self.calculate_similarity_scores(
            phones=phones,
            target_price=target_price,
            target_ram=min_ram,
            target_storage=min_storage,
            target_battery=min_battery,
            target_camera=min_camera
        )
        
        recommendations = []
        for i, phone in enumerate(phones):
            similarity_score = similarities[i]
            
            price_score = 1.0
            if max_price and phone.price <= max_price:
                price_diff = abs(phone.price - target_price) / max_price
                price_score = 1.0 - (price_diff * 0.5)
            
            brand_boost = 1.15 if (brand and phone.brand.lower() == brand.lower()) else 1.0
            
            final_score = (
                similarity_score * 0.65 +
                price_score * 0.35
            ) * brand_boost
            
            recommendations.append({
                'phone': phone.model_dump(),
                'score': round(final_score * 100, 2),
                'similarity': round(similarity_score * 100, 2),
                'match_reasons': self.get_match_reasons(
                    phone, min_price, max_price, min_ram, min_storage, min_battery, min_camera
                )
            })
        
        recommendations.sort(key=lambda x: x['score'], reverse=True)
        
        return recommendations[:limit]
    
    def get_match_reasons(
        self,
        phone: Phone,
        min_price: Optional[int],
        max_price: Optional[int],
        min_ram: Optional[int],
        min_storage: Optional[int],
        min_battery: Optional[int],
        min_camera: Optional[int]
    ) -> List[str]:
        reasons = []
        
        if max_price and phone.price <= max_price * 0.9:
            reasons.append(f"Harga sesuai budget (Rp {phone.price:,})")
        
        if min_ram and phone.ram >= min_ram:
            reasons.append(f"RAM {phone.ram}GB memenuhi kebutuhan")
        
        if min_storage and phone.storage >= min_storage:
            reasons.append(f"Storage {phone.storage}GB cukup lega")
        
        if min_battery and phone.battery >= min_battery:
            reasons.append(f"Baterai {phone.battery}mAh awet")
        
        if min_camera and phone.camera_main >= min_camera:
            reasons.append(f"Kamera {phone.camera_main}MP tajam")
        
        if 'AMOLED' in phone.display_type or 'OLED' in phone.display_type:
            reasons.append("Layar AMOLED/OLED jernih")
        
        if phone.ram >= 12:
            reasons.append("RAM besar untuk multitasking")
        
        if phone.battery >= 5000:
            reasons.append("Baterai jumbo tahan lama")
        
        return reasons[:4]


recommender = ContentBasedRecommender()
