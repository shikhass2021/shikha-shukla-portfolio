# Shikha Shukla — Personal Portfolio

A static portfolio site. `index.html` forwards visitors to `shikha_profile.html`; the portfolio uses `styles.css`, `script.js`, and images in `images/`.

## Run locally

Open `index.html` in a browser, or start a local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a new public repository on GitHub. Do not initialize it with a README, license, or `.gitignore`.
2. In this folder, initialize Git and push the site (replace `YOUR-USERNAME/YOUR-REPOSITORY` with the repository path):

	```sh
	git init
	git add .
	git commit -m "Prepare portfolio for GitHub Pages"
	git branch -M main
	git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
	git push -u origin main
	```

3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. GitHub will show the published URL in the Pages settings after deployment finishes.

For a user or organization site, name the repository `YOUR-USERNAME.github.io`; otherwise, the URL includes the repository name.
