# Supabase Setup

Use this when you want the admin panel to become truly live for all visitors.

## 1. Environment variables

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xqeynoan
```

## 2. Create the table

Run this SQL in the Supabase SQL editor:

```sql
create table if not exists public.portfolio_content (
  id text primary key,
  profile jsonb not null,
  about_items jsonb not null,
  availability_open boolean not null default true,
  projects jsonb not null,
  certificates jsonb not null,
  skill_sections jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.portfolio_content (
  id,
  profile,
  about_items,
  availability_open,
  projects,
  certificates,
  skill_sections
)
values (
  'main',
  '{}'::jsonb,
  '[]'::jsonb,
  true,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
)
on conflict (id) do nothing;

alter table public.portfolio_content enable row level security;

create policy "public can read portfolio content"
on public.portfolio_content
for select
to anon, authenticated
using (true);

create policy "authenticated admin can update portfolio content"
on public.portfolio_content
for all
to authenticated
using (true)
with check (true);

If your table was already created before skills support, run this one-time migration too:

```sql
alter table public.portfolio_content
add column if not exists skill_sections jsonb not null default '[]'::jsonb;
```
```

## 3. Create the admin user

In Supabase Authentication:

1. Open `Authentication`
2. Create a user manually
3. Use your admin email and password
4. Use that email and password on `/admin`

## 4. What this powers

- Homepage internship availability status
- Projects page project list
- Certificates page certificate list
- Hidden `/admin` login and update flow

## 5. Current note

This version stores projects and certificates as JSON arrays in one row to keep the portfolio simple and easy to manage.
