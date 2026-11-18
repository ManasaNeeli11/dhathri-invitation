# ధాత్రి బుగ్గ — తొలి కేశఖండన వేడుక

A responsive Telugu-first digital invitation built with React and Vite.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open a terminal in the `dhatri-first-haircut-invitation` folder.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```
The production website is generated in the `dist` folder.

## Deploy free with Vercel
1. Push this project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy, then share the generated URL with family on WhatsApp.

Netlify also works: build command `npm run build`, publish directory `dist`.

## Personalize before publishing
- Baby name and Telugu invitation text: `src/App.jsx`.
- Ceremony date: `EVENT_DATE` and `dateLabel` in `src/App.jsx`.
- Venue / map search: `VENUE` and `MAPS_URL` in `src/App.jsx`.
- Ceremony time: replace the placeholder text in the time detail card.
- Colors, spacing and layout: `src/styles.css`.

## Music
The website does not autoplay music and does not bundle copyrighted audio. The floating music control plays/pauses a local instrumental track once you add it. To add your own licensed or royalty-free instrumental MP3:
1. Put the MP3 in `public/music/ceremony.mp3`.
2. In `src/App.jsx`, add `const audioRef = useRef(null);` and an `<audio ref={audioRef} src="/music/ceremony.mp3" loop />` element.
3. Change the music button handler to play/pause that audio after the visitor taps the button. Browsers generally block autoplay until a visitor interacts with the page.

## Notes
- The date is set to **3 December 2026**.
- The venue link opens a Google Maps search for Sri Mahanandeeswara Swamy Devasthanam, Mahanandi. Verify the exact pin before sharing.
- The ceremony time and family names have not been supplied, so the page uses a placeholder for the auspicious time and a general family sign-off.
- No baby photograph has been added. You can add a gallery or portrait later if desired.
