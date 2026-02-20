# Orchestr Skeleton

The official starter skeleton for [Orchestr](https://github.com/orchestr-sh/orchestr) — Laravel for TypeScript.

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server (with hot reload)
npm run dev

# Visit http://localhost:3000
```

## Directory Structure

```
├── app/
│   ├── Console/
│   │   └── Kernel.ts           # Console command registration
│   ├── Events/                 # Event classes
│   ├── Http/
│   │   ├── Controllers/        # Route controllers
│   │   └── Middleware/          # HTTP middleware
│   ├── Jobs/                   # Queue job classes
│   ├── Listeners/              # Event listeners
│   ├── Models/                 # Ensemble ORM models
│   └── Providers/
│       ├── AppServiceProvider.ts
│       ├── EventServiceProvider.ts
│       └── RouteServiceProvider.ts
├── bootstrap/
│   ├── app.ts                  # Application bootstrap
│   └── cli.ts                  # Console entry point
├── config/
│   ├── app.ts                  # Application config
│   ├── cache.ts                # Cache config
│   ├── database.ts             # Database config
│   ├── queue.ts                # Queue config
│   └── view.ts                 # View config
├── database/
│   ├── migrations/             # Database migrations
│   └── seeders/                # Database seeders
├── public/
│   └── index.ts                # HTTP entry point
├── resources/
│   └── views/                  # View templates
│       ├── layouts/
│       │   └── app.html        # Base layout
│       └── welcome.html        # Welcome page
├── routes/
│   └── web.ts                  # Route definitions
└── storage/
    └── framework/
        └── cache/              # File cache storage
```

## Available Commands

```bash
# Development
npm run dev                              # Start dev server with hot reload
npm run build                            # Compile TypeScript
npm run start                            # Start production server

# Database
npm run orchestr migrate                 # Run migrations
npm run orchestr migrate:rollback        # Rollback last migration
npm run orchestr migrate:fresh           # Drop all tables and re-migrate
npm run orchestr migrate:status          # Show migration status
npm run orchestr make:migration <name>   # Create a new migration
npm run orchestr seed                    # Run database seeders
npm run orchestr make:seeder <name>      # Create a new seeder

# Events
npm run orchestr make:event <name>       # Create a new event class
npm run orchestr make:listener <name>    # Create a new listener class
npm run orchestr event:list              # List all registered events

# Queue
npm run orchestr make:job <name>         # Create a new job class
npm run orchestr queue:work              # Start processing jobs
npm run orchestr queue:work --once       # Process a single job
npm run orchestr queue:failed            # List failed jobs
npm run orchestr queue:retry <id|all>    # Retry failed jobs
npm run orchestr queue:flush             # Delete all failed jobs
npm run orchestr queue:table             # Create jobs table migration
npm run orchestr queue:failed-table      # Create failed_jobs migration

# Cache
npm run orchestr cache:clear             # Flush the application cache
npm run orchestr cache:forget <key>      # Remove a specific cache key
npm run orchestr cache:table             # Create cache table migration

# Views
npm run orchestr make:view <name>        # Create a new view template
```

## Views

Views live in `resources/views/` and use a Blade-inspired template syntax.

**Returning a view from a route:**

```typescript
import { Route, view } from "@orchestr-sh/orchestr";

Route.get("/", () => {
  return view("welcome", { name: "World" });
});
```

**Template syntax:**

```html
{{ variable }}
<!-- HTML-escaped output -->
{!! variable !!}
<!-- Raw (unescaped) output -->

@if(condition) ... @elseif(other) ... @else ... @endif @foreach(items as item)
{{ item }} @endforeach @include('partials.nav')
```

**Layouts** — define a base layout with named slots, then extend it from child templates:

`resources/views/layouts/app.html`

```html
<!DOCTYPE html>
<html>
  <body>
    @yield('content')
  </body>
</html>
```

`resources/views/welcome.html`

```html
@extends('layouts.app') @section('content')
<h1>Hello, {{ name }}</h1>
@endsection
```

**Sharing data with all views:**

```typescript
import { View } from "@orchestr-sh/orchestr";

View.share("appName", "My App");
```

## Configuration

All configuration lives in `config/`. The files are loaded automatically by the `ConfigServiceProvider` in `bootstrap/app.ts`.

Environment variables are supported — copy `.env.example` to `.env` and modify as needed.

## Learn More

- [Orchestr Documentation](https://github.com/orchestr-sh/orchestr)
- [Queue System](https://github.com/orchestr-sh/orchestr#queue-system)
- [Cache System](https://github.com/orchestr-sh/orchestr#cache-system)
- [View System](https://github.com/orchestr-sh/orchestr#view-system)
- [Events & Listeners](https://github.com/orchestr-sh/orchestr#events-and-listeners)

## License

MIT
