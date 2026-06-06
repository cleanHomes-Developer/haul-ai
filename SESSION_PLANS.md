# SESSION_PLANS.md
# All 12 session plans. Each is complete and self-contained.
# Claude copies the active session into CLAUDE.md Section 7 at session end.

════════════════════════════════════════════════════════
SESSION 0: ENVIRONMENT SETUP
════════════════════════════════════════════════════════
Goal: Every tool installed. GitHub repo live. All accounts created. Keys in .env.local
Time: 2.5 hours maximum
Done when: git tag session-0-complete is pushed

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"I have read CLAUDE.md. This is Session 0: Environment Setup.
No previous sessions. No code exists yet. All planning is complete.
First task: Verify Python and install NVM for Node.js.
Ready? Say yes."

─── PRE-SESSION ─────────────────────────────────────────────────────────────
The setup script already ran. Project folder exists at ~/DEV/haul-ai/
All planning files are in place. Git is not yet initialized.

─── TASK 0-1: Verify Python ────────────────────────────────────────────────
Run:
  python3 --version
Expected: Python 3.12.x or higher
If different: tell Claude the version shown.

─── TASK 0-2: Install NVM and Node.js 20 ────────────────────────────────────
Run:
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

CLOSE the terminal. Open a NEW WSL terminal. Then run:
  source ~/.bashrc
  nvm install 20
  nvm use 20
  nvm alias default 20
  node --version
  npm --version

Expected: node v20.x.x and npm 10.x.x
Tell Claude both version numbers.

─── TASK 0-3: Install Git and configure it ──────────────────────────────────
Run these one at a time:
  sudo apt update && sudo apt install git -y
  git --version
  git config --global user.name "Fares Najjar"
  git config --global user.email "YOUR-EMAIL-HERE"
  git config --global init.defaultBranch main

Replace YOUR-EMAIL-HERE with your actual email address.
Expected from git --version: git version 2.x.x

─── TASK 0-4: Install Docker Desktop ───────────────────────────────────────
This step is done on WINDOWS (not in the WSL terminal):
  Step 1: Open a browser on Windows
  Step 2: Go to: https://www.docker.com/products/docker-desktop
  Step 3: Click "Download for Windows — AMD64"
  Step 4: Run the installer. Accept all defaults.
  Step 5: Open Docker Desktop from the Windows Start menu
  Step 6: Wait until you see a green dot and "Docker Desktop is running"
  Step 7: Go back to your WSL terminal and run:
    docker --version
    docker compose version
Expected: Docker version 24.x.x or higher, Docker Compose version 2.x.x
Tell Claude both version numbers.

─── TASK 0-5: Initialize GitHub Repository ─────────────────────────────────
Step 1: Open a browser and go to https://github.com
Step 2: Sign in to your GitHub account
Step 3: Click the green "New" button in the top left
Step 4: Under "Repository name" type exactly: haul-ai
Step 5: Click "Private" (NOT Public)
Step 6: Do NOT check "Add a README file" (we already have files)
Step 7: Click "Create repository"
Step 8: On the next page, copy the URL under "...or push an existing repository"
        It looks like: https://github.com/YOUR-USERNAME/haul-ai.git
Step 9: Tell Claude that URL

─── TASK 0-6: Initialize git and push to GitHub ─────────────────────────────
Claude gives you these exact commands using your GitHub URL.
Run them one at a time:
  cd ~/DEV/haul-ai
  git init
  git add -A
  git commit -m "[S00] chore: project skeleton and all planning files"
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/haul-ai.git
  git push -u origin main

Expected: output shows "Branch main set up to track remote branch main from origin"
Tell Claude when the push succeeds.

─── TASK 0-7: Create accounts (Claude guides one at a time) ─────────────────
For each account: exact URL, what to click, what to name it, which key to copy,
where to paste it in .env.local

Account 1: Anthropic API
  URL: https://console.anthropic.com
  Steps: Sign in → API Keys → Create Key → name it "haul-ai-dev"
  Copy: the key starting with "sk-ant-"
  Paste into .env.local: ANTHROPIC_API_KEY=sk-ant-YOUR-KEY

Account 2: Clerk (authentication)
  URL: https://clerk.com
  Steps: Sign up → Create application → name it "Haul AI" → Choose "Email"
  Copy: Publishable key (starts with pk_test_) and Secret key (starts with sk_test_)
  Paste into .env.local:
    CLERK_PUBLISHABLE_KEY=pk_test_YOUR-KEY
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR-KEY
    CLERK_SECRET_KEY=sk_test_YOUR-KEY

Account 3: Stripe (payments)
  URL: https://stripe.com
  Steps: Sign up → Dashboard → Developers → API keys
  Copy: Publishable key (starts with pk_test_) and Secret key (starts with sk_test_)
  Paste into .env.local:
    STRIPE_PUBLISHABLE_KEY=pk_test_YOUR-KEY
    STRIPE_SECRET_KEY=sk_test_YOUR-KEY

Account 4: Bland.ai (voice AI)
  URL: https://bland.ai
  Steps: Sign up → Dashboard → API Keys → Create key
  Copy: the API key shown
  Paste into .env.local: BLAND_AI_API_KEY=YOUR-KEY

Account 5: Vercel (frontend hosting)
  URL: https://vercel.com
  Steps: Sign up with GitHub → Import Project → select haul-ai repo
  Set root directory to: apps/web
  Do NOT deploy yet. Just connect the repo.
  Copy: no key needed yet.

Account 6: Railway (backend hosting)
  URL: https://railway.app
  Steps: Sign up with GitHub → New Project → Deploy from GitHub → select haul-ai
  Set root directory to: services/api
  Do NOT deploy yet. Just connect the repo.

Account 7: EIA API (free — fuel prices)
  URL: https://www.eia.gov/opendata/register.php
  Steps: Fill out the form → Submit → Check email for API key
  Paste into .env.local: EIA_API_KEY=YOUR-KEY

Account 8: OpenRouteService (free — truck routing)
  URL: https://openrouteservice.org/dev/#/signup
  Steps: Sign up → Dashboard → Request a token → name it "haul-ai"
  Paste into .env.local: OPENROUTESERVICE_API_KEY=YOUR-KEY

Account 9: FMCSA (free — broker fraud check)
  URL: https://portal.fmcsa.dot.gov/login
  Steps: Register → Request API access → free, instant approval
  Paste into .env.local: FMCSA_API_KEY=YOUR-KEY

─── TASK 0-8: Apply for DAT API access ─────────────────────────────────────
URL: https://developer.dat.com
Steps: Sign up → Apply for API access using Haul Intelligence LLC info
This takes 3-14 days for approval.
We use mock data from CLAUDE.md real lanes until key arrives.
Tell Claude when you have submitted the application.

─── TASK 0-9: Set base environment variables ────────────────────────────────
Claude writes the complete .env.local file.
Set these now regardless (localhost values for development):
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  API_URL=http://localhost:8000
  NODE_ENV=development
  R2_BUCKET_NAME=haulai-documents

─── TASK 0-10: Run setup verification ──────────────────────────────────────
Run:
  cd ~/DEV/haul-ai && python3 verify_setup.py

Claude will write this verification script.
Expected: all checks show PASS in green.
If anything shows FAIL: tell Claude exactly which check failed.

─── SESSION 0 END — Claude does all of this ────────────────────────────────
1. Appends to PROGRESS section of CLAUDE.md:
   SESSION_0 | [date] | COMPLETE
   Built: project setup, git init, GitHub push, all accounts created
   Tests: node v20, python3.12, git 2.x, docker 24.x — all PASS
   Blocker: DAT API pending (3-14 days) — using mock data
   Next: npx create-next-app@14 web in apps/web/

2. Appends to TEST LOG section of CLAUDE.md

3. Sets CURRENT SESSION in CLAUDE.md to Session 1

4. Updates FILE MAP with new files

5. Gives Fares these exact 5 commands:
   git add -A
   git commit -m "[S00] session complete: environment setup done"
   git push origin main
   git tag session-0-complete
   git push origin session-0-complete

════════════════════════════════════════════════════════
SESSION 1: DESIGN SYSTEM + LANDING PAGE + PRICING PAGE
════════════════════════════════════════════════════════
Goal: Next.js running. Design tokens wired. Landing + pricing pages live.
Time: 2.5 hours
Done when: npm run build passes zero errors. Both pages look right.

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 1: Design System + Landing Page + Pricing Page.
Session 0 complete. All tools and accounts ready.
First task: Initialize Next.js 14 in apps/web/
Ready? Say yes."

─── PRE-SESSION CHECKS ──────────────────────────────────────────────────────
  cd ~/DEV/haul-ai
  git pull origin main && git status
Expected: nothing to commit, working tree clean

─── TASK 1-1: Initialize Next.js ───────────────────────────────────────────
  mkdir -p ~/DEV/haul-ai/apps
  cd ~/DEV/haul-ai/apps
  npx create-next-app@14 web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
  cd web && npm run dev

Open browser: http://localhost:3000
Expected: Next.js default page loads without errors.
Tell Claude "done." Press Ctrl+C to stop.
TEST: npm run build → must say "Compiled successfully"
COMMIT: git add -A && git commit -m "[S01] feat: Next.js 14 initialized"

─── TASK 1-2: Install packages ─────────────────────────────────────────────
Claude gives ONE install command for:
  @clerk/nextjs @tanstack/react-query zustand axios recharts lucide-react clsx tailwind-merge
TEST: npm run build after install
COMMIT after passing

─── TASK 1-3: Design tokens ────────────────────────────────────────────────
Claude writes (one at a time, build check + commit after each):
  apps/web/tailwind.config.ts      — all colors from CLAUDE.md CONFIG
  apps/web/src/lib/design-tokens.ts — TypeScript exports of all colors
  apps/web/src/app/globals.css      — Google Fonts + CSS custom properties

─── TASK 1-4: UI primitives (one at a time, test + commit after each) ───────
  apps/web/src/components/ui/Button.tsx    (primary/secondary/danger/ghost)
  apps/web/src/components/ui/Chip.tsx      (negotiating/pending/booked/declined)
  apps/web/src/components/ui/RateNum.tsx   (rate display, color-coded)
  apps/web/src/components/ui/ScoreBar.tsx  (0-100 bar)
  apps/web/src/components/ui/SectionLabel.tsx (column headers)

─── TASK 1-5: Layout (one at a time, test + commit after each) ──────────────
  apps/web/src/components/layout/TickerTape.tsx  (34px navy scrolling feed)
  apps/web/src/components/layout/Header.tsx      (navy + 4px green border)
  apps/web/src/app/(dashboard)/layout.tsx        (ticker + header + main)

─── TASK 1-6: Landing page ─────────────────────────────────────────────────
  apps/web/src/app/page.tsx
  Sections: Hero (cost math) | Ticker | Problem | Features | Proof | Pricing | Footer
  All values from CLAUDE.md CONFIG. No hardcoded strings.
  TEST: npm run build | Visual check at localhost:3000
  COMMIT after passing

─── TASK 1-7: Pricing page ─────────────────────────────────────────────────
  apps/web/src/app/pricing/page.tsx
  Feature comparison table + FAQ + Enterprise CTA
  TEST: npm run build | Visual check at localhost:3000/pricing
  COMMIT after passing

─── TASK 1-8: Session regression test ──────────────────────────────────────
  npm run build
  npm run lint
  Both must pass with zero errors before session closes.

─── SESSION 1 END — same 5 steps as Session 0 ──────────────────────────────

════════════════════════════════════════════════════════
SESSION 2: AUTH + DATABASE + ONBOARDING + STRIPE
════════════════════════════════════════════════════════
Goal: Carrier can sign up, complete 4-step onboarding, subscribe, reach dashboard.
Time: 2.5 hours
Done when: New user can sign up → onboard → subscribe → reach /dashboard/loads

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 2: Auth + Database + Onboarding + Stripe.
Session 1 complete. Design system and pages live.
First task: Set up FastAPI with /health endpoint.
Ready? Say yes."

─── TASK 2-1: FastAPI backend ──────────────────────────────────────────────
  mkdir -p ~/DEV/haul-ai/services/api
  cd ~/DEV/haul-ai/services/api
  python3 -m venv .venv && source .venv/bin/activate
  pip install fastapi uvicorn sqlalchemy alembic psycopg2-binary python-dotenv               pydantic anthropic stripe celery redis --break-system-packages
  pip freeze > requirements.txt

Claude writes services/api/main.py (CORS + /health + empty router stubs)
  uvicorn main:app --reload --port 8000
  curl http://localhost:8000/health
Expected: {"status":"ok","version":"1.0.0"}
COMMIT after passing

─── TASK 2-2: Docker Compose ───────────────────────────────────────────────
Claude writes infra/docker-compose.yml (PostgreSQL 15 + Redis 7)
  docker compose up -d && docker compose ps
Expected: both services healthy/running
COMMIT after passing

─── TASK 2-3: Database models (one at a time, verify + commit each) ─────────
  services/api/models/base.py
  services/api/models/carrier.py
  services/api/models/truck.py
  services/api/models/load.py
  services/api/models/negotiation.py
  services/api/models/broker.py
  services/api/models/invoice.py
After each: python3 -c "from models.X import X; print('ok')"

─── TASK 2-4: Alembic migrations ───────────────────────────────────────────
  alembic init alembic
  alembic revision --autogenerate -m "initial schema"
  alembic upgrade head
  docker exec -it haul-ai-postgres-1 psql -U postgres -d haulai -c "\dt"
Expected: table list showing all models
COMMIT after passing

─── TASK 2-5: Clerk auth ───────────────────────────────────────────────────
  apps/web/src/middleware.ts (protect /dashboard)
  apps/web/src/app/(auth)/sign-in/[[...sign-in]]/page.tsx
  apps/web/src/app/(auth)/sign-up/[[...sign-up]]/page.tsx
TEST: visit localhost:3000/dashboard → must redirect to sign-in
COMMIT after passing

─── TASK 2-6: Onboarding wizard (4 steps) ──────────────────────────────────
  apps/web/src/app/(dashboard)/onboarding/page.tsx
  Step 1: Company info (name, MC#, DOT#, phone, equipment)
  Step 2: Connect email (Gmail / Outlook / Skip)
  Step 3: Set rules (floor rate, strategy, auto-book threshold)
  Step 4: Choose plan → Stripe checkout
COMMIT after each step working

─── TASK 2-7: Stripe integration ───────────────────────────────────────────
  services/api/integrations/stripe_api.py
  apps/web/src/app/api/stripe/checkout/route.ts
  apps/web/src/app/api/webhooks/stripe/route.ts
TEST: click Starter plan → redirects to Stripe checkout (test mode)
COMMIT after passing

─── TASK 2-8: Session regression test ──────────────────────────────────────
  npm run build (frontend) — zero errors
  python3 -m pytest tests/ -x -q (backend) — all pass
  Full flow: sign up → onboard → Stripe checkout → redirect to dashboard

════════════════════════════════════════════════════════
SESSION 3: LOAD BOARD UI (MOCK DATA)
════════════════════════════════════════════════════════
Goal: Load board renders exactly like design. Filtering works. Detail panel works.
Time: 2.5 hours

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 3: Load Board UI with mock data.
Sessions 0-2 complete. Auth and database working.
First task: Create mock DAT data using real lanes from CLAUDE.md.
Ready? Say yes."

─── TASKS (each: write → test → commit) ─────────────────────────────────────
3-1: services/api/mock_dat_data.py (10 loads, real lanes from CONFIG)
     Top comment: # MOCK DATA — replaced by real DAT API in Session 4
3-2: services/api/agents/load_scorer.py
     Tests: python3 -m pytest tests/test_load_scorer.py -v
3-3: services/api/routers/loads.py (search, get, accept, decline, rules)
     Test: curl http://localhost:8000/loads/search
3-4: apps/web/src/components/loads/LoadTable.tsx
     CSS Grid, exact column widths, Chip + RateNum + ScoreBar components
3-5: apps/web/src/components/loads/LoadDetailPanel.tsx
     Slides in right, pushes table narrower, 3 action buttons
3-6: apps/web/src/components/loads/FilterBar.tsx
     All/Negotiating/Booked/Pending/Declined, instant client-side filter
3-7: apps/web/src/hooks/useLoadRefresh.ts
     60-second refresh, "Updated X seconds ago"
3-8: apps/web/src/app/(dashboard)/loads/rules/page.tsx
     Floor rates, strategy, auto-book threshold, preferred lanes, blacklist
3-9: apps/web/src/app/(dashboard)/loads/page.tsx
     Wire FilterBar + LoadTable + LoadDetailPanel together

─── SESSION 3 REGRESSION ────────────────────────────────────────────────────
  npm run build — zero errors
  python3 -m pytest tests/ -x -q — all pass
  Visual: load board shows 10 mock loads with scores and filter buttons

════════════════════════════════════════════════════════
SESSION 4: DAT API + REAL COST CALCULATION + COMMUNITY DATA
════════════════════════════════════════════════════════
Goal: Real loads from DAT (or mock fallback). Real cost math. Community DB tables.
Time: 2.5 hours

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 4: DAT API + Real Cost Calculation + Community Data.
Sessions 0-3 complete. Load board UI working.
First question: Is your DAT API key approved yet? Yes or no.
Ready? Say yes."

─── TASKS (each: write → test → commit) ─────────────────────────────────────
4-1: services/api/integrations/dat_api.py (real + mock fallback)
     Test: python3 -c "from integrations.dat_api import DATClient; print(DATClient().use_mock)"
4-2: services/api/integrations/eia_api.py (live fuel, Redis cache 7 days)
     Test: python3 -c "from integrations.eia_api import get_diesel_price; print(get_diesel_price('PADD2'))"
4-3: services/api/integrations/routing_api.py (OpenRouteService, 1.15x fallback)
     Test: python3 -c "from integrations.routing_api import get_truck_route; print('ok')"
4-4: services/api/agents/cost_calculator.py (calculate_real_floor — live fuel)
     Test: python3 -m pytest tests/test_cost_calculator.py -v
4-5: services/api/agents/temporal_intel.py (AGGRESSIVE/MODERATE/CONSERVATIVE)
     Test: python3 -c "from agents.temporal_intel import get_market_timing; print(get_market_timing())"
4-6: services/api/agents/supply_demand_intel.py (L/T ratio, weather, seasonal)
4-7: Community database tables (Alembic migration):
     community_broker_profiles, community_lane_intelligence,
     community_shipper_profiles, community_negotiation_events
4-8: services/api/models/negotiation_outcome.py + anonymization pipeline
4-9: Update load_scorer.py with real data from layers 1-5

─── SESSION 4 REGRESSION ────────────────────────────────────────────────────
  curl "http://localhost:8000/loads/search?origin=Chicago,IL&dest=Dallas,TX"
  Expected: loads with real cost calculations shown in score breakdown

════════════════════════════════════════════════════════
SESSION 5: EMAIL NEGOTIATION AGENT (CORE PRODUCT)
════════════════════════════════════════════════════════
Goal: AI reads broker email → decides → sends counter-offer automatically.
Time: 3 hours (most important session, do not rush)
Done when: AI sends a counter-offer email to a test broker address.

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 5: Email Negotiation Agent. This IS the product.
Sessions 0-4 complete. Real cost calculation working.
First task: Gmail OAuth client.
Ready? Say yes."

─── TASKS (each: write → test → commit) ─────────────────────────────────────
5-1:  services/api/integrations/gmail_api.py
      Test: OAuth flow manually, confirm token stored encrypted
5-2:  services/api/integrations/outlook_api.py (same interface as Gmail)
5-3:  services/api/agents/email_parser.py (Claude API, returns JSON)
      Test: python3 -m pytest tests/test_email_parser.py -v
      Must pass all 10 fixtures from docs/REAL_EMAIL_FIXTURES.md
5-4:  services/api/agents/broker_fingerprint.py (community + private merge)
5-5:  services/api/agents/negotiation_engine.py (all 11 layers in order)
      Test: python3 -m pytest tests/test_negotiation_engine.py -v
5-6:  services/api/agents/email_writer.py (Claude API, carrier voice style)
      Test: output matches CLAUDE.md CARRIER EMAIL VOICE patterns
5-7:  services/api/agents/linguistics_engine.py (FIRM/AUTHORITY/RELATIONSHIP)
5-8:  services/workers/email_watch_worker.py (Celery, runs every 5 min)
5-9:  services/workers/learning_worker.py (Sunday 2AM UTC, weekly learning)
5-10: services/api/agents/booking_verifier.py (10-point check, all must pass)
5-11: services/api/routers/negotiations.py (queue, approve, override, decline)
5-12: apps/web/src/components/negotiations/TranscriptViewer.tsx
5-13: apps/web/src/app/(dashboard)/negotiations/page.tsx

─── SESSION 5 END-TO-END TEST (mandatory before closing) ────────────────────
  Send test email to connected Gmail: "Can you do $1,750 on Detroit to Bessemer?"
  Wait 6 minutes (worker runs every 5 min)
  Check 1: negotiation record in DB
  Check 2: counter-offer email sent from carrier Gmail
  Check 3: counter uses FIRM language ("We need $X") not question form
  python3 -m pytest tests/test_email_agent_e2e.py -v
  ALL must pass before session closes.

════════════════════════════════════════════════════════
SESSION 6: VOICE AGENT + CHECK CALLS (BLAND.AI)
════════════════════════════════════════════════════════
Goal: AI makes and receives phone calls. Check calls use real GPS.
Time: 2.5 hours

─── TASKS (each: write → test → commit) ─────────────────────────────────────
6-1: services/api/integrations/bland_ai.py (make_call, status, transcript, inbound)
6-2: services/api/agents/call_script_builder.py (handles accept/counter/no-answer/voicemail)
6-3: services/api/agents/language_router.py (EN now, ES/AR when CONFIG updates)
6-4: Update email_watch_worker.py — add voice channel routing
6-5: services/workers/check_call_worker.py (every 2 hrs, ADL every 90 min)
6-6: services/api/routers/voice.py (inbound webhook from Bland.ai)
6-7: Voice UI in negotiations page (EMAIL/VOICE badge, call log, transcript)
6-8: apps/web/src/app/(dashboard)/settings/phone/page.tsx

─── SESSION 6 TEST ──────────────────────────────────────────────────────────
  Make test call to your own phone using Bland.ai
  Confirm: call connects, script plays, transcript saved to DB

════════════════════════════════════════════════════════
SESSION 7: FLEET MANAGEMENT + ELD
════════════════════════════════════════════════════════
Goal: Live fleet table. Real GPS. Auto check calls with actual position.
Time: 2.5 hours

─── TASKS (each: write → test → commit) ─────────────────────────────────────
7-1: services/api/integrations/samsara_api.py + motive_api.py + eld_factory.py
7-2: services/api/routers/fleet.py (all trucks, location, HOS, add, update, trigger)
7-3: apps/web/src/components/fleet/FleetTable.tsx (CSS Grid, color-coded status)
7-4: apps/web/src/components/fleet/TruckDetailPanel.tsx (Big Shoulders Display data)
7-5: apps/web/src/components/fleet/DetentionClock.tsx (auto-notify at CONFIG threshold)
7-6: services/api/agents/hos_checker.py (check before any auto-booking)
7-7: apps/web/src/app/(dashboard)/fleet/page.tsx
7-8: Update check_call_worker.py with real ELD GPS

─── SESSION 7 TEST ──────────────────────────────────────────────────────────
  python3 -m pytest tests/test_fleet.py -v
  Fleet table shows mock truck data. Detention clock fires at 2 hours.

════════════════════════════════════════════════════════
SESSION 8: FINANCIAL MODULE
════════════════════════════════════════════════════════
Goal: Auto-invoicing on delivery. AR tracker. Factoring. Revenue analytics.
Time: 2.5 hours

─── TASKS (each: write → test → commit) ─────────────────────────────────────
8-1: Auto-invoice trigger on driver Delivered + POD upload
8-2: services/workers/invoice_aging_worker.py (daily, 30/45/60 day alerts)
8-3: services/api/integrations/rts_financial.py + otr_solutions.py
8-4: apps/web/src/components/invoices/InvoiceTable.tsx (aging chips, action buttons)
8-5: apps/web/src/app/(dashboard)/analytics/page.tsx
     (4-stat row + lane P&L table + Revenue vs Profit chart + Rate/Mi trend)
8-6: services/api/agents/load_pnl.py (actual vs projected, feeds learning)
8-7: services/api/routers/exports.py (QuickBooks CSV export)

─── SESSION 8 TEST ──────────────────────────────────────────────────────────
  python3 -m pytest tests/test_financial.py -v
  Invoice auto-generates when load status set to Delivered.

════════════════════════════════════════════════════════
SESSION 9: DRIVER MOBILE APP
════════════════════════════════════════════════════════
Goal: App runs on real phone via Expo Go. All 4 screens working.
Time: 3 hours

─── TASKS (each: write → test → commit) ─────────────────────────────────────
9-1: npx create-expo-app mobile --template blank-typescript + install packages
9-2: mobile/src/lib/tokens.ts (design tokens from CLAUDE.md CONFIG)
9-3: mobile/src/app/_layout.tsx (Clerk) + mobile/src/app/login.tsx
9-4: Bottom tab navigation (My Load / Docs / Navigate / Pay)
9-5: mobile/src/app/(tabs)/load.tsx (driver banner, load card, status buttons, detention)
9-6: mobile/src/app/(tabs)/docs.tsx (document list, upload sheet, camera)
9-7: mobile/src/app/(tabs)/navigate.tsx (4 large navigation buttons)
9-8: mobile/src/app/(tabs)/pay.tsx (weekly pay, load history)
9-9: mobile/src/lib/api.ts (Axios to API_URL)

─── SESSION 9 TEST ──────────────────────────────────────────────────────────
  npx expo start — scan QR with Expo Go on real phone
  All 4 tabs load. Status update appears in web dashboard within 30 seconds.

════════════════════════════════════════════════════════
SESSION 10: MARKETING MATERIALS
════════════════════════════════════════════════════════
Goal: Every marketing asset ready for launch day. No code. Content only.
Time: 2.5 hours

─── TASKS (write → review → commit each) ────────────────────────────────────
10-1: Finalize landing page copy with real ILoad Logistics numbers
10-2: marketing/emails/ — all 12 email sequences (welcome 1-5, onboarding 1-4, cold 3)
10-3: marketing/social/linkedin-posts.md — 5 ready posts with real data
10-4: marketing/social/reddit-post.md — educational r/Truckers post
10-5: marketing/social/facebook-template.md
10-6: marketing/print/business-card.html — all values from CLAUDE.md CONFIG
10-7: marketing/print/flyer-carrier.html (cost comparison, TAGLINE from CONFIG)
10-8: marketing/print/flyer-dispatch-service.html (white-label angle)
10-9: marketing/blog/001-how-ai-negotiates-freight.md (1,200 words, real example)
10-10: marketing/LAUNCH_PLAN.md (week by week from -4 to +Month 3)

════════════════════════════════════════════════════════
SESSION 11: PRODUCTION DEPLOYMENT + LAUNCH
════════════════════════════════════════════════════════
Goal: Everything live in production. First customer can sign up and pay.
Time: 3 hours. Go slow. Verify every step.

─── WHAT CLAUDE SAYS FIRST ─────────────────────────────────────────────────
"Session 11: Production Deployment. This is the last session. We go slowly.
Sessions 0-10 complete. Everything built, tested, marketed.
First task: Set production env vars in Railway.
Ready? Say yes."

─── TASKS (verify each before next) ─────────────────────────────────────────
11-1: Backend to Railway (Procfile + railway.json + all env vars)
      Test: curl https://[railway-url]/health → {"status":"ok"}
11-2: Production DB migration: railway run alembic upgrade head
11-3: Frontend to Vercel (root=apps/web, all env vars with production values)
      Test: production URL loads landing page
11-4: Custom domain (Vercel → Settings → Domains → add DOMAIN from CONFIG)
11-5: Stripe webhooks → production URL/api/webhooks/stripe
11-6: Bland.ai webhook → Railway URL/voice/inbound

─── 10-POINT PRODUCTION TEST (all must pass before launch) ──────────────────
  Test 1: Sign up at production URL
  Test 2: Complete 4-step onboarding
  Test 3: Subscribe Starter (test card: 4242 4242 4242 4242)
  Test 4: Carrier record in production DB
  Test 5: Load board shows loads
  Test 6: Send test broker email → negotiation created → response sent
  Test 7: Response email uses FIRM language not question form
  Test 8: Upload POD → invoice auto-generated
  Test 9: Sentry receiving events
  Test 10: PostHog showing pageviews

─── LOAD TEST ───────────────────────────────────────────────────────────────
  sudo apt install k6 -y
  k6 run --vus 20 --duration 30s ~/DEV/haul-ai/load-test.js
  Target: p95 < 2 seconds, 0 errors

─── LAUNCH SEQUENCE ─────────────────────────────────────────────────────────
  1. Email waitlist blast at 7:00 AM Eastern
  2. LinkedIn post (use post 5 from marketing/social/linkedin-posts.md)
  3. r/Truckers post (use marketing/social/reddit-post.md)
  4. Facebook groups
  5. Text brother: "Haul.AI is live. You are Carrier #1."

─── FINAL PROGRESS ENTRY ───────────────────────────────────────────────────
Claude appends to CLAUDE.md:
  SESSION_11 | [date] | COMPLETE | v1.0.0 LAUNCHED
  All 10 production tests: PASS
  Load test p95: PASS
  Git tag: v1.0.0

Claude says:
"Session 11 complete. Run the 5 git commands.
Open haulai.com in your browser. You shipped a product.
609 carriers and $2M profit are ahead of you. Get the first one today."
