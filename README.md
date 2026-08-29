# Magnum Minds UI Dashboard

Frontend dashboard for Magnum Minds, built with Angular. This project showcases:

- Services we provide
- Achievements and business outcomes
- Clients we support
- Projects and case studies delivered

The codebase is structured for long-term maintainability and ready for backend API integration.

## Tech Stack

- Angular 22 (standalone architecture)
- TypeScript
- SCSS
- RxJS

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

## Production Build

```bash
npm run build
```

Build output is generated under:

```text
dist/magnum-minds-ui-app/browser
```

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── config/              # App-wide config tokens (API base url, etc.)
│   │   ├── models/              # Strongly typed interfaces
│   │   └── services/            # API and content services
│   ├── features/
│   │   └── dashboard/
│   │       └── pages/
│   │           └── dashboard-page/
│   ├── app.config.ts            # Providers (router, HttpClient)
│   ├── app.routes.ts            # Route mapping
│   └── app.ts                   # Root app shell
├── environments/
│   ├── environment.ts
│   └── environment.production.ts
├── index.html
└── styles.scss

staticwebapp.config.json         # Azure Static Web Apps routing and headers
```

## Backend Integration Ready

This UI already includes:

- Environment-based API URL configuration in `src/environments`
- Reusable API wrapper service in `src/app/core/services/api.service.ts`
- Injection-token-based API config in `src/app/core/config/api.config.ts`

You can now plug in backend endpoints by creating feature-specific data services that call `ApiService`.

## Azure Static Web App Deployment

This repository is prepared for Azure Static Web Apps:

- SPA routing fallback configured in `staticwebapp.config.json`
- Security headers included for baseline hardening
- Production API base URL defaults to `/api` for SWA + Functions integration pattern

Typical deployment pipeline:

```text
GitHub Repository
	↓
GitHub Actions
	↓
Azure Static Web Apps
```

## Notes on Content and Assets

- Dashboard images currently use publicly accessible stock image URLs for quick prototyping.
- Replace with licensed brand-approved assets before production release.

## Next Extension Points

- Add feature modules/pages for detailed client and project views
- Replace static company content service with backend-driven data
- Add authentication/authorization for internal dashboards
