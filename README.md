# GitHub Action for enforcing repo collaborator

This action enforces the current usert to be a repo collaborator;

See [creating-a-javascript-action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action); 

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

## Quick iteration

```bash
ncc build index.js --license licenses.txt
git add -A
git commit -m "This action enforces the current usert to be a repo collaborator"
git push origin main --force
```