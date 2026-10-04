import re

with open('logo.svg', 'r', encoding='utf-8') as f:
    svg = f.read()

# Replace rx="120" or any rx/ry with rx="0"
svg = re.sub(r'rx="\d+"', 'rx="0"', svg)
svg = re.sub(r'ry="\d+"', 'ry="0"', svg)

with open('logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg)
