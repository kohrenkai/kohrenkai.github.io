// Shared header + theme toggle. Edit SITE below to change the logo, nav and icon links on every page.
const SITE = {
  logo: "RK",
  nav: [
    { label: "Blog", href: "blog/" },
    { label: "Projects", href: "projects.html" },
    { label: "Experiences", href: "experiences.html" },
  ],
  // Leave a link empty ("") to hide its icon
  instagram: "",
  github: "",
  linkedin: "https://www.linkedin.com/in/kohrenkai/",
};

const ICONS = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
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
      ${["linkedin", "instagram", "github"]
        .filter((k) => SITE[k])
        .map((k) => `<a class="icon-btn" href="${SITE[k]}" aria-label="${k}" target="_blank" rel="noopener">${ICONS[k]}</a>`)
        .join("")}
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
