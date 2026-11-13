# Securing Drinking Water for All — UN Water Conference 2026

Event page for **"Securing Drinking Water for All"**, a virtual side event at the 2026 UN Water Conference, organised by the Watershed Organisation Trust (WOTR) and the WOTR Centre for Resilience Studies (W-CReS).

The session looks at sustainable, climate-resilient rural drinking water services under India's Jal Jeevan Mission. The page includes:

- an overview of the event and its purpose
- the moderator, the speakers and their session topics
- the *Jal-Suraksha* publication (brochure PDF)
- a registration form
- contact details

## Tech stack

- A static HTML page ([index.html](index.html)) with no build step. Styles and scripts live in [assets/css/](assets/css/) and [assets/js/](assets/js/).
- [Tailwind CSS](https://tailwindcss.com/) loaded from its CDN (`cdn.tailwindcss.com/3.4.16`), with the WOTR brand colours set in [assets/js/tailwind-config.js](assets/js/tailwind-config.js).
- The [Lexend](https://fonts.google.com/specimen/Lexend) font and Material Symbols icons from Google Fonts.
- A small amount of vanilla JavaScript that:
  - builds the speaker cards
  - highlights the current section in the top and bottom navigation as you scroll
  - handles the registration form

## Project structure

```
.
├── index.html                  # The event page
├── assets/
│   ├── css/styles.css          # Custom styles
│   ├── js/main.js              # Speaker cards, nav highlighting, registration form
│   ├── js/tailwind-config.js   # Tailwind brand colours and type scale
│   ├── Images/                 # Logos, speaker photos, banner, publication cover
│   ├── Jal-Suraksha-Brochure.pdf
│   ├── Concept note for Virtual event_...pdf
│   └── content.txt             # Source copy for the page
```

## Editing content

- **Speakers:** edit the `speakers` array at the top of [assets/js/main.js](assets/js/main.js). Each entry has a `name`, an `img` (a file name in `assets/Images/`), a `role` and a `topic`.
- **Moderator and concluding remarks:** these are written directly in the HTML of the `#speakers` section.
- **Brand colours and type scale:** set in [assets/js/tailwind-config.js](assets/js/tailwind-config.js).
- **Navbar and footer titles:** in the `<header>` and `<footer>` elements.
