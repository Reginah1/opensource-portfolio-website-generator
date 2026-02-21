# PortfolioForge 🛠️

> An open-source portfolio website generator — HTML, CSS &amp; JavaScript only.

Fill in a form → Pick a theme → Download your portfolio. No frameworks, no build tools, no account needed.

---

## 📁 Project Structure

```
portfolio-generator/
│
├── features/                        ← All features live here (one folder per contributor)
│   │
│   ├── landing/                     👤 Contributor A — feature/landing-page
│   │   └── index.html               Landing page (fully self-contained, inline styles)
│   │
│   ├── generator/                   👤 Contributor B — feature/generator
│   │   └── generator.html           3-step form + live preview + theme HTML generation
│   │
│   ├── themes/                      👤 Contributor C, D  and E — feature/themes
│   │   ├── theme1.html              👤 Contributor E Minimal Clean — standalone demo
│   │   ├── theme2.html              👤 Contributor C Dark Bold — standalone demo
│   │   └── theme3.html              👤 Contributor D Colorful Creative — standalone demo
│   │
│   └── export/                      👤 Contributor F — feature/export
│       └── export.js                Download logic — exposes window.downloadPortfolio()
│
├── README.md                        👤 Documenter A
├── CONTRIBUTING.md                  👤 Documenter B
├── LICENSE.md                       👤 Documenter C
└── .github/
    └── workflows/
        └── ci.yml                   👤 Repository Manager — CI/CD pipeline
```

---

## 🚀 How to Run

No build step needed. Just open the files in a browser:

```bash
# Clone the repo
git clone <your-repo-url>
cd portfolio-generator

# Open the landing page
open features/landing/index.html

# Or go directly to the generator
open features/generator/generator.html
```

> **Note:** Because `export.js` is loaded via a relative path, open the files through a local server
> (e.g. VS Code Live Server, or `npx serve .`) to avoid browser CORS restrictions on file:// URLs.

---

## 👥 Team Roles & Members

| Role                   | Member | Branch                 | Responsibility                                       |
| ---------------------- | ------ | ---------------------- | ---------------------------------------------------- |
| **Project Lead**       | [Name] | —                      | Coordination, GitHub Issues, project report          |
| **Repository Manager** | [Name] | —                      | Repo setup, CI/CD, README, CONTRIBUTING              |
| **Maintainer**         | [Name] | —                      | Code quality, PR, Issue triage, code quality, review |
| **Code Reviewer**      | [Name] | —                      | Pull request                                         |
| **Code Reviewer**      | [Name] | —                      | Pull request reviews                                 |
| **Code Reviewer**      | [Name] | —                      | Pull request reviews                                 |
| **Contributor A**      | [Name] | `feature/landing-page` | `features/landing/index.html`                        |
| **Contributor B**      | [Name] | `feature/generator`    | `features/generator/generator.html`                  |
| **Contributor C**      | [Name] | `feature/themes`       | `features/themes/theme1,2,3.html`                    |
| **Contributor D**      | [Name] | `feature/themes`       | `features/themes/theme1,2,3.html`                    |
| **Contributor E**      | [Name] | `feature/themes`       | `features/themes/theme1,2,3.html`                    |
| **Contributor F**      | [Name] | `feature/export`       | `features/export/export.js`                          |
| **Contributor**        | [Name] | —                      | documentation                                        |
| **Contributor**        | [Name] | —                      | documentation                                        |
| **Contributor**        | [Name] | —                      | documentation                                        |

---

## 🔗 Feature Ownership Rules

Each contributor **only edits files in their assigned folder**. This prevents merge conflicts.

| Folder                | Owner         | Files they touch |
| --------------------- | ------------- | ---------------- |
| `features/landing/`   | Contributor A | `index.html`     |
| `features/generator/` | Contributor B | `generator.html` |
| `features/themes/`    | Contributor C | `theme1.html`    |
| `features/themes/`    | Contributor C | `theme2.html`    |
| `features/themes/`    | Contributor C | `theme3.html`    |
| `features/export/`    | Contributor D | `export.js`      |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup, no frameworks
- **CSS3** — Inline per file, variables, grid, flexbox, animations
- **JavaScript ES6+** — Vanilla JS, no libraries
- **GitHub Actions** — CI/CD: HTML lint + file validation

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

MIT License — see [LICENSE.md](LICENSE.md).
