# Securing Drinking Water for All — UN Water Conference 2026

Event page for **"Securing Drinking Water for All"**, a virtual side event at the 2026 UN Water Conference, organised by the Watershed Organisation Trust (WOTR) and the WOTR Centre for Resilience Studies (W-CReS).

The session looks at sustainable, climate-resilient rural drinking water services under India's Jal Jeevan Mission. The page includes:

- an overview of the event and its purpose
- the moderator, the speakers and their session topics
- the *Jal-Suraksha* publication (brochure PDF)
- a registration form
- contact details

## Tech stack

- A single static HTML page ([index.html](index.html)) with no build step.
- [Tailwind CSS](https://tailwindcss.com/) loaded from its CDN (`cdn.tailwindcss.com/3.4.16`), with the WOTR brand colours set in the inline `tailwind.config`.
- The [Lexend](https://fonts.google.com/specimen/Lexend) font and Material Symbols icons from Google Fonts.
- A small amount of vanilla JavaScript that:
  - builds the speaker cards
  - highlights the current section in the top and bottom navigation as you scroll
  - handles the registration form

## Project structure

```
.
├── index.html                  # The event page
├── Assests/
│   ├── Images/                 # Logos, speaker photos, banner, publication cover
│   ├── Jal-Suraksha-Brochure.pdf
│   ├── Concept note for Virtual event_...pdf
│   └── content.txt             # Source copy for the page
├── un_water_conference_2026_securing_drinking_water_for_all/         # Desktop design mock-up (code.html + screen.png)
├── un_water_conference_2026_securing_drinking_water_for_all_mobile/  # Mobile design mock-up

```

> The assets folder is spelled `Assests`, and the page links to it by that name. If you rename the folder, update the paths in `index.html` too.

## Editing content

- **Speakers:** edit the `speakers` array in the `<script>` block near the bottom of `index.html`. Each entry has a `name`, an `img` (a file name in `Assests/Images/`), a `role` and a `topic`.
- **Moderator and concluding remarks:** these are written directly in the HTML of the `#speakers` section.
- **Brand colours and type scale:** set in the `tailwind.config` script in the `<head>`.
- **Navbar and footer titles:** in the `<header>` and `<footer>` elements.
