# TCONGS Marketplace Solutions

This is the existing TCONGS Marketplace Solutions website with code-side SEO, accessibility, link, content-trust and security fixes applied without rebuilding the project.

## Local run

The main site is static HTML/CSS/JS. Open `index.html` through a local web server for normal browser testing.

For the contact/consultation forms, run the project through a PHP-capable local server. Copy `.env.example` to `.env` (or configure the same variables in the hosting environment) and provide a newly rotated SMTP app password. **Do not commit `.env`.**

## Production

- Rotate/revoke any SMTP credential previously exposed in older source code.
- Configure `TCONGS_SMTP_USER`, `TCONGS_SMTP_PASS`, `TCONGS_SMTP_PORT` and `TCONGS_ALLOWED_ORIGIN` on the server.
- Verify forms, HTTPS, Search Console, sitemap indexing and live Core Web Vitals after deployment.
