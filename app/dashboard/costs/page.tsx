export const dynamic = "force-dynamic";

import { DollarSign, TrendingUp, Calendar, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const summaryCards = [
  {
    label: "Today",
    value: "$2.15",
    icon: DollarSign,
    change: "+12% vs yesterday",
  },
  {
    label: "This Week",
    value: "$8.92",
    icon: Calendar,
    change: "-5% vs last week",
  },
  {
    label: "This Month",
    value: "$12.47",
    icon: TrendingUp,
    change: "On track",
  },
  {
    label: "Budget Remaining",
    value: "$87.53",
    icon: Wallet,
    change: "of $100.00 monthly",
  },
];

const costBreakdown = [
  {
    agent: "Code Review Bot",
    apiCalls: 142,
    tokensUsed: "284K",
    costToday: "$1.45",
    costTotal: "$8.32",
  },
  {
    agent: "Data Pipeline Agent",
    apiCalls: 67,
    tokensUsed: "98K",
    costToday: "$0.52",
    costTotal: "$3.10",
  },
  {
    agent: "Security Scanner",
    apiCalls: 23,
    tokensUsed: "41K",
    costToday: "$0.18",
    costTotal: "$1.05",
  },
];

export default function CostsPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cost Tracking</h1>
        <p className="text-muted-foreground">Monitor and manage your agent spending.</p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-sm font-medium">{card.label}</CardDescription>
              <card.icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-muted-foreground text-xs">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cost breakdown table */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown by Agent</CardTitle>
          <CardDescription>
            Detailed per-agent spending for the current billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop table */}
          <div className="hidden sm:block">
            <div className="text-muted-foreground grid grid-cols-5 gap-4 border-b pb-3 text-sm font-medium">
              <div>Agent</div>
              <div className="text-right">API Calls</div>
              <div className="text-right">Tokens Used</div>
              <div className="text-right">Cost Today</div>
              <div className="text-right">Total Cost</div>
            </div>
            {costBreakdown.map((row) => (
              <div
                key={row.agent}
                className="border-border/50 grid grid-cols-5 gap-4 border-b py-3 text-sm last:border-0"
              >
                <div className="font-medium">{row.agent}</div>
                <div className="text-muted-foreground text-right">{row.apiCalls}</div>
                <div className="text-muted-foreground text-right">{row.tokensUsed}</div>
                <div className="text-muted-foreground text-right">{row.costToday}</div>
                <div className="text-right font-medium">{row.costTotal}</div>
              </div>
            ))}
            <Separator className="my-3" />
            <div className="grid grid-cols-5 gap-4 text-sm font-medium">
              <div>Total</div>
              <div className="text-right">232</div>
              <div className="text-right">423K</div>
              <div className="text-right">$2.15</div>
              <div className="text-right">$12.47</div>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 sm:hidden">
            {costBreakdown.map((row) => (
              <div key={row.agent} className="border-border/50 rounded-lg border p-4">
                <p className="mb-2 font-medium">{row.agent}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">API Calls</div>
                  <div className="text-right">{row.apiCalls}</div>
                  <div className="text-muted-foreground">Tokens Used</div>
                  <div className="text-right">{row.tokensUsed}</div>
                  <div className="text-muted-foreground">Cost Today</div>
                  <div className="text-right">{row.costToday}</div>
                  <div className="text-muted-foreground">Total Cost</div>
                  <div className="text-right font-medium">{row.costTotal}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
