import os
from PIL import Image
import sys

# Try to install Pillow if not available
try:
    from PIL import Image
except ImportError:
    import subprocess
    print("Installing Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

dirs = [
    "/home/levy/Documentos/nuevas webs/Pagina/extern-arch/imagenes menu/menumenu",
    "/home/levy/Documentos/nuevas webs/Pagina/extern-arch/MENUv2"
]

MAX_WIDTH = 800

total_saved = 0
processed = 0

for d in dirs:
    if not os.path.exists(d):
        print(f"Directory not found: {d}")
        continue
        
    print(f"Scanning {d}...")
    for file in os.listdir(d):
        if file.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(d, file)
            # Create webp path
            name, _ = os.path.splitext(file)
            webp_path = os.path.join(d, name + '.webp')
            
            # Skip if webp already exists
            if os.path.exists(webp_path):
                print(f"Skipping {file}, {name}.webp already exists.")
                continue
                
            original_size = os.path.getsize(filepath)
            
            try:
                with Image.open(filepath) as img:
                    # Convert to RGB to avoid issues with saving as WebP
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Resize if too large
                    width, height = img.size
                    if width > MAX_WIDTH:
                        new_height = int((MAX_WIDTH / width) * height)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        
                    img.save(webp_path, 'WEBP', quality=80)
                    
                new_size = os.path.getsize(webp_path)
                saved = original_size - new_size
                total_saved += saved
                processed += 1
                print(f"Processed {file} -> {name}.webp (Saved {saved / (1024*1024):.2f} MB)")
            except Exception as e:
                print(f"Error processing {file}: {e}")

print(f"\nDone! Processed {processed} images. Total space saved: {total_saved / (1024*1024):.2f} MB")
