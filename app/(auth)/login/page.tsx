import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-sm space-y-6 p-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground text-sm">Sign in to your OpenClaw Console account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
