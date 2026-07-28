"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoModal({ open, onOpenChange }: BookDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold flex items-center gap-2">
            Schedule Your Live Demo
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Experience how SkillMetrics transforms your skill matrix and competency tracking.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-foreground">Demo Request Submitted!</h3>
            <p className="text-xs text-muted-foreground">
              Our technical engineering team will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Full Name</Label>
              <Input placeholder="John Doe" required className="text-xs" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Work Email</Label>
              <Input type="email" placeholder="john@company.com" required className="text-xs" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Company / Organization</Label>
              <Input placeholder="Acme Corp" required className="text-xs" />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs py-2.5">
                Submit Request <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
