create table if not exists inquiries(
  id uuid primary key default gen_random_uuid(), created_at timestamptz default now(),
  name text not null, email text not null, company text, vessel_type text, scope text not null, timeline text);
alter table inquiries enable row level security; -- no public policies: only the service role key (server) can write
