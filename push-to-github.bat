@echo off
REM ---------------------------------------------------------------
REM Pushes the COMPLETE Verden Farms project to GitHub.
REM Fixes the "Couldn't find any pages or app directory" error that
REM happens when folders are dropped by GitHub's web uploader.
REM ---------------------------------------------------------------
setlocal

set REPO_URL=https://github.com/Laurent1912/verdenfarmswebsite01.git

echo.
echo Verden Farms - pushing full project to GitHub
echo ------------------------------------------------

if not exist "app" (
  echo ERROR: Run this from inside the project folder ^(must contain the "app" folder^).
  echo Current folder: %CD%
  pause
  exit /b 1
)
if not exist "package.json" (
  echo ERROR: package.json not found. Run this from inside the project folder.
  pause
  exit /b 1
)

where git >nul 2>nul
if errorlevel 1 (
  echo ERROR: Git is not installed. Download it from https://git-scm.com/downloads
  pause
  exit /b 1
)

git init
git add .
git commit -m "Add full Next.js source (app, components, hooks, utils, public)"
git branch -M main

git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin %REPO_URL%
) else (
  git remote set-url origin %REPO_URL%
)

echo.
echo Pushing to %REPO_URL% ...
git push -u origin main --force

echo.
echo Done! Open your repo and confirm an "app" folder is now listed:
echo   https://github.com/Laurent1912/verdenfarmswebsite01
echo Vercel will rebuild automatically.
pause
