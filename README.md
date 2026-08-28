# Mangum Minds UI

This repository contains the frontend user interface (UI) for the Mangum Minds projects. The application is built using Angular and provides a modern, responsive, and scalable user experience.

## Overview

The Mangum Minds UI application serves as the frontend layer of the platform, communicating with backend APIs to deliver business functionality through an intuitive web interface.

### Key Features

- Angular-based frontend application
- Responsive and mobile-friendly design
- Component-driven architecture
- Environment-based configuration
- REST API integration
- Scalable and maintainable code structure

## Technology Stack

- Angular
- TypeScript
- HTML5
- CSS3 / SCSS
- RxJS
- Angular Material (if applicable)

## Prerequisites

Before running the application, ensure the following tools are installed:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Angular CLI

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/<organization>/<repository-name>.git
cd <repository-name>
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
ng serve
```

Navigate to:

```text
http://localhost:4200
```

The application will automatically reload when source files are modified.

## Build

To create a production build:

```bash
ng build --configuration production
```

Build artifacts will be generated under the `dist/` directory.

## Project Structure

```text
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── pages/
│   └── shared/
├── assets/
├── environments/
└── styles/
```

## Environment Configuration

Update the environment files located in:

```text
src/environments/
```

Example:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com'
};
```

## Deployment

The application is configured to be deployed through GitHub Actions and Azure services.

Typical deployment flow:

```text
GitHub Repository
        ↓
GitHub Actions
        ↓
Azure Static Web Apps / Azure App Service
```

## Development Guidelines

- Follow Angular style guidelines.
- Use reusable components whenever possible.
- Keep services focused on API and business logic.
- Maintain clean and readable code.
- Write meaningful commit messages.

## Contributing

1. Create a feature branch.
2. Implement your changes.
3. Test the application.
4. Submit a Pull Request for review.

## License

This project is proprietary and intended for use within Mangum Minds projects unless stated otherwise.

## Contact

For questions, issues, or enhancement requests, please contact the project maintainers.
