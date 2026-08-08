"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Trash2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SubmissionsStudioPage() {
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submissions, setSubmissions] = useState<{
    contactSubmissions: any[];
    newsletterSubscriptions: any[];
    demoRequests: any[];
  }>({ contactSubmissions: [], newsletterSubscriptions: [], demoRequests: [] });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions");
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data);
      } else {
        showNotification("error", data.error || "Failed to load submissions");
      }
    } catch {
      showNotification("error", "Error fetching submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (type: string, id: number) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    try {
      const res = await fetch(`/api/admin/submissions?type=${type}&id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Item deleted successfully");
        fetchSubmissions();
      } else {
        showNotification("error", data.error || "Failed to delete item");
      }
    } catch {
      showNotification("error", "Error deleting item");
    }
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        <p className="text-xs text-slate-500">Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${notification.type === "success"
          ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
          : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}>
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Form Submissions</h2>
          <p className="text-xs text-slate-500">Overview of client inquiries, demo requests, and newsletter signups</p>
        </div>
        <Button variant="outline" size="sm" onClick={fetchSubmissions} className="text-xs gap-1.5 rounded-sm">
          <RefreshCw className="h-3.5 w-3.5" /> Refresh Data
        </Button>
      </div>

      <div className="space-y-8">
        {/* Contact Page Submissions */}
        <Card className="bg-white border-slate-200 shadow-sm p-0 overflow-hidden">
          <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between bg-slate-50/50">
            <div>
              <CardTitle className="text-sm font-bold text-slate-900">Contact Page Submissions</CardTitle>
              <CardDescription className="text-[10px] text-slate-500">Client inquiries received via the contact page</CardDescription>
            </div>
            <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.contactSubmissions.length}</Badge>
          </CardHeader>
          <CardContent className="p-0">
            {submissions.contactSubmissions.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">No submissions found.</div>
            ) : (
              <>
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="px-6 py-3">Client</th>
                        <th className="px-6 py-3">Message</th>
                        <th className="px-6 py-3">Details</th>
                        <th className="px-6 py-3">Submitted At</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {submissions.contactSubmissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-50/50">
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900">{sub.name}</div>
                            <div className="text-[10px] text-slate-500">{sub.email}</div>
                          </td>
                          <td className="px-6 py-4 max-w-xs truncate text-slate-700" title={sub.message}>
                            {sub.message}
                          </td>
                          <td className="px-6 py-4 text-slate-700">
                            <div>{sub.phone}</div>
                            <div className="text-[10px] text-slate-500">{sub.company || "No Company"}</div>
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-[10px]">
                            {new Date(sub.created_at).toLocaleDateString()} {new Date(sub.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleDelete("contact", sub.id)} className="text-slate-400 hover:text-brand-red h-8 w-8 rounded-sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-slate-100">
                  {submissions.contactSubmissions.map((sub) => (
                    <div key={sub.id} className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-slate-900 text-xs">{sub.name}</div>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete("contact", sub.id)} className="text-slate-400 hover:text-brand-red h-7 w-7">
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <div className="text-[11px] text-slate-500">{sub.email} &bull; {sub.phone}</div>
                      <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">{sub.message}</div>
                      <div className="text-[10px] text-slate-400 text-right">{new Date(sub.created_at).toLocaleDateString()}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Demo Requests */}
        <Card className="bg-white border-slate-200 shadow-sm p-0 overflow-hidden">
          <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between bg-slate-50/50">
            <div>
              <CardTitle className="text-sm font-bold text-slate-900">Book-a-Demo Requests</CardTitle>
              <CardDescription className="text-[10px] text-slate-500">Leads looking for a live platform demonstration</CardDescription>
            </div>
            <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.demoRequests.length}</Badge>
          </CardHeader>
          <CardContent className="p-0">
            {submissions.demoRequests.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">No demo requests found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                      <th className="px-6 py-3">Client Name</th>
                      <th className="px-6 py-3">Work Email</th>
                      <th className="px-6 py-3">Company Name</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {submissions.demoRequests.map((req) => (
                      <tr key={req.id} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-bold text-slate-900">{req.first_name} {req.last_name}</td>
                        <td className="px-6 py-4 text-slate-700">{req.work_email}</td>
                        <td className="px-6 py-4 text-slate-700 font-semibold">{req.company_name}</td>
                        <td className="px-6 py-4 text-slate-500">{req.phone_number || "N/A"}</td>
                        <td className="px-6 py-4 text-slate-500 text-[10px]">
                          {new Date(req.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleDelete("demo", req.id)} className="text-slate-400 hover:text-brand-red h-8 w-8 rounded-sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Newsletter Subscriptions */}
        <Card className="bg-white border-slate-200 shadow-sm p-0 overflow-hidden">
          <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between bg-slate-50/50">
            <div>
              <CardTitle className="text-sm font-bold text-slate-900">Newsletter Subscribers</CardTitle>
              <CardDescription className="text-[10px] text-slate-500">Emails collected via newsletter signups</CardDescription>
            </div>
            <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.newsletterSubscriptions.length}</Badge>
          </CardHeader>
          <CardContent className="p-0">
            {submissions.newsletterSubscriptions.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">No subscribers found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                      <th className="px-6 py-3">Email Address</th>
                      <th className="px-6 py-3">Subscribed Date</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {submissions.newsletterSubscriptions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-bold text-slate-900">{sub.email}</td>
                        <td className="px-6 py-4 text-slate-500 text-[10px]">
                          {new Date(sub.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleDelete("newsletter", sub.id)} className="text-slate-400 hover:text-brand-red h-8 w-8 rounded-sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
