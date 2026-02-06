-- OpenClaw Console Schema
-- Declarative schema - edit this file, then run `supabase db diff` to generate migrations

-- Profiles (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  stripe_customer_id text unique,
  plan text not null default 'free',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Agents (AI agents being managed)
create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'idle',
  runtime text not null default 'docker',
  policy_id uuid,
  total_cost_cents bigint not null default 0,
  total_tokens bigint not null default 0,
  last_active_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Policies (agent governance rules)
create table if not exists public.policies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  description text,
  rules jsonb not null default '{}',
  is_default boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Add foreign key from agents to policies
alter table public.agents
  add constraint agents_policy_id_fkey
  foreign key (policy_id) references public.policies(id) on delete set null;

-- Audit logs (tamper-evident agent activity)
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid not null references public.agents(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  action text not null,
  details jsonb default '{}',
  cost_cents integer default 0,
  tokens_used integer default 0,
  created_at timestamptz not null default now()
);

-- Cost records (detailed cost tracking)
create table if not exists public.cost_records (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid not null references public.agents(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  model text not null,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  cost_cents integer not null default 0,
  created_at timestamptz not null default now()
);

-- Subscriptions (synced from Stripe)
create table if not exists public.subscriptions (
  id text primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null,
  price_id text,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.agents enable row level security;
alter table public.policies enable row level security;
alter table public.audit_logs enable row level security;
alter table public.cost_records enable row level security;
alter table public.subscriptions enable row level security;

-- RLS Policies
create policy "Users can read own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can read own agents"
  on public.agents for select using (auth.uid() = user_id);

create policy "Users can manage own agents"
  on public.agents for all using (auth.uid() = user_id);

create policy "Users can read own policies"
  on public.policies for select using (auth.uid() = user_id);

create policy "Users can manage own policies"
  on public.policies for all using (auth.uid() = user_id);

create policy "Users can read own audit logs"
  on public.audit_logs for select using (auth.uid() = user_id);

create policy "Users can read own cost records"
  on public.cost_records for select using (auth.uid() = user_id);

create policy "Users can read own subscriptions"
  on public.subscriptions for select using (auth.uid() = user_id);

-- Indexes
create index if not exists idx_agents_user_id on public.agents(user_id);
create index if not exists idx_agents_status on public.agents(status);
create index if not exists idx_policies_user_id on public.policies(user_id);
create index if not exists idx_audit_logs_agent_id on public.audit_logs(agent_id);
create index if not exists idx_audit_logs_user_id on public.audit_logs(user_id);
create index if not exists idx_audit_logs_created_at on public.audit_logs(created_at desc);
create index if not exists idx_cost_records_agent_id on public.cost_records(agent_id);
create index if not exists idx_cost_records_user_id on public.cost_records(user_id);
create index if not exists idx_cost_records_created_at on public.cost_records(created_at desc);
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
