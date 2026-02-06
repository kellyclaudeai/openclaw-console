import type { Metadata } from "next";
import { SignUpForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-sm space-y-6 p-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
          <p className="text-muted-foreground text-sm">Get started with OpenClaw Console</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
