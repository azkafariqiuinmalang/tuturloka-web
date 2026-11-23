// Tuturloka landing page: menu ponsel, header saat menggulir, animasi muncul, dan kuis contoh.
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Menu ponsel
  var toggle = document.querySelector("[data-nav-toggle]");
  var list = document.querySelector("[data-nav-list]");
  if (toggle && list) {
    var setOpen = function (open) {
      list.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".sr-only").textContent = open ? "Tutup menu" : "Buka menu";
    };
    toggle.addEventListener("click", function () { setOpen(!list.classList.contains("is-open")); });
    list.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
  }

  // Bayangan header setelah menggulir
  var header = document.querySelector("[data-header]");
  var onScroll = function () { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Animasi muncul saat terlihat (langsung tampil bila pengguna memilih gerak dikurangi)
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  }

  // Kuis contoh: kalimat dan aturan diambil dari kamus draf Tuturloka (data/seed/aturan.json).
  var QUIZ = {
    jv: {
      who: "Simbah",
      options: [
        { text: "Simbah wis mangan durung?", right: false,
          why: "Kalimat ini ngoko. Kepada Simbah, wis dan mangan terdengar kurang sopan." },
        { text: "Simbah sampun dhahar dereng?", right: true,
          why: "Tepat! Sampun dan dereng adalah krama, dan dhahar adalah krama inggil untuk orang yang dihormati." },
        { text: "Simbah sampun nedha dereng?", right: false,
          why: "Hampir! Nedha dipakai untuk diri sendiri. Untuk Simbah, gunakan dhahar." }
      ]
    },
    su: {
      who: "Bapa",
      options: [
        { text: "Bapa geus dahar?", right: false,
          why: "Geus dan dahar adalah basa loma. Kepada orang tua gunakan parantos dan tuang." },
        { text: "Bapa parantos neda?", right: false,
          why: "Hampir! Neda dipakai untuk diri sendiri. Untuk orang yang dihormati, gunakan tuang." },
        { text: "Bapa parantos tuang?", right: true,
          why: "Tepat! Parantos adalah basa lemes, dan tuang dipakai untuk orang lain yang dihormati." }
      ]
    }
  };

  var quiz = document.querySelector("[data-quiz]");
  if (quiz) {
    var optionsEl = quiz.querySelector("[data-quiz-options]");
    var feedbackEl = quiz.querySelector("[data-quiz-feedback]");
    var questionEl = quiz.querySelector("[data-quiz-q]");
    var langButtons = quiz.querySelectorAll("[data-lang]");
    var icon = function (name) {
      return '<svg aria-hidden="true"><use href="#i-' + name + '"/></svg>';
    };

    var render = function (lang) {
      var data = QUIZ[lang];
      questionEl.innerHTML = "Kepada <b>" + data.who + "</b>:";
      feedbackEl.innerHTML = "";
      optionsEl.innerHTML = "";
      data.options.forEach(function (opt, i) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option";
        btn.setAttribute("aria-pressed", "false");
        btn.innerHTML = '<span class="quiz-key" aria-hidden="true">' + "ABC"[i] + "</span><span></span>";
        btn.lastChild.textContent = opt.text;
        btn.addEventListener("click", function () {
          optionsEl.querySelectorAll(".quiz-option").forEach(function (b) {
            b.setAttribute("aria-pressed", "false");
            b.classList.remove("is-right", "is-wrong");
          });
          btn.setAttribute("aria-pressed", "true");
          btn.classList.add(opt.right ? "is-right" : "is-wrong");
          var p = document.createElement("p");
          p.className = opt.right ? "fb-right" : "fb-wrong";
          p.innerHTML = icon(opt.right ? "check" : "x") + "<span></span>";
          p.lastChild.textContent = opt.why;
          feedbackEl.replaceChildren(p);
        });
        optionsEl.appendChild(btn);
      });
    };

    langButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        langButtons.forEach(function (x) {
          var on = x === b;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-pressed", String(on));
        });
        render(b.getAttribute("data-lang"));
      });
    });
    render("jv");
  }
})();
