/* Eegai Extensions – builds the pages from data/extensions.js.
   You normally never need to edit this file. */
(function () {
  var S = window.EEGAI_SITE || {};
  var LIST = (window.EEGAI_EXTENSIONS || []).filter(function (e) { return e && !e.hidden; });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  var STATUS = { ready: ["Ready to use", "st-ready"], beta: ["Early preview", "st-beta"], "coming-soon": ["Coming soon", "st-soon"] };
  function badge(e) {
    var st = STATUS[e.status] || STATUS.ready;
    return '<span class="status ' + st[1] + '">' + st[0] + "</span>" + (e.isNew ? '<span class="status st-new">New</span>' : "");
  }
  function waLink(text) { return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(text || "Hi Eegai, I need help with an extension."); }

  /* ---------- shared: header, contact, footer ---------- */
  function renderShared() {
    document.querySelectorAll("[data-brand]").forEach(function (el) { el.textContent = S.brandName; });
    document.querySelectorAll("[data-mark]").forEach(function (el) { el.textContent = S.brandMark; });
    var c = $("contact");
    if (c) {
      c.innerHTML = '<div class="wrap"><h2>Need help or want to give feedback?</h2><p>' + esc(S.contactText) + '</p><div class="actions">' +
        '<a class="btn btn-gold" href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp ' + esc(S.phoneDisplay) + "</a>" +
        '<a class="btn btn-ghost" href="tel:+' + esc(S.whatsapp) + '">Call</a>' +
        (S.email ? '<a class="btn btn-ghost" href="mailto:' + esc(S.email) + '">Email</a>' : "") + "</div></div>";
    }
    var f = $("foot");
    if (f) f.innerHTML = '<div class="wrap"><span>© ' + new Date().getFullYear() + " " + esc(S.company) + ", " + esc(S.location) +
      '</span><span><a href="index.html#products">All extensions</a> &nbsp; <a href="privacy.html">Privacy policy</a></span></div>';
  }

  /* ---------- kolam drawing in the hero ---------- */
  function kolam() {
    var n = 5, s = 44, pad = 30, W = pad * 2 + s * (n - 1), out = "", i, j;
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) if ((i + j) % 2 === 0) {
      var x = pad + i * s, y = pad + j * s;
      out += '<rect x="' + (x - s / 2) + '" y="' + (y - s / 2) + '" width="' + s + '" height="' + s + '" rx="14" transform="rotate(45 ' + x + " " + y + ')" class="k-line"/>';
    }
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) out += '<circle cx="' + (pad + i * s) + '" cy="' + (pad + j * s) + '" r="3.2" class="k-dot"/>';
    return '<svg class="kolam" viewBox="0 0 ' + W + " " + W + '" aria-hidden="true">' + out + "</svg>";
  }

  /* ---------- extension card ---------- */
  function card(e) {
    return '<a class="pick" href="extension.html?id=' + encodeURIComponent(e.id) + '" style="--c:' + esc(e.color) + '">' +
      '<div class="row"><span class="ic" aria-hidden="true">' + esc(e.icon) + "</span><span>" + badge(e) + "</span></div>" +
      "<h3>" + esc(e.name) + "</h3><p>" + esc(e.short) + '</p><span class="price">' + esc(e.price) + "</span></a>";
  }

  /* ---------- HOME PAGE ---------- */
  function home() {
    $("hero").innerHTML = '<div class="wrap"><div><h1>' + esc(S.heroTitle) + '</h1><p class="lead">' + esc(S.heroText) +
      '</p><div class="actions"><a class="btn btn-gold" href="#products">See the extensions</a><a class="btn btn-ghost" href="#install">How to install</a></div>' +
      '<p class="hero-meta">' + esc(S.heroNote) + "</p></div>" + kolam() + "</div>";

    // filter + search (search box appears once there are 7+ extensions)
    var cats = [];
    LIST.forEach(function (e) { if (e.category && cats.indexOf(e.category) < 0) cats.push(e.category); });
    var active = "All", query = "";
    var bar = $("toolbar");
    var chips = ["All"].concat(cats);
    bar.innerHTML = (LIST.length >= 7 ? '<input id="q" type="search" placeholder="Search extensions" aria-label="Search extensions">' : "") +
      (cats.length > 1 ? chips.map(function (c) { return '<button class="chip" type="button" aria-pressed="' + (c === "All") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("") : "");
    function draw() {
      var shown = LIST.filter(function (e) {
        var okCat = active === "All" || e.category === active;
        var okQ = !query || (e.name + " " + e.short + " " + e.category).toLowerCase().indexOf(query) >= 0;
        return okCat && okQ;
      });
      $("grid").innerHTML = shown.length ? shown.map(card).join("") : '<div class="empty">No extension matches that. Clear the search or pick "All".</div>';
    }
    bar.addEventListener("click", function (ev) {
      var b = ev.target.closest(".chip"); if (!b) return;
      active = b.getAttribute("data-cat");
      bar.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      draw();
    });
    var q = $("q"); if (q) q.addEventListener("input", function () { query = q.value.trim().toLowerCase(); draw(); });
    draw();

    // pricing table
    $("pricing-rows").innerHTML = LIST.map(function (e) {
      return '<tr><td><a href="extension.html?id=' + encodeURIComponent(e.id) + '">' + esc(e.name) + "</a></td><td>" + esc(e.trial || "—") + "</td><td>" + esc(e.price) + "</td></tr>";
    }).join("");

    // FAQ
    $("faq-list").innerHTML = (S.faq || []).map(function (f) {
      return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>";
    }).join("");

    installTabs();
  }

  /* ---------- EXTENSION PAGE ---------- */
  function extPage() {
    var id = new URLSearchParams(location.search).get("id");
    var e = LIST.filter(function (x) { return x.id === id; })[0];
    var main = $("ext");
    if (!e) {
      document.title = "Extension not found – " + S.brandName;
      main.innerHTML = '<section class="block"><div class="wrap"><h1 class="section-title">This extension is not available</h1><p class="sub">The link may be old or the extension was removed. See all extensions below.</p><div class="grid">' + LIST.map(card).join("") + "</div></div></section>";
      return;
    }
    document.title = e.name + " – " + S.brandName;
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", e.short);

    function list(arr) { return "<ul>" + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
    var body = "";
    if (e.features && e.features.length) body += "<h2>What it does</h2>" + list(e.features);
    if (e.audience) body += "<h2>Who it is for</h2><p>" + esc(e.audience) + "</p>";
    if (e.howToUse && e.howToUse.length) body += "<h2>How to use it after installing</h2>" + list(e.howToUse);
    if (e.screenshots && e.screenshots.length) body += '<h2>Screenshots</h2><div class="shots">' + e.screenshots.map(function (s) {
      return '<figure><img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" loading="lazy"><figcaption>' + esc(s.alt) + "</figcaption></figure>";
    }).join("") + "</div>";
    if (e.note) body += '<p class="note">' + esc(e.note) + "</p>";
    if (e.changelog && e.changelog.length) body += '<h2>What\'s new</h2><div class="changelog">' + e.changelog.map(function (c) {
      return "<div><b>Version " + esc(c.version) + "</b> <span style=\"color:var(--muted)\">" + esc(c.date) + "</span><br>" + esc(c.notes) + "</div>";
    }).join("") + "</div>";
    if (e.status !== "coming-soon") body += '<p style="margin-top:28px"><a href="index.html#install">How to install this extension →</a></p>';

    // download box
    var facts = (e.facts || []).slice();
    if (e.version) facts.push(["Version", e.version]);
    if (e.updated) facts.push(["Updated", e.updated]);
    var btns = "";
    var sl = e.storeLinks || {};
    if (sl.chrome) btns += '<a class="btn btn-teal" href="' + esc(sl.chrome) + '" target="_blank" rel="noopener">Add to Chrome</a>';
    if (sl.edge) btns += '<a class="btn btn-teal" href="' + esc(sl.edge) + '" target="_blank" rel="noopener">Get for Edge</a>';
    if (e.status === "coming-soon" || !e.download) {
      btns += '<span class="btn" aria-disabled="true">Coming soon</span>' +
        '<a class="btn btn-line" href="' + waLink("Hi Eegai, please tell me when " + e.name + " is ready.") + '" target="_blank" rel="noopener">Notify me on WhatsApp</a>';
    } else {
      btns += '<a class="btn ' + (sl.chrome || sl.edge ? "btn-line" : "btn-teal") + '" href="' + esc(e.download) + '" download>Download zip</a>';
    }

    main.innerHTML =
      '<section class="ext-hero" style="--tint:' + esc(e.tint) + '"><div class="wrap"><a class="crumb" href="index.html#products">← All extensions</a>' +
      '<div class="p-head"><div class="p-icon" aria-hidden="true">' + esc(e.icon) + "</div><div><h1>" + esc(e.name) + "</h1>" + badge(e) + "</div></div>" +
      '<p class="tagline">' + esc(e.tagline) + "</p></div></section>" +
      '<section class="ext-body"><div class="wrap"><div>' + body + "</div>" +
      '<aside class="side" aria-label="Download ' + esc(e.name) + '"><dl>' + facts.map(function (f) { return "<dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd>"; }).join("") + "</dl>" +
      btns + (e.sideNote ? "<small>" + esc(e.sideNote) + "</small>" : "") + "</aside></div></section>" +
      (LIST.length > 1 ? '<section class="block white"><div class="wrap"><h2 class="section-title">Other extensions</h2><div class="grid">' +
        LIST.filter(function (x) { return x.id !== e.id; }).map(card).join("") + "</div></div></section>" : "");
  }

  /* ---------- Chrome / Edge tabs in the install guide ---------- */
  function installTabs() {
    var tabs = [$("t-chrome"), $("t-edge")];
    if (!tabs[0]) return;
    function pick(t) {
      tabs.forEach(function (x) {
        var on = x === t; x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
        $(x.getAttribute("aria-controls")).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { pick(t); });
      t.addEventListener("keydown", function (ev) { if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") { var n = tabs[(i + 1) % 2]; pick(n); n.focus(); } });
    });
    if (/Edg\//.test(navigator.userAgent)) pick(tabs[1]);
  }

  renderShared();
  if (document.body.getAttribute("data-page") === "home") home();
  if (document.body.getAttribute("data-page") === "extension") extPage();
})();
