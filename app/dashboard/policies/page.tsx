export const dynamic = "force-dynamic";

import { Shield, Plus, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const policies = [
  {
    id: "policy-1",
    name: "Default Policy",
    description:
      "Standard guardrails for all agents. Allows API calls, blocks filesystem writes outside of /tmp, and enforces rate limits.",
    ruleCount: 8,
    isDefault: true,
    agentsUsing: 2,
  },
  {
    id: "policy-2",
    name: "Restricted Mode",
    description:
      "Highly restricted policy for untrusted agents. No network access, read-only filesystem, and limited token budget.",
    ruleCount: 12,
    isDefault: false,
    agentsUsing: 1,
  },
  {
    id: "policy-3",
    name: "Full Access",
    description:
      "Unrestricted policy for trusted internal agents. All permissions granted with audit logging enabled.",
    ruleCount: 3,
    isDefault: false,
    agentsUsing: 0,
  },
];

export default function PoliciesPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Policies</h1>
          <p className="text-muted-foreground">
            Define access controls and guardrails for your agents.
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500">
          <Plus className="size-4" />
          New Policy
        </Button>
      </div>

      {/* Policy cards */}
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {policies.map((policy) => (
          <Card key={policy.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Shield className="size-5 text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">{policy.name}</CardTitle>
                    {policy.isDefault && (
                      <Badge variant="outline" className="text-xs">
                        Default
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">{policy.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Separator className="mb-4" />
              <div className="text-muted-foreground flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FileCheck className="size-3.5" />
                  <span>{policy.ruleCount} rules</span>
                </div>
                <span>
                  {policy.agentsUsing} {policy.agentsUsing === 1 ? "agent" : "agents"} assigned
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
