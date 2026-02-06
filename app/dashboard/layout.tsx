"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Shield,
  DollarSign,
  FileText,
  Menu,
  Zap,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Agents", href: "/dashboard/agents", icon: Bot },
  { label: "Policies", href: "/dashboard/policies", icon: Shield },
  { label: "Costs", href: "/dashboard/costs", icon: DollarSign },
  { label: "Audit Log", href: "/dashboard/audit", icon: FileText },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-3">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-indigo-500/10 text-indigo-400"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            )}
          >
            <item.icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="bg-background flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950 lg:flex">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 px-6">
          <Zap className="size-5 text-indigo-400" />
          <span className="text-lg font-bold text-white">OpenClaw</span>
        </div>
        <Separator className="bg-slate-800" />
        {/* Nav */}
        <div className="flex-1 overflow-y-auto py-4">
          <SidebarNav />
        </div>
        {/* Bottom */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback className="bg-indigo-500/20 text-xs text-indigo-300">
                KL
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <p className="truncate text-sm font-medium text-slate-200">Kelly</p>
              <p className="truncate text-xs text-slate-500">kelly@bloomtech.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="border-border bg-background flex h-16 items-center justify-between border-b px-4 lg:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile menu trigger */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 border-slate-800 bg-slate-950 p-0">
                <SheetHeader className="border-b border-slate-800 px-6 py-4">
                  <SheetTitle className="flex items-center gap-2 text-white">
                    <Zap className="size-5 text-indigo-400" />
                    OpenClaw
                  </SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <SidebarNav
                    onNavigate={() => {
                      setSheetOpen(false);
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
            {/* Mobile logo (shown when sidebar is hidden) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Zap className="size-5 text-indigo-400" />
              <span className="font-bold">OpenClaw</span>
            </div>
          </div>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <Avatar size="sm">
                  <AvatarFallback className="bg-indigo-500/20 text-xs text-indigo-300">
                    KL
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm sm:inline">Kelly</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <User className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
