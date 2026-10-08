# NEXORA website

Static corporate homepage for an AI game studio. No build step is required.

## Deploy to Cloudflare Pages

### Git integration

1. Push this directory to a GitHub or GitLab repository.
2. In Cloudflare Dashboard, choose **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Set **Build command** to `exit 0` and **Build output directory** to `.`.
4. Deploy.

### Direct upload

```bash
npx wrangler pages deploy . --project-name=nexora-games
```

Replace `nexora-games` with an available Cloudflare Pages project name. The included `_headers` file adds sensible security headers and long-lived caching for the generated hero art.
# cedartech
