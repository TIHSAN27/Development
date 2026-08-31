# Our Engagement — Private Photo Gallery

A beautiful, romantic-themed photo gallery for your engagement ceremony.
It shows your photos in an elegant masonry layout with a full-screen
lightbox, and it's protected by a password so only people you share the
link **and** password with can open it.

---

## 1. Personalize it

Open **`config.js`** and change these lines:

```js
coupleNames: "Bride & Groom",       // e.g. "Taimoor & Ayesha"
eventDate:   "Our Engagement Day",  // e.g. "24 July 2026"
password:    "changeme",            // the password visitors must type
```

## 2. Add your photos

1. Copy your photos into the **`images/`** folder.
2. From this folder, run:

   ```bash
   node generate-manifest.js
   ```

   This scans the folder and lists every photo automatically. Run it
   again any time you add or remove photos.

   > No Node.js? You can instead edit `images.js` by hand and list each
   > file, e.g. `"images/photo1.jpg",`.

## 3. Preview locally

Just open `index.html` in your browser, or run a tiny local server:

```bash
npx serve .
```

Type your password to see the gallery.

---

## 4. Put it live (free)

Any of these free static hosts work. The whole folder is all you need.

### Easiest: Netlify Drop
1. Go to <https://app.netlify.com/drop>
2. Drag this entire folder onto the page.
3. You instantly get a link like `https://your-name.netlify.app`.
4. Share that link + your password with your guests.

### GitHub Pages
1. Create a new GitHub repo and upload these files.
2. Repo **Settings → Pages → Deploy from branch → main → /root**.
3. Your site appears at `https://<username>.github.io/<repo>/`.

### Vercel
1. Install: `npm i -g vercel`
2. Run `vercel` in this folder and follow the prompts.

---

## About the password (please read)

This gallery uses a **client-side password**. It reliably keeps out the
general public and anyone who just stumbles on the link — perfect for
family engagement photos. However, it is **not** bank-grade security: a
determined, technical person could inspect the site's files and find a
way in. If you need airtight privacy, use a host with real server-side
password protection (e.g. Netlify's password feature on a paid plan).

### Optional: hide the password with a hash
So the password isn't sitting in plain text in `config.js`:

1. Open the live/local site in a browser.
2. Open the browser console (F12) and run:
   ```js
   await hashPassword("your-password-here")
   ```
3. Copy the long string it prints.
4. In `config.js` set:
   ```js
   password: null,
   passwordHash: "paste-the-long-string-here",
   ```

---

## Files

| File                   | What it is                                   |
|------------------------|----------------------------------------------|
| `index.html`           | The page structure                           |
| `style.css`            | The romantic wedding styling                 |
| `config.js`            | **Your** names, date, and password           |
| `images.js`            | Auto-generated list of photos                |
| `gallery.js`           | Gallery + password + lightbox logic          |
| `generate-manifest.js` | Rebuilds `images.js` from the images folder  |
| `images/`              | Put your photos here                         |
