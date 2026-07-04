# Blueprint - CafeStudy

## Metadata
* **Version:** v1.3.1
* **Last Updated:** 2026-07-04
* **Status:** Complete

---

## 1. System Architecture
A responsive multi-page web platform built using clean semantic markup, custom property CSS variables, and modern client-side scripting. All website source files are organized inside the `src/` directory.

```
[Browser]
   │
   ├──> src/index.html (Homepage with bento highlights, transitions, and wifi speed tracking)
   ├──> src/menu.html (Student combos & Rupiah items with order basket simulation)
   ├──> src/workspaces.html (Interactive seat selector & live seat counter sync)
   ├──> src/location.html (Address details, maps integration, & contact forms)
   │
   └──> src/styles.css (Shared CSS tokens, glassmorphic effects, status indicators, & animations)
```

---

## 2. Technical Stack
* **Markup:** HTML5
* **CSS Engine:** Tailwind CSS CDN (v3) + Custom CSS-First Properties (embedded in src/styles.css)
* **Fonts & Icons:** Google Fonts (Plus Jakarta Sans), Material Symbols Outlined
* **SEO Specs:** Embedded metadata, OpenGraph cards, schema.org CafeOrCoffeeShop payload

---

## 3. UI/UX Features
* **Bento Grid Layouts:** Responsive cards utilizing smooth spring transforms (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).
* **Workspace Selector:** Custom filtering system for seat zones with live button updates and disabled state mapping.
* **Refill & Booking Forms:** Submission lockouts displaying CSS loading spinners while preventing double submissions.
* **Live Space Tracker:** Real-time space trackers mapping Wi-Fi transmission rates and active occupancy states across workspaces.
* **Student Combo Systems:** Discount bundle modifiers computing price offsets automatically inside order structures.
