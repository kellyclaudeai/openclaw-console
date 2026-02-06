export const dynamic = "force-dynamic";

import { Bot, Activity, DollarSign, ShieldAlert, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  {
    label: "Total Agents",
    value: "3",
    icon: Bot,
    description: "Registered agents",
  },
  {
    label: "Active Now",
    value: "1",
    icon: Activity,
    description: "Currently running",
  },
  {
    label: "Total Cost",
    value: "$12.47",
    icon: DollarSign,
    description: "This month",
  },
  {
    label: "Policy Violations",
    value: "0",
    icon: ShieldAlert,
    description: "Last 7 days",
  },
];

const recentActivity = [
  {
    id: 1,
    agent: "Code Review Bot",
    action: "api_call",
    details: "Called OpenAI gpt-4o (1,240 tokens)",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    agent: "Data Pipeline Agent",
    action: "file_access",
    details: "Read /data/pipeline/config.yaml",
    timestamp: "15 minutes ago",
  },
  {
    id: 3,
    agent: "Code Review Bot",
    action: "api_call",
    details: "Called GitHub API - pull request review",
    timestamp: "28 minutes ago",
  },
  {
    id: 4,
    agent: "Security Scanner",
    action: "policy_violation",
    details: "Attempted to access /etc/passwd (blocked by policy)",
    timestamp: "1 hour ago",
  },
  {
    id: 5,
    agent: "Data Pipeline Agent",
    action: "api_call",
    details: "Called Supabase - inserted 42 rows",
    timestamp: "2 hours ago",
  },
];

function actionBadgeVariant(action: string) {
  switch (action) {
    case "api_call":
      return "secondary" as const;
    case "file_access":
      return "outline" as const;
    case "policy_violation":
      return "destructive" as const;
    default:
      return "secondary" as const;
  }
}

function actionLabel(action: string) {
  switch (action) {
    case "api_call":
      return "API Call";
    case "file_access":
      return "File Access";
    case "policy_violation":
      return "Violation";
    default:
      return action;
  }
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your agent fleet and recent activity.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-sm font-medium">{stat.label}</CardDescription>
              <stat.icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground text-xs">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>The latest actions from your agent fleet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-0">
            {recentActivity.map((entry, index) => (
              <div key={entry.id}>
                {index > 0 && <Separator className="my-3" />}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <Clock className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium">{entry.agent}</span>
                        <Badge variant={actionBadgeVariant(entry.action)}>
                          {actionLabel(entry.action)}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{entry.details}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground shrink-0 text-xs sm:text-right">
                    {entry.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
