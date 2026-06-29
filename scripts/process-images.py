#!/usr/bin/env python3
"""Process images: resize, compress, convert to WebP, copy to public/images."""

import glob
import os
import json
from PIL import Image

SRC_IMAGES = "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Work/Projects/KA Vegetable and Fruits/Website/Images"
SRC_BRANDING = "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Work/Projects/KA Vegetable and Fruits/Website/Branding/logo"
DST = "ka-vegetables/public/images"

os.makedirs(DST, exist_ok=True)

# ── Logo variants ──
logo_files = [
    ("KA-logo-transparent.png", "logo.png"),
    ("KA-logo-mono-green.png", "logo-mono-green.png"),
    ("KA-logo-mono-black.png", "logo-mono-black.png"),
]

for src_name, dst_name in logo_files:
    src = os.path.join(SRC_BRANDING, src_name)
    if not os.path.exists(src):
        print(f"  SKIP logo: {src_name} not found")
        continue
    img = Image.open(src)
    for size, suffix in [(512, ""), (128, "-sm")]:
        resized = img.resize((size, size), Image.LANCZOS)
        out = os.path.join(DST, f"logo{suffix}.png")
        resized.save(out, "PNG", optimize=True)
        print(f"  logo{suffix}.png -> {size}x{size}")

# ── Photo images ──
photo_map = {
    "Colorful_bell_peppers_with_tomatoes": ("fresh-produce-display", "Fresh produce display with colorful bell peppers, tomatoes, carrots, cucumbers, and leafy greens at KA Fresh shop in Abu Dhabi"),
    "Fresh_green_vegetables_in_crates": ("green-vegetables-crates", "Fresh green vegetables arranged in wooden crates at KA Fresh produce market in Abu Dhabi"),
    "Fresh_leafy_greens_arranged_natu": ("leafy-greens-display", "Fresh leafy greens and herbs beautifully arranged at KA Fresh fruits and vegetables shop"),
    "Fresh_produce_delivery_box_fruit": ("produce-delivery-box", "Fresh produce delivery box filled with fruits and vegetables for home delivery in MBZ City"),
    "Fresh_produce_market_with_fruits": ("produce-market-display", "Fresh produce market display with fruits and vegetables at KA Fresh in Abu Dhabi"),
    "Fresh_salad_vegetables_arranged": ("salad-vegetables", "Fresh salad vegetables including tomatoes, cucumbers, and greens arranged at KA Fresh"),
    "Fresh_vegetables_and_fruits_arra": ("vegetables-fruits-arrangement", "Colorful arrangement of fresh vegetables and fruits at KA Fresh shop"),
    "Fresh_vegetables_covered_water_d": ("fresh-vegetables-water", "Fresh vegetables with water droplets showing freshness at KA Fresh produce store"),
    "Fresh_vegetables_in_natural_arra": ("natural-vegetable-arrangement", "Fresh vegetables in natural arrangement at KA Fresh fruits and vegetables trading"),
    "Fresh_vegetables_on_wooden_table": ("vegetables-wooden-table", "Fresh vegetables on wooden table including carrots, tomatoes, cucumbers, and greens from KA Fresh"),
    "Hands_selecting_fresh_vegetables": ("selecting-vegetables", "Hands selecting fresh vegetables at KA Fresh produce shop in MBZ City, Abu Dhabi"),
    "Seasonal_fresh_produce_arrangeme": ("seasonal-produce", "Seasonal fresh produce arrangement featuring the best fruits and vegetables at KA Fresh"),
    "Tomatoes_on_vine_with_basil": ("tomatoes-basil", "Fresh tomatoes on the vine with basil herbs at KA Fresh fruits and vegetables"),
    "Vegetable_counter_inside_shop": ("vegetable-counter", "Vegetable counter inside KA Fresh shop with organized produce display in Abu Dhabi"),
    "Vegetables_arranged_in_produce_d": ("produce-display", "Vegetables arranged in produce display at KA Fresh shop with labeled sections"),
    "Wooden_basket_overflowing_with_v": ("basket-vegetables", "Wooden basket overflowing with fresh vegetables at KA Fresh fruits and vegetables trading"),
}

jpeg_files = glob.glob(os.path.join(SRC_IMAGES, "*.jpeg"))
print(f"\nFound {len(jpeg_files)} JPEG images")

processed = {}
for src_path in sorted(jpeg_files):
    basename = os.path.basename(src_path)
    matched = False
    for prefix, (out_name, alt) in photo_map.items():
        if basename.startswith(prefix):
            if " (1)" in basename:
                out_name = out_name + "-2"
                alt = alt + " (alternate view)"

            if out_name in processed:
                print(f"  SKIP duplicate: {basename} -> {out_name} already done")
                continue

            img = Image.open(src_path)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            max_width = 1400
            w, h = img.size
            if w > max_width:
                ratio = max_width / w
                new_size = (max_width, int(h * ratio))
                img = img.resize(new_size, Image.LANCZOS)

            out_path = os.path.join(DST, f"{out_name}.webp")
            img.save(out_path, "WEBP", quality=85, method=6)

            thumb = img.copy()
            thumb_w = 600
            if thumb.size[0] > thumb_w:
                ratio = thumb_w / thumb.size[0]
                thumb = thumb.resize((thumb_w, int(thumb.size[1] * ratio)), Image.LANCZOS)
            thumb_path = os.path.join(DST, f"{out_name}-sm.webp")
            thumb.save(thumb_path, "WEBP", quality=80, method=6)

            processed[out_name] = {
                "src": basename,
                "alt": alt,
                "full": f"{out_name}.webp",
                "thumb": f"{out_name}-sm.webp",
            }
            print(f"  {out_name}.webp ({img.size[0]}x{img.size[1]}) <- {basename}")
            matched = True
            break

    if not matched:
        print(f"  UNMATCHED: {basename}")

meta_path = os.path.join(DST, "images-meta.json")
with open(meta_path, "w") as f:
    json.dump(processed, f, indent=2)
print(f"\nMetadata written to {meta_path}")

print(f"\n{'='*50}")
print(f"Processed {len(processed)} photos + logo sizes")
print(f"Output directory: {DST}")
print(f"{'='*50}")
