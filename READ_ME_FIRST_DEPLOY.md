# 🚨 READ THIS FIRST — How to Deploy Correctly

Your last Vercel build failed with:

> Error: Couldn't find any `pages` or `app` directory.

**This was NOT a code problem.** The code in this folder is complete and builds
perfectly. What happened: when the project was uploaded to GitHub using the
**website's "Upload files" drag-and-drop**, GitHub silently dropped all the
folders (`app/`, `components/`, `hooks/`, `utils/`, `public/`) and only uploaded
the loose files at the root. With `app/` missing, Next.js has nothing to build.

GitHub's web uploader is unreliable with nested folders. Use one of the two
methods below instead — both upload the **entire** folder structure correctly.

---

## ✅ Option 1 — GitHub Desktop (easiest, no command line)

1. Download and install **GitHub Desktop**: https://desktop.github.com
2. Sign in, then **File → Clone repository** and choose
   `Laurent1912/verdenfarmswebsite01`. Pick a folder to clone into.
3. Open the cloned folder, and copy **everything inside this project**
   (the `app`, `components`, `hooks`, `utils`, `public` folders **and** all the
   config files) into it.
4. Back in GitHub Desktop you'll see all the new files listed. Type a summary
   like `Add full project source`, click **Commit to main**, then **Push origin**.
5. Check https://github.com/Laurent1912/verdenfarmswebsite01 — you should now see
   an **`app`** folder in the file list. Vercel will auto-rebuild. ✅

---

## ✅ Option 2 — One double-click script (requires Git installed)

Git download: https://git-scm.com/downloads

- **Windows:** double-click **`push-to-github.bat`**
- **Mac / Linux:** open a terminal in this folder and run:
  ```bash
  bash push-to-github.sh
  ```

The script commits the whole folder and pushes it to your repo automatically.

---

## ✅ Option 3 — Manual Git commands

Open a terminal **inside this folder** (you should see `app/` and `package.json`
when you type `ls` or `dir`), then run:

```bash
git init
git add .
git commit -m "Add full Next.js source"
git branch -M main
git remote add origin https://github.com/Laurent1912/verdenfarmswebsite01.git
git push -u origin main --force
```

If Git says the remote already exists, replace the `remote add` line with:

```bash
git remote set-url origin https://github.com/Laurent1912/verdenfarmswebsite01.git
```

> `--force` is intentional and safe here — it replaces the broken partial upload
> with the complete project.

---

## How to know it worked

After pushing, your GitHub repo file list must show these **folders**:

```
app/        ← the important one
components/
hooks/
public/
utils/
package.json
...
```

Once `app/` is there, Vercel detects the commit and rebuilds automatically
(or click **Redeploy** in the Vercel dashboard). The build has already been
tested and compiles with no errors.

For full project details and customization, see **README.md**.
