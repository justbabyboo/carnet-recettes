-- =========================================================
-- Carnet d'été — table des articles ajoutés à la main
-- (courses hors recettes : hygiène, maison, boissons, etc.)
-- À exécuter UNE fois dans Supabase → SQL Editor.
-- Ré-exécutable sans erreur.
-- =========================================================

create table if not exists manual_items (
  id         uuid primary key default gen_random_uuid(),
  list_id    text not null,
  item       text not null,
  cat        text not null default 'Épicerie',
  created_at timestamptz not null default now()
);

create index if not exists manual_items_list_idx on manual_items(list_id);

-- RLS ouverte à anon (comme les autres tables ; la confidentialité repose sur le secret CONFIG.list)
alter table manual_items enable row level security;
drop policy if exists "manual_items anon all" on manual_items;
create policy "manual_items anon all" on manual_items
  for all to anon using (true) with check (true);

-- Temps réel (idempotent)
do $$
begin
  alter publication supabase_realtime add table manual_items;
exception when duplicate_object then null;
end $$;
