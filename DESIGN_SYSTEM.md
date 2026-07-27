# SkillMetrics — UI Design System

> Every color, font, spacing, and component rule in this file is derived from `public/logo-3.png`.
> If something looks off, check this file first.

---

## 1. Logo Color Extraction

The logo contains two primary brand colors, verified by pixel analysis of `public/logo-3.png`:

| Color Role | Hex | RGB | Where it appears in the logo |
|---|---|---|---|
| **SkillMetrics Yellow** | `#FFDE16` | `255, 222, 22` | "METRICS" text highlight, head outline ring / glow (Dominant brand accent) |
| **Charcoal Black** | `#0D0F12` / `#2B2B2B` | `43, 43, 43` | Head silhouette, "SKILL" text, core dark authority neutral |
| **White / Neutral Gray** | `#FFFFFF` / `#5C5C5C` | `255, 255, 255` | Clean background & subtle card borders |

> [!IMPORTANT]
> The yellow `#FFDE16` is the single most dominant vibrant brand color in `logo-3.png`.
> We use `#FFDE16` as our primary action color for badges, key highlights, and primary CTAs (with high-contrast dark text `#0D0F12`).
> Charcoal Black `#0D0F12` serves as the high-authority dark theme container color.

---

## 2. CSS Theme Tokens

All tokens live in `app/globals.css`. The brand colors are defined once as custom properties and referenced everywhere else via `var()`.

### Brand Variables (defined in `:root`)

```css
--brand-yellow: oklch(0.89 0.19 96.5);    /* #FFDE16 */
--brand-dark:   oklch(0.13 0.015 260);    /* #0D0F12 */
--brand-red:    oklch(0.89 0.19 96.5);    /* Mapped to #FFDE16 for theme alignment */
```

### How they map to Shadcn's theme system

| Shadcn Token | Light Mode Value | Dark Mode Value | Purpose |
|---|---|---|---|
| `--primary` | `var(--brand-red)` | `var(--brand-red)` | All primary buttons, links, focus rings |
| `--primary-foreground` | White | White | Text on primary buttons |
| `--accent` | `var(--brand-yellow)` | `var(--brand-yellow)` | Highlight badges, score cards, star ratings |
| `--accent-foreground` | Near-black | Near-black | Text on yellow accent surfaces |
| `--background` | `oklch(0.985 …)` off-white | `oklch(0.11 …)` near-black | Page background |
| `--card` | Pure white | `oklch(0.15 …)` dark gray | Card surfaces |
| `--border` | `oklch(0.90 …)` light gray | `oklch(0.24 …)` dark gray | All borders |
| `--ring` | `var(--brand-red)` | `var(--brand-red)` | Focus ring color |

### Tailwind Utility Classes (custom, in `@layer utilities`)

| Class | What it does | Use for |
|---|---|---|
| `bg-brand-red` | Background `#ED2B1F` | Primary buttons, filled badges |
| `text-brand-red` | Text color `#ED2B1F` | Highlighted headings, links, scores |
| `border-brand-red` | Border `#ED2B1F` | Active card borders, avatar rings |
| `bg-brand-yellow` | Background `#FFDE16` | Metric cards, accent badges |
| `text-brand-yellow` | Text color `#FFDE16` | Star ratings, score numbers (dark mode) |
| `border-brand-yellow` | Border `#FFDE16` | Feature card accent borders |
| `bg-brand-dark` | Background `#2B2B2B` | Dark containers, code blocks |
| `text-brand-dark` | Text color `#2B2B2B` | High-contrast body text |
| `shadow-brand-red` | Red glow shadow | Primary CTA buttons |
| `shadow-brand-yellow` | Yellow glow shadow | Accent CTA buttons |
| `glow-red` | Red drop-shadow filter | Icon emphasis |
| `glow-yellow` | Yellow drop-shadow filter | Score emphasis |

---

## 3. Typography

Fonts loaded in `app/layout.tsx`:
- **Sans**: `Inter` (body, UI) — `--font-sans`
- **Sans Alt**: `Geist Sans` — `--font-geist-sans`
- **Mono**: `Geist Mono` — `--font-geist-mono` (code blocks, metrics)

### Scale & Platform Standards

| Role | Tailwind Classes | Text Color | When to use |
|---|---|---|---|
| **Hero Display** | `text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12]` | `text-white` / `text-foreground` | Main landing page hero headline |
| **Section Title** | `text-3xl sm:text-4xl font-extrabold tracking-tight` | `text-foreground` (or `text-white` on dark) | Section `<h2>` headings |
| **Section Subtitle** | `text-base sm:text-lg leading-relaxed` | `text-muted-foreground` (or `text-slate-300` on dark) | Subtitle paragraph under `<h2>` |
| **Card Title** | `text-lg sm:text-xl font-extrabold` | `text-foreground` | Inside `<CardTitle>` or `<h3>` |
| **Card Description / Body** | `text-xs sm:text-sm leading-relaxed` | `text-muted-foreground` | Paragraph text inside cards |
| **Caption / Metadata** | `text-xs font-bold uppercase tracking-wider` | `text-muted-foreground` / `text-brand-red` | Badge labels, metadata indicators |
| **Code** | `font-mono text-sm bg-muted px-2 py-0.5 rounded` | `text-foreground` | Inline code, technical values |

### Typography Consistency Rules
1. **Headings Hierarchy**: Every main section must use `text-3xl sm:text-4xl font-extrabold tracking-tight` for its `<h2>` title.
2. **Heading Colors**: Always use `text-foreground` (or `text-white` on dark surfaces) with optional `<span className="text-brand-red">` for key phrase emphasis.
3. **Paragraph Styling**: Section subtitle paragraphs must consistently use `text-muted-foreground text-base` (or `text-slate-300` on dark).
4. **Card Headings**: Card titles must strictly use `font-extrabold text-lg sm:text-xl text-foreground`.
5. **Card Paragraphs**: Card descriptions must consistently use `text-xs sm:text-sm text-muted-foreground leading-relaxed`.

---

## 4. Component Patterns

Every Shadcn component should follow these conventions so the UI stays consistent.

### Buttons

```tsx
// Primary — brand red, used for main actions
<Button className="bg-brand-red hover:bg-brand-red/90 text-white shadow-brand-red">
  Book a Demo
</Button>

// Secondary — outline, used for secondary actions
<Button variant="outline">
  See How It Works
</Button>

// Accent — brand yellow, used sparingly for high-visibility
<Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90 font-bold">
  Start Free Trial
</Button>
```

### Badges

```tsx
<Badge className="bg-brand-red text-white">Active</Badge>        // Status
<Badge className="bg-brand-yellow text-black font-bold">98%</Badge> // Score
<Badge variant="outline" className="border-brand-red text-brand-red">New</Badge> // Subtle
```

### Cards

```tsx
// Accent border card (use border-l-4 for visual hierarchy)
<Card className="border-l-4 border-l-brand-red">
  <CardHeader>
    <CardDescription className="text-xs uppercase font-bold tracking-wider">
      Category Label
    </CardDescription>
    <CardTitle className="text-xl font-semibold">Card Heading</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Description text.</p>
  </CardContent>
</Card>
```

### Form Inputs

```tsx
// Always use focus-visible:ring-brand-red for brand-consistent focus states
<Input className="focus-visible:ring-brand-red" placeholder="Search..." />
```

---

## 5. Spacing & Layout Rules

- **Page max-width**: `max-w-7xl` (1280px)
- **Page padding**: `px-4 sm:px-8`
- **Section spacing**: `space-y-24` between major sections
- **Card gap**: `gap-6` in grids
- **Border radius**: Uses Shadcn's `--radius: 0.625rem` scale

---

## 6. Dark Mode

Dark mode is toggled by adding `.dark` class to `<html>`. All brand colors (`--brand-red`, `--brand-yellow`) stay the same in both themes — only surface/background/border tokens change.

Key dark mode surfaces:
- Background: `oklch(0.11 0.012 260)` — very dark blue-gray
- Cards: `oklch(0.15 0.015 260)` — slightly lighter
- Borders: `oklch(0.24 0.015 260)` — subtle separation

---

## 7. File Map

```
skillmetrics/
├── DESIGN_SYSTEM.md          ← You are here
├── app/
│   ├── globals.css           ← All CSS variables & utility classes
│   ├── layout.tsx            ← Fonts, metadata, root layout
│   └── page.tsx              ← Landing page (navbar + hero + sections)
├── components/
│   └── ui/                   ← Shadcn components (button, card, badge, input, etc.)
└── public/
    └── logo-3.png            ← Source logo for all color extraction
```
