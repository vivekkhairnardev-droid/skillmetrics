"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={containerRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu");

  return (
    <button
      type="button"
      onClick={() => context.setOpen((prev) => !prev)}
      className={cn("cursor-pointer focus:outline-none", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  className,
  align = "right",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}) {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu");

  if (!context.open) return null;

  return (
    <div
      className={cn(
        "absolute z-50 mt-2 min-w-56 rounded-sm border border-border bg-white p-1 text-foreground shadow-lg ring-1 ring-black/5 animate-in fade-in-80 zoom-in-95",
        align === "right" ? "right-0" : "left-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider", className)}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const context = React.useContext(DropdownContext);

  return (
    <div
      onClick={() => {
        if (onClick) onClick();
        if (context) context.setOpen(false);
      }}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-xs px-2 py-1.5 text-xs font-semibold outline-none hover:bg-slate-100 hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({ className }: { className?: string }) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} />;
}
