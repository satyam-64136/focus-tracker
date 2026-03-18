# Focus40 — Study Tracker

A minimalist 40-day study tracker built to help you stay consistent, track your progress, and build a real study habit.

![Focus40](https://img.shields.io/badge/Focus40-Study%20Tracker-4ade80?style=flat-square&labelColor=0a0a0a)
![PWA](https://img.shields.io/badge/PWA-Installable-4ade80?style=flat-square&labelColor=0a0a0a)
![No Framework](https://img.shields.io/badge/Built%20With-Vanilla%20JS-4ade80?style=flat-square&labelColor=0a0a0a)

---

## Features

- **40-Day Tracker** — day-by-day task checklist starting from your chosen date
- **Streak System** — tracks consecutive completed days automatically
- **Heatmap** — GitHub-style 40-day completion grid
- **Mood Tracker** — log your energy level before each session
- **Distraction Counter** — track and reflect on interruptions
- **Daily Reminder** — browser notification at your chosen time
- **Smart Suggestions** — catch-up tips when you miss days
- **Cross-Device Sync** — real-time sync via JSONBin (no login required)
- **PWA** — installable on mobile and desktop, works offline
- **Focus Mode** — built-in 25-minute Pomodoro timer

---

## Stack

- HTML + CSS + Vanilla JavaScript — no frameworks
- [JSONBin.io](https://jsonbin.io) — free REST API for cross-device sync
- Native Browser Notification API — for daily reminders
- localStorage — primary offline storage
- Service Worker — PWA + offline cache

---

## Getting Started

### 1. Clone or fork this repo

```bash
git clone https://github.com/yourusername/focus40.git
```

### 2. Set up JSONBin (for sync)

1. Go to [jsonbin.io](https://jsonbin.io) and create a free account
2. Create a new Bin with content `{ "init": true }` and save it
3. Copy the **Bin ID** from the URL
4. Go to **Account → API Keys** and copy your **Master Key**

### 3. Add your credentials

Open `index.html` and find these two lines near the top of the script:

```js
const JSONBIN_BIN_ID  = 'your-bin-id-here';
const JSONBIN_API_KEY = 'your-master-key-here';
```

### 4. Set your start date

In the same file, find and update:

```js
startDate: '2026-03-19',
```

Change this to whatever date you want Day 1 to be.

---

## Deploying to GitHub Pages

1. Push all three files to your repo: `index.html`, `sw.js`, `manifest.json`
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your app will be live at `https://yourusername.github.io/focus40/`

> **Tip:** If your repo is public, consider making it private to keep your JSONBin API key hidden.

---

## File Structure

```
focus40/
├── index.html      # entire app — HTML, CSS, JS in one file
├── sw.js           # service worker for PWA + offline cache
├── manifest.json   # PWA manifest for install support
└── README.md
```

---

## Usage

| Section | What it does |
|---|---|
| Dashboard | Overview, heatmap, mood, streak, today's progress |
| Daily Tracker | Check off tasks, log distractions, navigate days |
| Stats | Charts for completion and distractions, mood history |
| Settings | Set reminder time, manage default tasks, toggle sync |

---

## Notes

- Sync uses JSONBin's free tier — 10,000 requests/month, no credit card needed
- Notifications require browser permission — Chrome on desktop and Android works best
- All data is stored in localStorage first; JSONBin is the sync layer on top
- Resetting data from Settings will also clear the cloud bin

---

## License

MIT — do whatever you want with it.
