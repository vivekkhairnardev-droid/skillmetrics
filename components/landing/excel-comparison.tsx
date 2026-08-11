"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, AlertTriangle, ChevronsLeftRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSiteSettings } from "@/components/site-settings-context";

const employeeData = [
  { code: "EMP201", name: "Rahul Sharma", initials: "RS", color: "bg-blue-500", role: "Senior PLC Technician", levels: ["L3", "L2", "L4", "L4", "L1", "L2", "L2", "L2"] },
  { code: "EMP202", name: "Amit Patel", initials: "AP", color: "bg-emerald-600", role: "Production Line Operator", levels: ["L1", "L3", "L4", "—", "L1", "—", "L2", "L2"] },
  { code: "EMP203", name: "Sarah D'souza", initials: "SD", color: "bg-orange-500", role: "Quality Control Auditor", levels: ["L1", "L2", "L4", "—", "L1", "—", "L4", "L2"] },
  { code: "EMP204", name: "Vikram Singh", initials: "VS", color: "bg-purple-600", role: "Warehouse Supervisor", levels: ["L1", "L2", "L4", "—", "L3", "—", "L2", "L2"] },
  { code: "EMP207", name: "Employee 7", initials: "E7", color: "bg-slate-500", role: "Logistics Lead", levels: ["L1", "L2", "L4", "—", "L3", "—", "L2", "L2"] },
  { code: "EMP208", name: "Employee 8", initials: "E8", color: "bg-slate-600", role: "Production Lead", levels: ["L1", "L3", "L4", "—", "L1", "—", "L2", "L2"] },
  { code: "EMP209", name: "Employee 9", initials: "E9", color: "bg-slate-700", role: "Maintenance Lead", levels: ["L3", "L2", "L4", "L4", "L1", "L2", "L2", "L2"] },
  { code: "EMP210", name: "Employee 10", initials: "E10", color: "bg-slate-500", role: "Quality Lead", levels: ["L1", "L2", "L4", "—", "L1", "—", "L4", "L2"] },
  { code: "EMP211", name: "Employee 11", initials: "E11", color: "bg-slate-600", role: "Logistics Lead", levels: ["L1", "L2", "L4", "—", "L3", "—", "L2", "L2"] },
  { code: "EMP212", name: "Employee 12", initials: "E12", color: "bg-slate-700", role: "Production Lead", levels: ["L1", "L3", "L4", "—", "L1", "—", "L2", "L2"] },
];

const levelStyles: Record<string, string> = {
  "—": "bg-slate-100 text-slate-400 border-slate-200",
  L1: "bg-red-100 text-red-700 border-red-300",
  L2: "bg-amber-100 text-amber-800 border-amber-300",
  L3: "bg-amber-200 text-amber-900 border-amber-400",
  L4: "bg-emerald-100 text-emerald-700 border-emerald-300",
  L5: "bg-emerald-600 text-white border-emerald-700",
};

const excelEmployees = ["Rahul Sharma", "Amit Patel", "Sarah D'souza", "Vikram Singh", "Employee 7", "Employee 8"];

export function ExcelComparison() {
  const { settings } = useSiteSettings();
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="excel-vs-skillmetrics" className="w-full bg-[#FAF8F5] dark:bg-background py-20 border-b border-border/60 scroll-mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {settings.comparisonTitle || "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence"}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            {settings.comparisonSubtitle || "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking."}
          </p>
        </div>

        {/* INTERACTIVE COMPARISON CONTAINER */}
        <div className="relative w-full h-[540px] sm:h-[580px] rounded-xl overflow-hidden border border-border shadow-2xl select-none group bg-white">

          {/* LAYER 1 (BACKGROUND): TRADITIONAL EXCEL */}
          <div className="absolute inset-0 w-full h-full bg-slate-100 text-slate-900 flex flex-col font-sans">
            <div className="bg-[#107c41] text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-400 inline-block" />
                </div>
                <span className="bg-emerald-800 text-emerald-100 text-[10px] px-2 py-0.5 rounded font-mono">AutoSave ON</span>
                <span className="font-mono text-xs font-bold text-white">ManufacturingSkillsMatrix_TrainingData.xlsx</span>
              </div>
              <div className="text-[11px] text-emerald-200 font-mono">Excel (Static Sheet)</div>
            </div>

            <div className="bg-slate-200 border-b border-slate-300 px-4 py-1 flex items-center gap-4 text-xs text-slate-700 font-medium">
              <span className="font-bold text-slate-900 border-b-2 border-[#107c41] pb-0.5">Home</span>
              <span>Insert</span><span>Draw</span><span>Page Layout</span><span>Formulas</span><span>Data</span><span>Review</span><span>View</span><span>Automate</span>
            </div>

            <div className="bg-white border-b border-slate-300 px-4 py-1 flex items-center gap-3 text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-400">A1</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400">fx</span>
              <span className="text-red-600 font-medium">=VLOOKUP(A4, MatrixSheet!$A$1:$Z$100, 3, FALSE)</span>
            </div>

            <div className="p-4 overflow-x-auto flex-1 bg-white font-sans text-xs">
              <div className="flex items-center gap-3 pb-3">
                <span className="text-base font-bold text-slate-900">Manufacturing — Production Line A</span>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">6 Employees</span>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">8 Skills</span>
              </div>

              <div className="border border-slate-300 rounded overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-col gap-1 text-slate-600 text-xs font-medium">
                  <div className="flex items-center gap-1.5"><ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Shift lines</div>
                  <div className="flex items-center gap-1.5 pl-4"><ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Team A</div>
                </div>

                <table className="w-full text-left border-collapse border-t border-slate-300 text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      <th className="p-2 border-r border-slate-300 w-8"></th>
                      <th className="p-2 border-r border-slate-300 min-w-[200px] font-bold text-slate-800">Skill Name</th>
                      {excelEmployees.map((name, i) => (
                        <th key={i} className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-12">
                          <div className="flex flex-col items-center gap-2 h-full justify-end">
                            <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{name}</span>
                            <div className="h-6 w-6 rounded-full bg-slate-300 text-slate-700 text-[9px] font-bold flex items-center justify-center border border-slate-400">
                              {name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        </th>
                      ))}
                      <th className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-10 bg-slate-200/60"><span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Achieved</span></th>
                      <th className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-10 bg-slate-200/60"><span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Required</span></th>
                      <th className="p-2 text-center align-bottom h-28 w-10 bg-slate-200/60"><span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Gap</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 font-mono text-[11px]">
                    {/* Excel rows with errors */}
                    {[
                      { skill: "PLC Hands", vals: ["1","1","1","1","1","1"], ach: "6", req: "6", gap: "0", gapColor: "bg-emerald-500" },
                      { skill: "Process Control", vals: ["1","1","1","1","1","1"], ach: "6", req: "6", gap: "0", gapColor: "bg-emerald-500", alt: true },
                      { skill: "Hydraulics", vals: ["1","#VALUE!","#N/A","#REF!","#N/A","#VALUE!"], ach: "1", req: "6", gap: "5", gapColor: "bg-red-500" },
                      { skill: "PLC Troubleshoot", vals: ["1","#REF!","#VALUE!","#N/A","#REF!","#N/A"], ach: "1", req: "6", gap: "5", gapColor: "bg-red-500", alt: true },
                    ].map((row, ri) => (
                      <tr key={ri} className={row.alt ? "bg-slate-50/50" : ""}>
                        {ri === 0 && <td rowSpan={4} className="p-2 border-r border-slate-300 bg-slate-100 text-slate-500 font-sans font-bold text-center align-middle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Production line A</td>}
                        <td className="p-2 border-r border-slate-300 font-sans text-slate-800 font-medium">{row.skill}</td>
                        {row.vals.map((v, ci) => {
                          const isErr = v.startsWith("#");
                          return <td key={ci} className={`p-2 border-r border-slate-300 text-center font-bold ${isErr ? (v === "#N/A" ? "bg-amber-100 text-amber-800" : "bg-red-200 text-red-800") : "bg-emerald-100 text-emerald-800"}`}>{v}</td>;
                        })}
                        <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">{row.ach}</td>
                        <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">{row.req}</td>
                        <td className="p-2 text-center font-sans bg-slate-50"><span className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${row.gapColor} text-white font-extrabold text-[10px]`}>{row.gap}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-200 px-4 py-2 flex items-center justify-between text-xs text-red-700 font-sans font-semibold">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                ❌ Traditional Excel Matrix — Broken formula references (`#VALUE!`, `#REF!`), unverified static entries.
              </span>
            </div>
          </div>

          {/* LAYER 2 (FOREGROUND): SKILLMETRICS DASHBOARD */}
          <div
            className="absolute inset-0 w-full h-full bg-white text-slate-900 flex flex-col justify-between border-l-2 border-brand-red shadow-2xl transition-all duration-75"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="border-b border-slate-200 px-6 py-2.5 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-8">
                <a href="#" className="flex items-center"><img src="/logo-3.png" alt="SkillMetrics Logo" className="h-7 w-auto object-contain" /></a>
                <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-500">
                  <span className="text-brand-red border-b-2 border-brand-red pb-1 font-bold cursor-pointer">Matrices</span>
                  <span className="hover:text-slate-900 cursor-pointer">Employees</span>
                  <span className="hover:text-slate-900 cursor-pointer">Skills</span>
                  <span className="hover:text-slate-900 cursor-pointer">Organization</span>
                </nav>
              </div>
              <Badge className="bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-0.5">Live AI Engine Active</Badge>
            </div>

            <div className="p-3 sm:p-4 overflow-x-auto flex-1 bg-white font-sans text-xs">
              {/* Toolbar */}
              <div className="flex items-center gap-2 pb-3 flex-wrap">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-400 text-[11px] min-w-[160px]"><Search className="h-3.5 w-3.5" />Search employees...</div>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-600">All Departments <ChevronDown className="h-3 w-3" /></span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-600">All Buckets <ChevronDown className="h-3 w-3" /></span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-slate-600">All Levels <ChevronDown className="h-3 w-3" /></span>
                <span className="ml-auto flex items-center gap-1.5 bg-brand-red text-white rounded-md px-2.5 py-1.5 text-[11px] font-bold">Export Excel</span>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 pb-3 flex-wrap text-[10px] font-semibold">
                <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 border border-slate-200">— N/A</span>
                <span className="px-2 py-1 rounded bg-red-100 text-red-700 border border-red-300">L1 L1 Aware</span>
                <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300">L2 L2 Basic</span>
                <span className="px-2 py-1 rounded bg-amber-200 text-amber-900 border border-amber-400">L3 L3 Capable</span>
                <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-300">L4 L4 Proficient</span>
                <span className="px-2 py-1 rounded bg-emerald-600 text-white border border-emerald-700">L5 L5 Expert</span>
              </div>

              {/* Matrix Table */}
              <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr>
                      <th className="p-2 border-r border-slate-200 bg-slate-900" colSpan={3}></th>
                      <th className="p-2 text-center text-white font-bold text-[11px] bg-orange-500 border-r border-white/20" colSpan={2}>Mechanical</th>
                      <th className="p-2 text-center text-white font-bold text-[11px] bg-amber-500 border-r border-white/20" colSpan={2}>Electrical</th>
                      <th className="p-2 text-center text-white font-bold text-[11px] bg-red-500 border-r border-white/20" colSpan={1}>Safety</th>
                      <th className="p-2 text-center text-white font-bold text-[11px] bg-emerald-600" colSpan={1}>IT</th>
                      <th className="p-2 bg-slate-50" colSpan={2}></th>
                    </tr>
                    <tr className="bg-white border-b border-slate-200">
                      <th className="p-2 border-r border-slate-200 bg-slate-900 text-white font-bold whitespace-nowrap">Code</th>
                      <th className="p-2 border-r border-slate-200 bg-slate-900 text-white font-bold min-w-[170px]">Employees</th>
                      <th className="p-2 border-r border-slate-200 bg-slate-900 text-white font-bold min-w-[150px]">Role</th>
                      {["PLC Hands","Welding","Process Control","Hydraulics","Lock Tagout","PLC Troubleshoot","Data Quality","Python AI"].map((s,i) => (
                        <th key={i} className="p-2 border-r border-slate-200 text-center font-semibold text-slate-700 min-w-[75px]">{s}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {employeeData.map((emp, ri) => (
                      <tr key={ri} className={ri % 2 ? "bg-slate-50/40" : ""}>
                        <td className="p-2 border-r border-slate-100 font-mono text-slate-500 whitespace-nowrap">{emp.code}</td>
                        <td className="p-2 border-r border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className={`h-6 w-6 rounded-full ${emp.color} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>{emp.initials}</span>
                            <span className="font-semibold text-slate-800 whitespace-nowrap">{emp.name}</span>
                          </div>
                        </td>
                        <td className="p-2 border-r border-slate-100 text-slate-600 whitespace-nowrap">{emp.role}</td>
                        {emp.levels.map((lvl, ci) => (
                          <td key={ci} className="p-2 border-r border-slate-100 text-center">
                            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-bold text-[11px] border ${levelStyles[lvl]}`}>{lvl}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-brand-red/5 border-t border-brand-red/20 px-6 py-2 flex items-center justify-between text-xs font-bold text-brand-red shrink-0">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                ⚡ SkillMetrics Automated Engine — Real-time verified matrix tracking, zero manual formula errors.
              </span>
              <span className="text-[11px] font-extrabold bg-brand-red text-white px-2.5 py-0.5 rounded shadow-xs">100% Automated</span>
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div className="absolute top-0 bottom-0 w-1 bg-brand-red z-30 pointer-events-none shadow-[0_0_15px_rgba(237,43,31,0.8)]" style={{ left: `${sliderPosition}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg border-2 border-white cursor-ew-resize group-hover:scale-110 transition-transform">
              <ChevronsLeftRight className="h-5 w-5" />
            </div>
          </div>

          <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40" aria-label="SkillMetrics vs Excel comparison slider" />
        </div>
      </div>
    </section>
  );
}
