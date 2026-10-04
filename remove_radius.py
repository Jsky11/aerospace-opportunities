import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace border-radius declarations with 0
css = re.sub(r'border-radius:\s*[^\n;]+;', 'border-radius: 0;', css)

# Specifically target the CSS variable if it's there
css = re.sub(r'--radius:\s*[^\n;]+;', '--radius: 0;', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
