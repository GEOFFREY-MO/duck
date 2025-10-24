# DuckConnect MVP

> Stay Online, Even When Offline

DuckConnect is a cross-platform browser extension + web app that lets users stay online even when offline. "Turn on the Duck" to keep watching, working, and syncing data seamlessly across all your devices.

## Mission

DuckConnect adapts like a duck:
- **Walks** (offline) - Smart caching and local storage
- **Swims** (data-light) - Efficient sync and compression  
- **Flies** (full online) - Seamless cloud integration

## Architecture

This is a Turborepo monorepo containing:

### Apps
- **`apps/web`** - Next.js 15 web application (landing, dashboard, settings)
- **`apps/extension`** - Browser extension (Manifest v3, Next.js export)
- **`apps/api`** - NestJS backend API

### Packages
- **`packages/ui`** - Shared UI components with Tailwind + ShadCN
- **`packages/types`** - TypeScript interfaces and types
- **`packages/utils`** - Shared utility functions

## Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GEOFFREY-MO/duck.git
   cd duck
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development services**
   ```bash
   # Start all services
   npm run dev
   
   # Or start individual services
   npm run dev --filter=web
   npm run dev --filter=api
   ```

4. **Start Docker services**
   ```bash
   docker-compose up -d
   ```

### Development URLs
- **Web App**: http://localhost:3000
- **API**: http://localhost:3001
- **MinIO Console**: http://localhost:9001
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

##  Design System

### Brand Colors
| Role | Hex | Usage |
|------|-----|-------|
| Primary Gradient Start | `#47E2C1` | Main brand color |
| Primary Gradient End | `#4CB4F9` | Gradient accent |
| Background Light | `#E6F7F6` | Light theme background |
| Background Dark | `#0B0C10` | Dark theme background |
| Accent Yellow | `#FFD44F` | Highlights and CTAs |
| Text Primary | `#0A0A0A` | Main text color |
| Text Secondary | `#8E9CA9` | Secondary text |
| Button Hover | `#3AD0C5` | Interactive states |
| Border | `#D8E8EC` | UI borders |

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter Regular  
- **Code/Stats**: Roboto Mono

## Features

### Web App (`apps/web`)
- **Landing Page** - Hero, features, pricing, CTA
- **Authentication** - NextAuth (Email + Google OAuth)
- **Dashboard** - User metrics, data saved, devices linked
- **Settings** - User info, plan management, device settings
- **Billing** - Stripe + M-Pesa integration

### Browser Extension (`apps/extension`)
- **Popup UI** - Toggle Duck Mode, status indicators, cache info
- **Background Scripts** - Connection detection, data caching, sync
- **Content Scripts** - Page data extraction and processing
- **Options Page** - Account connection, sync settings

### Backend API (`apps/api`)
- **Auth Module** - JWT, OAuth2, user management
- **Cache Module** - Metadata storage and retrieval
- **Billing Module** - Stripe + M-Pesa payment processing
- **Analytics Module** - Usage stats, cache performance
- **WebSocket** - Real-time sync notifications

## Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript** (Full type safety)
- **TailwindCSS** + **ShadCN/UI**
- **Framer Motion** (Animations)
- **Zustand** (State management)
- **NextAuth** (Authentication)
- **SWR** (Data fetching)

### Backend
- **NestJS** (TypeScript framework)
- **PostgreSQL** (Primary database)
- **Prisma** (ORM)
- **Redis** (Caching & sessions)
- **MinIO** (S3-compatible storage)
- **JWT** (Authentication)

### Extension
- **Manifest v3** (Chrome extension)
- **IndexedDB** (Local storage)
- **Web APIs** (Background sync)
- **AES Encryption** (Data security)

### DevOps
- **Docker** (Containerization)
- **GitHub Actions** (CI/CD)
- **Vercel** (Frontend deployment)
- **Railway** (Backend deployment)
- **Cloudflare** (CDN)

## Available Scripts

```bash
# Development
npm run dev              # Start all apps in development
npm run dev --filter=web # Start only web app
npm run dev --filter=api # Start only API

# Building
npm run build            # Build all apps
npm run build --filter=web # Build only web app

# Linting & Type Checking
npm run lint             # Lint all packages
npm run check-types      # Type check all packages

# Docker
docker-compose up -d     # Start all services
docker-compose down      # Stop all services
```

## Security

- **AES Encryption** for local cache
- **HTTPS** enforced in production
- **JWT** with refresh token flow
- **CORS** restricted to main domain
- **Input validation** and sanitization

## Pricing Plans

| Feature | Free | Pro ($9/mo) | Premium ($29/mo) |
|---------|------|-------------|------------------|
| Cache Size | 500MB | 5GB | 50GB |
| Devices | 1 | 3 | Unlimited |
| DuckAI | ❌ | Lite | Full |
| Support | Community | Priority | 24/7 |

## Deployment

### Frontend (Vercel)
- Automatic deployment on push to `main`
- Preview deployments for PRs
- Environment variables configured

### Backend (Railway)
- Automatic deployment on push to `main`
- Database migrations on deploy
- Health checks and monitoring

### Extension
- Manual upload to Chrome Web Store
- Automated builds via GitHub Actions
- Version management and updates

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [docs.duckconnect.com](https://docs.duckconnect.com)
- **Issues**: [GitHub Issues](https://github.com/GEOFFREY-MO/duck/issues)
- **Discord**: [Join our community](https://discord.gg/duckconnect)
- **Email**: support@duckconnect.com

---

**Built with by the DuckConnect Team**

*"Adapt like a duck - walks, swims, flies!"* 
