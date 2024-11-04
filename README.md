# GitHub Action for enforcing repo maintainer

Thsi action enforces the current usert to be a repo maintainer;

## Setup

```bash
npm init -y
npm install @actions/core
npm install @actions/github
```

## Compile

```bash
npm i -g @vercel/ncc
ncc build index.js --license licenses.txt
```

See https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action


## Quick iteration

```bash
ncc build index.js --license licenses.txt
git add -A
git commit -m "mmm"
git push origin main --force
```