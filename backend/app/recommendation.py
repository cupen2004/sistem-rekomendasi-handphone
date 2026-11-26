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


class CategoryBasedRecommender:
    def __init__(self):
        self.chipset_tiers = {
            'flagship': ['Snapdragon 8 Gen 3', 'Snapdragon 8 Elite', 'A18 Pro', 'A17 Pro', 
                        'MediaTek Dimensity 9400', 'MediaTek Dimensity 9300+', 'Google Tensor G4', 
                        'Snapdragon 8 Gen 2', 'Exynos 2400', 'Kirin 9010'],
            'high': ['Snapdragon 8s Gen 3', 'Snapdragon 7+ Gen 3', 'Snapdragon 7 Gen 3', 
                    'MediaTek Dimensity 9200+', 'MediaTek Dimensity 9200', 'MediaTek Dimensity 8300',
                    'MediaTek Dimensity 8200', 'A18', 'A16 Bionic', 'A15 Bionic'],
            'mid': ['Snapdragon 7s Gen 3', 'Snapdragon 7s Gen 2', 'Snapdragon 7 Gen 1',
                   'MediaTek Dimensity 8050', 'MediaTek Dimensity 7300', 'MediaTek Dimensity 7200',
                   'MediaTek Helio G100', 'Snapdragon 782G', 'Snapdragon 778G+', 'Exynos 1480'],
            'entry': ['Snapdragon 695', 'Snapdragon 685', 'Snapdragon 680', 'MediaTek Helio G99',
                     'MediaTek Helio G88', 'MediaTek Helio G85', 'MediaTek Helio G81']
        }
        
        self.category_weights = {
            'gaming': {
                'chipset': 0.40,
                'ram': 0.30,
                'display_quality': 0.20,
                'battery': 0.10
            },
            'kerja': {
                'ram': 0.30,
                'storage': 0.25,
                'battery': 0.30,
                'chipset': 0.15
            },
            'sosmed': {
                'camera_front': 0.40,
                'storage': 0.25,
                'ram': 0.20,
                'chipset': 0.15
            },
            'fotografi': {
                'camera_main': 0.50,
                'chipset': 0.30,
                'storage': 0.20
            },
            'multimedia': {
                'display_size': 0.25,
                'battery': 0.30,
                'storage': 0.25,
                'chipset': 0.20
            },
            'budget': {
                'price_value': 0.60,
                'specs_balance': 0.40
            }
        }
    
    def get_chipset_score(self, chipset: str) -> float:
        chipset_lower = chipset.lower()
        for tier_name, tier_chipsets in self.chipset_tiers.items():
            for chip in tier_chipsets:
                if chip.lower() in chipset_lower:
                    if tier_name == 'flagship':
                        return 1.0
                    elif tier_name == 'high':
                        return 0.75
                    elif tier_name == 'mid':
                        return 0.50
                    elif tier_name == 'entry':
                        return 0.25
        return 0.1
    
    def calculate_category_score(self, phone: Phone, category: str) -> float:
        score = 0.0
        weights = self.category_weights.get(category, {})
        
        if category == 'gaming':
            chipset_score = self.get_chipset_score(phone.chipset)
            ram_score = min(phone.ram / 16.0, 1.0)
            display_score = 1.0 if 'AMOLED' in phone.display_type or 'OLED' in phone.display_type else 0.5
            battery_score = min(phone.battery / 6000.0, 1.0)
            
            score = (chipset_score * weights['chipset'] +
                    ram_score * weights['ram'] +
                    display_score * weights['display_quality'] +
                    battery_score * weights['battery'])
        
        elif category == 'kerja':
            ram_score = min(phone.ram / 16.0, 1.0)
            storage_score = min(phone.storage / 512.0, 1.0)
            battery_score = min(phone.battery / 6000.0, 1.0)
            chipset_score = self.get_chipset_score(phone.chipset)
            
            score = (ram_score * weights['ram'] +
                    storage_score * weights['storage'] +
                    battery_score * weights['battery'] +
                    chipset_score * weights['chipset'])
        
        elif category == 'sosmed':
            camera_front_score = min(phone.camera_front / 50.0, 1.0)
            storage_score = min(phone.storage / 512.0, 1.0)
            ram_score = min(phone.ram / 12.0, 1.0)
            chipset_score = self.get_chipset_score(phone.chipset)
            
            score = (camera_front_score * weights['camera_front'] +
                    storage_score * weights['storage'] +
                    ram_score * weights['ram'] +
                    chipset_score * weights['chipset'])
        
        elif category == 'fotografi':
            camera_main_score = min(phone.camera_main / 200.0, 1.0)
            chipset_score = self.get_chipset_score(phone.chipset)
            storage_score = min(phone.storage / 512.0, 1.0)
            
            score = (camera_main_score * weights['camera_main'] +
                    chipset_score * weights['chipset'] +
                    storage_score * weights['storage'])
        
        elif category == 'multimedia':
            display_size_score = min(phone.display_size / 7.0, 1.0)
            battery_score = min(phone.battery / 6000.0, 1.0)
            storage_score = min(phone.storage / 512.0, 1.0)
            chipset_score = self.get_chipset_score(phone.chipset)
            
            score = (display_size_score * weights['display_size'] +
                    battery_score * weights['battery'] +
                    storage_score * weights['storage'] +
                    chipset_score * weights['chipset'])
        
        elif category == 'budget':
            max_price = 30000000
            price_value_score = 1.0 - (phone.price / max_price)
            
            specs_score = (
                min(phone.ram / 12.0, 1.0) * 0.3 +
                min(phone.storage / 256.0, 1.0) * 0.25 +
                min(phone.battery / 5000.0, 1.0) * 0.25 +
                min(phone.camera_main / 50.0, 1.0) * 0.2
            )
            
            score = (price_value_score * weights['price_value'] +
                    specs_score * weights['specs_balance'])
        
        return score
    
    def get_category_match_reasons(self, phone: Phone, category: str) -> List[str]:
        reasons = []
        
        if category == 'gaming':
            chipset_score = self.get_chipset_score(phone.chipset)
            if chipset_score >= 0.75:
                reasons.append(f"Chipset {phone.chipset} kencang untuk gaming")
            if phone.ram >= 12:
                reasons.append(f"RAM {phone.ram}GB mantap untuk multitasking game")
            if 'AMOLED' in phone.display_type or 'OLED' in phone.display_type:
                reasons.append("Layar AMOLED responsif untuk gaming")
            if phone.battery >= 5000:
                reasons.append(f"Baterai {phone.battery}mAh tahan main lama")
        
        elif category == 'kerja':
            if phone.ram >= 8:
                reasons.append(f"RAM {phone.ram}GB cocok untuk produktivitas")
            if phone.storage >= 256:
                reasons.append(f"Storage {phone.storage}GB lega untuk file kerja")
            if phone.battery >= 5000:
                reasons.append(f"Baterai {phone.battery}mAh tahan seharian kerja")
        
        elif category == 'sosmed':
            if phone.camera_front >= 32:
                reasons.append(f"Kamera depan {phone.camera_front}MP tajam untuk selfie")
            if phone.storage >= 256:
                reasons.append(f"Storage {phone.storage}GB cukup untuk banyak foto/video")
            if phone.ram >= 8:
                reasons.append("RAM cukup untuk buka banyak aplikasi sosmed")
        
        elif category == 'fotografi':
            if phone.camera_main >= 50:
                reasons.append(f"Kamera utama {phone.camera_main}MP detail tinggi")
            chipset_score = self.get_chipset_score(phone.chipset)
            if chipset_score >= 0.5:
                reasons.append("Chipset bagus untuk image processing")
            if phone.storage >= 256:
                reasons.append(f"Storage {phone.storage}GB untuk banyak foto")
        
        elif category == 'multimedia':
            if phone.display_size >= 6.5:
                reasons.append(f"Layar {phone.display_size}\" lebar untuk nonton")
            if phone.battery >= 5000:
                reasons.append(f"Baterai {phone.battery}mAh tahan untuk streaming")
            if phone.storage >= 256:
                reasons.append("Storage besar untuk download film/musik")
        
        elif category == 'budget':
            if phone.price <= 3000000:
                reasons.append("Harga terjangkau di bawah 3 juta")
            elif phone.price <= 5000000:
                reasons.append("Harga value for money di bawah 5 juta")
            if phone.ram >= 8 and phone.price <= 4000000:
                reasons.append(f"RAM {phone.ram}GB dengan harga miring")
            if phone.battery >= 5000:
                reasons.append("Baterai besar dengan harga ekonomis")
        
        return reasons[:3]
    
    def recommend_by_category(
        self,
        phones: List[Phone],
        categories: List[str],
        min_price: Optional[int] = None,
        max_price: Optional[int] = None,
        brand: Optional[str] = None,
        limit: int = 10
    ) -> List[Dict]:
        if not phones:
            return []
        
        recommendations = []
        
        for phone in phones:
            category_scores = []
            all_reasons = []
            
            for category in categories:
                cat_score = self.calculate_category_score(phone, category)
                category_scores.append(cat_score)
                
                cat_reasons = self.get_category_match_reasons(phone, category)
                all_reasons.extend(cat_reasons)
            
            avg_score = sum(category_scores) / len(category_scores) if category_scores else 0
            
            brand_boost = 1.1 if (brand and phone.brand.lower() == brand.lower()) else 1.0
            final_score = avg_score * brand_boost
            
            unique_reasons = []
            seen = set()
            for reason in all_reasons:
                if reason not in seen:
                    unique_reasons.append(reason)
                    seen.add(reason)
            
            recommendations.append({
                'phone': phone.model_dump(),
                'score': round(final_score * 100, 2),
                'categories': categories,
                'match_reasons': unique_reasons[:4]
            })
        
        recommendations.sort(key=lambda x: x['score'], reverse=True)
        
        return recommendations[:limit]


recommender = ContentBasedRecommender()
category_recommender = CategoryBasedRecommender()
