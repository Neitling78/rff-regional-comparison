import { useState } from "react";
import { AGENCIES, COLUMNS, LOWER_IS_BETTER } from "./agencyData.js";

const C = {
  bg: "#0a0f1a", surface: "#111827", card: "#1a2235", border: "#1e3a5f",
  accent: "#e85d04", gold: "#f59e0b", blue: "#3b82f6",
  green: "#10b981", text: "#f0f4f8", textMuted: "#94a3b8", textDim: "#4b5e78",
  danger: "#ef4444",
};

function fmtDollar(v) {
  if (v === null || v === undefined) return "—";
  return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function fmtPct(v) {
  if (v === null || v === undefined) return "—";
  return v.toFixed(2) + "%";
}
function fmtVal(col, v) {
  return col.format === "dollar" ? fmtDollar(v) : fmtPct(v);
}

const rsvAgency = AGENCIES.find(a => a.highlight);
function getRSVVal(key) { return rsvAgency ? rsvAgency[key] : null; }

function cellColor(key, val, isHighlight) {
  if (isHighlight) return C.gold;
  if (val === null || val === undefined) return C.textDim;
  const base = getRSVVal(key);
  if (base === null || base === undefined) return C.text;
  const lowerBetter = LOWER_IS_BETTER.has(key);
  if (val > base) return lowerBetter ? C.danger : C.green;
  if (val < base) return lowerBetter ? C.green : C.danger;
  return C.text;
}

const GROUP_COLORS = {
  "Raises": C.blue, "Base Pay": C.gold, "Incentives": "#a78bfa",
  "Benefits": C.green, "Taxes & PERS": C.danger, "Total": C.accent,
};

const thBase = { padding: "10px 12px", textAlign: "left", fontWeight: "600", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" };
const tdBase = { padding: "9px 12px", borderBottom: `1px solid rgba(30,58,95,0.4)`, fontSize: "13px", whiteSpace: "nowrap" };

export default function ComparisonTool() {
  const [sortKey, setSortKey] = useState("topStepMonthly");
  const [sortDir, setSortDir] = useState("desc");
  const [filterGroup, setFilterGroup] = useState("All");

  const groups = ["All", ...Array.from(new Set(COLUMNS.map(c => c.group)))];
  const visibleCols = filterGroup === "All" ? COLUMNS : COLUMNS.filter(c => c.group === filterGroup);

  const sorted = [...AGENCIES].sort((a, b) => {
    if (a.highlight) return -1;
    if (b.highlight) return 1;
    const av = a[sortKey], bv = b[sortKey];
    if (av === null && bv === null) return 0;
    if (av === null) return 1;
    if (bv === null) return -1;
    return sortDir === "asc" ? av - bv : bv - av;
  });

  function handleSort(key) {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  }

  const pending = AGENCIES.filter(a => !a.highlight && a.topStepMonthly === null).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans','Helvetica Neue',sans-serif" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0d1b2e,#0a1628,#0d1b2e)", borderBottom: `2px solid ${C.accent}`, padding: "20px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: C.textMuted, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>IAFF Local 1592 · Roseville Fire Fighters</div>
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "800" }}>🗺 Regional Compensation Comparison</h1>
          <div style={{ fontSize: "12px", color: C.textMuted, marginTop: "4px" }}>
            Top firefighter step · {AGENCIES.length} agencies · {pending > 0 ? `${pending} pending data` : "All data loaded"}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px 16px" }}>

        {/* Legend + Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px" }}>
            <span style={{ color: C.gold }}>■ Roseville (baseline)</span>
            <span style={{ color: C.green }}>■ Above Roseville</span>
            <span style={{ color: C.danger }}>■ Below Roseville</span>
            <span style={{ color: C.textDim }}>■ Data pending</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {groups.map(g => (
              <button key={g} onClick={() => setFilterGroup(g)} style={{
                padding: "5px 12px", borderRadius: "20px", border: "none", cursor: "pointer",
                fontSize: "11px", fontWeight: "600",
                background: filterGroup === g ? C.accent : C.card,
                color: filterGroup === g ? "#fff" : C.textMuted,
              }}>{g}</button>
            ))}
          </div>
        </div>

        {/* PERS Formula row */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", fontSize: "12px" }}>
          <span style={{ color: C.textMuted, marginRight: "16px", fontWeight: "600" }}>PERS Formula:</span>
          {sorted.map(a => (
            <span key={a.name} style={{ marginRight: "16px" }}>
              <span style={{ color: a.highlight ? C.gold : C.textMuted, fontWeight: a.highlight ? "700" : "400" }}>{a.shortName}: </span>
              <span style={{ color: a.persFormula ? C.text : C.textDim }}>{a.persFormula || "—"}</span>
            </span>
          ))}
        </div>

        {pending > 0 && (
          <div style={{ background: "rgba(245,158,11,0.08)", border: `1px solid rgba(245,158,11,0.2)`, borderRadius: "8px", padding: "10px 14px", marginBottom: "16px", fontSize: "12px", color: C.textMuted }}>
            ⏳ <strong style={{ color: C.gold }}>{pending} agencies</strong> pending data — rows will populate as MOUs and salary schedules are reviewed.
          </div>
        )}

        {/* Table */}
        <div style={{ overflowX: "auto", borderRadius: "10px", border: `1px solid ${C.border}` }}>
          <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "600px" }}>
            <thead>
              {/* Group row */}
              <tr>
                <th style={{ ...thBase, background: C.surface, position: "sticky", left: 0, zIndex: 3, minWidth: "150px", borderRight: `2px solid ${C.border}` }} />
                {visibleCols.map((col, i) => {
                  const prev = i > 0 ? visibleCols[i - 1].group : null;
                  if (col.group === prev) return null;
                  const span = visibleCols.filter(c => c.group === col.group).length;
                  return (
                    <th key={col.group} colSpan={span} style={{ ...thBase, background: C.surface, color: GROUP_COLORS[col.group] || C.textMuted, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", borderLeft: `2px solid ${C.border}`, textAlign: "center", padding: "6px 8px" }}>
                      {col.group}
                    </th>
                  );
                })}
              </tr>
              {/* Column row */}
              <tr>
                <th style={{ ...thBase, background: C.surface, position: "sticky", left: 0, zIndex: 3, borderRight: `2px solid ${C.border}`, color: C.textMuted, fontSize: "11px" }}>Agency</th>
                {visibleCols.map((col, i) => {
                  const prev = i > 0 ? visibleCols[i - 1].group : null;
                  return (
                    <th key={col.key} onClick={() => handleSort(col.key)} style={{
                      ...thBase, background: C.surface, cursor: "pointer", userSelect: "none",
                      borderLeft: col.group !== prev ? `2px solid ${C.border}` : `1px solid ${C.border}`,
                      color: sortKey === col.key ? C.accent : C.textMuted, fontSize: "11px", minWidth: "90px",
                    }}>
                      {col.label}
                      <span style={{ marginLeft: "4px", fontSize: "9px", opacity: 0.6 }}>
                        {sortKey === col.key ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {sorted.map((agency, ri) => (
                <tr key={agency.name} style={{ background: agency.highlight ? "rgba(232,93,4,0.08)" : ri % 2 === 0 ? C.card : C.surface }}>
                  <td style={{ ...tdBase, position: "sticky", left: 0, zIndex: 1, background: agency.highlight ? "rgba(232,93,4,0.12)" : ri % 2 === 0 ? C.card : C.surface, borderRight: `2px solid ${C.border}`, fontWeight: agency.highlight ? "700" : "400", color: agency.highlight ? C.gold : C.text, fontSize: "12px" }}>
                    {agency.highlight && "⭐ "}{agency.name}
                    {agency.highlight && <div style={{ fontSize: "10px", color: C.textDim, fontWeight: "400" }}>baseline</div>}
                  </td>
                  {visibleCols.map((col, ci) => {
                    const val = agency[col.key];
                    const prev = ci > 0 ? visibleCols[ci - 1].group : null;
                    return (
                      <td key={col.key} style={{ ...tdBase, borderLeft: col.group !== prev ? `2px solid ${C.border}` : `1px solid rgba(30,58,95,0.4)`, color: cellColor(col.key, val, agency.highlight), fontWeight: agency.highlight ? "600" : "400", textAlign: "right" }}>
                        {fmtVal(col, val)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "24px", padding: "16px", background: C.card, borderRadius: "8px", fontSize: "11px", color: C.textDim, lineHeight: "1.8" }}>
          <strong style={{ color: C.textMuted }}>Notes:</strong><br />
          · "Top Step" = top firefighter step (not Captain). Hourly based on 224 hrs/mo (56 hr/wk shift).<br />
          · Color coding compares each agency to Roseville as the baseline. Green = above, red = below.<br />
          · "—" = data not yet collected. Data sourced from MOUs and salary schedules as of 2025–2026.<br />
          · For informational and negotiation reference purposes only.
        </div>
      </div>
    </div>
  );
}
