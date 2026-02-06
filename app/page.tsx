export const dynamic = "force-dynamic";

import Link from "next/link";
import { Activity, Shield, DollarSign, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Monitor Agents",
    description:
      "Real-time visibility into every agent's actions, API calls, and resource usage. Never fly blind again.",
  },
  {
    icon: Shield,
    title: "Enforce Policies",
    description:
      "Define granular access policies and guardrails. Automatically block unauthorized actions before they happen.",
  },
  {
    icon: DollarSign,
    title: "Track Costs",
    description:
      "Per-agent cost breakdowns, budget alerts, and spending forecasts. Keep your AI spend under control.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Zap className="size-6 text-indigo-400" />
            <span className="text-lg font-bold text-white">OpenClaw</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild className="text-slate-300 hover:text-white">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-500">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32">
        {/* Gradient background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <Zap className="size-3.5" />
            Now in public beta
          </div>
          <h1 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            The control plane
            <br />
            for AI agents
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Monitor performance, manage policies, enforce budgets, and secure your entire agent
            fleet from a single dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-indigo-600 text-base hover:bg-indigo-500 sm:w-auto"
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-slate-700 bg-transparent text-base text-slate-300 hover:bg-slate-800 hover:text-white sm:w-auto"
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to manage AI agents
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              One platform to monitor, govern, and optimize your entire agent fleet.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <feature.icon className="size-5 text-indigo-400" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to take control?</h2>
          <p className="mt-4 text-lg text-slate-400">
            Start monitoring your AI agents in minutes. No credit card required.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-indigo-600 text-base hover:bg-indigo-500">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Zap className="size-4 text-indigo-400" />
            <span>&copy; {new Date().getFullYear()} OpenClaw</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-300">
              Docs
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Privacy
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
