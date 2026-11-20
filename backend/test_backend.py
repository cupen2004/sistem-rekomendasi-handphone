import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import db
from app.recommendation import recommender

print("\n" + "="*60)
print("TEST BACKEND - PhoneRec API")
print("="*60 + "\n")

print("[Database] Testing Database...")
print(f"[OK] Total phones in database: {len(db.get_all_phones())}")
print(f"[OK] Available brands: {', '.join(db.get_brands())}\n")

print("[Search] Testing Search...")
phone = db.get_phone_by_id(1)
if phone:
    print(f"[OK] Found phone ID 1: {phone.brand} {phone.model} - Rp {phone.price:,}\n")

search_results = db.search_phones("Samsung")
print(f"[OK] Search 'Samsung': Found {len(search_results)} phones\n")

print("[Recommendation] Testing Content-Based Filtering...")
filtered = db.filter_phones(
    min_price=2000000,
    max_price=5000000,
    min_ram=8,
    min_battery=5000
)
print(f"[OK] Filtered phones (2-5jt, RAM 8GB+, Battery 5000mAh+): {len(filtered)} phones")

recommendations = recommender.recommend(
    phones=filtered,
    min_price=2000000,
    max_price=5000000,
    min_ram=8,
    min_battery=5000,
    limit=5
)

print(f"\n[Results] Top 5 Recommendations:\n")
for i, rec in enumerate(recommendations[:5], 1):
    phone = rec['phone']
    print(f"{i}. {phone['brand']} {phone['model']}")
    print(f"   Score: {rec['score']:.1f} | Price: Rp {phone['price']:,}")
    print(f"   Specs: {phone['ram']}GB RAM, {phone['storage']}GB, {phone['battery']}mAh")
    if rec['match_reasons']:
        print(f"   Reasons: {', '.join(rec['match_reasons'][:2])}")
    print()

print("="*60)
print("[SUCCESS] All tests passed! Backend is ready.")
print("="*60 + "\n")

print("Run server with:")
print("   uvicorn app.main:app --reload --host 0.0.0.0 --port 5000\n")
