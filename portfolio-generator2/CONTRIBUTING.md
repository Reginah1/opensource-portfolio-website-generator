# Contributing to PortfolioForge

## Golden Rule
**Only edit files in your assigned folder.** This prevents merge conflicts and keeps reviews clean.

## Workflow
1. Fork the repository to your own GitHub account
2. Clone your fork: `git clone <your-fork-url>`
3. Create your feature branch: `git checkout -b feature/your-feature-name`
4. Make changes **only in your assigned folder**
5. Commit with a meaningful message (see format below)
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request — link it to your GitHub Issue with `Closes #N`
8. Request review from at least one Code Reviewer
9. Do **not** merge — the tutor merges all PRs into main

## Branch Names
| Feature | Branch |
|---|---|
| Landing page | `feature/landing-page` |
| Generator | `feature/generator` |
| Themes | `feature/themes` |
| Export | `feature/export` |

## Commit Format
```
feat: add skill tags input with keyboard support
fix: correct live preview not updating on paste
docs: add setup instructions to README
style: improve theme2 project card hover state
```

## File Ownership
Do not edit another contributor's files. If you spot a bug outside your folder, open a GitHub Issue and assign it to the right person.

## GitHub Issues
Every group member must create at least one issue. Label them clearly:
- `bug` — something is broken
- `enhancement` — new feature or improvement
- `documentation` — docs need updating
- `question` — needs discussion

## PR Review Checklist
Before approving a PR, reviewers should check:
- [ ] Code only touches the contributor's assigned folder
- [ ] HTML is valid and renders correctly in Chrome and Firefox
- [ ] Inline styles use CSS variables where possible
- [ ] JS uses `const`/`let`, not `var`
- [ ] No console errors in the browser
- [ ] Commit messages are meaningful
