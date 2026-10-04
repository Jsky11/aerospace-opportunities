import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add variables to :root
root_end = css.find('}')
root_vars = """  --bg-header: rgba(255, 255, 255, 0.85);
  --bg-footer: rgba(248, 250, 252, 0.9);
  --surface: rgba(255, 255, 255, 0.5);
  --surface-hover: rgba(255, 255, 255, 0.8);
  --surface-solid: rgba(255, 255, 255, 1);
  --btn-ghost-bg: rgba(0, 0, 0, 0.04);
  --btn-ghost-hover: rgba(0, 0, 0, 0.08);
  --pill-bg: rgba(0, 0, 0, 0.03);
"""
css = css[:root_end] + root_vars + css[root_end:]

# Replace hardcoded values
replacements = {
    'background: rgba(255, 255, 255, 0.85);': 'background: var(--bg-header);',
    'background: rgba(0, 0, 0, 0.03);': 'background: var(--pill-bg);',
    'background: rgba(0, 0, 0, 0.04);': 'background: var(--btn-ghost-bg);',
    'background: rgba(0, 0, 0, 0.08);': 'background: var(--btn-ghost-hover);',
    'background: rgba(255, 255, 255, 0.5);': 'background: var(--surface);',
    'background: rgba(255, 255, 255, 0.8);': 'background: var(--surface-hover);',
    'background: rgba(255, 255, 255, 1);': 'background: var(--surface-solid);',
    'background: rgba(255, 255, 255, 0.4);': 'background: var(--surface);',
    'background: rgba(248, 250, 252, 0.9);': 'background: var(--bg-footer);'
}

for old, new in replacements.items():
    css = css.replace(old, new)

# Add dark theme block
dark_theme = """
[data-theme="dark"] {
  --bg: #0f172a;
  --bg-gradient: radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.15), transparent 50%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 50%);
  --bg-card: rgba(30, 41, 59, 0.7);
  --bg-card-hover: rgba(30, 41, 59, 0.95);
  --border: rgba(255, 255, 255, 0.1);
  --border-light: rgba(255, 255, 255, 0.2);
  --text: #f8fafc;
  --muted: #94a3b8;
  --accent: #a78bfa;
  --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  --accent-soft: rgba(167, 139, 250, 0.15);
  
  --urgent: #ef4444;
  --urgent-bg: rgba(239, 68, 68, 0.15);
  --open: #22c55e;
  --open-bg: rgba(34, 197, 94, 0.15);
  --forecast: #fbbf24;
  --forecast-bg: rgba(251, 191, 36, 0.15);
  --excluded: #94a3b8;
  --excluded-bg: rgba(148, 163, 184, 0.15);

  --bg-header: rgba(15, 23, 42, 0.85);
  --bg-footer: rgba(15, 23, 42, 0.9);
  --surface: rgba(30, 41, 59, 0.5);
  --surface-hover: rgba(30, 41, 59, 0.8);
  --surface-solid: rgba(30, 41, 59, 1);
  --btn-ghost-bg: rgba(255, 255, 255, 0.05);
  --btn-ghost-hover: rgba(255, 255, 255, 0.1);
  --pill-bg: rgba(255, 255, 255, 0.05);
}
"""

css += dark_theme

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
