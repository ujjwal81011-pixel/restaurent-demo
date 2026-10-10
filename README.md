# [RESTAURANT NAME] — Modern Fine Dining & Lounge

An ultra-modern, luxury restaurant website built with clean semantic HTML5, modern vanilla CSS, and modular interactive JavaScript. Engineered to deliver a high-end Michelin-style visual experience with complete mobile optimization.

---

## ✨ Features & Highlights

1. **Ultra-Modern Luxury Aesthetics:**
   - Obsidian dark theme with warm gold/champagne gradients (`#D4AF37`, `#F4E4B5`) and ambient glows.
   - Editorial typography combining classic fine-dining serif fonts (*Cinzel*, *Playfair Display*) and modern UI sans-serif (*Plus Jakarta Sans*).
   - Glassmorphism effects with backdrop blur and delicate gold hairline borders.

2. **Clean & Structured Placeholders:**
   - All branding, names, addresses, and contacts are clearly marked as placeholders:
     - `[RESTAURANT NAME]`
     - `Chef [CHEF NAME]`
     - `[124 LUXURY SKYLINE AVENUE, 42ND FLOOR]`
     - `[+1 (555) 890-4321]`
     - `[CITY NAME]`
   - **⚡ Built-in Live Customizer Widget:** A discreet button in the bottom-left corner allows you or your client to type any real restaurant name, chef name, or city to see it update across the entire website in real-time.

3. **100% Mobile-Friendly & Responsive:**
   - **Floating Mobile Quick Actions Bar:** Sticky thumb-friendly actions at the bottom for instant Calling, Viewing Menu, and Reserving Tables.
   - **Off-Canvas Slide Menu:** Smooth mobile drawer with numbered navigational sections.
   - **Horizontal Scrollable Filter Pills:** Category pills that smoothly swipe without cluttering the screen.
   - Fluid typography and responsive CSS grid that seamlessly adapts across mobile, tablet, and ultra-wide screens.

4. **Interactive Features:**
   - **Table Reservation Flow:** Interactive date selection, party size counter (- / +), seating preferences (Skyline Room, Chef's Counter, Booth), time chips, form validation, and instant confirmation pass (`#RES-XXXXX`).
   - **Epicurean Menu & Live Search:** Real-time search, category switching (Starters, Mains, Wagyu, Desserts, Mixology), and dietary filters (★ Chef Signature, 🌱 Vegetarian, 🌾 Gluten-Free).
   - **Tasting Wishlist Planner:** Guests can curate courses for their evening, calculate estimated totals, and link them directly to their reservation.
   - **Dish Quick View Modal:** View ingredient provenance, sommelier wine pairing notes, and allergens.
   - **Visual Atmosphere Lightbox:** Interactive gallery with zoom modal.
   - **Guest Reviews Carousel:** Auto-playing testimonials with dot navigation.
   - **Accordion FAQs & VIP Club Newsletter:** Interactive accordions and newsletter subscriptions with toast notifications.

---

## 📁 File Structure

```text
Restaurant demo/
│
├── index.html         # Semantic HTML5 markup, SEO meta tags, and accessibility
├── styles.css         # Modern CSS design system, responsive media queries, glassmorphism
├── app.js             # Menu dataset, interactive filtering, reservations, and customizer
├── vercel.json        # One-click static deployment configuration
├── README.md          # Documentation and setup instructions
└── images/            # High-resolution fine-dining photography
    ├── hero.jpg       # Panoramic evening skyline dining room
    ├── wagyu.jpg      # A5 Miyazaki Wagyu plating with gold leaf
    ├── cocktail.jpg   # Artisanal smoked crystal cocktail
    ├── dessert.jpg    # Valrhona chocolate noir entremet
    └── chef.jpg       # Executive chef in open kitchen pass
```

---

## 🚀 How to Run Locally

You can run this project in any browser without needing to install complex dependencies:

### Option 1: Direct File Open
Simply double-click [`index.html`](file:///e:/Restaurant%20demo/index.html) in your file explorer to open it in your default web browser.

### Option 2: Local Web Server (Recommended)
From PowerShell or terminal in the project directory:
```bash
python -m http.server 8080
```
Then visit:
```text
http://localhost:8080
```
