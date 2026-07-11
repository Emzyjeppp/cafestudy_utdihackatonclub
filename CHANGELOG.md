# Changelog - CafeStudy

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.4.0] - 2026-07-11

### Added
- Migrated the application structure to a **Vite-based** frontend build configuration (`package.json`, `vite.config.js`).
- Installed `@supabase/supabase-js` library.
- Initialized Supabase connection via `src/lib/supabaseClient.js` using env bindings (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
- Configured `.env` variables for seamless secure production token lookups.
- Added `.gitignore` to prevent tracking `node_modules/` and build directories.

---

## [1.3.4] - 2026-07-04

### Fixed
- Added a root-level `index.html` with a meta redirect to `src/index.html` to ensure full compatibility with GitHub Pages custom domain routing without disrupting the clean folder layout structure.

---

## [1.3.3] - 2026-07-04

### Fixed
- Fixed **Lo-Fi Player UX** by removing the intrusive alert modal popup when the browser blocks media autoplay or experiences cross-origin redirect delays, replacing it with a silent console log.

---

## [1.3.2] - 2026-07-04

### Changed
- Updated the global Lo-Fi Ambient Audio Player source to play **"Lofi Study" by FASSounds** from Pixabay (ID 112191) to provide a more study-focused background track.

---

## [1.3.1] - 2026-07-04

### Changed
- Reorganized project directory structure by moving all website source code files (`index.html`, `menu.html`, `workspaces.html`, `location.html`, `styles.css`) into a dedicated `src/` subdirectory.
- Updated `README.md` and `BLUEPRINT.md` directory trees and instruction paths.

---

## [1.3.0] - 2026-07-04

### Added
- Integrated the authentic **Kafe Lehaleha** campus menu items (Kopi Susu Jahe, Hazelnut Latte, Nasi Telur, Ayam Geprek, Mie Dokdok, Pisang Coklat Keju, Tempe Mendoan, Tahu Walik).
- Added **Order Type Selector** in `menu.html` checkout to toggle between Dine-In (Makan di Tempat) and Take-Away (Bawa Pulang).
- Added a conditional **Table Number / Seat Input** field displayed dynamically for Dine-In orders.
- Added **Custom Cook Notes** field in checkout to input cooking preferences.

### Changed
- Standardized menu categories under Minuman Kopi & Latte, Minuman Non-Kopi, Makanan Berat, and Camilan Ringan.
- Synced prices exactly with Kafe Lehaleha's real menu board.

---

## [1.2.0] - 2026-07-04

### Added
- Integrated the global **Lo-Fi Ambient Audio Player** consistently across all page layouts with equalizer wave animations.
- Implemented **Mading Event & Workshop Board** on the Home page with interactive registration states.
- Developed inline **Drink Customization** (Sugar, Ice, Oat Milk upcharges) on the Menu page, linked dynamically with the cart.
- Integrated **Group Study Room Booking** on the Workspaces page.
- Created **CODE_OF_CONDUCT.md** containing the community standards and code of ethics for UTDI Hackathon Club.
- Added **LICENSE** (MIT License) to establish open-source guidelines.
- Added **CONTRIBUTING.md** detailing code standards and git branching workflows for club members.
- Added **SECURITY.md** explaining the club's vulnerability reporting pipeline.
- Configured GitHub **Issue Templates** (`bug_report.md` & `feature_request.md`) and a **Pull Request Template** (`pull_request_template.md`).

### Changed
- Re-adjusted all product pricing to Indonesian Rupiah (Rp) matching local student cafe budgets.
- Decreased refreshment and pastry prices.
- Added *Indomie Chili Geprek* and *French Fries & Dip* to the menu list.

---

## [1.0.0] - 2026-07-04

### Added
- Created initial directory structure in the scratch folder `C:\Users\jefry\.gemini\antigravity\scratch\cafestudy`.
- Implemented `index.html`, `menu.html`, `workspaces.html`, `location.html`, and `styles.css`.
- Generated `BLUEPRINT.md` explaining layout modules.
