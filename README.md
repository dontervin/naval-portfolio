# Naval portfolio (Next.js + Vercel + Supabase)
## Run locally
`npm i && cp .env.example .env.local` (fill values) then `npm run dev`.
## Supabase
1. supabase.com > New project. SQL Editor > paste `supabase.sql` > Run (creates `inquiries`, RLS on).
2. Project Settings > API: copy **Project URL** and the **service_role** key.
## Resend
Create an API key at resend.com and verify your sending domain.
## GitHub + Vercel
1. `git init && git add . && git commit -m init`, push to a new GitHub repo.
2. vercel.com > Add New > Project > import the repo (Next.js auto-detected).
3. Settings > Environment Variables (Production, Preview, Development):
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = service_role key (never prefix with NEXT_PUBLIC_)
   - `RESEND_API_KEY`, `NOTIFY_FROM`, `NOTIFY_TO`
4. Deploy (or Redeploy after adding variables). Every push to `main` redeploys.
## Customise
- Real formulas: edit `app/api/calculate-tool/route.js` (server only; keep constants in env vars).
- Projects: `lib/data.js`; images in `public/projects/`.
- Videos: replace `VIDEO_ID_*` in `lib/data.js`.
