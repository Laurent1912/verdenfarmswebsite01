#!/usr/bin/env bash
# ---------------------------------------------------------------
# Pushes the COMPLETE Verden Farms project to GitHub.
# Fixes the "Couldn't find any pages or app directory" error that
# happens when folders are dropped by GitHub's web uploader.
# ---------------------------------------------------------------
set -e

REPO_URL="https://github.com/Laurent1912/verdenfarmswebsite01.git"

echo ""
echo "🌱 Verden Farms — pushing full project to GitHub"
echo "------------------------------------------------"

# Sanity check: are we in the right folder?
if [ ! -d "app" ] || [ ! -f "package.json" ]; then
  echo "❌ This script must be run from inside the project folder"
  echo "   (the folder that contains the 'app' folder and package.json)."
  echo "   Current folder: $(pwd)"
  exit 1
fi

# Check git is installed
if ! command -v git >/dev/null 2>&1; then
  echo "❌ Git is not installed. Download it from https://git-scm.com/downloads"
  exit 1
fi

git init
git add .
git commit -m "Add full Next.js source (app, components, hooks, utils, public)" || true
git branch -M main

if git remote | grep -q "^origin$"; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo ""
echo "⬆️  Pushing to $REPO_URL ..."
git push -u origin main --force

echo ""
echo "✅ Done! Open your repo and confirm an 'app' folder is now listed:"
echo "   https://github.com/Laurent1912/verdenfarmswebsite01"
echo "   Vercel will rebuild automatically."
