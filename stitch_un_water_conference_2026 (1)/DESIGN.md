---
name: Global Waters SDG 6 Protocol
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#3e4850'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#6e7881'
  outline-variant: '#bec8d1'
  surface-tint: '#00658e'
  primary: '#00658e'
  on-primary: '#ffffff'
  primary-container: '#009edb'
  on-primary-container: '#003046'
  inverse-primary: '#83cfff'
  secondary: '#006399'
  on-secondary: '#ffffff'
  secondary-container: '#67bafd'
  on-secondary-container: '#004972'
  tertiary: '#3a608d'
  on-tertiary: '#ffffff'
  tertiary-container: '#7196c6'
  on-tertiary-container: '#002e54'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7e7ff'
  primary-fixed-dim: '#83cfff'
  on-primary-fixed: '#001e2e'
  on-primary-fixed-variant: '#004c6c'
  secondary-fixed: '#cde5ff'
  secondary-fixed-dim: '#94ccff'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#004b74'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a4c9fc'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#204874'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
  label-default:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the institutional authority, neutrality, and multilateral gravity of the United Nations, specialized through the lens of Sustainable Development Goal 6 (Clean Water and Sanitation). It speaks to international delegates, field engineers, policy analysts, researchers, and civil society partners who require absolute clarity, data legibility, and rapid comprehension under critical conditions.

### Design Movement & Core Philosophy
The visual direction draws from **Institutional Modernism** and **Democratic Functionalism**:
- **Uncompromised Clarity:** High signal-to-noise ratio where content and statistical truth take immediate priority over decorative embellishment.
- **Dignified Restraint:** Balanced proportions, generous margins, and an architectural visual order that conveys stability, legitimacy, and global stewardship.
- **Hydrological Focus:** Accents and tonal systems derive from the spectrum of water—from crisp glacial cyan and oceanic cobalt to administrative slate navy.
- **Radical Accessibility:** High-contrast text hierarchies, rigorous AA/AAA WCAG compliance, clear visual indicators, and dependable, unambiguous affordances.

## Colors

The color palette is rooted in the official United Nations blue spectrum, extended across a multi-tier tonal system optimized for high data clarity, clear governmental hierarchies, and crisp white canvases.

### Palette Architecture
- **Primary (`#009edb` - UN SDG 6 Cerulean):** The defining voice of the system. Used for core brand marks, key interactive CTAs, verified status badges, and primary interactive links.
- **Secondary (`#0077b6` - Ocean Depths):** Provides anchored visual stability. Utilized for interactive hover states, secondary action buttons, tab indicators, and structured metric highlights.
- **Tertiary (`#0d3b66` - Diplomatic Navy):** The structural anchor. Used for primary text headings, formal top navigational chrome, high-level administrative bars, and strong structural boundaries.
- **Neutral (`#4a5568` - Slate Charcoal):** Governs body prose, supporting technical labels, metadata tags, and subdued operational borders.

### Surface System
- **Canvas Base:** `#ffffff` provides pure, uninterrupted light spaces.
- **Subtle Surface Container:** `#f4f7f9` creates distinct resting backgrounds for sidebars, table headers, and form groupings without introducing heavy borders.
- **Muted Border Line:** `#dbe3eb` maintains crisp, low-contrast separation between data columns and card perimeters.

## Typography

The typographic hierarchy uses **Inter** across all roles to ensure universal international script support, optical precision at micro-scales, and effortless clarity in heavy data reports.

### Typographic Hierarchy Guidelines
- **Diplomatic Titlecase vs. Uppercase:** Section identifiers and micro-metadata badges utilize `label-caps` styled with `letter-spacing: 0.06em; text-transform: uppercase;` to evoke the tone of international multilateral documentation.
- **Line Heights:** Body levels prioritize reading endurance with deliberate leading (`22px` on `15px` base), allowing long-form resolution briefs and treaty documentation to be consumed without visual strain.
- **Numbers & Metrics:** Tabular figures (`font-variant-numeric: tabular-nums`) must be activated across all statistical dashboards, indicator tracking tables, and data cards to ensure clean vertical alignment.

## Layout & Spacing

The design system is structured on an **8-point mathematical grid** embedded within a responsive 12-column framework.

### Layout Philosophy
- **Standard Desktop (1200px+):** 12 columns with `1.5rem` gutters and a max-container width of `1280px` centered on the viewport. Sections are spaced using `space-xl` (`2.5rem`) vertical rhythms.
- **Tablet (768px – 1199px):** 8 columns with `1.5rem` gutters and `1.5rem` outer canvas padding. Grids reflow data metrics from 4 columns to 2.
- **Mobile (Below 768px):** 4 columns with `1rem` gutters and `1rem` margin. All compound data tables wrap or collapse into linear vertical card modules.

### Vertical Rhythm
Generous separation between conceptual sectors prevents cognitive fatigue. Form inputs and tabular controls maintain compact internal vertical paddings (`space-sm` to `space-md`), balancing high administrative density with spacious, authoritative page sections.

## Elevation & Depth

To preserve the institutional credibility and high accessibility standards of intergovernmental bodies, elevation is rendered primarily through **tonal separation** and **delicate, razor-sharp perimeter lines** rather than dramatic drop shadows.

### Depth Mechanics
- **Ground Floor (Base Canvas):** Pure white (`#ffffff`). Houses running prose, report text, and primary layout columns.
- **Structural Elevation 1 (Card & Content Blocks):** Pure white surface framed with a 1px solid border in `#e2e8f0` coupled with an ultra-diffused, ambient shadow: `0 1px 3px rgba(13, 59, 102, 0.05), 0 1px 2px rgba(13, 59, 102, 0.03)`. The blue-tinted shadow ensures visual harmony with the tertiary navy tone.
- **Structural Elevation 2 (Dropdowns, Flyouts & Modals):** Resting on `#ffffff`, bordered by `#cbd5e1`, supported by a structured drop shadow: `0 10px 15px -3px rgba(13, 59, 102, 0.08), 0 4px 6px -2px rgba(13, 59, 102, 0.04)`.
- **Administrative Layering:** Dark diplomatic navy (`#0d3b66`) is applied flat without elevation for global header navigation and table header blocks, creating an immovable visual foundation.

## Shapes

The design system uses a **Soft (0.25rem / 4px)** shape language, projecting architectural discipline, high credibility, and civic utility.

### Geometric Rules
- **Form Controls & Inputs:** Uniformly set to `0.25rem` (4px). Rounded enough to soften sharp corners without appearing casual.
- **Cards, Panels & Data Containers:** Standardized at `0.25rem` to preserve tight grid alignment when cards sit flush in complex multi-column dashboards.
- **Tags & Status Badges:** Maintain a small 2px to 4px radius. Avoid pill shapes (`9999px`) in official data tables, as rectangular geometry with subtle softening better conveys precise, governmental authority.

## Components

### Buttons
- **Primary Action:** Solid background of UN Blue (`#009edb`) with white typography (`#ffffff`), `0.25rem` border radius, and medium weight text (`font-weight: 600`). On hover, transitions to Ocean Depths (`#0077b6`).
- **Secondary Action:** Transparent background with a 1.5px solid border in `#0077b6` and text in `#0077b6`. Hover states apply a 5% tint background (`#f0f7fb`).
- **Tertiary / Destructive:** Muted slate styles with strict text labels; destructive actions use clear crimson warning boundaries without whimsical flourishes.

### Input Fields & Select Menus
- **Base State:** Background `#ffffff`, border 1px solid `#cbd5e1`, 8px vertical and 12px horizontal padding. Typography set to `body-md` in `#0d3b66`.
- **Focus State:** 2px solid active border in `#009edb` with a zero-offset outline glow: `box-shadow: 0 0 0 3px rgba(0, 158, 219, 0.2)`. Meets WCAG 2.1 focus appearance requirements.
- **Labels:** Positioned above the field in `Inter 600 (13px)` using `#0d3b66`, with optional indicator tags clearly delineated.

### Cards & Grid Containers
- **Content Cards:** Constructed with a white background, 1px border `#e2e8f0`, and `1.5rem` inner padding (`space-lg`).
- **Indicator Cards (SDG 6 Data Points):** Feature a crisp 4px primary-blue vertical left accent bar (`#009edb`), a large headline metric (e.g., "74%"), and a muted uppercase category label above.

### Checkboxes & Radio Buttons
- **Base Geometry:** Checkboxes use a 3px radius; radio buttons are circular. Bordered with 1.5px `#94a3b8` on pure white.
- **Checked State:** Solid fill of `#009edb` with a crisp white checkmark icon or inner dot, providing unambiguous visual confirmation.

### Data Chips & Protocol Badges
- **Status Tags:** Compact vertical height (22px), `Inter 700` at `11px`, all caps with `0.05em` letter spacing.
- **Water Quality / SDG Status Badges:** Use light pastel backgrounds with high-contrast text pairings (e.g., Safe: `#e0f2fe` background with `#0369a1` text; Attention: `#fef3c7` background with `#92400e` text).

### Formal Navigation & Header Bars
- **Multilateral Top Banner:** Dark diplomatic navy (`#0d3b66`) containing the UN emblem lockup, language switcher, and global initiative directory. Text links appear in crisp white with 80% default opacity.