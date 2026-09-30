/* Ossi Anna Games — site script. Game data lives in games.js */
(function () {
  "use strict";

  var data = window.OSSIANNA || { site: {}, games: [] };
  var site = data.site || {};
  var games = (data.games || []).filter(function (g) { return g && g.name; });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // allow http(s) links and relative file paths only
  function safeUrl(u) {
    u = String(u || "").trim();
    if (/^https?:\/\//i.test(u) || /^[\w\-./%]+$/.test(u)) return u;
    return "";
  }
  function safeColor(c) {
    return /^#[0-9a-f]{3,8}$/i.test(String(c || "")) ? c : "";
  }
  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }

  var PALETTE = ["#ef4444", "#f59e0b", "#22c55e", "#ec4899", "#3b82f6", "#8b5cf6"];
  var AMAZON_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 7V6a5 5 0 0 1 10 0v1h3l-1 14H5L4 7h3zm2 0h6V6a3 3 0 0 0-6 0v1z"/></svg>';

  /* ---------- global bits ---------- */
  var storeUrl = safeUrl(site.amazonStoreUrl) || "https://www.amazon.com/appstore";
  $$("[data-amazon-store]").forEach(function (a) { a.href = storeUrl; });
  if (site.email) {
    $$("[data-email]").forEach(function (el) {
      el.textContent = site.email;
      if (el.tagName === "A") el.href = "mailto:" + site.email;
    });
    $$("[data-mailto]").forEach(function (a) {
      var subject = a.getAttribute("data-mailto");
      a.href = "mailto:" + site.email + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    });
  }
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- mobile menu ---------- */
  var toggle = $(".nav-toggle"), links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("a", links).forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- games ---------- */
  var grid = $("#games-grid");
  var liveCount = games.filter(function (g) { return g.status !== "soon"; }).length;
  $$('[data-stat="games"]').forEach(function (el) { el.textContent = liveCount > 0 ? liveCount : "Soon"; });

  function coverHtml(g) {
    var html = "";
    var banner = safeUrl(g.banner), icon = safeUrl(g.icon);
    if (banner) html += '<img class="banner" src="' + esc(banner) + '" alt="" loading="lazy">';
    if (icon) html += '<img class="icon" src="' + esc(icon) + '" alt="' + esc(g.name) + ' icon" loading="lazy" data-initials="' + esc(initials(g.name)) + '">';
    else if (!banner) html += '<span class="initials">' + esc(initials(g.name)) + "</span>";
    return html;
  }

  function amazonButton(g, extraClass) {
    var url = safeUrl(g.amazonUrl);
    if (g.status === "soon" || !url) {
      return '<span class="btn btn-ghost is-disabled ' + (extraClass || "") + '">Coming soon</span>';
    }
    return '<a class="btn btn-amazon ' + (extraClass || "") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + AMAZON_ICON + "Get it on Amazon</a>";
  }

  function cardHtml(g, i) {
    var color = safeColor(g.color) || PALETTE[i % PALETTE.length];
    var ribbon = g.status === "soon" ? '<span class="ribbon soon">COMING SOON</span>' : (g.isNew ? '<span class="ribbon">NEW</span>' : "");
    var plats = (g.platforms || []).map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("");
    return (
      '<article class="game-card reveal" style="--accent:' + color + '" data-index="' + i + '" tabindex="0" role="button" aria-label="' + esc(g.name) + ' details">' +
        '<div class="game-cover">' + ribbon + coverHtml(g) + "</div>" +
        '<div class="game-body">' +
          (g.genre ? '<span class="badge">' + esc(g.genre) + "</span>" : "") +
          "<h3>" + esc(g.name) + "</h3>" +
          (g.tagline ? "<p>" + esc(g.tagline) + "</p>" : "") +
          (plats ? '<div class="platforms">' + plats + "</div>" : "") +
          '<div class="game-actions">' + amazonButton(g) + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function mysteryCards() {
    var colors = ["#ef4444", "#f59e0b", "#22c55e"];
    return colors.map(function (c, i) {
      return (
        '<article class="game-card mystery reveal" style="--accent:' + c + '" aria-hidden="true">' +
          '<div class="game-cover"><span class="ribbon soon">COMING SOON</span><span class="initials" style="animation-delay:-' + i + 's">?</span></div>' +
          '<div class="game-body"><div class="skeleton w45"></div><div class="skeleton"></div><div class="skeleton w70"></div></div>' +
        "</article>"
      );
    }).join("");
  }

  function fixBrokenIcons(root) {
    $$("img.icon", root).forEach(function (img) {
      img.addEventListener("error", function () {
        var span = document.createElement("span");
        span.className = "initials";
        span.textContent = img.getAttribute("data-initials") || "?";
        img.replaceWith(span);
      }, { once: true });
    });
    $$("img.banner", root).forEach(function (img) {
      img.addEventListener("error", function () { img.remove(); }, { once: true });
    });
  }

  var currentFilter = "All";
  function renderGames() {
    if (!grid) return;
    if (!games.length) {
      grid.innerHTML = mysteryCards();
      var note = $("#games-empty");
      if (note) note.hidden = false;
      observeReveal();
      return;
    }
    // live games first, then "coming soon" — keep the order from games.js otherwise
    var list = games.map(function (g, i) { return { g: g, i: i }; })
      .filter(function (o) { return currentFilter === "All" || o.g.genre === currentFilter; })
      .sort(function (a, b) { return (a.g.status === "soon") - (b.g.status === "soon") || a.i - b.i; });
    grid.innerHTML = list.map(function (o) { return cardHtml(o.g, o.i); }).join("");
    fixBrokenIcons(grid);
    observeReveal();
  }

  function renderFilters() {
    var box = $("#filters");
    if (!box) return;
    var genres = [];
    games.forEach(function (g) { if (g.genre && genres.indexOf(g.genre) < 0) genres.push(g.genre); });
    if (genres.length < 2) { box.innerHTML = ""; return; }
    box.innerHTML = ["All"].concat(genres).map(function (gn) {
      return '<button type="button" class="chip' + (gn === currentFilter ? " active" : "") + '" data-genre="' + esc(gn) + '">' + esc(gn) + "</button>";
    }).join("");
    $$(".chip", box).forEach(function (b) {
      b.addEventListener("click", function () {
        currentFilter = b.getAttribute("data-genre");
        $$(".chip", box).forEach(function (x) { x.classList.toggle("active", x === b); });
        renderGames();
      });
    });
  }

  /* ---------- game details modal ---------- */
  var modal = $("#game-modal");
  function openGame(i) {
    var g = games[i];
    if (!g || !modal) return;
    var color = safeColor(g.color) || PALETTE[i % PALETTE.length];
    var desc = String(g.description || g.tagline || "").split(/\n+/).filter(Boolean)
      .map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var shots = (g.screenshots || []).map(safeUrl).filter(Boolean)
      .map(function (s) { return '<img src="' + esc(s) + '" alt="' + esc(g.name) + ' screenshot" loading="lazy">'; }).join("");
    var plats = (g.platforms || []).map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("");
    var card = $(".modal-card", modal);
    card.style.setProperty("--accent", color);
    card.innerHTML =
      '<button class="modal-close" type="button" aria-label="Close">&times;</button>' +
      '<div class="game-cover">' + coverHtml(g) + "</div>" +
      '<div class="modal-body">' +
        (g.genre ? '<span class="badge">' + esc(g.genre) + "</span>" : "") +
        "<h3>" + esc(g.name) + "</h3>" +
        (plats ? '<div class="platforms">' + plats + "</div>" : "") +
        '<div class="desc">' + desc + "</div>" +
        (shots ? '<div class="shots">' + shots + "</div>" : "") +
        '<div class="modal-actions">' + amazonButton(g) +
          '<a class="btn btn-ghost" href="privacy-policy.html">Privacy policy</a>' +
        "</div>" +
      "</div>";
    fixBrokenIcons(card);
    $(".modal-close", card).addEventListener("click", function () { modal.close(); });
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
  if (modal) {
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  }
  if (grid) {
    grid.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // let "Get it on Amazon" open normally
      var card = e.target.closest(".game-card[data-index]");
      if (card) openGame(+card.getAttribute("data-index"));
    });
    grid.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var card = e.target.closest(".game-card[data-index]");
      if (card && e.target === card) { e.preventDefault(); openGame(+card.getAttribute("data-index")); }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;
  function observeReveal() {
    $$(".reveal:not(.in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("in");
    });
  }

  renderFilters();
  renderGames();
  observeReveal();
})();
