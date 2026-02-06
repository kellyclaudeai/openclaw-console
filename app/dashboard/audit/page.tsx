export const dynamic = "force-dynamic";

import { FileText, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const auditEntries = [
  {
    id: 1,
    timestamp: "2026-02-05 14:32:10",
    agent: "Code Review Bot",
    action: "api_call",
    details: "POST https://api.openai.com/v1/chat/completions (gpt-4o, 1,240 tokens)",
  },
  {
    id: 2,
    timestamp: "2026-02-05 14:17:45",
    agent: "Data Pipeline Agent",
    action: "file_access",
    details: "Read /data/pipeline/config.yaml (1.2KB)",
  },
  {
    id: 3,
    timestamp: "2026-02-05 14:04:22",
    agent: "Code Review Bot",
    action: "api_call",
    details: "POST https://api.github.com/repos/openclaw/console/pulls/47/reviews",
  },
  {
    id: 4,
    timestamp: "2026-02-05 13:31:08",
    agent: "Security Scanner",
    action: "policy_violation",
    details: "Attempted to read /etc/passwd - blocked by Default Policy rule #3",
  },
  {
    id: 5,
    timestamp: "2026-02-05 12:15:33",
    agent: "Data Pipeline Agent",
    action: "api_call",
    details: "POST https://xyzproject.supabase.co/rest/v1/events (inserted 42 rows)",
  },
  {
    id: 6,
    timestamp: "2026-02-05 11:48:19",
    agent: "Code Review Bot",
    action: "file_access",
    details: "Read /repos/openclaw/console/src/app/page.tsx (3.4KB)",
  },
  {
    id: 7,
    timestamp: "2026-02-05 11:22:01",
    agent: "Security Scanner",
    action: "api_call",
    details: "GET https://api.github.com/repos/openclaw/console/security/advisories",
  },
  {
    id: 8,
    timestamp: "2026-02-05 10:55:47",
    agent: "Data Pipeline Agent",
    action: "file_access",
    details: "Write /tmp/pipeline/staging/batch-0205.json (128KB)",
  },
  {
    id: 9,
    timestamp: "2026-02-05 10:12:30",
    agent: "Code Review Bot",
    action: "api_call",
    details: "POST https://api.openai.com/v1/chat/completions (gpt-4o, 890 tokens)",
  },
  {
    id: 10,
    timestamp: "2026-02-05 09:45:15",
    agent: "Security Scanner",
    action: "policy_violation",
    details:
      "Attempted outbound connection to 192.168.1.100:22 - blocked by Restricted Mode rule #7",
  },
];

function actionBadge(action: string) {
  switch (action) {
    case "api_call":
      return (
        <Badge className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/15">
          API Call
        </Badge>
      );
    case "file_access":
      return (
        <Badge className="bg-blue-500/15 text-blue-600 hover:bg-blue-500/15">File Access</Badge>
      );
    case "policy_violation":
      return <Badge variant="destructive">Violation</Badge>;
    default:
      return <Badge variant="secondary">{action}</Badge>;
  }
}

export default function AuditPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
          <FileText className="size-5 text-indigo-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Audit Log</h1>
          <p className="text-muted-foreground">
            A complete record of all agent actions across your fleet.
          </p>
        </div>
      </div>

      {/* Audit log */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
          <CardDescription>Showing the latest 10 entries. All timestamps in UTC.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-0">
            {auditEntries.map((entry, index) => (
              <div key={entry.id}>
                {index > 0 && <Separator className="my-4" />}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <Clock className="text-muted-foreground mt-1 size-4 shrink-0" />
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium">{entry.agent}</span>
                        {actionBadge(entry.action)}
                      </div>
                      <p className="text-muted-foreground text-sm">{entry.details}</p>
                    </div>
                  </div>
                  <code className="text-muted-foreground shrink-0 font-mono text-xs whitespace-nowrap">
                    {entry.timestamp}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
