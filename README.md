# Climate Forward

A React + Vite climate awareness app with Supabase email/password authentication, profile and phone capture, cloud-synced climate pledges, and a role-protected admin dashboard.

## Supabase setup

1. Run `supabase/schema.sql` in the Supabase SQL Editor.
2. Copy `.env.example` to `.env.local` and add your Supabase project's publishable key. `.env.local` is ignored by git. The public project URL is configured in the example file.
3. Run `npm install` and `npm run dev`. Configure Supabase Auth email confirmation and allowed redirect URLs for localhost and your production domain.
4. Register the admin email in the app first. Then run the commented admin-promotion SQL from the schema in Supabase SQL Editor. Admin status is never assigned by client-side code or user metadata.

Do not put the shared admin password in code, SQL, chat, or commits. Treat the password previously shared as compromised: change it in Supabase Auth before use, choose a unique password, and enable MFA. Never expose a Supabase `service_role` or secret key in this frontend. Row-level security protects profiles and pledges; normal users cannot grant themselves admin access.

The app accepts the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` variable names via Vite's `envPrefix` configuration. Pledges stay in local storage until Supabase is configured. WhatsApp contact: +250 796 365 450.

## Run/build

```bash
npm install
npm run dev
npm run build
```
