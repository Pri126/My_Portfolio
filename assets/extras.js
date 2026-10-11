document.addEventListener("DOMContentLoaded", function () {
  /* ---------- 1. Scroll reveal ---------- */
  var targets = [
    [".hero-text", "from-left"],
    [".hero-image-large", "from-right"],
    [".about-title", ""],
    [".about-circle-img", "from-left"],
    [".about-content-right", "from-right"],
    [".tech-card", "zoom"],
    [".skills h2", ""],
    [".skill-category", ""],
    [".tech-box", "zoom"],
    [".section-title", ""],
    [".timeline-item-resume", "from-left"],
    [".fresher-notice", "zoom"],
    [".skill-item-resume", "from-right"],
    [".project-card", "zoom"]
  ];

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (pair) {
    document.querySelectorAll(pair[0]).forEach(function (el, i) {
      el.classList.add("reveal");
      if (pair[1]) el.classList.add(pair[1]);
      el.style.transitionDelay = (i % 4) * 0.1 + "s"; // small stagger
      revealObserver.observe(el);
    });
  });

  /* ---------- 2. Skill bars animate from 0 ---------- */
  var bars = document.querySelectorAll(".skill-fill, .skill-fill-resume");
  bars.forEach(function (bar) {
    bar.dataset.target = bar.style.width;
    bar.style.width = "0";
  });
  var barObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.target;
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function (bar) { barObserver.observe(bar); });

  /* ---------- 3. Navbar active link on scroll ---------- */
  var navLinks = document.querySelectorAll(".navbar .nav-link");
  navLinks.forEach(function (l) { l.removeAttribute("style"); }); // remove hardcoded blue on About
  var sections = [];
  navLinks.forEach(function (link) {
    var sec = document.querySelector(link.getAttribute("href"));
    if (sec) sections.push({ link: link, sec: sec });
  });

  function setActive() {
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (item) {
      if (item.sec.offsetTop <= pos) current = item;
    });
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    if (current) current.link.classList.add("active");
  }
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  /* ---------- 4. Close mobile menu after clicking a link ---------- */
  var menu = document.getElementById("navbarContent");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu && menu.classList.contains("show")) menu.classList.remove("show");
    });
  });
});