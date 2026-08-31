/* ============================================================
   Engagement website: gate, nav, hero, story, filters,
   masonry gallery, and lightbox (photos + videos).
   ============================================================ */

(function () {
  "use strict";

  var cfg = window.GALLERY_CONFIG || {};
  var media = window.GALLERY_IMAGES || [];

  var VIDEO_EXT = /\.(mp4|webm|mov|m4v|ogv)$/i;
  function isVideo(src) { return VIDEO_EXT.test(src); }

  var photos = media.filter(function (s) { return !isVideo(s); });

  /* -------- SHA-256 helper (for optional hashed password) -------- */
  async function hashPassword(text) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf))
      .map(function (b) { return b.toString(16).padStart(2, "0"); })
      .join("");
  }
  window.hashPassword = hashPassword;

  /* -------- Personalize text -------- */
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }
  setText("gateNames", cfg.coupleNames);
  setText("gateDate", cfg.eventDate);
  setText("heroNames", cfg.coupleNames);
  setText("heroDate", cfg.eventDate);
  setText("navBrand", cfg.monogram || cfg.coupleNames);
  setText("storyBody", cfg.storyText);
  setText("storySign", cfg.storySign || cfg.coupleNames);
  setText("footerNames", cfg.coupleNames);
  setText("footerDate", cfg.eventDate);
  if (cfg.coupleNames) document.title = cfg.coupleNames + " — Engagement";

  /* -------- Password gate -------- */
  var gate = document.getElementById("gate");
  var app = document.getElementById("app");
  var form = document.getElementById("gateForm");
  var input = document.getElementById("passwordInput");
  var error = document.getElementById("gateError");
  var card = document.querySelector(".gate-card");
  var STORAGE_KEY = "engagement_gallery_unlocked";
  var built = false;

  async function isCorrect(entered) {
    if (cfg.passwordHash) {
      return (await hashPassword(entered)) === String(cfg.passwordHash).toLowerCase();
    }
    return entered === (cfg.password || "");
  }

  function unlock() {
    gate.hidden = true;
    app.hidden = false;
    if (!built) { buildSite(); built = true; }
  }

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") unlock();
  } catch (e) {}

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    error.hidden = true;
    if (await isCorrect(input.value)) {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
      unlock();
    } else {
      error.hidden = false;
      card.classList.remove("shake");
      void card.offsetWidth;
      card.classList.add("shake");
      input.select();
    }
  });

  /* -------- Build the site once unlocked -------- */
  function buildSite() {
    setupHeroAndStory();
    renderGallery();
    setupNav();
    setupReveal();
    setupFilters();
  }

  function setupHeroAndStory() {
    var hero = cfg.heroImage || photos[0] || media[0];
    var story = cfg.storyImage || photos[1] || photos[0];
    if (hero) document.getElementById("heroBg").style.backgroundImage = "url('" + cssUrl(hero) + "')";
    if (story) document.getElementById("storyImg").style.backgroundImage = "url('" + cssUrl(story) + "')";
  }
  function cssUrl(s) { return String(s).replace(/'/g, "\\'"); }

  /* -------- Nav: scroll state + mobile toggle -------- */
  function setupNav() {
    var nav = document.getElementById("nav");
    var links = document.getElementById("navLinks");
    var toggle = document.getElementById("navToggle");
    function scrollTop() {
      return window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0;
    }
    function onScroll() {
      if (scrollTop() > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    onScroll();
    // Listen on window and document so it works whichever element scrolls.
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* -------- Scroll reveal for sections -------- */
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "-40px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* -------- Filters (All / Photos / Films) -------- */
  function setupFilters() {
    var buttons = document.querySelectorAll(".filter");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }
  function applyFilter(kind) {
    document.querySelectorAll(".card").forEach(function (c) {
      var type = c.getAttribute("data-type");
      c.classList.toggle("hide", kind !== "all" && type !== kind);
    });
  }

  /* -------- Masonry rendering -------- */
  function renderGallery() {
    var gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (!media.length) {
      gallery.innerHTML =
        '<p class="empty">No photos yet.<br>Add your pictures to the ' +
        "<code>images/</code> folder, then run <code>node generate-manifest.js</code>.</p>";
      return;
    }

    var io = "IntersectionObserver" in window
      ? new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
          });
        }, { rootMargin: "150px" })
      : null;

    media.forEach(function (src, i) {
      var fig = document.createElement("figure");
      fig.className = "card";

      if (isVideo(src)) {
        fig.setAttribute("data-type", "video");
        var vid = document.createElement("video");
        vid.src = src; vid.muted = true; vid.loop = true;
        vid.playsInline = true; vid.preload = "metadata";
        fig.addEventListener("mouseenter", function () { vid.play().catch(function () {}); });
        fig.addEventListener("mouseleave", function () { vid.pause(); });
        vid.addEventListener("loadeddata", function () { fig.classList.add("in"); });
        var badge = document.createElement("span");
        badge.className = "play-badge"; badge.innerHTML = "&#9658;";
        fig.classList.add("is-video");
        fig.appendChild(vid); fig.appendChild(badge);
      } else {
        fig.setAttribute("data-type", "photo");
        var img = document.createElement("img");
        img.loading = "lazy"; img.src = src;
        img.alt = (cfg.coupleNames || "Engagement") + " — photo " + (i + 1);
        img.addEventListener("load", function () { fig.classList.add("in"); });
        fig.appendChild(img);
      }

      fig.addEventListener("click", function () { openLightbox(i); });
      gallery.appendChild(fig);
      if (io) io.observe(fig);
    });
  }

  /* -------- Lightbox -------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCounter = document.getElementById("lbCounter");
  var current = 0;

  var lbVid = document.createElement("video");
  lbVid.className = "lb-img lb-video";
  lbVid.controls = true; lbVid.playsInline = true; lbVid.hidden = true;
  lbImg.parentNode.insertBefore(lbVid, lbImg.nextSibling);

  function openLightbox(i) {
    current = i; showLightbox(); lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.hidden = true; lbVid.pause(); lbVid.removeAttribute("src"); lbVid.load();
    document.body.style.overflow = "";
  }
  function showLightbox() {
    var src = media[current];
    lbVid.pause();
    if (isVideo(src)) {
      lbImg.hidden = true; lbImg.removeAttribute("src");
      lbVid.hidden = false; lbVid.src = src; lbVid.currentTime = 0;
      lbVid.play().catch(function () {});
    } else {
      lbVid.hidden = true; lbVid.removeAttribute("src");
      lbImg.hidden = false; lbImg.src = src;
      lbImg.alt = (cfg.coupleNames || "Engagement") + " — photo " + (current + 1);
    }
    lbCounter.textContent = (current + 1) + " / " + media.length;
  }
  function next() { current = (current + 1) % media.length; showLightbox(); }
  function prev() { current = (current - 1 + media.length) % media.length; showLightbox(); }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbNext").addEventListener("click", function (e) { e.stopPropagation(); next(); });
  document.getElementById("lbPrev").addEventListener("click", function (e) { e.stopPropagation(); prev(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });
})();
