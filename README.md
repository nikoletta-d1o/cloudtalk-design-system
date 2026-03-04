# @nikoletta-d1o/design-system

CloudTalk design system: UI primitives and design tokens.

[![CI](https://github.com/nikoletta-d1o/cloudtalk-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/nikoletta-d1o/cloudtalk-design-system/actions/workflows/ci.yml)
[![Storybook](https://img.shields.io/badge/storybook-deployed-ff4785)](https://nikoletta-d1o.github.io/cloudtalk-design-system)

## Installation

```bash
npm install @nikoletta-d1o/design-system
```

> Requires a `.npmrc` with `@nikoletta-d1o:registry=https://npm.pkg.github.com` and a GitHub token configured.

### Peer dependencies

- `react` ^18 || ^19
- `react-dom` ^18 || ^19
- `tailwindcss` ^4

## Setup

### 1. Import the theme in your `globals.css`

```css
@import "tailwindcss";
@import "@nikoletta-d1o/design-system/theme.css";
@source "../node_modules/@nikoletta-d1o/design-system/dist";
```

### 2. Load fonts

The theme declares `Roboto` and `Roboto Mono` but does **not** load them. Use `next/font/google` or a `<link>` tag:

```tsx
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });
```

## Usage

### Components

```tsx
import { Button, Badge, Card, SidePanel, ScoreBadge, SentimentIcon, CallTypeIcon, TabBar } from "@nikoletta-d1o/design-system";

// Button variants: primary, outline, ghost, icon
<Button variant="primary" size="md">Save</Button>
<Button variant="outline" size="sm">Cancel</Button>

// Badge variants: default, success, warning, error, neutral, primary, blue
<Badge variant="success" size="sm">Active</Badge>
<Badge variant="error" onRemove={() => {}}>Remove me</Badge>

// Card with padding control
<Card padding="default">Content with padding</Card>
<Card padding="flush">Full-bleed content</Card>

// Score badge (green >= 70, yellow >= 50, red < 50)
<ScoreBadge score={85} variant="badge" />
<ScoreBadge score={42} variant="text" />

// Sentiment icon
<SentimentIcon sentiment="positive" size="sm" />

// Call type icon
<CallTypeIcon direction="inbound" outcome="answered" size="md" />

// Tab bar (generic)
<TabBar tabs={["Overview", "Details"]} activeTab="Overview" onTabChange={setTab} />
```

### Utility

```tsx
import { cn } from "@nikoletta-d1o/design-system";

<div className={cn("p-4", isActive && "bg-primary-50")} />
```

### Token constants

```tsx
import { colors, shadows, radii } from "@nikoletta-d1o/design-system";

// Use in charts, inline styles, etc.
const chartColor = colors.primary[600]; // "#334fff"
```

### CSS tokens (non-Tailwind)

```css
@import "@nikoletta-d1o/design-system/tokens.css";
```

## Components

| Component | Description |
|-----------|-------------|
| `Card` | Card wrapper with border, shadow, and padding variants |
| `Badge` | Colored badge with 7 variants, 3 sizes, optional remove button |
| `Button` | Button with 4 variants (primary, outline, ghost, icon) and forwardRef |
| `TabBar` | Generic underline tab navigation with TypeScript generics |
| `SidePanel` | Animated slide-in panel with overlay, Escape key, and footer slot |
| `ScoreBadge` | Color-coded score display (green/yellow/red) |
| `SentimentIcon` | Sentiment-to-icon mapping (Smile/Frown/Meh) |
| `CallTypeIcon` | Call direction/outcome icon with colored backgrounds |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.
