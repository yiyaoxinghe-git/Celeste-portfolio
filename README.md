# Celeste — Portfolio Website

A 3D interactive portfolio website built with Three.js. Features a crystal viewer, video upload with Vercel Blob, and smooth page transitions.

## Tech Stack

- **Three.js** (CDN) — 3D crystal rendering
- **Vercel Blob** — Permanent video storage
- **localStorage** — Video retention across page refreshes
- **Web Audio API** — Background music

## Features

- **Page 1** — Loading screen with animated progress bar
- **Page 2** — 3D crystal display, mouse tracking rotation, scroll zoom, auto-rotate, background music
- **Page 3** — About section (video upload) + Works section (main player + horizontal drag strip)
- All videos support **4K up to 30 minutes**
- Uploads persist across page refreshes via Vercel Blob + localStorage
- Responsive design with entrance animations

## Deployment

### 1. Deploy to Vercel

```bash
npm install
npx vercel deploy --prod
```

### 2. Set up Vercel Blob

In your Vercel project dashboard, add the `BLOB_READ_WRITE_TOKEN` environment variable:

```
BLOB_READ_WRITE_TOKEN = your_token_here
```

Generate the token in the Vercel Storage tab → Create Blob Store.

### 3. Local Development

```bash
vercel dev
```

The API endpoint `/api/upload` handles video upload to Vercel Blob.
If Blob is not configured, videos fall back to local `URL.createObjectURL`.

## Project Structure

```
├── index.html          # Main HTML (Vercel root)
├── outputs/
│   └── celeste.html    # Local dev copy
├── api/
│   └── upload.js       # Vercel serverless function
├── vercel.json         # Deployment config
├── package.json        # Dependencies
└── README.md           # This file
```

## Notes

- Videos longer than 30 minutes are rejected client-side
- The Web Audio API generates ambient chord tones on page 2
- Three.js is loaded from CDN for faster cold starts
