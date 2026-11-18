# Orchestr Skeleton

The official starter skeleton for [Orchestr](https://github.com/orchestr-sh/orchestr) — Laravel for TypeScript.

> Requires Node `^22.18.0 || >=24.0.0`. `drizzle-orm`, `reflect-metadata`, and the
> SQLite driver come with `@orchestr-sh/orchestr` itself — no need to install
> them separately. Feature add-ons (`bcrypt`/`argon2`, `@faker-js/faker`,
> `ioredis`) stay opt-in.

## Quick Start

```bash
# Install dependencies
npm install

# Create your local environment file
cp .env.example .env

# Create the SQLite database and run migrations
npm run orchestr migrate

# Start the development server (with hot reload)
npm run dev

# Visit http://localhost:3000
```

> Without a `.env` (or `APP_ENV`) the app runs in `production`, and
> commands like `migrate` deliberately refuse to touch the database unless
> you pass `--force`.

## Directory Structure

```
├── app/
│   ├── Console/
│   │   ├── Commands/              # Your custom console commands (auto-discovered)
│   │   └── Kernel.ts              # Console command registration
│   ├── Events/                    # Event classes
│   ├── Http/
│   │   ├── Controllers/           # Route controllers
│   │   └── Middleware/            # HTTP middleware
│   ├── Jobs/                      # Queue job classes
│   ├── Listeners/                 # Event listeners
│   ├── Models/                    # Ensemble ORM models
│   └── Providers/
│       ├── AppServiceProvider.ts  # App services + database connection boot
│       ├── EventServiceProvider.ts
│       └── RouteServiceProvider.ts
├── bootstrap/
│   ├── app.ts                     # Application bootstrap
│   └── cli.ts                     # Console entry point
├── config/
│   ├── app.ts                     # Application config
│   ├── cache.ts                   # Cache config
│   ├── database.ts                # Database config
│   ├── queue.ts                   # Queue config
│   └── view.ts                    # View config
├── database/
│   ├── migrations/                # Database migrations
│   └── seeders/                   # Database seeders
├── public/
│   └── index.ts                   # HTTP entry point
├── resources/
│   └── views/                     # View templates
│       ├── layouts/
│       │   └── app.html           # Base layout
│       └── welcome.html           # Welcome page
├── routes/
│   └── web.ts                     # Route definitions
└── storage/
    └── framework/
        └── cache/                 # File cache storage
```

## Available Commands

Every framework command runs through the console kernel:

```bash
npm run orchestr <command>              # via the skeleton's bootstrap/cli.ts
npm run orchestr -- <cmd> --flags       # npm swallows flags unless you pass `--` first
npx orchestr <command>                  # via the package's own CLI (same commands)
```

```bash
# Development
npm run dev                              # Start dev server with hot reload
npm run build                            # Compile TypeScript
npm run start                            # Start production server

# Database
npm run orchestr migrate                 # Run migrations
npm run orchestr migrate:rollback        # Rollback last batch
npm run orchestr migrate:fresh           # Drop all tables and re-migrate
npm run orchestr migrate:status          # Show migration status
npm run orchestr make:migration <name>   # Create a new migration (--create --table=users)
npm run orchestr db:seed                 # Run database seeders
npm run orchestr db:wipe                 # Drop all tables
npm run orchestr make:seeder <name>      # Create a new seeder

# Scaffolding
npm run orchestr -- make:model <Name> --migration --factory --seed  # Ensemble model + companions
npm run orchestr make:controller <Name>  # Controller
npm run orchestr make:request <Name>     # Form request
npm run orchestr make:middleware <Name>  # Middleware
npm run orchestr make:provider <Name>    # Service provider
npm run orchestr make:observer <Name>    # Model observer (--model=Post)
npm run orchestr make:policy <Name>      # Authorization policy (--model=Post)
npm run orchestr make:factory <Name>     # Model factory
npm run orchestr make:resource <Name>    # JSON API resource
npm run orchestr make:rule <Name>        # Validation rule
npm run orchestr make:command <Name>     # Console command (goes in app/Console/Commands)
npm run orchestr make:test <Name>        # Vitest test file

# Events
npm run orchestr make:event <name>       # Create a new event class
npm run orchestr make:listener <name>    # Create a new listener (--event=..., --queued)
npm run orchestr event:list              # List all registered events

# Queue
npm run orchestr make:job <name>         # Create a new job class
npm run orchestr queue:work              # Start processing jobs
npm run orchestr queue:listen            # Dev supervisor that restarts the worker on changes
npm run orchestr -- queue:work --once    # Process a single job
npm run orchestr queue:failed            # List failed jobs
npm run orchestr queue:retry <id|all>    # Retry failed jobs
npm run orchestr queue:flush             # Delete all failed jobs
npm run orchestr queue:table             # Create jobs table migration
npm run orchestr queue:failed-table      # Create failed_jobs migration

# Cache
npm run orchestr cache:clear             # Flush the application cache
npm run orchestr cache:forget <key>      # Remove a specific cache key
npm run orchestr cache:table             # Create cache table migration

# Task scheduling
npm run orchestr schedule:run            # Run all due tasks (your single crontab line)
npm run orchestr schedule:list           # List registered tasks

# Views
npm run orchestr make:view <name>        # Create a new view template
npm run orchestr view:cache              # Compile all views up front

# Deployment & optimization
npm run orchestr config:cache            # Compile config/ into a snapshot
npm run orchestr route:list              # Table of routes, middleware, and actions
npm run orchestr route:cache             # Snapshot the route collection
npm run orchestr optimize                # Config, route, and view caches in one shot
npm run orchestr key:generate            # Write a fresh APP_KEY into .env
npm run orchestr serve                   # Start the HTTP kernel
npm run orchestr about                   # Environment and driver summary
```

## Views

Views live in `resources/views/` and use a Blade-inspired template syntax.

**Returning a view from a route:**

```typescript
import { Route, view } from '@orchestr-sh/orchestr';

Route.get('/', () => {
  return view('welcome', { name: 'World' });
});
```

**Template syntax:**

```html
{{ variable }}              <!-- HTML-escaped output -->
{!! variable !!}            <!-- Raw (unescaped) output -->

@if(condition)
  ...
@elseif(other)
  ...
@else
  ...
@endif

@foreach(items as item)
  {{ item }}
@endforeach

@include('partials.nav')
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
@extends('layouts.app')

@section('content')
  <h1>Hello, {{ name }}</h1>
@endsection
```

**Sharing data with all views:**

```typescript
import { ViewFacade as View } from '@orchestr-sh/orchestr';

View.share('appName', 'My App');
```

## Models

Ensembles are ActiveRecord models. `AppServiceProvider.boot()` connects the
default database and registers the connection resolver, so models work out of
the box:

```typescript
import { Ensemble } from '@orchestr-sh/orchestr';

export class User extends Ensemble {
  protected table = 'users';
  static fillable = ['name', 'email'];
}

const users = await User.query().where('active', true).get();
const user = await User.create({ name: 'John', email: 'john@example.com' });

user.setAttribute('name', 'Jane'); // plain property writes are not tracked
await user.save();
```

Relationships (`hasMany`/`belongsTo`/`belongsToMany`/polymorphic), scopes,
soft deletes, pagination, factories, and observers are all supported — see the
[Orchestr README](https://www.npmjs.com/package/@orchestr-sh/orchestr) for the
full surface.

## Configuration

All configuration lives in `config/`. The files are loaded automatically by the `ConfigServiceProvider` in `bootstrap/app.ts`.

Environment variables are supported — copy `.env.example` to `.env` and modify as needed. Values already present in the real process environment win over `.env` values, and the parser understands quotes, inline comments, and `${VAR}` interpolation.

## Testing

Tests run on Vitest with type-aware linting from oxlint:

```bash
npm run test:run    # run the suite
npm run test:lint   # oxlint + oxfmt checks
npm run test:types  # type-checking lint
```

## Learn More

- [Orchestr Documentation](https://github.com/orchestr-sh/orchestr)
- [Queue System](https://github.com/orchestr-sh/orchestr#queue-system)
- [Cache System](https://github.com/orchestr-sh/orchestr#cache-system)
- [Task Scheduling](https://github.com/orchestr-sh/orchestr#task-scheduling)
- [View System](https://github.com/orchestr-sh/orchestr#view-system)
- [Events & Listeners](https://github.com/orchestr-sh/orchestr#events-and-listeners)

## License

MIT
