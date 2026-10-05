# Personal site

A minimal personal homepage (home, projects, experiences) in plain HTML and CSS. There is no build step, so it runs on GitHub Pages as-is.

## Make it yours
- **index.html**: your name, intro, the "Currently / Previously / Tinkering" chips, and social links
- **assets/main.js**: the `SITE` block at the top sets the logo initials, nav links, and header icon links
- **projects.html** and **experiences.html**: copy an `<li>` block for each entry
- Replace "Your Name" everywhere: `grep -rl "Your Name" .`

Company logos in the chips come from `https://www.google.com/s2/favicons?domain=<site>`. Change the `domain=` part to match each company.

## Deploy to GitHub Pages
1. Create a repo on GitHub. Name it `<your-username>.github.io` to get the root URL `https://<your-username>.github.io`. Any other name serves at `https://<your-username>.github.io/<repo>/`.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, then save.
4. The site goes live within about a minute. Every later `git push` updates it.

## Preview locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.
