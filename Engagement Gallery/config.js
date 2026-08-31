/* ============================================================
   CONFIG — edit these values to personalize your gallery.
   ============================================================ */

window.GALLERY_CONFIG = {
  // Shown on the header and password screen.
  coupleNames: "Sandleen & Taimoor",

  // Any format you like, e.g. "24 July 2026".
  eventDate: "15 July 2026",

  // Short monogram shown in the top-left of the navbar.
  monogram: "S & T",

  // OPTIONAL: which photo fills the big full-screen cover at the top.
  // Leave null to auto-use the first photo. Or set e.g. "images/dgd.jpeg".
  heroImage: null,

  // OPTIONAL: which photo appears beside the "Our Story" text.
  // Leave null to auto-use the second photo.
  storyImage: null,

  // The "Our Story" paragraph. Edit this to tell your story!
  storyText:
    "On the 15th of July, surrounded by the people we love most, we said " +
    "“yes” to forever. What began as two hearts finding one another " +
    "became a promise we’ll carry for a lifetime. These are the moments " +
    "we never want to forget — the laughter, the tears of joy, and every " +
    "glance in between.",

  // Signature line under the story (script font).
  storySign: "Sandleen & Taimoor",

  // --- PASSWORD ---------------------------------------------------
  // For simple privacy, put your password here in plain text.
  // Anyone with the link AND this password can open the gallery.
  //
  //   NOTE: This is a "casual lock". A determined, technical visitor
  //   could read the site's files and find it. It's perfect for
  //   keeping family photos away from the general public, but do not
  //   treat it as bank-grade security.
  //
  // OPTIONAL (recommended): use a hashed password instead of plain
  // text so the password is not sitting in the file. To do that:
  //   1. set  password: null
  //   2. set  passwordHash: "<the sha-256 hash of your password>"
  // You can generate the hash by opening the site, then running in
  // the browser console:  await hashPassword("your-password-here")
  // -----------------------------------------------------------------
  password: "sandoor413",
  passwordHash: null,
};
