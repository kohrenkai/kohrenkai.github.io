// Shared header + theme toggle. Edit SITE below to change the logo, nav and icon links on every page.
const SITE = {
  logo: "YN", // your initials
  nav: [
    { label: "Blog", href: "blog/" },
    { label: "Projects", href: "projects.html" },
    { label: "Experiences", href: "experiences.html" },
  ],
  instagram: "https://instagram.com/yourhandle",
  github: "https://github.com/yourusername",
};

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
};

(function () {
  const root = document.body.dataset.root || "";
  const here = location.pathname;

  const links = SITE.nav
    .map((n) => {
      const active = here.includes(n.href.replace(/\/$/, "").replace(".html", "")) ? ' class="active"' : "";
      return `<a href="${root}${n.href}"${active}>${n.label}</a>`;
    })
    .join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a class="logo" href="${root || "./"}">${SITE.logo}</a>
    <nav class="site-nav">
      ${links}
      <a class="icon-btn" href="${SITE.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.instagram}</a>
      <a class="icon-btn" href="${SITE.github}" aria-label="GitHub" target="_blank" rel="noopener">${ICONS.github}</a>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme"></button>
    </nav>`;
  document.body.prepend(header);

  const btn = document.getElementById("theme-toggle");
  const paint = () => {
    btn.innerHTML = document.documentElement.dataset.theme === "light" ? ICONS.moon : ICONS.sun;
  };
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
  paint();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
