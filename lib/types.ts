// Re-export convenience types
// After connecting Supabase, run: supabase gen types typescript --project-id <ref> > lib/database.types.ts
// Then uncomment and use generated types here

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  stripe_customer_id: string | null;
  plan: "free" | "pro" | "team";
  created_at: string;
  updated_at: string;
}

export interface Agent {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  status: "idle" | "running" | "error" | "stopped";
  runtime: "docker" | "process" | "remote";
  policy_id: string | null;
  total_cost_cents: number;
  total_tokens: number;
  last_active_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Policy {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  rules: Record<string, unknown>;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  agent_id: string;
  user_id: string;
  action: string;
  details: Record<string, unknown>;
  cost_cents: number;
  tokens_used: number;
  created_at: string;
}

export interface CostRecord {
  id: string;
  agent_id: string;
  user_id: string;
  model: string;
  input_tokens: number;
  output_tokens: number;
  cost_cents: number;
  created_at: string;
}
