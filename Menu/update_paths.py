import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We want to replace .png, .jpg, .jpeg with .webp ONLY if they are inside
    # "menumenu" or "MENUv2" directories.
    
    # Regex explanation:
    # Match ".../menumenu/something.png" or ".../MENUv2/something.jpg"
    # Capture group 1: the path up to and including the directory and the filename without extension
    # Capture group 2: the extension
    
    pattern = re.compile(r'((?:menumenu|MENUv2)/[^/\"\']+?)\.(png|jpg|jpeg)', re.IGNORECASE)
    
    new_content = pattern.sub(r'\1.webp', content)
    
    with open(filepath, 'w') as f:
        f.write(new_content)
        
    print(f"Updated {filepath}")

update_file('/home/levy/Documentos/nuevas webs/Pagina/Menu/index3.html')
update_file('/home/levy/Documentos/nuevas webs/Pagina/Menu/style3.css')
