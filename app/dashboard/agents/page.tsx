export const dynamic = "force-dynamic";

import { Bot, Plus, Clock, DollarSign, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const agents = [
  {
    id: "agent-1",
    name: "Code Review Bot",
    description: "Reviews pull requests and suggests code improvements using GPT-4o.",
    status: "running" as const,
    runtime: "Node.js 22",
    lastActive: "2 minutes ago",
    totalCost: "$8.32",
    apiCalls: 142,
  },
  {
    id: "agent-2",
    name: "Data Pipeline Agent",
    description: "ETL pipeline that processes and loads data into Supabase.",
    status: "idle" as const,
    runtime: "Python 3.12",
    lastActive: "15 minutes ago",
    totalCost: "$3.10",
    apiCalls: 67,
  },
  {
    id: "agent-3",
    name: "Security Scanner",
    description: "Scans repositories for vulnerabilities and compliance issues.",
    status: "error" as const,
    runtime: "Go 1.23",
    lastActive: "1 hour ago",
    totalCost: "$1.05",
    apiCalls: 23,
  },
];

function statusBadge(status: "running" | "idle" | "error") {
  switch (status) {
    case "running":
      return (
        <Badge className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/15">
          <span className="mr-1 inline-block size-1.5 rounded-full bg-emerald-500" />
          Running
        </Badge>
      );
    case "idle":
      return (
        <Badge variant="secondary">
          <span className="mr-1 inline-block size-1.5 rounded-full bg-slate-400" />
          Idle
        </Badge>
      );
    case "error":
      return (
        <Badge variant="destructive">
          <span className="mr-1 inline-block size-1.5 rounded-full bg-white" />
          Error
        </Badge>
      );
  }
}

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Agents</h1>
          <p className="text-muted-foreground">Manage and monitor your registered AI agents.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500">
          <Plus className="size-4" />
          New Agent
        </Button>
      </div>

      {/* Agent cards */}
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Bot className="size-5 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{agent.name}</CardTitle>
                  </div>
                </div>
                {statusBadge(agent.status)}
              </div>
              <CardDescription className="mt-2">{agent.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Separator className="mb-4" />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-muted-foreground flex items-center gap-2">
                  <Cpu className="size-3.5" />
                  <span>{agent.runtime}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Clock className="size-3.5" />
                  <span>{agent.lastActive}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <DollarSign className="size-3.5" />
                  <span>{agent.totalCost}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Bot className="size-3.5" />
                  <span>{agent.apiCalls} calls</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
