# Uncle Inc. — Complete Build Plan

## 1. PRODUCT

Uncle Inc. is an AI-assisted MVP development platform that turns a founder's plain-language idea into a structured, testable prototype with built-in user testing panels and analytics. The core value: collapsing the gap between "I have an idea" and "I have validated evidence" by giving solo founders a single workspace where they describe the idea, generate a prototype scaffold, recruit testers, and read the results — without stitching together five SaaS tools. Primary user: a non-technical or semi-technical early-stage founder (pre-seed, often solo or 2-person team) who is time-poor, budget-constrained, and currently drowning in Notion docs + Figma frames + Google Forms. The specific pain it solves: founders spend 4–8 weeks and $5k–$20k on prototypes that never get tested with real users, because the tooling for prototyping, recruiting testers, and reading signal is fragmented. Uncle Inc. consolidates that loop into one product.

## 2. WHO IT'S FOR

The ICP is a solo or two-person early-stage founder, 25–45, building a B2C or prosumer product, with limited engineering help and a 6-week runway to prove or kill an idea. They are technical enough to write a clear product brief but not technical enough to ship a full app in a weekend. They are skeptical of "AI magic" and want to see structure, not hype. They live in Linear, Notion, and Figma today.

How this shapes the product and tone:
- **One primary CTA per screen.** No nested menus. The dashboard opens on a single "Today" view with one action: continue the current project or start a new one.
- **Plain language, not jargon.** Copy says "describe your idea" not "input prompt tokens." Empty states explain what to do next in one sentence.
- **Dark analytical interface.** Founders using Linear/Vercel/Resend expect a developer-tool aesthetic. The Signal Lab archetype signals "serious tool, not a toy."
- **Honest about what's built.** The "Generate MVP" button is wired to a real handler that creates a prototype record and shows a clear "scaffolding in progress" state — no fake loading spinners pretending to generate AI output that doesn't exist.
- **Pricing visible upfront.** Time-poor founders bounce if pricing is hidden. Three tiers, plain numbers, on the landing page.

## 3. LOOK & FEEL

### Visual System

**Vibe & positioning:** Signal Lab — a dark, analytical, instrument-panel aesthetic. The product feels like a control surface for a founder's idea, not a marketing site. Generous negative space, monospace data, restrained color used only for state and action.

**Color palette (CSS custom properties in `globals.css`):**
- `--ink-black: #08080e` (page background)
- `--ink-elevated: #0f0f17` (cards, panels)
- `--ink-border: #1a1a26` (dividers, input borders)
- `--ink-muted: #6b6b80` (secondary text)
- `--text-primary: #e8e8f0`
- `--text-secondary: #a0a0b8`
- `--indigo: #4f46e5` (primary action)
- `--indigo-hover: #6366f1`
- `--cyan: #06b6d4` (data, links)
- `--teal: #2dd4bf` (success, "live" indicators)
- `--danger: #ef4444`
- `--warning: #f59e0b`

**Typography:**
- Headings: **Space Grotesk** (500/600/700) — geometric, technical, modern
- Body: **Space Grotesk** (400) — same family for cohesion
- Code/data/labels: **JetBrains Mono** (400/500) — for project IDs, timestamps, status badges, numeric metrics
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 px

**Spacing & layout:**
- 8px base grid. Cards use 24px internal padding. Sections separated by 96px on landing, 48px in dashboard.
- Max content width: 1200px on landing, 1440px in dashboard with sidebar.
- Border radius: 8px on inputs/buttons, 12px on cards, 16px on hero panels.

**Key components:**
- **Button:** three variants — `primary` (indigo fill, white text), `secondary` (transparent, ink-border, white text), `ghost` (no border, muted text). All have hover state lifting to `--indigo-hover` or lightening border. Disabled state at 40% opacity.
- **Input:** dark `--ink-elevated` background, `--ink-border` border, focus ring is 2px `--cyan`. Label above, helper text below in `--text-secondary`.
- **Card:** `--ink-elevated` background, 1px `--ink-border`, 12px radius. Optional left accent stripe in `--teal` for "active" or `--cyan` for "in progress."
- **Status badge:** JetBrains Mono, 11px, uppercase, pill shape. Variants: `draft` (muted), `active` (teal), `archived` (muted with strikethrough).
- **Sidebar nav:** fixed left, 240px wide, `--ink-black` background, 1px right border. Active item has 2px left border in `--indigo` and `--text-primary` text.
- **Compass motif:** used as the logo mark (a stylized 4-point compass in indigo→teal gradient) and as a subtle decorative element on the landing hero (large, low-opacity, behind the headline).

**Iconography:** Lucide React icons throughout. Stroke width 1.5. Size 16px inline, 20px in nav, 24px in feature cards.

**Imagery:** No stock photos. The landing page uses abstract gradient meshes (indigo→cyan→teal radial gradients at low opacity) and the compass motif. The dashboard uses no imagery — pure UI.

**Interaction & motion:**
- Page transitions: 150ms fade.
- Button hover: 100ms background-color transition.
- Card hover: 1px border lightens to `--indigo` at 50% opacity.
- Form submit: button shows inline spinner (cyan, 14px) replacing label.
- No scroll-triggered animations. No parallax. Restrained.

### Screen-by-Screen Layout

**Landing page (`/`):**
- **Top nav (sticky, 64px):** Logo (compass + "Uncle Inc.") left, "Sign In" + "Start Building Free" buttons right. Background `--ink-black` with 1px bottom border on scroll.
- **Hero (100vh, centered):** Compass motif at 30% opacity behind. H1 in Space Grotesk 64px: "From Idea to Validated MVP — Faster Than Ever." Subhead in 20px `--text-secondary`: "Describe your idea in plain language. Get a structured prototype, recruit testers, and read the signal — all in one workspace." Two buttons: primary "Start Building Free" → `/sign-up`, secondary "See how it works" → scrolls to `#how`. Below: small JetBrains Mono line "No credit card required · 1 free project".
- **Features section (`#features`, 96px vertical padding):** Section heading "Everything you need to validate." 4 cards in a 2×2 grid (desktop) / stacked (mobile): AI Prototyping, User Testing Panels, Analytics Dashboard, Sprint Planning. Each card: 24px icon (cyan), 20px heading, 14px body text in `--text-secondary`.
- **How it works (`#how`):** Section heading "Three steps from idea to evidence." Three numbered steps in a horizontal row with connecting line: 1. Describe (write a brief), 2. Generate (get a prototype scaffold), 3. Launch (recruit testers, read results). Each step has a number in JetBrains Mono, heading, 2-line description.
- **Pricing section (`#pricing`):** Section heading "Pricing that scales with you." Three tier cards side-by-side: Free ($0, 1 project, "For trying it out"), Founder Launch ($49/mo, 5 projects, "For solo founders"), Studio ($99/mo, unlimited projects, "For small teams"). Each card: tier name, price in 48px Space Grotesk, feature list with cyan checkmarks, CTA button. Founder Launch card has a 1px `--indigo` border and a "Most popular" badge in teal.
- **Footer:** 4 columns — Product (Features, Pricing, Changelog), Company (About, Blog, Contact), Legal (Terms, Privacy), Resources (Docs, Help). Bottom row: "Uncle Inc." logo + "© 2026 Uncle Inc." in `--text-muted`.

**Sign Up (`/sign-up`):**
- Centered card (480px wide) on `--ink-black` background. Compass logo top-center. H1 "Create your account." Subtext "Start with the free tier. No credit card required."
- Form fields (stacked, 16px gap): Full name, Email, Password (with helper "At least 8 characters"). Primary button "Create account" full-width.
- Below form: "Already have an account? Sign in" link to `/sign-in`.
- Error banner above form if submission fails (red border, red text, `--ink-elevated` background).

**Sign In (`/sign-in`):**
- Same layout as sign-up. H1 "Welcome back." Fields: Email, Password. Primary button "Sign in". Link below: "Don't have an account? Sign up".

**Dashboard (`/dashboard`):**
- **Sidebar (240px fixed left):** Logo at top. Nav items: Dashboard (home icon), Projects (folder icon), Settings (gear icon). Bottom: user email in `--text-muted`, Logout button.
- **Main content (max-width 960px, centered):** Top bar with "Dashboard" heading and "New Project" button (primary, top-right). Welcome line: "Welcome back, {name}." in 20px.
- **Stats row (3 cards):** "Projects" (count), "Active" (count of status=active), "This week" (count created in last 7 days). Each card: JetBrains Mono label uppercase 11px, 32px number in Space Grotesk.
- **Recent projects section:** Heading "Your projects." If empty: empty state card with compass icon, "Start your first MVP" heading, "Describe your idea and get a structured prototype in minutes." body, primary button "Create your first project" → `/dashboard/projects/new`. If projects exist: list of project cards (name, status badge, description truncated to 2 lines, created date in JetBrains Mono), each linking to `/dashboard/projects/[id]`.

**Projects list (`/dashboard/projects`):**
- Same sidebar. Main: heading "Projects" + "New Project" button. Filter row: "All / Active / Draft" tabs (cyan underline on active). Grid of project cards (2 columns desktop, 1 mobile). Each card: name, status badge, description, created date, "Open" link.

**New project (`/dashboard/projects/new`):**
- Same sidebar. Main: heading "Start a new project." Form card: Project name (required), Description (textarea, required, helper "Describe what you're building and who it's for"), Target audience (textarea, required, helper "Who is this for? Be specific."). Buttons: "Cancel" (secondary, → `/dashboard/projects`), "Create project" (primary). On submit: insert into Supabase, redirect to `/dashboard/projects/[id]`.

**Project detail (`/dashboard/projects/[id]`):**
- Same sidebar. Main: breadcrumb "Projects / {name}". Header: project name (32px), status badge, created date in JetBrains Mono.
- **MVP progress tracker:** horizontal stepper with 4 steps — Brief, Prototype, Testing, Results. Current step highlighted in `--indigo`, completed steps in `--teal`, future steps in `--ink-border`. Below stepper: current step description and primary action button.
- **Project info card:** Description, Target audience (read-only display).
- **Generate MVP button:** if status is `draft`, shows "Generate MVP" primary button. On click: updates project status to `active`, sets `prototype_status` to `scaffolding`, shows a card "Prototype scaffolding in progress — this typically takes a few minutes. We'll notify you when it's ready." with a teal pulsing dot. Honest placeholder — no fake AI generation.
- **Danger zone (bottom):** "Archive project" button (secondary, red text on hover).

**Settings (`/dashboard/settings`):**
- Same sidebar. Main: heading "Settings". Two sections:
  - **Profile:** Read-only display of Name, Email, Member since (date). No edit form (out of scope for v1, honest placeholder note: "Profile editing coming soon").
  - **Plan:** Current plan card showing tier name, price, project limit, usage (e.g., "2 of 5 projects used" with a progress bar in `--indigo`). "Upgrade" button (secondary, links to `#pricing` anchor on landing — honest, no fake checkout).

## 4. USER FLOWS

### Flow 1: Sign up → first project
1. User lands on `/`. Clicks "Start Building Free" → `/sign-up`.
2. Fills name, email, password. Submits. Supabase creates user. Auto sign-in. Redirect to `/dashboard`.
3. Dashboard shows empty state. User clicks "Create your first project" → `/dashboard/projects/new`.
4. Fills project name, description, target audience. Submits. Insert into `projects` table with `user_id` from session. Redirect to `/dashboard/projects/[id]`.
5. Project detail shows status `draft`, stepper on "Brief" (completed). User clicks "Generate MVP" → status updates to `active`, `prototype_status` to `scaffolding`. UI shows honest "in progress" state.

**States:** form validation errors (inline red text below field), network error (red banner above form), duplicate email (Supabase error mapped to "An account with this email already exists"), password too short (client-side check before submit).

### Flow 2: Sign in
1. User clicks "Sign In" in nav → `/sign-in`.
2. Enters email, password. Submits. Supabase `signInWithPassword`. On success, redirect to `/dashboard`.
3. Middleware checks session on `/dashboard` routes. If no session, redirect to `/sign-in`.

**States:** wrong password (Supabase error → "Invalid email or password"), unconfirmed email (Supabase error → "Please confirm your email address"), network error.

### Flow 3: Returning user with projects
1. Sign in → `/dashboard`. Shows stats (3 projects, 1 active, 2 this week) and recent projects list.
2. Clicks a project card → `/dashboard/projects/[id]`. Sees stepper, project info, current state.

### Flow 4: Logout
1. User clicks "Logout" in sidebar. Calls `supabase.auth.signOut()`. Redirect to `/`. Middleware blocks `/dashboard` on next visit.

### Flow 5: Protected route access (unauthenticated)
1. User navigates to `/dashboard` directly. Middleware checks session via Supabase server client. No session → redirect to `/sign-in?redirect=/dashboard`.
2. After sign-in, redirect to original path.

## 5. PAGES / ROUTES

| Route | Purpose | Layout | Main UI |
|---|---|---|---|
| `/` | Landing page | Marketing layout (no sidebar) | Hero, features, how-it-works, pricing, footer |
| `/sign-up` | Account creation | Centered card on dark bg | Name/email/password form |
| `/sign-in` | Authentication | Centered card on dark bg | Email/password form |
| `/dashboard` | Authenticated home | Sidebar + main | Welcome, stats, recent projects |
| `/dashboard/projects` | All projects | Sidebar + main | Filter tabs, project grid |
| `/dashboard/projects/new` | Create project | Sidebar + main | Project form |
| `/dashboard/projects/[id]` | Project detail | Sidebar + main | Stepper, info, actions |
| `/dashboard/settings` | User settings | Sidebar + main | Profile, plan info |

## 6. CORE FEATURES

### F1: Supabase Auth (email + password)
- **What:** Sign up and sign in with email and password using `@supabase/ssr`.
- **How it works:**
  - Client-side: `supabase.auth.signUp({ email, password, options: { data: { full_name } } })` on `/sign-up`. `supabase.auth.signInWithPassword({ email, password })` on `/sign-in`.
  - Server-side: `lib/supabase/server.ts` creates a server client with cookie-based session reading using `cookies()` from `next/headers`.
  - Middleware (`middleware.ts`) uses `lib/supabase/middleware.ts` helper to refresh the session on every request and protect `/dashboard/*` routes.
  - On sign-out: `supabase.auth.signOut()` from client, then `router.push('/')`.

### F2: Project CRUD
- **What:** Create, read, list, and archive projects.
- **How it works:**
  - **Create:** Server action or client-side insert into `projects` table with `user_id` from `auth.uid()`. Fields: `name`, `description`, `target_audience`, `status` (default `draft`), `prototype_status` (default `not_started`).
  - **Read:** Server component fetches project by `id` with RLS ensuring `user_id = auth.uid()`.
  - **List:** Server component fetches all projects for current user, ordered by `created_at desc`.
  - **Archive:** Update `status` to `archived` via server action.

### F3: MVP Progress Tracker
- **What:** Visual stepper showing project lifecycle.
- **How it works:** 4 steps stored as derived state from `status` + `prototype_status`:
  - Brief: always completed once project exists.
  - Prototype: completed when `prototype_status` is `ready` or beyond.
  - Testing: completed when project has test sessions (future — for v1, always pending).
  - Results: completed when analytics exist (future — for v1, always pending).
  - Current step determined by first non-completed step. UI renders horizontal stepper with connecting line.

### F4: Generate MVP (honest placeholder)
- **What:** Button that advances project state.
- **How it works:** On click, server action updates `status` to `active` and `prototype_status` to `scaffolding`. UI immediately reflects new state. Shows honest "scaffolding in progress" card with teal pulsing dot and copy: "Prototype scaffolding in progress — this typically takes a few minutes. We'll notify you when it's ready." No fake spinner pretending to call an AI. No fabricated progress percentage.

### F5: Dashboard stats
- **What:** Three metric cards on dashboard home.
- **How it works:** Server component queries `projects` table for current user: total count, count where `status = 'active'`, count where `created_at > now() - interval '7 days'`. Displays in three cards with JetBrains Mono labels.

### F6: Empty states
- **What:** Helpful empty states when no projects exist.
- **How it works:** Dashboard and projects list check if query returned 0 rows. If so, render empty state card with compass icon, heading, body text, and primary CTA.

### F7: Responsive layout
- **What:** Works on mobile and desktop.
- **How it works:** Tailwind breakpoints. Sidebar collapses to bottom nav on mobile (hidden in v1 — sidebar hidden below 768px, replaced by a top bar with hamburger that opens a slide-out drawer). Landing page is fully responsive with stacked sections on mobile.

## 7. DATA MODEL

### Table: `profiles`
Extends Supabase `auth.users` with public profile data.

| Field | Type | Constraints |
|---|---|---|
| `id` | `uuid` | PK, FK → `auth.users.id` |
| `full_name` | `text` | nullable |
| `plan` | `text` | default `'free'`, check in `('free','founder','studio')` |
| `created_at` | `timestamptz` | default `now()` |

**RLS:** Users can read their own profile (`auth.uid() = id`). Users can update their own profile.

**Trigger:** `on auth.users insert` → insert into `profiles` with `id = new.id`.

### Table: `projects`

| Field | Type | Constraints |
|---|---|---|
| `id` | `uuid` | PK, default `gen_random_uuid()` |
| `user_id` | `uuid` | FK → `auth.users.id`, not null |
| `name` | `text` | not null |
| `description` | `text` | not null |
| `target_audience` | `text` | not null |
| `status` | `text` | default `'draft'`, check in `('draft','active','archived')` |
| `prototype_status` | `text` | default `'not_started'`, check in `('not_started','scaffolding','ready','failed')` |
| `created_at` | `timestamptz` | default `now()` |
| `updated_at` | `timestamptz` | default `now()` |

**RLS:**
- SELECT: `auth.uid() = user_id`
- INSERT: `auth.uid() = user_id` (with check)
- UPDATE: `auth.uid() = user_id`
- DELETE: `auth.uid() = user_id`

**Trigger:** `before update` → set `updated_at = now()`.

### Relationships
- `auth.users` 1—N `projects` (via `projects.user_id`)
- `auth.users` 1—1 `profiles` (via `profiles.id`)

## 8. AUTH

**Provider:** Supabase Auth with `@supabase/ssr`.

**Methods:** Email + password only. No OAuth buttons (no Google/GitHub — no credentials provisioned).

**Implementation:**
- `lib/supabase/client.ts`: `createBrowserClient` from `@supabase/ssr` using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- `lib/supabase/server.ts`: `createServerClient` from `@supabase/ssr` with `cookies()` from `next/headers` for get/set/delete. Exports `createClient()` async function.
- `lib/supabase/middleware.ts`: helper that creates a Supabase client, calls `supabase.auth.getUser()`, refreshes session if needed, and returns `NextResponse`.
- `middleware.ts`: runs `lib/supabase/middleware.ts` on all routes. For `/dashboard/*` paths, if no user, redirect to `/sign-in` with `?redirect=` param.
- Sign-up: `supabase.auth.signUp({ email, password, options: { data: { full_name } } })`. Email confirmation is disabled by default in Supabase for dev — if enabled, show "check your email" state.
- Sign-in: `supabase.auth.signInWithPassword({ email, password })`.
- Sign-out: `supabase.auth.signOut()` from client component, then `router.push('/')`.

**Env vars required:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 9. FILES

```
app/
  layout.tsx                          # Root layout: fonts, metadata, dark theme wrapper
  page.tsx                            # Landing page
  globals.css                         # Dark theme CSS custom properties, base styles
  (auth)/
    layout.tsx                        # Auth layout: centered card on dark bg
    sign-in/
      page.tsx                        # Sign-in form (client component)
    sign-up/
      page.tsx                        # Sign-up form (client component)
  dashboard/
    layout.tsx                        # Dashboard layout: sidebar + auth check
    page.tsx                          # Dashboard home: stats + recent projects
    projects/
      page.tsx                        # Projects list with filters
      new/
        page.tsx                      # New project form
      [id]/
        page.tsx                      # Project detail with stepper
    settings/
      page.tsx                        # Settings: profile + plan
  api/
    auth/
      callback/
        route.ts                      # Supabase auth callback handler (for email confirm)
components/
  ui/
    Button.tsx                        # Primary/secondary/ghost button variants
    Input.tsx                         # Text input with label + helper
    Textarea.tsx                      # Textarea with label + helper
    Card.tsx                          # Elevated card container
    Badge.tsx                         # Status badge (draft/active/archived)
    Spinner.tsx                       # Cyan loading spinner
  layout/
    Sidebar.tsx                       # Dashboard sidebar nav
    DashboardNav.tsx                  # Mobile top nav (hamburger + drawer)
    Footer.tsx                        # Landing page footer
  landing/
    Hero.tsx                          # Landing hero section
    Features.tsx                      # Features grid
    HowItWorks.tsx                    # 3-step process
    Pricing.tsx                       # Pricing tiers
    Nav.tsx                           # Landing top nav
  dashboard/
    StatsRow.tsx                      # 3 metric cards
    ProjectCard.tsx                   # Project list item
    ProjectGrid.tsx                   # Projects grid wrapper
    EmptyState.tsx                    # Empty state card
    Stepper.tsx                       # MVP progress stepper
    PrototypeStatus.tsx               # "Scaffolding in progress" card
  auth/
    SignInForm.tsx                    # Client form component
    SignUpForm.tsx                    # Client form component
lib/
  supabase/
    client.ts                         # Browser Supabase client
    server.ts                         # Server Supabase client (cookies)
    middleware.ts                     # Middleware Supabase helper
  types/
    database.ts                       # Supabase generated types (manual for v1)
    project.ts                        # Project type definitions
  utils/
    cn.ts                             # className merge helper
    plan.ts                           # Plan tier definitions + limits
actions/
  projects.ts                         # Server actions: createProject, updateProject, archiveProject
middleware.ts                         # Auth middleware: protect /dashboard/*
tailwind.config.ts                    # Tailwind config with custom colors + fonts
next.config.ts                        # Next.js config
.env.example                          # Documented env vars
supabase/
  migrations/
    00001_schema.sql                  # profiles + projects tables, RLS, triggers
README.md                             # Setup instructions
```

## 10. ACCEPTANCE

- [ ] Landing page renders at `/` with hero, features, how-it-works, pricing, footer — all sections visible and styled with dark theme.
- [ ] All landing page CTAs ("Start Building Free", "See how it works", "Sign In") navigate to correct routes or scroll to correct anchors.
- [ ] Sign-up form at `/sign-up` accepts name, email, password; calls Supabase `signUp`; redirects to `/dashboard` on success; shows error banner on failure.
- [ ] Sign-in form at `/sign-in` accepts email, password; calls Supabase `signInWithPassword`; redirects to `/dashboard` on success; shows error on failure.
- [ ] Sign-up and sign-in forms link to each other.
- [ ] Middleware redirects unauthenticated users from `/dashboard/*` to `/sign-in`.
- [ ] Dashboard at `/dashboard` shows welcome message with user's name, three stats cards, and recent projects list.
- [ ] Empty state on dashboard shows when user has zero projects, with CTA to `/dashboard/projects/new`.
- [ ] Sidebar nav present on all `/dashboard/*` pages with Dashboard, Projects, Settings, Logout.
- [ ] Logout button calls `supabase.auth.signOut()` and redirects to `/`.
- [ ] Projects list at `/dashboard/projects` shows all user projects with name, status badge, description, created date.
- [ ] Filter tabs (All/Active/Draft) filter the projects list.
- [ ] New project form at `/dashboard/projects/new` accepts name, description, target audience; inserts into Supabase; redirects to project detail.
- [ ] Project detail at `/dashboard/projects/[id]` shows project info, MVP stepper, and current state.
- [ ] "Generate MVP" button on project detail updates project status and shows honest "scaffolding in progress" state.
- [ ] Settings page at `/dashboard/settings` shows profile info (name, email, member since) and current plan with usage.
- [ ] All forms show validation errors inline (red text below field).
- [ ] All forms show network/auth errors in a banner above the form.
- [ ] Dark theme applied consistently: ink-black background, indigo primary, cyan accents, teal success.
- [ ] Space Grotesk used for headings/body, JetBrains Mono for data/labels/timestamps.
- [ ] No fake testimonials, customer counts, logos, or social proof anywhere.
- [ ] No Google/GitHub/social auth buttons present.
- [ ] No Clerk imports anywhere.
- [ ] No `dynamic = 'error'` exports.
- [ ] Every button and link is wired to a real route, action, or handler.
- [ ] `lib/supabase/client.ts` and `lib/supabase/server.ts` use `@supabase/ssr` with correct cookie handling.
- [ ] `supabase/migrations/00001_schema.sql` creates `profiles` and `projects` tables with RLS policies and triggers.
- [ ] `.env.example` documents `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- [ ] App builds without TypeScript errors.
- [ ] App runs with `npm run dev` and all routes load.

FILES: ["app/layout.tsx", "app/page.tsx", "app/globals.css", "app/(auth)/layout.tsx", "app/(auth)/sign-in/page.tsx", "app/(auth)/sign-up/page.tsx", "app/dashboard/layout.tsx", "app/dashboard/page.tsx", "app/dashboard/projects/page.tsx", "app/dashboard/projects/new/page.tsx", "app/dashboard/projects/[id]/page.tsx", "app/dashboard/settings/page.tsx", "app/api/auth/callback/route.ts", "components/ui/Button.tsx", "components/ui/Input.tsx", "components/ui/Textarea.tsx", "components/ui/Card.tsx", "components/ui/Badge.tsx", "components/ui/Spinner.tsx", "components/layout/Sidebar.tsx", "components/layout/DashboardNav.tsx", "components/layout/Footer.tsx", "components/landing/Hero.tsx", "components/landing/Features.tsx", "components/landing/HowItWorks.tsx", "components/landing/Pricing.tsx", "components/landing/Nav.tsx", "components/dashboard/StatsRow.tsx", "components/dashboard/ProjectCard.tsx", "components/dashboard/ProjectGrid.tsx", "components/dashboard/EmptyState.tsx", "components/dashboard/Stepper.tsx", "components/dashboard/PrototypeStatus.tsx", "components/auth/SignInForm.tsx", "components/auth/SignUpForm.tsx", "lib/supabase/client.ts", "lib/supabase/server.ts", "lib/supabase/middleware.ts", "lib/types/database.ts", "lib/types/project.ts", "lib/utils/cn.ts", "lib/utils/plan.ts", "actions/projects.ts", "middleware.ts", "tailwind.config.ts", "next.config.ts", ".env.example", "supabase/migrations/00001_schema.sql", "README.md"]