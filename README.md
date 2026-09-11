# Etmam Developments

**Etmam** is an Arabic-first business and administrative services platform built as a full-stack web application with **Next.js 15** and **Strapi 5**.

## Overview

The repository separates the customer-facing application from the content and service-management backend. The frontend consumes structured APIs while Strapi provides a flexible CMS and data layer for business-service content.

## Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Apollo Client
- GraphQL
- RxJS
- Swiper

### Backend / CMS
- Strapi 5
- GraphQL
- Users & Permissions
- PostgreSQL support
- SQLite for local development
- TypeScript

## Repository Structure

```text
etmam-developments/
├── frontend/        # Next.js customer-facing application
├── strapi/          # Strapi CMS and API backend
└── Services-Data/   # Service-related source data
```

## Key Engineering Features

- Arabic-focused business services experience
- Headless CMS architecture
- GraphQL-powered data access
- Apollo Client integration
- Structured service content
- Responsive frontend architecture
- Strapi administration and permissions
- PostgreSQL-ready backend
- TypeScript across the application stack
- Frontend linting, type checking and production analysis scripts

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd strapi
npm install
npm run dev
```

## Quality Commands

```bash
cd frontend
npm run lint
npm run type-check
npm run build
```

## Architecture

The frontend and CMS are independently deployable. Next.js handles the public user experience while Strapi manages structured business content and exposes REST/GraphQL APIs. This separation keeps content operations independent from frontend releases and makes the platform easier to extend.

## Team

Developed and maintained by **Build8 Developments**.
