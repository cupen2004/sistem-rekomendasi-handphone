import json
import os
from typing import List, Optional
from app.models import Phone


class Database:
    def __init__(self):
        self.data_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'phones.json')
        self.phones: List[Phone] = []
        self.load_data()
    
    def load_data(self):
        try:
            with open(self.data_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                self.phones = [Phone(**phone) for phone in data]
            print(f"[OK] Loaded {len(self.phones)} phones from database")
        except Exception as e:
            print(f"[ERROR] Error loading data: {e}")
            self.phones = []
    
    def get_all_phones(self) -> List[Phone]:
        return self.phones
    
    def get_phone_by_id(self, phone_id: int) -> Optional[Phone]:
        for phone in self.phones:
            if phone.id == phone_id:
                return phone
        return None
    
    def search_phones(self, query: str) -> List[Phone]:
        query = query.lower()
        results = []
        for phone in self.phones:
            search_text = f"{phone.brand} {phone.model} {phone.chipset}".lower()
            if query in search_text:
                results.append(phone)
        return results
    
    def filter_phones(
        self,
        min_price: Optional[int] = None,
        max_price: Optional[int] = None,
        brand: Optional[str] = None,
        min_ram: Optional[int] = None,
        min_storage: Optional[int] = None,
        min_battery: Optional[int] = None,
        min_camera: Optional[int] = None,
        os: Optional[str] = None,
        display_type: Optional[str] = None
    ) -> List[Phone]:
        filtered = self.phones
        
        if min_price is not None:
            filtered = [p for p in filtered if p.price >= min_price]
        
        if max_price is not None:
            filtered = [p for p in filtered if p.price <= max_price]
        
        if brand:
            filtered = [p for p in filtered if p.brand.lower() == brand.lower()]
        
        if min_ram is not None:
            filtered = [p for p in filtered if p.ram >= min_ram]
        
        if min_storage is not None:
            filtered = [p for p in filtered if p.storage >= min_storage]
        
        if min_battery is not None:
            filtered = [p for p in filtered if p.battery >= min_battery]
        
        if min_camera is not None:
            filtered = [p for p in filtered if p.camera_main >= min_camera]
        
        if os:
            filtered = [p for p in filtered if os.lower() in p.os.lower()]
        
        if display_type:
            filtered = [p for p in filtered if display_type.lower() in p.display_type.lower()]
        
        return filtered
    
    def get_brands(self) -> List[str]:
        brands = set(phone.brand for phone in self.phones)
        return sorted(list(brands))


db = Database()
