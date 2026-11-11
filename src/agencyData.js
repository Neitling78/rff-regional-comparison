const DATA = [
  {name:"City of Roseville", shortName:"Roseville", highlight:true, hrs:2912, base:11004.83, r26d:6.5, r27:0, r27d:0, r27lock:false, r28:0, medic:{z:1}, ed:{pct:0.15}, special:{pct:0.05}, longev:{pct:0.025}, deferred:{pct:0.03}, other:0, unif:1300, holiday:{hrs:168}, vaca:288, sick:144, eeRHS:{pct:-0.05}, cityRHS:100, med:2470.27, dv:180, ltd:0, life:14, ss:0, pers:0.1525, cityPERS:0, src:"Roseville MOU 2026\u20132029 + salary schedule (eff 3/21/2026); CalPERS 2027 Region 1"},
  {name:"City of Vacaville", shortName:"Vacaville", highlight:false, hrs:2912, base:12593.77, r26d:2, r27:0, r27d:0, r27lock:false, r28:0, medic:{pct:0.02}, ed:{pct:0.17}, special:{pct:0.05}, longev:{z:1}, deferred:{pct:0.01}, other:100, unif:1800, holiday:{pct:0.0338,hrs:96}, vaca:336, sick:216, eeRHS:{flat:-80}, cityRHS:100, med:2624.66, dv:156, ltd:0, life:4, ss:0, pers:0.1375, cityPERS:0, src:"Vacaville FA MOU 2025\u20132027 + salary listing (eff 11/23/2025); CalPERS 2027 Region 1"},
  {name:"Sacramento Metro Fire", shortName:"Sac Metro", highlight:false, lock26:false, hrs:2912, base:9595.90, r26d:0, r27:0, r27d:0, r27lock:false, r28:0, medic:{pct:0.143}, ed:{pct:0.105}, special:{pct:0.07}, longev:{pct:0.02}, deferred:{z:1}, other:375, unif:0, holiday:{hrs:144}, vaca:336, sick:288, eeRHS:{z:1}, cityRHS:0, med:3555.56, dv:135, ltd:0, life:12, ss:0, pers:0.125, cityPERS:0, src:"SMFD IAFF Local 522 - current salary schedule (top step FF $9,595.90/mo, confirmed); medic 5% EMT + 9.3% Paramedic = 14.3%"},
  {name:"City of Fairfield", shortName:"Fairfield", highlight:false, lock26:false, hrs:2912, base:10534.16, r26d:0, r27:0, r27d:0, r27lock:false, r28:0, medic:{pct:0.125}, ed:{pct:0.1}, special:{pct:0.05}, longev:{z:1}, deferred:{flat:160}, other:0, unif:1850, holiday:{pctEFGH:0.064}, vaca:280, sick:134.4, eeRHS:{z:1}, cityRHS:75, med:2010, dv:50, ltd:18, life:12, ss:0, pers:0.1275, cityPERS:0, src:"Fairfield FPFA MOU 2022\u20132025 + City FF/Para salary range"},
  {name:"Cosumnes CSD", shortName:"Cosumnes", highlight:false, hrs:2912, base:10575, r26d:6, r27:0, r27d:0, r27lock:false, r28:0, medic:{flat:550,pct:0.035}, ed:{pct:0.14}, special:{z:1}, longev:{pct:0.035}, deferred:{flat:75}, other:0, unif:1300, holiday:{hrs:120}, vaca:408, sick:288, eeRHS:{flat:-50}, cityRHS:200, med:2350.10, dv:150, ltd:30, life:4, ss:0, pers:0.1225, cityPERS:0, src:"Cosumnes CSD MOU 2024\u20132027 + salary schedule (7/1/2026, +6%)"},
  {name:"El Dorado Hills Fire", shortName:"El Dorado Hills", highlight:false, hrs:2912, base:11415, r26d:8.94, r27:0.03, r27d:3, r27lock:false, r28:0.04, medic:{z:1}, ed:{flat:1200}, special:{z:1}, longev:{flat:291.67}, deferred:{flat:100}, other:0, unif:1000, holiday:{hrs:130}, vaca:324, sick:216, eeRHS:{z:1}, cityRHS:0, med:3845.71, dv:219, ltd:30, life:6, ss:0, pers:0.1375, cityPERS:0, src:"El Dorado Hills Fire MOU 2026\u20132029 + salary schedule (7/1/2026, +8.94%)"},
  {name:"City of Folsom", shortName:"Folsom", highlight:false, hrs:2912, base:9840.4, r26d:2.5, r27:0.025, r27d:2.5, r27lock:true, r28:0, medic:{pct:0.1}, ed:{pct:0.1}, special:{flat:600}, longev:{pct:0.025}, deferred:{z:1}, other:187.5, unif:1250, holiday:{pct:0.06}, vaca:388, sick:0, eeRHS:{flat:-75}, cityRHS:50, med:2053, dv:170, ltd:0, life:6, ss:0.062, pers:0.1275, cityPERS:0, src:"Folsom Fire MOU 2025\u20132028 + salary schedule (7/1/2026, +2.5%); Folsom pays Social Security"},
  {name:"City of Rocklin", shortName:"Rocklin", highlight:false, hrs:2912, base:9958.94, r26d:2, r27:0.02, r27d:2, r27lock:true, r28:0.01, medic:{flat:650}, ed:{flat:475}, special:{z:1}, longev:{z:1}, deferred:{flat:300}, other:0, unif:950, holiday:{hrs:96}, vaca:315, sick:144, eeRHS:{z:1}, cityRHS:0, med:2375.26, dv:201, ltd:0, life:8, ss:0, pers:0.1375, cityPERS:0.03, src:"Rocklin Fire MOU 2025\u20132028 + salary schedule (7/2026, +2%)"},
  {name:"City of Sacramento", shortName:"Sac City", highlight:false, hrs:2912, base:10484.81, r26d:3, r27:0.035, r27d:3.5, r27lock:false, r27flag:"Settled at +3.5% per the successor MOU (Fire Department Unit 2025-2028, Art.6.1), but it takes effect OCTOBER 2, 2027 - about a month AFTER the 9/1/2027 Total Compensation Study survey data date set by Roseville MOU Ch.2 Art.I A(3). Folsom, Rocklin and El Dorado Hills are counted because their 2027 raises land in July, before the snapshot. This one is defaulted ON at 3.5% so the comparison reflects Sac City's real settled wage, but it is flagged because the City can fairly argue it should be excluded on timing. Set it to 0 to see the effect: ON = 2.66% needed, OFF = 2.45% needed (City method, 11/10/2026). Worth knowing before you spend any credibility on it - the swing is only 0.21 of a point.", r28:0, r28d:0, medic:{pct:0.1}, ed:{pct:0.145}, special:{pct:0.05}, longev:{z:1}, deferred:{z:1}, other:0, unif:910, holiday:{hrs:156.8}, vaca:224, sick:134.4, eeRHS:{flat:-150}, cityRHS:0, med:2280, dv:0, ltd:0, life:1, ss:0, pers:0.135, cityPERS:0, src:"Sacramento City Fire MOU 2023\u201324 + Salary Schedule eff. 10/13/2026 (FR56 class 005010 top step $43.206621/hr, eff. 10/3/2026)"}
]

// (rank comparison is computed from the Verification tab via buildRankComparison, below)
// ---- Per-rank PLAIN top-step base pay ($/hr) from salary schedules (Abram comparison sheet).
// Engineer & Captain prefilled; Battalion Chief left null (no BC salary data provided yet).
// NOTE: Roseville Engineer ($32.45) reads lower than FF ($35.69) in the source sheet — verify.
// ── RANK BASE PAY ─────────────────────────────────────────────────────────────
// Top-step hourly, 56-hour basis (2912 hrs/yr), pinned to the 9/1/2027 Total
// Compensation Study survey date so the rank tabs match the Firefighter tab.
// buildRankComparison takes the raises straight from the City 55% tab's editor, exactly
// as the Firefighter tab does, so the figures below must stay UN-ESCALATED or a 2027
// raise would be counted twice.
// Verified 11/10/2026 against the published salary schedules:
//   Roseville   Schedule B eff 3/21/2026, Step I. Grade 3340B Fire Engineer-B $46.4842,
//               3320B Fire Captain-B $50.6660. MOU Ch.2 Art.I A(2) then realigns the
//               ranks the first full pay period of JANUARY 2027: Engineer = FF Paramedic II
//               x 1.075, Captain = Engineer x 1.10 -> 48.75 / 53.63, which is in force by
//               the survey date. CAUTION: each grade appears twice on the schedule - the
//               "-B" rows are the 56-hr hourly, the "ZB ... 8Hr-ZB" rows carry the same
//               monthly at a 2080 divisor (FF reads 63.4894). Never use a ZB figure here.
//   Vacaville   7/1/2026 sched x 1.02 for the 11/1/2026 raise, matching the FF basis.
//               Engineer/PARAMEDIC class (like-for-like with FF/Paramedic II). No 2027
//               raise - MOU expires 10/2027. NOTE the schedule states 2920 hrs, not 2912.
//   Sac Metro   Current figures supplied by RFF (no published scale): FF $9,595.90,
//               Engineer $10,609.58, Captain $11,875.58, BC $14,433.53 monthly. Out of contract.
//   EDH         7/1/2026 sched Step 5, ENGINEER/PARAMEDIC and CAPTAIN/PARAMEDIC classes
//               (like-for-like with the FF/Paramedic benchmark). Its +3% eff 7/1/2027 is
//               applied by the raise engine, not baked in. NEVER use an "(ADMIN*)" row -
//               those are the 40-hour equivalents.
//   Folsom      7/1/2026 sched Step 7, classes 47F / 54F, annual ÷ 2912.
//   Rocklin     7/11/2026 sched max hourly, classes FE / FC.
//   Sac City    10/3/2026 sched, FR56 top step, classes 005050 / 005020. Its +3.5% is
//               defaulted ON and flagged red on the City 55% tab (it lands 10/2/2027, a
//               month after the survey date); whatever is set there applies here too.
//               NEVER use an FR40 row - those are the admin rates.
//   Cosumnes    9/1/2026 sched Step 7, published MONTHLY: Engineer $11,659,
//               Captain $12,853, converted at 2912/12.
//   Fairfield   8/21/2026 sched, 112-hour biweekly basis, classes 2045 / 2085.
//               NOT the "FIRE ENGINEER 80 HR" row (class 2050).
// Previously these were stale by one or two raises in six of nine agencies, and the
// Roseville engineer figure was $32.45 - 28% BELOW the firefighter rate.
export const RANK_BASE_HRLY = {
  // Published-schedule figures as they read TODAY (2026). Raises are NOT baked in here:
  // buildRankComparison applies each agency's raises from the City 55% tab's raise editor,
  // exactly as the Firefighter tab does, so these must stay un-escalated or they double-count.
  // Roseville's two entries are reference only - its ranks are DERIVED from its Firefighter
  // base via ROSE_RANK_RATIO, so they track the raise editor and the 2028 solver.
  engineer: { "City of Roseville":46.4842, "City of Vacaville":54.4923, "Sacramento Metro Fire":43.7209, "City of Fairfield":47.7509, "Cosumnes CSD":48.0426, "El Dorado Hills Fire":51.99, "City of Folsom":44.6062, "City of Rocklin":45.58, "City of Sacramento":47.7590 },
  captain:  { "City of Roseville":50.6660, "City of Vacaville":58.0420, "Sacramento Metro Fire":48.9378, "City of Fairfield":55.5721, "Cosumnes CSD":52.9639, "El Dorado Hills Fire":59.01, "City of Folsom":49.2975, "City of Rocklin":52.11, "City of Sacramento":53.9938 },
  // BC is INCOMPLETE and cannot yet produce a comparison - see below. Figures are the
  // CURRENT published schedules with no 2027 raise applied, because battalion chiefs are
  // often in a separate bargaining unit and their raise eligibility is unverified.
  //   NO ROSEVILLE ROW: battalion chiefs are not in the RFF salary schedule at all, so
  //     there is nothing to compare against. The BC tab needs the Roseville BC unit's
  //     own schedule before it can be used.
  //   HELD OUT: Cosumnes $76.66 (Exempt/MEO) and Folsom $68.70 (CFFDMME/E92) are exempt
  //     management classes - dividing by 2912 may be wrong by ~40% if they are 40-hour.
  bc: { "City of Vacaville":71.05, "Sacramento Metro Fire":59.48, "City of Fairfield":67.59, "El Dorado Hills Fire":70.88, "City of Rocklin":61.63, "City of Sacramento":67.64 },
};
// Roseville's ranks are defined by the MOU as RATIOS off Firefighter Paramedic II, not as
// independent rates. Ch.2 Art.I A(2), effective the first full pay period of JANUARY 2027:
// "the Fire Captain at 10% above the Fire Engineer base pay and ... the Fire Engineer base
// pay shall be aligned to 7.5% above the Firefighter Paramedic II base pay". That lands
// before the 9/1/2027 survey date, so it governs the comparison. Applying it to the UNRAISED
// Firefighter base lets the normal raise machinery escalate it, so Roseville's Engineer and
// Captain follow the raise editor and the 2028 LMA solver automatically.
// (Before January 2027 the ladder is +2.5% / +9%, which is what the 2026 schedule shows.)
export const ROSE_RANK_RATIO = { engineer: 1.075, captain: 1.075 * 1.10 };

// ── CLASSIC PERS MODE (Engineer and Captain tabs only) ──────────────────
// The contractual survey is PEPRA. Ch.2 Art.I A(3) names the element "Employee PERS
// Contribution Rates Towards PEPRA", and Abram confirmed during the third-check audit
// that the comparison runs PEPRA across the board. This mode is a SIDE ANALYSIS for
// Classic-tier members; it is never the contract number.
//
// EVERY RATE BELOW WAS READ FROM THE MOU TEXT on 11/10/2026. These replaced an earlier
// assumption of a flat 12% for all comparables, which was wrong for three agencies.
// Each rate is the TOTAL the employee pays toward CalPERS - member contribution plus any
// cost-share toward the employer's contribution - because that is the employee's actual
// out-of-pocket, which is what the comparison measures.
// ── LONGEVITY BY YEARS OF SERVICE (Engineer and Captain tabs only) ──────
// The contractual element is YEAR 10 - Ch.2 Art.I A(3) lists "Longevity Pay (Year 10)".
// Those Year-10 figures live in RANK_INCENTIVES and are the default. This table only
// holds the 20- and 25-year tiers, so the two can never drift apart.
// Every schedule read from MOU text on 11/10/2026. Values in each agency's native unit.
// ── ROSEVILLE: HIRE DATE DECIDES WHICH SERVICE-PAY ARTICLE APPLIES ───────
// This has nothing to do with PEPRA. Roseville's own cutoff is JANUARY 1, 2017.
//   Hired BEFORE 1/1/2017 -> Art. VIII LONGEVITY PAY: 2.5% in years 10-14, 5.0% in
//     years 15-19, 7.5% from the 20th year on. Art. XI reports Articles VI through X
//     as CalPERS special compensation, so this IS pensionable.
//   Hired ON OR AFTER 1/1/2017 -> Art. IX SERVICE TERM BONUS: 2.5% in years 10-14 and
//     5.0% from the 15th year on, and only with a satisfactory performance review.
//     Art. XI reports Articles VI through X "EXCLUDING ARTICLE IX", so this is NOT
//     pensionable, and it never reaches 7.5%.
// The two tracks are identical at 10 and 15 years and diverge from the 20th year.
export const ROSEVILLE_SERVICE_PAY = {
  pre2017:  { 10:"2.5", 15:"5", 20:"7.5", 25:"7.5" },   // Art. VIII, pensionable
  post2017: { 10:"2.5", 15:"5", 20:"5",   25:"5"   },   // Art. IX, NOT pensionable
};
// Only Roseville gates service pay on a hire date. Every other agency's longevity
// applies to the whole unit, so this toggle changes nothing for them.
export const HIRE_DATE_AGENCIES = ["City of Roseville"];

export const RANK_LONGEVITY = {
  15: {
    // Art. VIII: "Beginning of 15th year to completion of 19th year 5.0% of base hourly
    // rate." (Art. IX Service Term Bonus gives post-1/1/2017 hires the same 5.0% from the
    // 15th year, so both tracks agree at 15 - no hire-date ambiguity here.)
    "City of Roseville":     "5",
    "City of Vacaville":     "0",     // no longevity provision in the MOU
    // Abram, 11/10/2026: 2% at 10 yr, 4% at 15, 6% at 17, 9% at 20, 12% at 25.
    // Not in the MOU - Art. 50 is unreadable in every published copy.
    "Sacramento Metro Fire": "4",
    "City of Fairfield":     "0",     // no longevity provision in the MOU
    // Sec. 5.11.1, not cumulative: "Five and one-half percent (5.5%) of base salary after
    // fifteen (15) years of continuous service to the District."
    "Cosumnes CSD":          "5.5",
    // Art. VII.L: 15 years = $4,000/yr = $333.33/mo.
    "El Dorado Hills Fire":  "333.33",
    // Sec. 5: "2 1/2% After 10 years ... Additional 2 1/2% After 15 years" = 5.0% at 15.
    "City of Folsom":        "5",
    // Art. 8 pays nothing until 20 years of service - still $0 at 15.
    "City of Rocklin":       "0",
    // Sec. 7.7's threshold is SEVENTEEN years, so a 15-year employee gets nothing.
    // Sec. 7.8 Charter longevity starts at 20 years. Both $0 here.
    "City of Sacramento":    "0",
  },
  20: {
    // Art. VIII: "Beginning of 10th year to completion of 14th year 2.5% ... Beginning of
    // 15th year to completion of 19th year 5.0% ... Beginning of 20th year and every year
    // thereafter 7.5% of base hourly rate." Applies to employees hired before 1/1/2017 -
    // a 20-year employee at the 9/1/2027 survey date was hired ~2007, so Art. VIII governs.
    // (Art. IX Service Term Bonus covers post-2017 hires and caps at 5.0%, but those
    // employees cannot reach 20 years until 2037, so it is moot here.)
    "City of Roseville":     "7.5",
    // No longevity provision anywhere in the MOU - zero occurrences of the word.
    "City of Vacaville":     "0",
    // SUPPLIED BY ABRAM, 11/10/2026, from his own prior research - NOT from the MOU.
    // Art. 50 LONGEVITY PAY is in the table of contents but the extractable text of every
    // published copy of the Local 522 MOU stops around Article 32, so this cannot be
    // confirmed against the document. His full schedule: 2% at 10 yr, 4% at 15, 6% at 17,
    // 9% at 20, 12% at 25. The 2% at 10 years matches the figure already carried on the
    // Firefighter tab, which independently supports the rest of the schedule.
    // At 25 years Metro's 12% is the richest longevity in the field - worth a second look
    // before it is relied on, because it is the one number here with no document behind it.
    "Sacramento Metro Fire": "9",
    // No longevity provision. The only occurrence of "longevity" is the title of a 2000
    // Johnson & Associates survey chart, not a Fairfield pay provision.
    "City of Fairfield":     "0",
    // Sec. 5.11.1, not cumulative: 3.5% at 10 yrs, 5.5% at 15, 7.5% at 18, 9.5% at 21.
    // A 20-year employee sits in the 18-year tier.
    "Cosumnes CSD":          "7.5",
    // Art. VII.L annual schedule: 5 yrs $3,000 / 10 $3,500 / 15 $4,000 / 20 $4,500 /
    // 25 $5,000. $4,500/yr = $375.00/mo.
    "El Dorado Hills Fire":  "375",
    // Sec. 5: 2.5% after 10 yrs, additional 2.5% after 15, additional 2.5% after 20,
    // "shall not exceed a total of 7 1/2% per month for an employee with twenty or more
    // years of full-time City service."
    "City of Folsom":        "7.5",
    // Art. 8, single tier: "Employees will receive longevity pay after completing twenty
    // (20) years of service with the Fire Department in the amount of two and one-half
    // percent (2.5%)." Nothing at all before 20 years - this is $0 at Year 10.
    "City of Rocklin":       "2.5",
    // Sec. 7.7: "Employees who have completed seventeen (17) years of City Service
    // Seniority shall receive longevity pay in the amount of three percent (3%)."
    // $0 at Year 10 because the threshold is 17 years. Sec. 7.8 City Charter longevity
    // ($100/yr at 20 years) is EXCLUDED - the MOU itself states "Longevity Pay in Article
    // 7.8 is provided for in the City Charter and not through this Agreement," and at
    // $8.33/mo it is immaterial.
    "City of Sacramento":    "3",
  },
  25: {
    "City of Roseville":     "7.5",  // 20th year and every year thereafter
    "City of Vacaville":     "0",
    "Sacramento Metro Fire": "12",   // Abram, 11/10/2026 - see the Year-20 note above
    "City of Fairfield":     "0",
    "Cosumnes CSD":          "9.5",  // 21-year tier, Sec. 5.11.1
    "El Dorado Hills Fire":  "416.67", // $5,000/yr at 25 yrs, Art. VII.L
    "City of Folsom":        "7.5",  // capped at 7.5% from 20 years on
    "City of Rocklin":       "2.5",  // single tier, no increase after 20
    "City of Sacramento":    "3",    // Sec. 7.7 flat 3%; Charter $300/yr excluded as above
  },
};
// Longevity figures that come from Abram rather than from MOU text - rendered in red on
// the tab so the distinction never gets lost. Sac Metro's Art. 50 is unreadable in every
// published copy of their MOU; these are his own research figures.
export const RANK_LONGEVITY_UNSOURCED = ["Sacramento Metro Fire"];
// Abram's full Sac Metro schedule, kept here so a future session has it even if the tab
// only shows the three years the tool models.
export const SAC_METRO_LONGEVITY_ABRAM = { 10:"2", 15:"4", 17:"6", 20:"9", 25:"12" };

// ── PENSIONABLE INCOME (Engineer and Captain tabs only) ─────────────────
// Classic members run on CCR 571 (special compensation); PEPRA "new members" run on the
// SEPARATE exclusive list in CCR 571.1. Checked 11/10/2026 against CalPERS Circular Letter
// 200-064-17 and CCR 571.1. Among the columns this tool carries, the ONLY Classic/PEPRA
// difference is the uniform allowance.
//
// IN (both tiers): base pay, paramedic/EMT pay, education, special assignment (hazmat,
//   rescue), longevity, and holiday pay. CCR 571.1 covers incentive pay for years of
//   service, educational pay (EMT, certificates, degrees), special assignment pay, and
//   holiday pay for positions required to be staffed on holidays.
// IN for CLASSIC ONLY: uniform allowance. Circular Letter 200-064-17 lists Uniform
//   Allowance as not reportable for new members. Vacaville Sec. 12.1 says it outright:
//   "PERS reportable ... for Classic members only. This pay is NOT PERS reportable for
//   PEPRA members." Roseville Art. VII reports the uniform value "For Classic employees".
//   So this follows the Classic PERS button: uniform counts only when Classic is ON.
// OUT: deferred comp, vacation, sick, retiree health (employee and employer), medical,
//   dental/vision, LTD, life, Social Security/Medicare, and the PERS contribution itself.
//   GC 7522.34(c) excludes leave cash-outs and employer allowances; the insurance lines
//   are employer benefit cost, not compensation.
//
// HOLIDAY CAVEAT worth knowing: Circular Letter 200-064-17 says a holiday cash-out must
// happen at least annually and be reported in the period earned - cashing out only in the
// final compensation period makes it "final settlement pay and excluded".
//
// NOTE ON INTERNAL CONSISTENCY (Abram's call, 11/10/2026): holiday counts here, but the
// PERS employee deduction elsewhere in this tool is still computed on
// base+medic+education+special+longevity WITHOUT holiday. Changing that would move the
// locked Verification foundation and the Firefighter headline, so it was left alone.
export const PENSIONABLE_KEYS = ["tc_ffMedicMonthly","tc_ed","tc_special","tc_longevity","tc_holiday"];
// The pensionable slice of each agency's "Other Pay", judged item by item.
export const PENSIONABLE_OTHER = {
  "City of Roseville":     0,     // Other Pay is $0
  // $100/mo of $100. Sec. 9.1 C.E. Pay, paid every pay period at $46.15, and the MOU
  // states it directly: "Currently it is PERS reportable under Section 571 of the
  // California Public Employees' Retirement Law (PERL) for Classic and PEPRA members."
  "City of Vacaville":     100,
  // $0 of $375. Art. 11 Sec. C calls the IGT allowance "a one-time lump sum NON-PERSABLE
  // allowance". Excluded by the agreement's own words.
  "Sacramento Metro Fire": 0,
  "City of Fairfield":     0,     // Other Pay is $0. (Art. 7.L's $200 HazMat Assistant
                                  // Team Leader stipend is also expressly "non-PERS
                                  // reportable", but it is not in the Other column.)
  "Cosumnes CSD":          0,     // Other Pay is $0
  "El Dorado Hills Fire":  0,     // Other Pay is $0
  // $0 of $187.50, which is ($750 fitness + $1,500 medic-unit) / 12. Both are one-time
  // annual lump sums, which read as bonuses - and bonuses are not reportable for PEPRA
  // (Circular Letter 200-041-26). The medic-unit payment is worse: it is driven by "an
  // hour's report, inclusive of regular duty and OVERTIME hours", and GC 7522.34(c)
  // excludes payments for services outside normal working hours.
  // ARGUABLE: the $750 fitness piece ($62.50/mo). "Physical Fitness Program" IS a CCR 571
  // / 571.1 incentive category, so if Folsom reports it, Folsom gains $62.50/mo here.
  // Excluded because it is paid as a one-time annual payment on passing a test, not as a
  // scheduled differential. Flagged on the tab.
  "City of Folsom":        0,
  "City of Rocklin":       0,     // Other Pay is $0
  "City of Sacramento":    0,     // Other Pay is $0
};
export const PENSIONABLE_OTHER_NOTE = {
  "City of Vacaville":     "$100 of $100 — Sec. 9.1 C.E. pay, MOU states it is PERS reportable for Classic and PEPRA",
  "Sacramento Metro Fire": "$0 of $375 — Art. 11 §C calls the IGT a “one-time lump sum non-persable allowance”",
  "City of Folsom":        "$0 of $187.50 — both pieces are one-time annual lump sums; the medic-unit payment counts overtime hours. The $62.50/mo fitness piece is arguable.",
};

export const CLASSIC_PERS = {
  // Ch.5 Art.I A.1.a: "CalPERS classic safety employees represented by RFF will pay
  // nine (9%) of compensation earnable as the employee's portion of the contribution
  // to CalPERS." No cost-share on top. 3% @ 50.
  "City of Roseville":     0.09,
  // Sec. 7.1, and identical for BOTH classic tiers (pre-9/1/12 at 3%@50 and on/after
  // 9/1/12 at 2%@50): "employees shall pay a combined total of twelve percent (12%)
  // (9% employee contribution plus 3% employer contribution) towards CalPERS retirement."
  "City of Vacaville":     0.12,
  // Art. 18 Sec. A: "the full member's PERS contribution shall be nine percent (9%)"
  // plus "an additional three percent (3%)" toward the employer's cost under GC 20516(a).
  "Sacramento Metro Fire": 0.12,
  // Art. 13 Sec. C: stepped up 1.25%/1.25%/1.0%/1.0% to "a total of 11.25%".
  // NOT 12% - Fairfield is the one agency that lands between the two common figures.
  "City of Fairfield":     0.1125,
  // Sec. 5.8.2, employees hired before 1/1/2013: "Unit employees shall pay nine percent
  // (9%) toward the employees' member contribution to PERS. Unit employees shall also pay
  // three percent (3%) of the employer contribution to PERS."
  "Cosumnes CSD":          0.12,
  // Art. VIII.A.1 and A.2, same for Classic Safety Tier 1 and Tier 2: "Classic Safety
  // employees shall contribute twelve percent (12%) of their CalPERS reportable
  // compensation (exclusive of EPMC) to the employer's percentage contribution." The
  // District separately pays the 9% member contribution as EPMC, so 12% is the employee's
  // actual cost.
  "El Dorado Hills Fire":  0.12,
  // Sec. B.2: "Employees who are CalPERS Classic members shall pay 9% of the employee
  // share of retirement." NOT 12%. A Folsom Classic firefighter pays the same as a
  // Roseville one - and Folsom Classic members hired on/after 10/17/2011 are on 2%@50,
  // a weaker formula than Roseville's 3%@50.
  "City of Folsom":        0.09,
  // Art. 4 Sec. C: "the employee shall contribute three percent (3.0%) of his/her CalPERS
  // reportable compensation towards the employer's retirement contribution FOR A TOTAL OF
  // twelve percent (12.0%)." The 12% is INCLUSIVE of the 3% - see CLASSIC_PERS_NO_CITYPERS.
  "City of Rocklin":       0.12,
  // PERS Retirement Contribution a.(1): "Classic members shall pay twelve percent (12%)
  // of the employer's contribution to the PERS retirement plan." a.(2): "The City shall
  // pay nine percent (9%) of the member contribution ... on behalf of fire safety
  // employees." So 12% is the employee's actual cost.
  "City of Sacramento":    0.12,
};
// Rocklin is the only agency whose separate cityPERS line is ALREADY counted inside its
// Classic figure. Art. 4 Sec. C reads the 3% cost-share and the 12% as the same money
// ("for a total of twelve percent"), so leaving cityPERS on top in Classic mode would
// charge a Rocklin employee 15% and understate Rocklin by about $330/mo. Under PEPRA the
// two lines are genuinely separate (13.75% + 3%) and both still apply.
export const CLASSIC_PERS_NO_CITYPERS = ["City of Rocklin"];
// Shown on the tab so nobody has to take the rates on faith.
export const CLASSIC_PERS_SRC = {
  "City of Roseville":     "9% — MOU Ch.5 Art.I A.1.a (3%@50, no cost-share)",
  "City of Vacaville":     "12% — MOU Sec. 7.1 (9% member + 3% cost-share)",
  "Sacramento Metro Fire": "12% — MOU Art. 18 Sec. A (9% member + 3% cost-share)",
  "City of Fairfield":     "11.25% — MOU Art. 13 Sec. C (stepped to 11.25% total)",
  "Cosumnes CSD":          "12% — MOU Sec. 5.8.2 (9% member + 3% employer share)",
  "El Dorado Hills Fire":  "12% — MOU Art. VIII.A.1–2 (12% of employer share; District pays the 9% member contribution as EPMC)",
  "City of Folsom":        "9% — MOU Sec. B.2 (9% of the employee share)",
  "City of Rocklin":       "12% — MOU Art. 4 Sec. C, INCLUSIVE of its 3% cost-share",
  "City of Sacramento":    "12% — MOU PERS Contribution a.(1); City pays the 9% member contribution",
};

// ── RANK-SPECIFIC INCENTIVES ────────────────────────────────────────────────
// Every value below was read off the MOU text on 11/10/2026 and is entered in the
// agency's NATIVE unit (percent where the Firefighter row is a percent, dollars where
// the Firefighter row is a flat amount), exactly as the Verification tab works.
// Priced to the 9/1/2027 Total Compensation Study survey date, same as the FF tab.
// Nothing here is blank: a blank cell would silently compute as zero.
//
//  MEDIC column = paramedic + EMT pay combined, matching the Firefighter row's convention.
//  Agencies whose Engineer/Captain classes already carry the medic premium INSIDE base
//  pay (El Dorado Hills' ENGINEER/PARAMEDIC and CAPTAIN/PARAMEDIC; Roseville Captain
//  after 1/9/2027) read 0 here on purpose.
export const RANK_INCENTIVES = {
  engineer: {
    // Art. X B(3): Fire Engineers with a paramedic licence get 5%. No sunset clause -
    // the 1/9/2027 cessation in Art. X B(2)(c) is written into the CAPTAIN subsection only.
    // Ed 15% cap (Ch.2 Art.VII), Hazmat/Rescue Task Force 5% (Art.VII E/F), longevity 2.5%
    // at yr 10 (Art.VIII), deferred 3% after 5 yrs (Ch.4 Art.V) - none rank-restricted.
    "City of Roseville":    { medic:"5",    ed:"15",   special:"5",    longevity:"2.5",    deferred:"3",   other:"0" },
    // EMT 2% - Sec. 9.2 "All EMT 1 and EMT P certified unit employees". Ed 17% = 5% degree
    // (9.3) + 12% Senior FF III, which names Fire Engineer/Paramedic expressly.
    // Specialty (9.5) is a FLAT dollar "equivalent to five percent (5%) of top-step
    // Firefighter/Paramedic" = $629.69/mo, which is 4.76% of the Engineer's own base.
    // Deferred 1% (Sec. 7.4 - all classifications other than Fire Captain).
    // C.E. pay $1,200/yr (Sec. 9.1) names "Firefighter/Paramedics and Fire
    // Engineer/Paramedics" -> $100/mo applies.
    "City of Vacaville":    { medic:"2",    ed:"17",   special:"4.76", longevity:"0",      deferred:"1",   other:"100" },
    // Art.11 B(b) "Engineer's paramedic incentive will calculate at 7.9% of base pay"
    // + Art.11 B(a) EMT-1 5% = 12.9%. Ed 10.5% and Special Ops 7.0% cap carry no rank limit.
    "Sacramento Metro Fire":{ medic:"12.9", ed:"10.5", special:"7",    longevity:"2",      deferred:"0",   other:"375" },
    // Art. 7.D "The paramedic pay will be 7.5% of actual step for Fire Engineers"
    // + Art. 7.C EMT 2.5% = 10.0%. Ed 10% cap, Hazmat 5% - both "bargaining unit members".
    "City of Fairfield":    { medic:"10",   ed:"10",   special:"5",    longevity:"0",      deferred:"160", other:"0" },
    // Sec. 5.6.2: $550 + "one-half percent (0.5%) of base salary for Engineers and
    // Captains" (Firefighters get 1.0%), + Sec. 19.4.3 EMT 2.5% = $550 + 3.0%.
    "Cosumnes CSD":         { medic:"3",    ed:"14",   special:"0",    longevity:"3.5",    deferred:"75",  other:"0" },
    // Medic premium is INSIDE base: Art. VII.A.1 sets ENGINEER/PARAMEDIC 5% above ENGINEER,
    // and the base loaded here is the ENGINEER/PARAMEDIC class. Art. VII.I.1 pays a $200
    // paramedic incentive to BATTALION CHIEFS only. Ed max $1,200 = $900 MA/MS + $300
    // Company Officer; the $600 Chief Fire Officer is gated on holding the position of
    // Battalion Chief or Acting Battalion Chief, so a line officer cannot claim it.
    "El Dorado Hills Fire": { medic:"0",    ed:"1200", special:"0",    longevity:"291.67", deferred:"100", other:"0" },
    // Sec. 2.B, eff. first full pay period JULY 2027 (so it governs at 9/1/2027):
    // "Fire Engineer - 7% of the employee's base wage." (The 6% in Sec. 2.A is superseded.)
    // Program Incentive $600/mo cap, ed 10% cap, longevity 2.5% at yr 10 - no rank limit.
    // Other $187.50/mo = ($750 fitness + $1,500 medic-unit)/12, both open to all members.
    "City of Folsom":       { medic:"7",    ed:"10",   special:"600",  longevity:"2.5",    deferred:"0",   other:"187.5" },
    // Art. 3.B names "Fire Battalion Chiefs, Fire Captains, Fire Engineers, and
    // Firefighters" at the same $650/mo. Art. 4.E ed $475 = $350 Master's + $125 Chief
    // Officer cert, "Each employee". Rocklin has no rank-differentiated pay at all.
    "City of Rocklin":      { medic:"650",  ed:"475",  special:"0",    longevity:"0",      deferred:"300", other:"0" },
    // Art. 15.2(b)(2): "employees in the Fire Engineer classification who possess a
    // current, valid California EMT-Paramedic license shall receive an incentive of eight
    // and one-half percent (8.5%)". Ed 14.5% (9.5% Fire Science + 5% BA) names Fire
    // Engineers expressly. Hazmat 5% covers "the rank of Fire Captain and below".
    "City of Sacramento":   { medic:"8.5",  ed:"14.5", special:"5",    longevity:"0",      deferred:"0",   other:"0" },
  },
  captain: {
    // ZERO medic on purpose. Art. X B(2)(c): "Effective January 9, 2027, this full
    // provision and certification pay (both Paramedic license and Engine Boss
    // certification pay) will both cease to be paid in exchange for rank separation in
    // Chapter 2, Article I A.(2)." That is BEFORE the 9/1/2027 survey date, and the
    // rank separation it was traded for is already priced in through ROSE_RANK_RATIO.
    // The 5% paramedic pay had also been closed to new or promoted Captains since
    // October 2016 (Art. X B(2)(b)), so most incumbents were not receiving it anyway.
    "City of Roseville":    { medic:"0",    ed:"15",   special:"5",    longevity:"2.5",    deferred:"3",   other:"0" },
    // EMT 2% still reaches a Captain (Sec. 9.2 covers all EMT-P certified unit employees).
    // Specialty flat $629.69/mo = 4.47% of the Captain's own base.
    // Deferred 2% - Sec. 7.4: "The City contributes two percent (2%) ... for Fire Captains
    // and Assistant Fire Marshal. Fire Captains ... are required to match anything above
    // the first one percent (1%)." The 2% is the CITY's contribution; the match condition
    // is a real string attached and is called out in the notes.
    // C.E. pay is $0: Sec. 9.1 names only Firefighter/Paramedics and Fire
    // Engineer/Paramedics - Fire Captain is NOT in that list.
    "City of Vacaville":    { medic:"2",    ed:"17",   special:"4.47", longevity:"0",      deferred:"2",   other:"0" },
    // Art.11 B(b) "Captain's paramedic incentive will calculate at 6.5% of base pay"
    // + EMT-1 5% = 11.5%.
    "Sacramento Metro Fire":{ medic:"11.5", ed:"10.5", special:"7",    longevity:"2",      deferred:"0",   other:"375" },
    // Art. 7.D "5.0% of actual step for Fire Captains" + Art. 7.C EMT 2.5% = 7.5%.
    "City of Fairfield":    { medic:"7.5",  ed:"10",   special:"5",    longevity:"0",      deferred:"160", other:"0" },
    // Same Sec. 5.6.2 clause as Engineer: $550 + 0.5%, + EMT 2.5% = $550 + 3.0%.
    "Cosumnes CSD":         { medic:"3",    ed:"14",   special:"0",    longevity:"3.5",    deferred:"75",  other:"0" },
    // Medic premium INSIDE base (CAPTAIN/PARAMEDIC is 4% above CAPTAIN per Art. VII.A.1,
    // and the loaded base is the /PARAMEDIC class). Ed max $1,200, NOT $1,500 - the $600
    // Chief Fire Officer incentive requires holding the position of Battalion Chief or
    // Acting Battalion Chief, and Acting BC is an hour-by-hour assignment (Art. VII.J.4),
    // not a standing status a line Captain holds.
    "El Dorado Hills Fire": { medic:"0",    ed:"1200", special:"0",    longevity:"291.67", deferred:"100", other:"0" },
    // Sec. 2.B eff. July 2027: "Fire Captain - 6% of the employee's base wage."
    "City of Folsom":       { medic:"6",    ed:"10",   special:"600",  longevity:"2.5",    deferred:"0",   other:"187.5" },
    // Identical to Engineer and Firefighter - Rocklin draws no rank distinction.
    "City of Rocklin":      { medic:"650",  ed:"475",  special:"0",    longevity:"0",      deferred:"300", other:"0" },
    // Art. 15.2(b)(3): Fire Captain EMT-Paramedic licence pay "seven and one-half
    // percent (7.5%)". Ed 14.5% names Fire Captains expressly; Hazmat/Rescue 5% applies.
    "City of Sacramento":   { medic:"7.5",  ed:"14.5", special:"5",    longevity:"0",      deferred:"0",   other:"0" },
  },
};

// Things a reader of the Engineer/Captain tabs should know before quoting a number.
// These are the honest soft spots - not errors, but places the MOU text runs out.
export const RANK_OPEN_ITEMS = [
  { ag:"Sac Metro", item:"Longevity comes from Abram, not the MOU; Deferred $0 is still unverified",
    detail:"Articles 46 (Deferred Compensation) and 50 (Longevity Pay) appear in the table of contents of every published copy of the Local 522 MOU, but the extractable text of each copy stops around Article 32. LONGEVITY: Abram supplied the full schedule on 11/10/2026 from his own research \u2014 2% at 10 yr, 4% at 15, 6% at 17, 9% at 20, 12% at 25. The 2% at 10 years matches the figure already carried on the Firefighter tab, which independently supports the rest and clears that tab's old \u201cconfirm vs 2023\u201324\u201d flag. It is still not document-sourced, and at 25 years Metro's 12% is the richest longevity in the field \u2014 confirm it before relying on it. DEFERRED COMP remains unverified for every rank, Firefighter included: $0 is an assumption, not a reading." },
  { ag:"Sac Metro", item:"IGT allowance $375/mo is a judgment call, not a quote",
    detail:"Art. 11 §C tiers the Medicare-reimbursement allowance as “Firefighters, EMTs and Paramedics – $4500” vs “All other 522 members – $3000.” Engineer and Captain are never named. Because Art. 14 §A requires every member hired after 7/1/2000 to hold an EMT-1 certificate, I read “All other 522 members” as the non-suppression classes and loaded $4,500/yr = $375/mo for both ranks, same as Firefighter. The literal reading would be $3,000/yr = $250/mo. The swing is $125/mo per rank. Ask Metro what Engineers and Captains were actually paid. Note also the IGT is a one-time, non-PERSable, revenue-contingent lump sum — $375/mo is an annualization." },
  { ag:"Sac Metro", item:"Metro's own hours divisor is 2,920, not 2,912",
    detail:"Art. 10 §A: “The base hourly equivalent is calculated by dividing the monthly rate by one twelfth (1/12) of 2,920 for suppression employees.” The string “2912” appears nowhere in the document. This tool uses 2,912 everywhere by design so every agency is on one basis; the effect is that Metro hourly figures read 0.27% high. Monthly figures — which is what the comparison actually totals — are unaffected." },
  { ag:"Fairfield", item:"“Actual step” is never defined",
    detail:"Art. 7.D prices Engineer/Captain paramedic pay on “actual step,” and Art. 7.H.9 (hazmat) says “Actual step includes educational incentives.” Art. 7.D carries no such gloss. I priced paramedic pay on the step rate alone. If Fairfield payroll in fact computes it on step+education, Engineer paramedic pay rises about $87/mo and Captain about $67/mo at a 10% education level." },
  { ag:"Fairfield", item:"Paramedic pay is conditional for these two ranks",
    detail:"Unlike the Firefighter class, which IS a paramedic class, an Engineer or Captain only draws paramedic pay while actually holding the licence — and Art. 1.B expressly directs the Fire Chief to develop “paramedic de-certification for Fire Engineers,” with Engineers given priority. Art. 1.E requires only the Firefighter seat on each company to be a medic. The 10.0% / 7.5% loaded here is the rate for a licensed incumbent, not an automatic rate for every incumbent." },
  { ag:"Vacaville", item:"Captain deferred comp 2% carries a match requirement",
    detail:"Sec. 7.4: the City contributes 2% for Fire Captains, but “Fire Captains … are required to match anything above the first one percent (1%).” The 2% loaded here is the employer contribution, which is the survey element. If the City argues the net employer value is 1% absent an employee match, the Captain total drops about $141/mo." },
  { ag:"Vacaville", item:"Specialty pay is a flat dollar, converted to a percent",
    detail:"Sec. 9.5 pays specialty assignments “a flat rate maintained at a value equivalent to five percent (5%) of top-step Firefighter/Paramedic” — $629.69/mo. Because the tool prices Vacaville specialty as a percentage, that dollar is expressed as 4.76% of the Engineer's base and 4.47% of the Captain's. Those percentages hold under any uniform raise, but they are a conversion, not MOU text." },
  { ag:"Cosumnes", item:"Hazmat sits inside the 14% education cap",
    detail:"Sec. 5.9.3 pays Haz-Mat Technician 2% and Haz-Mat Specialist 1% as EDUCATION incentive, inside the 8% sub-cap and the 14% overall cap — so Special Ops reads $0 for both ranks, exactly as on the Firefighter tab. Whether a Cosumnes member could ever hold 14% of education AND the hazmat percentages at once is capped out by 5.9.1.a either way." },
  { ag:"Roseville", item:"Captain medic pay is $0 because the MOU retires it",
    detail:"Art. X B(2)(c) ends both the Captain paramedic incentive and the Engine Boss certification pay effective January 9, 2027, “in exchange for rank separation.” That rank separation is the Ch.2 Art.I A(2) realignment — Engineer to 7.5% above Firefighter Paramedic II and Captain to 10% above Engineer — which this tool applies to the Roseville rank bases. Taking the pay away without the base realignment, or the other way round, would misstate Roseville by roughly 5%." },
  { ag:"Roseville", item:"The binding study benchmark is Firefighter Paramedic, not these ranks",
    detail:"Ch.2 Art.I A(3) says “the same Firefighter Paramedic (PEPRA) benchmark job classification used in the 2025 Total Compensation Study will be studied in 2027.” The Engineer and Captain tabs are an internal extension built on the same methodology and the same 9/1/2027 survey date; they are not themselves the contractual survey." },
  { ag:"Classic PERS view", item:"Two agencies pay the member contribution FOR the employee, and that is not credited",
    detail:"El Dorado Hills (Art. VIII.A.1\u20132) and Sacramento City (PERS Contribution a.(1)\u2013(2)) are built the other way round: the employee's 12% goes toward the EMPLOYER's share, while the agency pays the 9% member contribution itself \u2014 as EPMC at El Dorado Hills, reported to CalPERS as additional compensation. The 12% loaded here is the employee's real out-of-pocket, which is the right figure for this comparison, but the employer-paid member contribution is a benefit those employees receive that this tool does not count anywhere. If anyone argues El Dorado Hills or Sac City look too cheap in Classic mode, that is why." },
  { ag:"Classic PERS view", item:"Folsom and Roseville Classic members are materially the SAME - do not argue otherwise",
    detail:"Folsom Classic pays 9%, the same as Roseville, and Art. 7.B.2 draws no tier distinction. Folsom Art. 7.A.1 and A.4 give everyone hired on or prior to 10/16/2011 the 3%@50 formula on single-highest-twelve-months final compensation - the same formula Roseville Classic safety has. Folsom's lower 2%@50 tier (A.2, on 36-month final comp) applies ONLY to Classic members hired in the 14-month window between 10/17/2011 and 12/31/2012, so it is a narrow cohort and almost certainly not most of Folsom's Classic firefighters. Do NOT argue that Folsom's 9% buys a weaker pension than Roseville's; for the bulk of their Classic members it does not. Worth knowing for background: Folsom voluntarily closed 3%@50 on 10/17/2011, fourteen months before PEPRA required it, and Vacaville did the same on 9/1/2012. Neither had to." },
  { ag:"All", item:"Rank bases are top step, 2,912-hour basis, priced to 9/1/2027",
    detail:"Engineer and Captain base rates were pulled from each agency's published salary schedule and converted on 2,912 hours so they sit on the same basis as the Firefighter tab. Where an agency publishes both a 56-hour and a 40-hour (admin) rate for the same rank — Roseville's “ZB … 8Hr-ZB” rows, El Dorado Hills' “(ADMIN*)” rows, Sacramento's FR40 rows, Fairfield's “80 HR” row — the 56-hour line rate was used. Raises come from the City 55% tab exactly as they do for Firefighter." },
];

export const RANK_AGENCY_ORDER = DATA.map(a=>a.name);
export const RANK_CARRIED = DATA.map(a=>({ name:a.name, short:a.shortName, hrs:a.hrs,
  vaca:a.vaca, sick:a.sick, holiday:(a.holiday.hrs!==undefined?a.holiday.hrs+" hrs":(a.holiday.pct!==undefined?(a.holiday.pct*100).toFixed(2)+"%":(a.holiday.pctEFGH*100).toFixed(1)+"%")),
  med:a.med, dv:a.dv, life:a.life, pers:(a.pers*100).toFixed(2)+"%", unif:a.unif, ltd:a.ltd, ss:(a.ss?((a.ss+0.0145)*100).toFixed(2)+"%":"1.45%") }));;

const r2 = v => (v===null||v===undefined)?null:Math.round(v*100)/100;

// Editable raises: 2026 is baked into each agency's current base (display-locked).
// 2027/2028 are modeled. Returns the raised monthly base.
function raisedMonthly(a, o){
  // 2026 is baked into base for settled agencies (lock26 !== false). For unsettled
  // agencies (Sac Metro, Fairfield) the 2026 raise is modeled on top of base.
  const r26 = (a.lock26===false) ? (o && o.raise2026!==undefined && o.raise2026!=="" ? (parseFloat(o.raise2026)||0)/100 : (a.r26d||0)/100) : 0;
  const r27 = a.r27lock ? a.r27 : (o && o.raise2027!==undefined && o.raise2027!=="" ? (parseFloat(o.raise2027)||0)/100 : a.r27);
  const r28raw = (o && o.raise2028!==undefined && o.raise2028!=="") ? (parseFloat(o.raise2028)||0)/100 : a.r28;
  // Comparison agencies: 2028 raises are after the 9/1/2027 survey and are excluded.
  // Roseville (highlight): its 2028 raise IS the LMA adjustment being modeled, so it counts.
  const r28 = a.highlight ? r28raw : 0;
  // _solveRaise is the hypothetical 2028 LMA raise the raise-needed solver searches over.
  const solve = (o && o._solveRaise!==undefined && o._solveRaise!==null) ? o._solveRaise : 0;
  return { m: a.base*(1+r26)*(1+r27)*(1+r28)*(1+solve), r27, r28: r28raw };
}
function resolve(d, B){ // B = raised monthly base
  if(!d) return 0;
  if(d.z!==undefined) return 0;
  if(d.flat!==undefined && d.pct!==undefined) return d.flat + B*d.pct;
  if(d.pct!==undefined) return B*d.pct;
  if(d.flat!==undefined) return d.flat;
  return 0;
}
function medicMonthly(a, B){
  const m=a.medic;
  if(m.z!==undefined) return B;
  if(m.flat!==undefined && m.pct!==undefined) return B + m.flat + B*m.pct;
  if(m.pct!==undefined) return B*(1+m.pct);
  if(m.flat!==undefined) return B + m.flat;
  return B;
}

// ---- City LMA method (no leave / uniform) ----
function computeCity(a, o){
  const {m:B}=raisedMonthly(a,o);
  const hourly=B*12/a.hrs;
  const E=medicMonthly(a,B);
  const ind=resolve(a.ed,B), op=(o&&o.operationalPct!==undefined&&o.operationalPct!==null)?B*o.operationalPct:0;
  const lon=(o&&o.longevityPct!==undefined&&o.longevityPct!==null)?B*o.longevityPct:resolve(a.longev,B), def=resolve(a.deferred,B);
  const totalCash=E+ind+op+lon+def;
  const eeR=resolve(a.eeRHS,B), cR=a.cityRHS;
  const medicare=E*(0.0145+a.ss);
  const persBase=E+ind+op+lon;
  const persEE=persBase*(-a.pers);
  const cityPERS=B*(-a.cityPERS);
  const gross=totalCash+eeR+cR+a.med+a.dv+a.ltd+a.life+medicare+persEE+cityPERS;
  return {
    name:a.name, shortName:a.shortName, highlight:a.highlight, isPercentile:false,
    raise2026:a.r26d, raise2027:r2(( (a.r27lock?a.r27:(o&&o.raise2027!==undefined&&o.raise2027!==""?(parseFloat(o.raise2027)||0)/100:a.r27)) )*100),
    raise2028:r2(((o&&o.raise2028!==undefined&&o.raise2028!==""?(parseFloat(o.raise2028)||0)/100:a.r28))*100),
    topStepHrly:r2(hourly), topStepMonthly:r2(B), topFFMedicMonthly:r2(E),
    individualIncentives:r2(ind), operationalIncentives:r2(op), longevity10yr:r2(lon), deferredComp:r2(def),
    totalCash:r2(totalCash), employeeRHS:r2(eeR), cityRHS:r2(cR),
    medicalFamily:r2(a.med), dental:r2(a.dv), vision:0, ltd:r2(a.ltd), lifeInsurance:r2(a.life),
    medicareAmt:r2(medicare), persEEAmt:r2(persEE), cityPERSPaidByEE:r2(cityPERS), monthlyGross:r2(gross),
  };
}
// ---- True Total Comp method (adds uniform + holiday/vacation/sick + other) ----
function computeTrue(a, o, edit){
  const {m:B}=raisedMonthly(a,o);
  const hourly=B*12/a.hrs;
  const E=medicMonthly(a,B), Ehr=E*12/a.hrs;
  const ind=resolve(a.ed,B);
  const specialNative=resolve(a.special,B);
  const special=(edit&&edit.specialPct!==undefined&&edit.specialPct!==null)?B*edit.specialPct:specialNative;
  const lonNative=resolve(a.longev,B);
  const lon=(edit&&edit.longevityPct!==undefined&&edit.longevityPct!==null)?B*edit.longevityPct:lonNative;
  const def=resolve(a.deferred,B), other=(edit&&edit.otherAmt!==undefined&&edit.otherAmt!==null)?edit.otherAmt:a.other, unif=a.unif/12;
  const h=a.holiday; let hol=0;
  if(h.hrs!==undefined && h.pct===undefined && h.pctEFGH===undefined) hol=Ehr*h.hrs/12;
  if(h.pct!==undefined) hol=B*h.pct + (h.hrs!==undefined?Ehr*h.hrs/12:0);
  if(h.pctEFGH!==undefined) hol=(E+ind+special+lon)*h.pctEFGH;
  const vac=Ehr*a.vaca/12, sic=Ehr*a.sick/12;
  const eeR=resolve(a.eeRHS,B), cR=a.cityRHS;
  const ssMed=E*(0.0145+a.ss);
  const persBase=E+ind+special+lon;
  const persEE=persBase*(-a.pers);
  const cityPERS=B*(-a.cityPERS);
  const gross=E+ind+special+lon+def+other+unif+hol+vac+sic+eeR+cR+a.med+a.dv+a.ltd+a.life+ssMed+persEE+cityPERS;
  const lonPctDefault=B?r2((lonNative/B)*100):0;
  const specialPctDefault=B?r2((specialNative/B)*100):0;
  return {
    name:a.name, shortName:a.shortName, highlight:a.highlight, isPercentile:false,
    raise2026:a.r26d, raise2027:r2((a.r27lock?a.r27:(o&&o.raise2027!==undefined&&o.raise2027!==""?(parseFloat(o.raise2027)||0)/100:a.r27))*100),
    raise2028:r2(((o&&o.raise2028!==undefined&&o.raise2028!==""?(parseFloat(o.raise2028)||0)/100:a.r28))*100),
    locked2026:true, locked2027:a.r27lock, locked2028:false,
    tc_topStepHrly:r2(hourly), tc_ffMedicMonthly:r2(E), tc_ed:r2(ind), tc_special:r2(special), tc_longevity:r2(lon),
    tc_deferred:r2(def), tc_other:r2(other), tc_uniforms:r2(unif), tc_holiday:r2(hol), tc_vacation:r2(vac), tc_sick:r2(sic),
    tc_eeRHS:r2(eeR), tc_cityRHS:r2(cR), tc_medical:r2(a.med), tc_dv:r2(a.dv), tc_ltd:r2(a.ltd), tc_life:r2(a.life),
    tc_ssMed:r2(ssMed), tc_pers:r2(persEE+cityPERS), tc_monthlyGross:r2(gross), _longevityPctDefault:lonPctDefault, _specialPctDefault:specialPctDefault, _otherDefault:r2(a.other),
    // Carried for the pensionable-income view; both default off outside the rank tabs.
    _pensUnifEligible: !!a._pensUnifEligible, _pensOther: (a._pensOther||0),
    // Roseville post-2017 hires: Art. IX Service Term Bonus is excluded from CalPERS
    // special compensation by Art. XI, so it must not count toward pensionable income.
    _pensNoLongevity: !!a._pensNoLongevity,
  };
}
function pct55(rows,key){
  const v=rows.filter(r=>r&&!r.highlight&&r[key]!==null&&r[key]!==undefined).map(r=>r[key]).sort((a,b)=>a-b);
  if(!v.length) return null; const pos=0.55*(v.length-1), lo=Math.floor(pos), hi=Math.ceil(pos);
  return r2(v[lo]+(pos-lo)*((v[hi]??v[lo])-v[lo]));
}
const CITY_KEYS=["topStepHrly","topStepMonthly","topFFMedicMonthly","individualIncentives","operationalIncentives","longevity10yr","deferredComp","totalCash","employeeRHS","cityRHS","medicalFamily","dental","vision","ltd","lifeInsurance","medicareAmt","persEEAmt","cityPERSPaidByEE","monthlyGross"];
const TRUE_KEYS=["tc_pensionable","tc_topStepHrly","tc_ffMedicMonthly","tc_ed","tc_special","tc_longevity","tc_deferred","tc_other","tc_uniforms","tc_holiday","tc_vacation","tc_sick","tc_eeRHS","tc_cityRHS","tc_medical","tc_dv","tc_ltd","tc_life","tc_ssMed","tc_pers","tc_monthlyGross"];

export function buildAgencies(overrides={}, agenciesOn=null, dataset=DATA){
  const rows=dataset.map(a=>{const row=computeCity(a, overrides[a.name]); row.enabled = row.highlight ? true : (agenciesOn ? agenciesOn.includes(a.name) : true); return row;});
  const incl=rows.filter(r=>r.highlight || r.enabled);
  const pr={name:"55th Percentile",shortName:"55th %ile",highlight:false,isPercentile:true,raise2026:null,raise2027:null,raise2028:null};
  CITY_KEYS.forEach(k=>pr[k]=pct55(incl,k));
  const rsv=rows.filter(r=>r.highlight), rest=rows.filter(r=>!r.highlight).sort((a,b)=>b.monthlyGross-a.monthlyGross);
  return [...rsv, pr, ...rest];
}
export const COMP_KEYS=["tc_ffMedicMonthly","tc_ed","tc_special","tc_longevity","tc_deferred","tc_other","tc_uniforms","tc_holiday","tc_vacation","tc_sick","tc_eeRHS","tc_cityRHS","tc_medical","tc_dv","tc_ltd","tc_life","tc_ssMed","tc_pers"];

// ---- Raw (MOU-native) figure + unit per agency per category, for the Verification tab.
// Lets the user enter the actual %, flat $, or hours instead of a computed monthly dollar.
function _descRaw(d){
  if(!d || d.z!==undefined) return {v:0, u:"\u2014"};
  if(d.pct!==undefined && d.flat!==undefined) return {v:r2(d.pct*100), u:"% + $"+d.flat+"/mo"};
  if(d.pct!==undefined) return {v:r2(d.pct*100), u:"% of base"};
  if(d.flat!==undefined) return {v:d.flat, u:"$/mo"};
  return {v:0, u:"\u2014"};
}
function _rawFor(a, key){
  const B=a.base, hrs=a.hrs;
  switch(key){
    case "tc_topStepHrly": return {v:r2(B*12/hrs), u:"$/hr base"};
    case "tc_ffMedicMonthly": {
      const m=a.medic;
      if(m.z!==undefined) return {v:0, u:"medic in base (n/a)"};
      if(m.pct!==undefined && m.flat!==undefined) return {v:r2(m.pct*100), u:"% + $"+m.flat+" medic"};
      if(m.pct!==undefined) return {v:r2(m.pct*100), u:"% medic"};
      if(m.flat!==undefined) return {v:m.flat, u:"$/mo medic"};
      return {v:0,u:"\u2014"};
    }
    case "tc_ed": return _descRaw(a.ed);
    case "tc_special": return _descRaw(a.special);
    case "tc_longevity": return _descRaw(a.longev);
    case "tc_deferred": return _descRaw(a.deferred);
    case "tc_other": return {v:a.other, u:"$/mo"};
    case "tc_uniforms": return {v:a.unif, u:"$/yr"};
    case "tc_holiday": {
      const h=a.holiday;
      if(h.pct!==undefined && h.hrs!==undefined) return {v:r2(h.pct*100), u:"% + "+h.hrs+" hrs/yr"};
      if(h.pct!==undefined) return {v:r2(h.pct*100), u:"% of base"};
      if(h.pctEFGH!==undefined) return {v:r2(h.pctEFGH*100), u:"% (base+incentives)"};
      return {v:h.hrs, u:"hrs/yr"};
    }
    case "tc_vacation": return {v:a.vaca, u:"hrs/yr"};
    case "tc_sick": return {v:a.sick, u:"hrs/yr"};
    case "tc_eeRHS": return _descRaw(a.eeRHS);
    case "tc_cityRHS": return {v:a.cityRHS, u:"$/mo"};
    case "tc_medical": return {v:a.med, u:"$/mo"};
    case "tc_dv": return {v:a.dv, u:"$/mo"};
    case "tc_ltd": return {v:a.ltd, u:"$/mo"};
    case "tc_life": return {v:a.life, u:"$/mo"};
    case "tc_ssMed": return {v:r2((0.0145+a.ss)*100), u:"% of FF+medic"};
    case "tc_pers": return {v:r2(a.pers*100), u:"% earnable"};
    default: return {v:null, u:""};
  }
}
const _RAWKEYS=["tc_topStepHrly","tc_ffMedicMonthly","tc_ed","tc_special","tc_longevity","tc_deferred","tc_other","tc_uniforms","tc_holiday","tc_vacation","tc_sick","tc_eeRHS","tc_cityRHS","tc_medical","tc_dv","tc_ltd","tc_life","tc_ssMed","tc_pers"];
export const SALARY_LINKS = {
  "City of Roseville": "https://www.roseville.ca.gov/Documents/Departments/Human%20Resources/Salary%20Schedules/2026.03.21%20Roseville%20Fire%20Fighters%20Salary%20Schedule-B.pdf",
  "City of Vacaville": "https://www.cityofvacaville.gov/home/showpublisheddocument/6480/639203940227930000",
  "Sacramento Metro Fire": "",
  "City of Fairfield": "https://www.fairfield.ca.gov/home/showpublisheddocument/15262/639219802759000000",
  "Cosumnes CSD": "https://www.cosumnescsd.gov/DocumentCenter/View/23841/Item-14---3-2022-06-15---Full-Time-Salary-Schedule-070122-PDF",
  "El Dorado Hills Fire": "https://www.edhfire.com/home/showpublisheddocument/1500/639185742301370000",
  "City of Folsom": "https://www.folsom.ca.us/home/showpublisheddocument/26113/639233329271030000",
  "City of Rocklin": "https://www.rocklin.ca.gov/DocumentCenter/View/408/Salary-Schedule-Classification-Listing-PDF",
  "City of Sacramento": "https://www.cityofsacramento.gov/content/dam/portal/hr/documentlibrary/SalarySchedule.pdf",
};

export const MOU_LINKS = {
  "City of Roseville": "https://www.roseville.ca.gov/Documents/Departments/Human%20Resources/MOUs/RFF%20MOU%20Final%20Signed.pdf",
  "City of Vacaville": "https://www.cityofvacaville.gov/home/showpublisheddocument/18021/639255929545030000",
  "Sacramento Metro Fire": "https://metrofire.ca.gov/labor-agreements#docaccess-5174da3079b01b9c37cf8a481414d7ebc6023047b8ea582ed54c2d961b4b26a2",
  "City of Fairfield": "https://fairfield.ca.gov/home/showpublisheddocument/7753/638113827215870000",
  "Cosumnes CSD": "https://www.cosumnescsd.gov/DocumentCenter/View/5609/Firefighters-Local-522-MOU-July-1-2024---June-30-2027-PDF",
  "El Dorado Hills Fire": "https://www.edhfire.com/home/showpublisheddocument/1498/639185742299130000",
  "City of Folsom": "https://www.folsom.ca.us/home/showpublisheddocument/22735/638961312770230000",
  "City of Rocklin": "https://www.rocklin.ca.gov/DocumentCenter/View/389/Fire-MOU-July-2025-to-June-2028-PDF",
  "City of Sacramento": "https://www.cityofsacramento.gov/content/dam/portal/hr/Divisions/laborrelations/Agreements/Fire.pdf",
};

export const AGENCY_RAW = Object.fromEntries(DATA.map(a=>[a.name, Object.fromEntries(_RAWKEYS.map(k=>[k,_rawFor(a,k)]))]));
export function buildTrueComp(overrides={}, trueEdits={}, enabled=null, cellEdits={}, agenciesOn=null, dataset=DATA){
  const en=(enabled&&enabled.length)?enabled:COMP_KEYS;
  const rows=dataset.map(a=>{const row=computeTrue(a, overrides[a.name], trueEdits[a.name]||{});
    row.enabled = row.highlight ? true : (agenciesOn ? agenciesOn.includes(a.name) : true);
    const ce=cellEdits[a.name]||{};
    COMP_KEYS.forEach(k=>{ const v=ce[k]; if(v!==undefined && v!=="" && !isNaN(parseFloat(v))) { row[k]=parseFloat(v); row["_edited_"+k]=true; } });
    row.tc_monthlyGross=r2(en.reduce((s,k)=>s+(row[k]||0),0));
    // Pensionable income. Summed here rather than in computeTrue so that any manual cell
    // edit above is already reflected. Uniform only counts for Classic members.
    row.tc_pensionable=r2(PENSIONABLE_KEYS.reduce((s,k)=>s+((k==="tc_longevity"&&row._pensNoLongevity)?0:(row[k]||0)),0)
      + (row._pensUnifEligible ? (row.tc_uniforms||0) : 0) + (row._pensOther||0));
    return row;});
  const comps=rows.filter(r=>!r.highlight);
  const incl=rows.filter(r=>r.highlight || r.enabled);
  const pr={name:"55th Percentile",shortName:"55th %ile",highlight:false,isPercentile:true,raise2026:null,raise2027:null,raise2028:null};
  TRUE_KEYS.forEach(k=>pr[k]=pct55(incl,k));
  pr.tc_monthlyGross=pct55(incl,"tc_monthlyGross");
  const rsv=rows.filter(r=>r.highlight), rest=comps.sort((a,b)=>b.tc_monthlyGross-a.tc_monthlyGross);
  return [...rsv, pr, ...rest];
}
export function solveTrueRaise(overrides={}, trueEdits={}, enabled=null, cellEdits={}, agenciesOn=null, dataset=DATA){
  const en=(enabled&&enabled.length)?enabled:COMP_KEYS;
  const rows=buildTrueComp(overrides,trueEdits,en,cellEdits,agenciesOn,dataset);
  const rsv=rows.find(r=>r.highlight), pct=rows.find(r=>r.isPercentile);
  if(!rsv||!pct||pct.tc_monthlyGross==null) return null;
  const a=DATA.find(x=>x.highlight); const o=overrides[a.name]||{}; const edit=trueEdits[a.name]||{};
  const r27=a.r27lock?a.r27:(o.raise2027!==undefined&&o.raise2027!==""?(parseFloat(o.raise2027)||0)/100:a.r27);
  const r28=(o.raise2028!==undefined&&o.raise2028!=="")?(parseFloat(o.raise2028)||0)/100:a.r28;
  const Dcur=a.base*(1+r27)*(1+r28); // Roseville 2028 is the LMA lever and counts
  const target=pct.tc_monthlyGross;
  const compAt=(B)=>{
    const E=medicMonthly(a,B), Ehr=E*12/a.hrs;
    const ind=resolve(a.ed,B);
    const special=(edit.specialPct!==undefined&&edit.specialPct!==null)?B*edit.specialPct:resolve(a.special,B);
    const lon=(edit.longevityPct!==undefined&&edit.longevityPct!==null)?B*edit.longevityPct:resolve(a.longev,B);
    const def=resolve(a.deferred,B), other=(edit&&edit.otherAmt!==undefined&&edit.otherAmt!==null)?edit.otherAmt:a.other, unif=a.unif/12;
    const h=a.holiday; let hol=0;
    if(h.hrs!==undefined&&h.pct===undefined&&h.pctEFGH===undefined) hol=Ehr*h.hrs/12;
    if(h.pct!==undefined) hol=B*h.pct+(h.hrs!==undefined?Ehr*h.hrs/12:0);
    if(h.pctEFGH!==undefined) hol=(E+ind+special+lon)*h.pctEFGH;
    const vac=Ehr*a.vaca/12, sic=Ehr*a.sick/12;
    const eeR=resolve(a.eeRHS,B), cR=a.cityRHS; const ssMed=E*(0.0145+a.ss);
    const persEE=(E+ind+special+lon)*(-a.pers); const cityPERS=B*(-a.cityPERS);
    return {tc_ffMedicMonthly:E,tc_ed:ind,tc_special:special,tc_longevity:lon,tc_deferred:def,tc_other:other,tc_uniforms:unif,tc_holiday:hol,tc_vacation:vac,tc_sick:sic,tc_eeRHS:eeR,tc_cityRHS:cR,tc_medical:a.med,tc_dv:a.dv,tc_ltd:a.ltd,tc_life:a.life,tc_ssMed:ssMed,tc_pers:persEE};
  };
  const ce=cellEdits[a.name]||{};
  const grossAt=(B)=>{const c=compAt(B); COMP_KEYS.forEach(k=>{const v=ce[k]; if(v!==undefined&&v!==""&&!isNaN(parseFloat(v))) c[k]=parseFloat(v);}); return en.reduce((s,k)=>s+(c[k]||0),0);};
  let lo=-0.5,hi=2.0;
  for(let i=0;i<60;i++){const mid=(lo+hi)/2; (grossAt(Dcur*(1+mid))<target)?lo=mid:hi=mid;}
  const need=(lo+hi)/2;
  return { pct:r2(need*100), atOrAbove: rsv.tc_monthlyGross>=target };
}
// compute() kept for the City-method 2028 solver used by the UI
export function compute(a){ return computeCity(DATA.find(x=>x.name===a.name)||a, { raise2026: a.raise2026!==undefined&&a.lock26===false? String((a.raise2026||0)*100):undefined, raise2027: a._raise27!==undefined? String(a._raise27*100):undefined, _solveRaise: a._solveRaise, operationalPct:a.operationalPct, longevityPct:a.longevityPct }); }

export const AGENCY_INPUTS = DATA.map(a=>({
  name:a.name, shortName:a.shortName, highlight:a.highlight,
  raise2026:0, raise2026Display:a.r26d, locked2026:(a.lock26===false?false:true),
  raise2027:a.r27, raise2027Display:a.r27d, locked2027:a.r27lock, raise2027Flag:a.r27flag||null,
  raise2028:a.r28, raise2028Display:(a.r28!=null?Math.round(a.r28*10000)/100:0), locked2028:(a.lock28===true),
}));
export const LOWER_IS_BETTER = new Set([]);
export const COLUMNS=[
 {key:"raise2026",label:"2026 Raise",format:"pct",group:"Raises"},
 {key:"raise2027",label:"2027 Raise",format:"pct",group:"Raises"},
 {key:"raise2028",label:"2028 Raise",format:"pct",group:"Raises"},
 {key:"topStepHrly",label:"Top Step Hrly",format:"dollar",group:"Base Pay"},
 {key:"topStepMonthly",label:"Top Step Monthly",format:"dollar",group:"Base Pay"},
 {key:"topFFMedicMonthly",label:"Top FF+Medic Monthly",format:"dollar",group:"Base Pay"},
 {key:"individualIncentives",label:"Ed/Cert Incentive",format:"dollar",group:"Incentives"},
 {key:"operationalIncentives",label:"Special Operations",format:"dollar",group:"Incentives"},
 {key:"longevity10yr",label:"Longevity 10yr",format:"dollar",group:"Incentives"},
 {key:"deferredComp",label:"Deferred Comp",format:"dollar",group:"Benefits"},
 {key:"employeeRHS",label:"Employee RHS",format:"dollar",group:"Benefits"},
 {key:"cityRHS",label:"City RHS",format:"dollar",group:"Benefits"},
 {key:"medicalFamily",label:"Medical (Family+2)",format:"dollar",group:"Benefits"},
 {key:"dental",label:"Dental/Vision",format:"dollar",group:"Benefits"},
 {key:"ltd",label:"LTD",format:"dollar",group:"Benefits"},
 {key:"lifeInsurance",label:"Life",format:"dollar",group:"Benefits"},
 {key:"medicareAmt",label:"SS & Medicare",format:"dollar",group:"Taxes & PERS"},
 {key:"persEEAmt",label:"PERS (EE Cost)",format:"dollar",group:"Taxes & PERS"},
 {key:"cityPERSPaidByEE",label:"City PERS by EE",format:"dollar",group:"Taxes & PERS"},
 {key:"monthlyGross",label:"Monthly Gross",format:"dollar",group:"Total"},
];
export const TRUE_COLUMNS=[
 {key:"raise2026",label:"2026 Raise",format:"pct",group:"Raises"},
 {key:"raise2027",label:"2027 Raise",format:"pct",group:"Raises"},
 {key:"raise2028",label:"2028 Raise",format:"pct",group:"Raises"},
 {key:"tc_topStepHrly",label:"Top Step Hrly",format:"dollar",group:"Base Pay"},
 {key:"tc_ffMedicMonthly",label:"Top FF+Medic Monthly",format:"dollar",group:"Base Pay"},
 {key:"tc_ed",label:"Ed/Cert Incentive",format:"dollar",group:"Incentives"},
 {key:"tc_special",label:"Special Operations",format:"dollar",group:"Incentives",editable:"special"},
 {key:"tc_longevity",label:"Longevity 10yr",format:"dollar",group:"Incentives",editable:"longevity"},
 {key:"tc_deferred",label:"Deferred Comp",format:"dollar",group:"Incentives"},
 {key:"tc_other",label:"Other Pay",format:"dollar",group:"Leave & Extras",editable:"other"},
 {key:"tc_uniforms",label:"Uniforms",format:"dollar",group:"Leave & Extras"},
 {key:"tc_holiday",label:"Holiday Value",format:"dollar",group:"Leave & Extras"},
 {key:"tc_vacation",label:"Vacation Value",format:"dollar",group:"Leave & Extras"},
 {key:"tc_sick",label:"Sick Value",format:"dollar",group:"Leave & Extras"},
 {key:"tc_eeRHS",label:"Employee RHS",format:"dollar",group:"Benefits"},
 {key:"tc_cityRHS",label:"City RHS",format:"dollar",group:"Benefits"},
 {key:"tc_medical",label:"Medical (Family+2)",format:"dollar",group:"Benefits"},
 {key:"tc_dv",label:"Dental/Vision",format:"dollar",group:"Benefits"},
 {key:"tc_ltd",label:"LTD",format:"dollar",group:"Benefits"},
 {key:"tc_life",label:"Life Insurance",format:"dollar",group:"Benefits"},
 {key:"tc_ssMed",label:"SS & Medicare",format:"dollar",group:"Taxes & PERS"},
 {key:"tc_pers",label:"PERS (EE Cost)",format:"dollar",group:"Taxes & PERS"},
 {key:"tc_monthlyGross",label:"True Monthly Gross",format:"dollar",group:"Total"},
];
export const AGENCY_NOTES = {"City of Roseville": {"tc_ffMedicMonthly": "45.3495 $/hr\nFirefighter Paramedic II-B, Step I (56-hr). All %-of-base incentives compute on this.\nSource: Roseville Salary Schedule, grade 3355B; benchmark per MOU Ch.2 Art.I", "tc_ed": "15% % base\nBA 10% + Firefighter II Cert 5%; college+CSFM capped at 15%\nSource: MOU Ch.2 Art.VI B & note, p.11–12", "tc_special": "2.5% / 5% % base\n2.5% team, 5% task force; not compounded (defaults ON at 5% max; editable)\nSource: MOU Ch.2 Art.VI E, p.13", "tc_longevity": "2.5% % base\n2.5% @10yr, 5% @15yr, 7.5% @20yr (hired <2017); Service Term Bonus = same for newer hires\nSource: MOU Ch.2 Art.VIII p.15 & Art.IX p.16", "tc_deferred": "3% % base\nCity contributes 3% of base after 5 yrs\nSource: MOU Ch.4 Art.V B, p.29", "tc_uniforms": "1300 $/yr\nAnnual uniform allowance, eff. 3/21/2026\nSource: MOU Ch.2 Art.VII A, p.14", "tc_other": "0 $/yr\nSEARCHED AND EXCLUDED. This MOU contains no fitness/wellness incentive, no bilingual pay, no standby pay, no cell-phone or equipment stipend and no medic-unit pay. Conditional items correctly excluded: $150/mo medical opt-out (Ch.4 Art.I C(4), p.26); 10% strike-team differential, deployment-contingent (Ch.2 Art.XII B, p.18); comfort-canine lead handler 7 OT hrs per pay period, single incumbent (Ch.2 Art.XV B, p.19); educational reimbursement up to $500/yr drawn from a capped $6,000 fund (Ch.7 Art.XIX). NOT CAPTURED ANYWHERE ON THE SHEET: 1959 Survivor Benefit, City +$3.00/mo and employee -$2.00/mo (Ch.5 Art.I C, p.30).\nSource: MOU Ch.2 Art.XII and XV, Ch.4 Art.I C(4), Ch.7 Art.XIX, Ch.5 Art.I C - searched and excluded", "tc_holiday": "168 hrs/yr\n7 × 24-hr holiday shifts, paid in advance Jan 1\nSource: MOU Ch.3 Art.II B, p.22", "tc_vacation": "288 hrs/yr\n12 shifts/yr at 20+ yr tier (24-hr shift accrual)\nSource: MOU Ch.3 Art.I B, p.20", "tc_sick": "144 hrs/yr\nAnnual sick accrual (confirmed by RFF)\nSource: Abram Neitling (RFF), confirmed; accrual per Personnel Rules 3.12.070", "tc_eeRHS": "-5% % base\nMandatory employee contribution ramps 1%→max 5% of base (Tier 4)\nSource: MOU Ch.4 Art.II F, p.28", "tc_cityRHS": "100 $/mo\nCity contributes $100/mo after 5 yrs of service\nSource: MOU Ch.4 Art.II F(2), p.28", "tc_dv": "180 $/mo\nFlex credit for dental/vision\nSource: MOU Ch.4 Art.I C(3), p.26", "tc_ltd": "0 $/mo\nNot provided in MOU\nSource: MOU (no LTD article)", "tc_life": "14 $/mo\nPremium cost (2× annual salary benefit)\nSource: City Total Comp Study", "tc_ssMed": "1.45% % base\nMedicare only (safety, no Social Security)\nSource: Safety employment; MOU Ch.5, p.30", "tc_pers": "15.25% % earnable\nPEPRA Safety Fire member rate — First Level (2.7%@57, = 50% of total normal cost). Effective 7/1/2027. (Second-Level tier = 14.75%.)\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25049", "tc_topStepHrly": "2912 hrs/yr\n24-hr shifts averaging 56 hr/wk (48/96 schedule)\nSource: MOU Ch.6 Art.I A–B, p.32", "agency": "Firefighter/Paramedic benchmark   (rates effective 3/21/2026)\n\nRaises:\n2026: 6.5% (Labor Market Adjustment, FF/Paramedic, eff. 3/21/2026)\n2027: 0.0% (General wage increase for FF Paramedic I/II & EMT I = 0%)\n2028: LMA to 55th %ile (Base hourly increase to reach market 55th percentile; survey data eff. 9/1/2027 (the tool solves this))", "tc_medical": "2470.27 $/mo\n80% of the CalPERS Region 1 Kaiser family premium ($3,087.84 x 0.80 = $2,470.27). The $180 dental/vision flex credit is carried separately in tc_dv; check it is not also inside this figure.\nSource: MOU Ch.4 Art.I C(3), p.26; CalPERS 2027 Region 1 Health Premiums"}, "City of Vacaville": {"tc_ffMedicMonthly": "2% % base\nEMT/EMT-P differential of 2.0% of base salary. Vacaville has BOTH a Firefighter/Paramedic rank (its own salary row, class 7085) AND this separate 2% differential - they stack, so this is not a double count.\nSource: MOU Sec.9.2 p.14; classifications per Sec.3.1 and Appendix A", "tc_topStepHrly": "12593.77 $/mo\nFirefighter/Paramedic II Step 5 = $151,125.22/yr divided by 12, from the \"Effective pay period including November 1, 2026\" schedule (post +2.0%). = $51.90/hr over 2912 hrs. The prior 11/1/2025 figure was $148,161.98/yr = $50.88/hr - do not re-derive from that. Appendix A is captioned \"Monthly Salary Schedule\" but its figures are annual; that caption error is the City's.\nSource: MOU Appendix A salary schedule, job class 7085; 2% raise per Sec.8.1 p.13", "tc_ed": "17% % base\nBA/BS 5% + Senior Firefighter Service Seniority 12% = 17% (confirmed by Abram vs MOU Sec.9.3). NOTE: a City job posting shows the program as 2.5–11% — the MOU 12% governs.\nSource: Vacaville MOU Sec.9.3 p.15", "tc_special": "5%  OR  $6,000/yr % / $\nHazMat Program Leader = 5% of top-step FF/Para; Water/Tech Rescue = $6,000/yr; only ONE assignment at a time\nSource: MOU Sec.9.5 p.16", "tc_longevity": "0 —\nNo longevity provision in Vacaville MOU\nSource: MOU (none)", "tc_deferred": "1% % base\nCity contributes 1% of base for FF/Paramedic (2% only for Captains)\nSource: MOU Sec.7.4 p.13", "tc_other": "1200 $/yr\nParamedic continuing-education pay\nSource: MOU Sec.9.1 p.14", "tc_uniforms": "1800 $/yr\nIncreased from $1,200 to $1,800 this MOU\nSource: MOU Sec.12.1 p.20", "tc_holiday": "3.38% + 96 hrs % + hrs\nHoliday-in-lieu 3.38% of base PLUS 96 designated holiday hrs valued at hourly (confirmed)\nSource: MOU Sec.6.3.1 p.11–12", "tc_vacation": "336 hrs/yr\n15+ yr shift accrual (old sheet had 432 — corrected)\nSource: MOU Sec.6.2.1 p.10", "tc_sick": "216 hrs/yr\n9 × 24-hr shifts per year\nSource: MOU Sec.6.1 p.7", "tc_eeRHS": "-960 $/yr\nBridge-Gap RHS employee contribution at 10+ yrs ($36.92/pp)\nSource: MOU Sec.11.7 p.19", "tc_cityRHS": "1200 $/yr\nBridge-Gap RHS employer contribution at 10+ yrs ($46.15/pp)\nSource: MOU Sec.11.7 p.19", "tc_dv": "156 $/mo\nDental $139 + Vision $17 (City pays 100%)\nSource: City Total Comp Study; MOU Sec.11.2/11.4", "tc_ltd": "0 $/mo\nCity does not provide STD/SDI (voluntary employee purchase only)\nSource: MOU Sec.11.5 p.18", "tc_life": "4 $/mo\nPremium cost ($75,000 City-paid policy)\nSource: City Total Comp Study; MOU Sec.11.3", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security\nSource: MOU Sec.7.3 p.13", "tc_pers": "13.75% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027. (Was 13.25% in FY26-27.)\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25797", "agency": "Firefighter/Paramedic benchmark   (salary schedule eff. 11/23/2025)\n\nRaises:\n2026: 2.0% (Effective pay period incl. Nov 1, 2026 (NOT yet in schedule))\n2027: 0% (MOU expires 10/2027; no further raise)\n2028: 0% (Beyond MOU term)", "tc_medical": "2624.66 $/mo\n85% of the Kaiser family premium ($3,087.84 x 0.85 = $2,624.66). MOU splits the premium 85% City / 15% employee pre-tax; an employee choosing a non-Kaiser plan gets the same City dollars, capped at 100% of that plan's premium.\nSource: MOU Sec.11.1 p.18; CalPERS 2027 Region 1 Health Premiums"}, "Sacramento Metro Fire": {"tc_ffMedicMonthly": "14.3% % base\nEMT-1 incentive 5% + Paramedic incentive 9.30% for the Firefighter rank = 14.3% of base, additive. (Engineer 7.9%, Captain 6.5%.)\nSource: SMFD / IAFF Local 522 MOU, EMT and Paramedic incentive articles", "tc_topStepHrly": "9595.90 $/mo\nCurrent top-step Firefighter monthly base (confirmed by RFF). = $39.54/hr over 2912 hrs. Prior side-letter raises are folded into this figure. The MOU 2023-2024 is expired, so no further raise is modelled. CAUTION: the District's own published MOU computes its hourly rates on a 2,920-hour year, not 2,912 - worth reconciling if the hourly figure is ever quoted directly. Paramedic/EMT pay is carried separately in the FF+Medic column.\nSource: SMFD IAFF Local 522 current salary schedule; MOU Art.9.A for term", "tc_ed": "10.5% % base\nBA/BS 10.5% max (your prior note: '10.5% BA, 6.5% AA, not compounded')\nSource: 522 MOU Art.11.A", "tc_special": "7% cap % base\nHazMat 5.5%, Rescue 3.5%, TEMS/Dozer/AirOps 1.5%, Boat 1% — capped 7% total\nSource: 522 MOU Art.12", "tc_longevity": "2.0% % base\n2%@10 (matches prior data; schedule 2/4/6/9/12%)\nSource: 2022 MOU Art.50 (confirm vs 2023–24)", "tc_deferred": "0 $\nDistrict does not contribute (matches prior data)\nSource: 2022 MOU Art.46 (confirm vs 2023–24)", "tc_other": "4500 $/yr ($375/mo) — IGT Allowance: one-time lump-sum, NON-PERSABLE.\nTop threshold (Medicare cost-recovery revenue increase >$3M): FF/EMT/Paramedic = $4,500 (lower tiers: $1,500 at $1.5M–$2.5M, $3,000 at $2.5M–$3M). Requires IAFF Behavioral Health Awareness cert + good standing; District/522 meet each November; conditional on revenue. Per RFF: top tier hit every year since 2023.\nSource: SMFD Local 522 MOU 2023–2024, IGT Allowances, p.19", "tc_uniforms": "0 $/yr\nNo cash uniform allowance for suppression (confirmed)\nSource: 522 MOU Art.15", "tc_holiday": "144 hrs/yr\n12 hrs/mo holiday-in-lieu at base+incentives rate\nSource: 522 MOU Art.28.A", "tc_vacation": "336 hrs/yr\n28 hrs/mo at 241+ months (top tier)\nSource: 522 MOU Art.24.A.3", "tc_sick": "288 hrs/yr\n24 hrs/mo, unlimited accrual (shift)\nSource: 522 MOU Art.19.A.1", "tc_eeRHS": "0 $\nNo employee RHS/HSA — 100% retiree medical instead (confirmed)\nSource: 522 MOU Art.16.C", "tc_cityRHS": "0 $\nNo active-side City RHS (confirmed)\nSource: 522 MOU Art.16.D–E", "tc_medical": "3555.56 $/mo\n92% of the THIRD-highest CalPERS Region 1 plan at the family tier. MOU Art.16.A: the District \"shall contribute 92% of the medical premium towards the employees or retirees selected health plan\"; employees are \"responsible for the remaining 8% of the premium, and any additional amount above the premium cap\"; and \"The premium cap (effective on 1/1/14) will be the third highest plan in CalPERS Region 1 rates at the tier that the employee selects, i.e. employee, employee plus one, employee plus family.\" Third-highest family-tier plan for 2027 = Anthem Blue Cross Select HMO $3,864.74; x 0.92 = $3,555.56. CORRECTED 11/10/2026 - the prior $4,254.45 was 92% of PERS Platinum, the HIGHEST plan, not the third. MOU term 1/1/2023-12/31/2024 and EXPIRED; the 92% has been in force since 7/1/2013 and the cap since 1/1/2014, and no side letter altering this article was found. NOTE both Sac Metro PDFs in the LMA Docs folder are webpage screenshots with no MOU body - this was read from the District's published PDF.\nSource: SMFD / IAFF Local 522 MOU Art.16.A; CalPERS 2027 Region 1 Health Premiums", "tc_dv": "135 $/mo\nDental $116 + Vision $19\nSource: City Total Comp Study", "tc_ltd": "0 $/mo\nNo LTD for safety (4850 disability instead)\nSource: 522 MOU Art.20/21", "tc_life": "12 $/mo\nPremium cost ($100,000 District-paid)\nSource: City Total Comp Study; MOU Art.22", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security (safety, confirmed)\nSource: needs confirm", "tc_pers": "12.5% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027.\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25647", "agency": "IAFF Local 522 — Sacramento Metro Fire\n\nTop step Firefighter $9,595.90/mo (current, confirmed by RFF).\nMedic: EMT 5% + Paramedic 9.3% = 14.3% total (stacked, additive).\n\nBase reflects the current schedule; prior side-letter raises folded into base."}, "City of Fairfield": {"tc_ffMedicMonthly": "12.5% % base\nParamedic pay 10% of top-step Firefighter + EMT pay 2.5% of base = 12.5%. The MOU expressly stacks them: \"Paramedics receiving paramedic pay will also receive 2.5% EMT pay.\" EMT-B is mandatory for all ranks, so the 2.5% is universal rather than elective.\nSource: MOU Art.7.C and Art.7.D, internal p.6", "tc_topStepHrly": "10534.16 $/mo\nFirefighter top step; =$43.41/hr over 2912; matches RFF note '$10,534.28' and Engineer/1.10\nSource: City FF/Para salary range (fairfield.ca.gov); MOU Art.6C", "tc_ed": "10% % base\n2.5% AA + 2.5% BA + SFT certs, cap 10%\nSource: MOU Art.7F p.7", "tc_special": "5% % actual step\nSolano County Hazmat Team (voluntary)\nSource: MOU Art.7H p.8", "tc_longevity": "0 —\nNo longevity provision\nSource: MOU (none)", "tc_deferred": "160 $/mo\nCity contributes $160/mo to 401(a)\nSource: MOU Art.10E p.18", "tc_other": "0 $/yr\nBilingual/shift-diff/strike/preceptor are situational\nSource: MOU Art.7/9", "tc_uniforms": "1850 $/yr\n$1,250 uniform + $350 boot + $250 bedding\nSource: MOU Art.11 p.19", "tc_holiday": "6.4% % (base+ed)\n6.4% of actual salary + ed incentive, paid biweekly (+24 hrs floating)\nSource: MOU Art.9A p.11–12", "tc_vacation": "280 hrs/yr\n56-hr, 21st yr+ accrual (was 304 in old sheet — CORRECTED)\nSource: MOU Art.9B p.12–13", "tc_sick": "134.4 hrs/yr\n5.1692 hrs/pay period (was 168 in old sheet — CORRECTED)\nSource: MOU Art.9D.2 p.14", "tc_eeRHS": "0 $\nNo required contribution (sick-leave conversions fund RHS)\nSource: MOU Art.9D/10I p.19", "tc_cityRHS": "75 $/mo\nRetiree Medical Expense Program (MissionSquare)\nSource: MOU Art.10I p.19", "tc_dv": "50 $/mo - UNVERIFIED, VALUES CONFLICT\nThe stored $50/mo conflicts with the figure previously recorded for this field ($111 dental + $14 vision = $125/mo). The MOU cannot settle it: Art.10.D makes vision 100% City-paid under the VSP basic plan, and Art.10.A escalates the dental contribution by 50% of the Delta Dental HMO premium increase - but NO dollar amount for dental or vision appears anywhere in the MOU. Same source as the disputed Fairfield medical figure. UNLOCKED pending the City comp study page.\nSource: MOU Art.10.A, 10.C, 10.D (structure only - no amounts stated)", "tc_ltd": "18 $/mo\nLTD premium\nSource: City 2025 Total Comp Study (firm figure)", "tc_life": "12 $/mo\nLife premium cost (1.5× salary, max $150k)\nSource: City 2025 Total Comp Study (firm figure)", "tc_ssMed": "1.45% % base\nNot in Social Security; Medicare 1.45% by law (MOU silent)\nSource: MOU Art.13E p.22", "tc_pers": "12.75% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027. Rose from 12.25% (FY26-27).\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25314", "agency": "FPFA — MOU 2022–2025 + City salary range\n\nRaises:\n2024: +6.0% (1st full PP July 2024 (in schedule))\n2025+: TBD (No raise in this MOU (term ends 6/30/2025); successor TBD)", "tc_medical": "2010 $/mo - UNVERIFIED, NOT COMPUTABLE FROM THE MOU\nArt.10.A sets only an escalator - the City contribution is adjusted by 50% of the increase in the Kaiser $35 copay plan premium (and, going forward, a 50/50 split on Kaiser $35 copay plus the Delta Dental HMO plan). The MOU states NO coverage tiers and NO base contribution amount; the anchor figure predates this agreement and is never reproduced in it. Neither $2,000 nor the alternative $2,010 can be confirmed or refuted from this document. The escalator is also symmetric (\"increase or decrease\"), so trending it upward by default is not what the clause says. This MOU expired 6/30/2025 and Fairfield is still out of contract. Needs the pre-2017 predecessor MOU for the anchor plus Kaiser/Delta premium tables.\nSTANDING DECISION 11/10/2026: $2,010 is carried and left flagged. Worth 0.011 points on True 55% and $0.00 on City 55%, so the choice does not move the answer. Note the tension - the escalator above is symmetric, so the lower $2,000 anchor is the more defensible of the two if challenged.\nSource: MOU Art.10.A, internal p.17 (escalator only - no amounts)"}, "Cosumnes CSD": {"tc_ffMedicMonthly": "$550/mo + 3.5% % base\nParamedic stipend $550/mo plus 1.0% of base salary for Firefighters (§5.6.2, p.8), PLUS a 2.5% of base salary EMT stipend (§19.4.3, p.68). The EMT stipend expressly covers paramedics — “including paramedics who maintain their EMT by virtue of their paramedic license.” The two stack: the MOU contains no anti-stacking clause (compare Rocklin, which does exclude EMT pay for paramedics). Total = $550 + 3.5% of base. Confirmed by RFF 11/2026.\nBase = $10,575/mo (Firefighter Step 7, 7/1/2026 schedule, post +6% = $43.58/hr over 2912).\nSource: MOU §5.6.2 p.8 and §19.4.3 p.68; base per Appendix D", "tc_topStepHrly": "10575 $/mo\nFirefighter Step 7, 7/1/2026 schedule (post +6%). =$43.58/hr over 2912\nSource: MOU Appendix D (7/1/2026 schedule)", "tc_ed": "14% % base\n8% college/degree + 8% SFM certs, combined cap 14%\nSource: MOU Art.5.9", "tc_special": "0 - already inside the 14% education cap\nHazMat Technician 2% and Specialist 1% are line items in the Sec.5.9.3 State Fire Marshal certificate table, so they are consumed by the 8% Sec.5.9.3.b sub-cap and the 14% Sec.5.9.1.a global cap already carried in tc_ed. Counting them here would double-count. Rescue Technician +1% (Sec.5.9.4) requires BOTH the certification AND assignment to a Heavy Rescue Station, so a benchmark firefighter does not hold it. No standalone hazmat or rescue team premium exists in this MOU.\nSource: MOU Sec.5.9.1.a, Sec.5.9.3.a-b, Sec.5.9.4", "tc_longevity": "3.5% % base\n3.5%@10, 5.5%@15, 7.5%@18, 9.5%@21\nSource: MOU Art.5.11", "tc_deferred": "900 $/yr\n$50/mo + up to $25 match; PEPRA/post-2013 only\nSource: MOU Art.5.16", "tc_other": "0 $/yr\nBilingual/diff/preceptor situational\nSource: MOU Art.5", "tc_uniforms": "1300 $/yr\n$1,300/yr\nSource: MOU Art.5.4.2", "tc_holiday": "120 hrs/yr\nShift/suppression\nSource: MOU Art.6.1.1", "tc_vacation": "408 hrs/yr\n17 shifts, 241+ months (top tier)\nSource: MOU Art.8.2", "tc_sick": "288 hrs/yr\n24 hrs/mo\nSource: MOU Art.7.1", "tc_eeRHS": "-600 $/yr\n−$600/yr ($50/mo) per City Total Comp Study (LMA method). MOU also requires 4.5%-of-base OPEB (~$5,700/yr) — not counted by the City study.\nSource: City Total Comp Study; MOU Appendix C Sec.II (4.5% OPEB flagged)", "tc_cityRHS": "2400 $/yr\nDistrict OPEB ($2.4M district-wide; per-employee approx from study)\nSource: City Total Comp Study", "tc_dv": "150 $/mo\nDental $133 + Vision $17\nSource: City Total Comp Study", "tc_ltd": "30 $/mo\nDistrict-paid (CAPF Safety Plan A)\nSource: City Total Comp Study; MOU Art.5.5", "tc_life": "4 $/mo\nDistrict-paid term life (face not in MOU)\nSource: City Total Comp Study", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security (safety)\nSource: MOU (SS silent); safety", "tc_pers": "12.25% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027.\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25664", "agency": "IAFF Local 522 — MOU 2024–2027\n\nRaises:\n2027+: TBD (MOU ends 6/30/2027; successor TBD)", "tc_medical": "2350.10 $/mo\nLesser of the CalPERS Region 1 Kaiser (KN) or Blue Shield Access+ rate. District base contribution for plan year 2024 = $2,160.57 Full Family, escalated by 50% of each year's CalPERS premium change for plan years 2025, 2026 and 2027 (the employee pays the other 50%).\nSource: MOU Appendix C Sec.I.B.1-2, printed pp.86-87; CalPERS Region 1 premiums 2024-2027"}, "El Dorado Hills Fire": {"tc_ffMedicMonthly": "0 - medic pay is inside base\nFirefighter/Paramedic is a true rank with its own salary row; there is no plain Firefighter classification in this unit at all. The only standalone paramedic incentive in the MOU ($200/mo) applies to Battalion Chiefs only.\nSource: MOU Art.I.A, Art.VII.A.7.a salary schedule, Art.VII.I.1", "tc_topStepHrly": "11415 $/mo\nFF/Paramedic Step 5, 7/1/2026 (post +8.94%) = $47.04/hr. Medic IS in base\nSource: MOU VII.A.7.a (7/1/2026 schedule)", "tc_ed": "1200 $/mo\n$900 MA/MS + $300 Company Officer cert (flat $, non-stack within type)\nSource: MOU VII.H.1–2", "tc_special": "0 —\nNo hazmat/rescue/special-ops pay in MOU\nSource: MOU (none)", "tc_longevity": "3500 $/yr\n$3,000@5, $3,500@10, $4,000@20... OLD had $3,000 — CORRECTED\nSource: MOU VII.L", "tc_deferred": "1200 $/yr\n$100/mo 457 match, PEPRA only\nSource: MOU VIII.C", "tc_other": "0 $/yr\nFire Staff premium (40-hr only); FTO stipend situational\nSource: MOU VII", "tc_uniforms": "1000 $/yr\n$800→$1,000/yr eff Jan 2027\nSource: MOU VII.E", "tc_holiday": "130 hrs/yr\nShift personnel (reg hourly × 130). OLD had 120 — CORRECTED\nSource: MOU X.A", "tc_vacation": "324 hrs/yr\nShift, 20+ yrs (top tier)\nSource: MOU XI.A.5", "tc_sick": "216 hrs/yr\nShift\nSource: MOU XII.A.1", "tc_eeRHS": "0 $\nNo employee RHS contribution\nSource: MOU IX.C", "tc_cityRHS": "0 $\nNo cash RHS; 100% retiree medical at 20 yrs (CalPERS vesting)\nSource: MOU IX.C", "tc_medical": "3845.71 $/mo\nMOU: “The Department shall contribute a maximum monthly amount of up to 100% of the fifth highest cost plan offered in CalPERS Region 1 at the tier the employee elects.” At the family (2+) tier the 5th-highest 2027 plan = Blue Shield EPO $3,845.71.\nSource: EDH Fire MOU medical article; CalPERS 2027 Region 1 Health Premiums", "tc_dv": "219 $/mo\nDental $192 + Vision $27 (100% of premium)\nSource: City Total Comp Study; MOU IX.D", "tc_ltd": "30 $/mo\nDept-paid STD (CAPF); no separate LTD\nSource: City Total Comp Study; MOU IX.F", "tc_life": "6 $/mo\n$50,000 Dept-paid term life\nSource: City Total Comp Study; MOU IX.E", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security\nSource: MOU (silent); safety", "tc_pers": "13.75% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027. CalPERS Safety Risk Pool.\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25590", "agency": "EDH Fire — MOU 2026–2029\n\nRaises:\n2026: +8.94% (7/1/2026 — in effect & baked into current base)\n2027: +3% (7/1/2027 (future))\n2028: +4% (7/1/2028 (future))"}, "City of Folsom": {"tc_ffMedicMonthly": "10% % base\nFirefighter paramedic incentive. 9% effective on ratification; steps to 10% effective the first full pay period in July 2027 — BEFORE the 9/1/2027 comparable snapshot, so 10% is the correct survey-date value. Base = Firefighter Step 7 $9,840.40/mo (7/1/2026, post +2.5%).\nSource: MOU Art.IV §2.A and §2.B", "tc_topStepHrly": "9840.40 $/mo\nFirefighter Step 7, 7/1/2026 (post +2.5%). = $9,600.39 × 1.025\nSource: City Salary Schedule + MOU Art.IV §12.B", "tc_ed": "10% % base\nAA/Officer 5% → BA/Chief Fire Officer 10% (15% for pre-2010 Masters)\nSource: MOU Art.IV §4", "tc_special": "600 $/mo\nProgram incentive pays $100–200/mo; cap $600/mo\nSource: MOU Art.XIII §10", "tc_longevity": "2.5% % base\n2.5%@10 for EVERYONE (no hire-date limit). OLD had 0 — CORRECTED\nSource: MOU Art.IV §5", "tc_deferred": "0 $\nNo employer match\nSource: MOU Art.IV §7.C", "tc_other": "2250 $/yr ($187.50/mo) — Fitness Incentive + Medic Unit Incentive.\nFitness Incentive $750/yr: one-time payment per calendar year to any member who completes the Folsom Fire Physical Ability Test (entry-level combat challenge) within the time standard in the MOU table. Participation is open to all members; the payment is conditioned on passing within time.\nMedic Unit Incentive $1,500/yr: annual one-time payment based on hours worked on a medic unit, inclusive of regular duty and overtime — 2,200 hrs = $1,000; 2,500 hrs = $1,250; 2,800 hrs = $1,500. Top tier applied per RFF; requires near-full-year medic unit assignment.\nSource: MOU Art.XIII (Fitness Evaluation/Wellness) and Medic Unit Incentive Pay, pp.58–59", "tc_uniforms": "1250 $/yr\n$1,250/yr\nSource: MOU Art.X §1.A", "tc_holiday": "6.0% % base\nHoliday in-lieu, 6.0% of base hourly\nSource: MOU Art.VII §2", "tc_vacation": "388 hrs/yr\nCombined Annual Leave, 15+ yrs (top tier)\nSource: MOU Art.VIII §1.1", "tc_sick": "0 hrs/yr\nNo separate sick accrual (merged into Annual Leave)\nSource: MOU Art.VIII §1.B", "tc_eeRHS": "-900 $/yr\nMandatory IAFF MERP $37.50/pay period × 24 pp\nSource: MOU Art.IX §14.C", "tc_cityRHS": "600 $/yr\nCity contributes $25/pay period ($50/mo) to the IAFF MERP Trust. Art.IX Sec.14.D ceased the former Sec.12.A.2.c City HRA and redirected the identical $25/pp to the Trust. Applies only to employees HIRED AFTER MAY 8, 2007; earlier hires get retiree health insurance under Sec.12.A instead.\nSource: MOU Art.IX Sec.14.D, p.42", "tc_dv": "170 $/mo\nDental $146 + Vision $24 (100% of premium)\nSource: City Total Comp Study; MOU Art.IX §5/6", "tc_ltd": "0 $/mo\nSTD City-paid; LTD employee-paid\nSource: MOU Art.IX §9/10", "tc_life": "6 $/mo\n$40,000 life + $40,000 AD&D City-paid\nSource: City Total Comp Study; MOU Art.IX §8", "tc_ssMed": "6.2% + 1.45% % base\nFolsom appears to participate in Social Security (6.2%) in addition to Medicare (1.45%). THIS IS AN INFERENCE, NOT AN EXPRESS TERM. The MOU's only Social Security provision is Art.IV Sec.10, in full: \"The City agrees to reopen and negotiate the direction of funds, should the City withdraw from Social Security.\" A withdrawal reopener implies current participation but never states it, and the MOU states no rate anywhere. Sec.10 is also a live reopener, so the 6.2% is not locked for the MOU term. Confirm with a Folsom paystub or the City ACFR.\nSource: inference from MOU Art.IV Sec.10, p.15, plus statutory FICA rates", "tc_pers": "12.75% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027.\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25581", "agency": "IAFF Local 522 — MOU 2025–2028\n\nRaises:\n2025: +2.5% (7/1/2025 — in 7/1/2025 schedule)\n2026: +2.5% (7/1/2026 — in effect & baked into current base)\n2027: +2.5% (7/1/2027 (future))\n\nOther Pay (Art. XIII, pp.58–59):\n• Fitness Incentive — $750/yr on passing the Physical Ability Test within time standard\n• Medic Unit Incentive — $1,000 / $1,250 / $1,500 per yr at 2,200 / 2,500 / 2,800 medic-unit hours\n• Paramedic incentive steps 9% → 10% first full pay period July 2027", "tc_medical": "2053 $/mo\n2025 base City contribution $1,955 (employee plus family), escalated by 50% of each Kaiser HMO premium increase and rounded UP to the next whole dollar as the MOU requires: PY2026 $1,955 + $72.75 -> $2,028; PY2027 $2,028 + $24.40 -> $2,053. The round-up rule is what makes this land on a whole dollar.\nSource: MOU Art.IX Sec.2.A-2.B, p.35; CalPERS Kaiser Region 1 premiums 2025-2027"}, "City of Rocklin": {"tc_ffMedicMonthly": "650 $/mo\nFlat monthly paramedic pay for Firefighters authorized to hold a paramedic certification. ANTI-STACKING: \"Employees who are receiving paramedic pay are not eligible for EMT pay,\" so the $100/mo EMT stipend is correctly excluded. Compare Cosumnes, which has no such clause and does stack.\nSource: MOU Sec.II Art.3.B, PDF pp.15-16", "tc_topStepHrly": "9958.94 $/mo\nFirefighter Step 10, 7/2026 (post +2%). = $9,763.67 × 1.02\nSource: Rocklin Salary Schedule + MOU Sec.II Art.1.B", "tc_ed": "475 $/mo\nMasters $350 + Chief Officer cert $125 (degree + cert stack)\nSource: MOU Sec.II Art.4.E", "tc_special": "0 —\nNo hazmat/rescue/special-ops pay in MOU\nSource: MOU (none)", "tc_longevity": "0 —\nNone until 20 yrs (then 2.5%)\nSource: MOU Sec.II Art.8", "tc_deferred": "3600 $/yr\n$100/mo match + $200/mo (PEPRA) = up to $300/mo\nSource: MOU Sec.III Art.6", "tc_other": "0 $/yr\nStrike-team/call-back situational\nSource: MOU Sec.II", "tc_uniforms": "950 $/yr\n$950/yr\nSource: MOU Sec.III Art.7.A", "tc_holiday": "96 hrs/yr\n10 holidays × 9.6 hrs (56-hr)\nSource: MOU Sec.IV Art.2.A", "tc_vacation": "315 hrs/yr\n15+ yrs annual accrual (56-hr)\nSource: MOU Sec.IV Art.1.B", "tc_sick": "144 hrs/yr\n56-hr employees\nSource: MOU Sec.IV Art.3.A", "tc_eeRHS": "0 $\nNo RHS DC plan\nSource: MOU Sec.III Art.5", "tc_cityRHS": "0 $\nNo active RHS; retiree medical up to $1,200/mo instead\nSource: MOU Sec.III Art.5", "tc_dv": "201 $/mo\nDental $177 + Vision $24\nSource: City Total Comp Study; MOU Sec.III Art.1.C", "tc_ltd": "0 $/mo\nCity pays SDI; no separate LTD\nSource: MOU Sec.III Art.2", "tc_life": "8 $/mo\n$50,000 life + AD&D, City-paid\nSource: City Total Comp Study; MOU Sec.III Art.1.C.2", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security (safety)\nSource: MOU Sec.I Art.9", "tc_pers": "16.75% % earnable\n13.75% PEPRA Safety member rate (2.7%@57, = 50% of total normal cost) PLUS 3.0% of CalPERS REPORTABLE compensation paid by the employee toward the EMPLOYER's contribution. Rocklin is the only comparable with an employee-paid employer share, and it is a named element of the Roseville study methodology (\"Employer Portion of Retirement Paid by the Employee\"). Note the 3% base is reportable comp - it includes the $650 paramedic and $475 education pay, not base salary alone. Classic members: 9% + 3% = 12%.\nSource: MOU Sec.III Art.4.F (PEPRA) and Art.4.C (Classic), PDF pp.25-26; rate per CalPERS June 30, 2025 valuation, rate plan 25878", "agency": "Rocklin Fire — MOU 2025–2028\n\nRaises:\n2025: +2.0% (7/12/2025 — in current schedule)\n2026: +2.0% (7/2026 — in effect & baked into current base)", "tc_medical": "2375.26 $/mo\nCAUTION - the cap is the Kaiser EMPLOYEE+1 tier, not family. MOU: City pays \"100% of the Kaiser plan at the employee plus one coverage level,\" and the total City contribution \"never exceeds the Kaiser employee +1 tier premium\"; a family enrollee pays the balance. MOU states $2,225.80 for 2025; $2,375.26 is the 2026 Kaiser EE+1 premium (external source). From plan year 2027 the City pays only 80% of premium increases, so do not trend this at full premium.\nSource: MOU Sec.III Art.1.C.3 and 1.C.5, PDF pp.21-23"}, "City of Sacramento": {"tc_ffMedicMonthly": "10% % base\nEMT-Paramedic license pay, 10% of base hourly for the Firefighter classification, additive and not compounded. IMPORTANT: the former additional 7.5% Medic Assignment Pay (old Art.15.2(c)) was DELETED and rolled into base salary by Art.6.2 - do not add it on top. Paramedic licensure is a condition of employment for the first two years of career service.\nSource: MOU Art.15.2(b)(1) p.41; Art.6.2 p.9", "tc_topStepHrly": "10484.81 $/mo\nFirefighter top step = $43.206621/hr (FR56), eff. 10/3/2026 ($125,817.68/yr ÷ 12)\nSource: City of Sacramento Salary Schedule eff. 10/13/2026, class 005010 (FR56)", "tc_ed": "14.5% % base\nFire Science Cert 9.5% + Bachelor's 5%\nSource: MOU Art.15.1 p.40", "tc_special": "5% % base\nHazmat cert 2.5% + Rescue cert 2.5% (assigned = 5% each, not everyone)\nSource: MOU Art.15.4/15.6 p.44–45", "tc_longevity": "0 —\nFirst longevity 3% at 17 yrs (plus $300/yr charter max)\nSource: MOU Art.7.7 p.13", "tc_deferred": "0 $\n457 voluntary; no City contribution\nSource: MOU Art.27.7 p.83", "tc_other": "0 $/yr\nFire boat/admin/QA/preceptor situational\nSource: MOU Art.15", "tc_uniforms": "910 $/yr\n$35/biweekly × 26\nSource: MOU Art.14.1 p.39", "tc_holiday": "156.8 hrs/yr\n6:32 × 24 pay periods. OLD had 168 — CORRECTED\nSource: MOU Art.9.3 p.24", "tc_vacation": "224 hrs/yr\n20 days after 15 yrs (top tier). OLD had 272 — CORRECTED\nSource: MOU Art.17.2 p.52", "tc_sick": "134.4 hrs/yr\n5:36 × 24 pay periods. OLD had 144 — CORRECTED\nSource: MOU Art.17.1 p.48", "tc_eeRHS": "-900 $/yr\nMandatory $75/mo to IAFF MERP (all hires)\nSource: MOU Art.8.9 p.22", "tc_cityRHS": "0 $\nNo City MERP contribution\nSource: MOU Art.8.9(f) p.22", "tc_dv": "0 $/mo\nNo separate dental/vision money. Art.8.3(b) is a single IRS Section 125 cafeteria-plan contribution covering medical, dental AND vision together. The separate $721/mo dental+vision allowance in Art.8.3(c) applies only to employees NOT enrolled in a City medical plan, and unused contribution is never paid as cash (Art.8.3(g)). This is also why the PY2027 escalator benchmarks all three plans together.\nSource: MOU Art.8.1 p.14 and Art.8.3(c) p.16", "tc_ltd": "0 $/mo\nNo City-paid LTD/STD; disability is employee-paid deduction\nSource: MOU Art.8.1(c) p.14", "tc_life": "1 $/mo\n$15,000 City-paid term life (premium cost)\nSource: City Total Comp Study; MOU Art.8.6 p.18", "tc_ssMed": "1.45% % base\nMedicare only, no Social Security (safety)\nSource: MOU (silent); safety", "tc_pers": "13.5% % earnable\nPEPRA Safety Fire member rate (2.7%@57, = 50% of total normal cost). Effective 7/1/2027.\nSource: CalPERS June 30, 2025 actuarial valuation, rate plan 25568", "agency": "IAFF Local 522 — Sacramento City Fire\n\nSuccessor MOU recovered 11/10/2026: City of Sacramento Fire Department Unit Labor Agreement 2025–2028. The 2023–24 MOU and its 2024 extension both expired 10/3/2025; everything below is from the successor.\n\nRaises (Art.6.1):\n2025: +3.0% (eff 10/4/2025 — in base)\n2026: +3.0% (eff 10/3/2026 — in base; base check: $40.726384 × 1.03 × 1.03 = $43.206621/hr)\n2027: +3.5% (eff 10/2/2027 — CONTESTED. Settled contractually, but it takes effect about a month AFTER the 9/1/2027 Total Compensation Study survey date. Defaulted ON at 3.5% and left editable; the cell is flagged red so the timing argument is visible. ON = 2.66% needed, OFF = 2.45%.)\n\nAlso from the successor MOU: medical EE+2 or more rises to $2,230/mo for plan year 2026 plus up to $50 for 2027 (Art.8.3(b)); the mandatory employee MERP contribution doubles from $75 to $150/mo effective the pay period beginning 8/8/2026 (Art.8.9(b)–(c)); still no City MERP contribution (Art.8.9(f)).", "tc_medical": "2280 $/mo\nSuccessor MOU (Fire Department Unit 2025-2028) Art.8.3(b) sets the employee-plus-two-or-more contribution at $2,230/mo for plan year 2026. For plan year 2027 Art.8.3(b)(5) adds 50% of the first $100 of the cumulative premium increase, capped at $50/mo, measured across the benchmarked $25 Kaiser HMO + Delta Dental PPO + VSP basic vision plans combined. $2,280 is the PY2027 ceiling; if the combined increase comes in under $100 the true figure is between $2,230 and $2,280. Note the same $50 cap applies to every coverage tier. The prior $2,026 was the Dec 30 2023 figure from the expired 2023-24 MOU.\nSource: City of Sacramento Fire Department Unit Labor Agreement 2025-2028, Art.8.3(b)(4)-(5)"}};
export const COLUMN_NOTES = { medicalFamily:"Medical = City contribution for the family/EE+2 tier (2027 CalPERS rates where applicable).", tc_medical:"Medical = City contribution for the family/EE+2 tier (2027 CalPERS rates where applicable)." };
// ---- Rank comparison computed from Verification tab inputs ----
// Shared fields come strictly from verifyData (blank if not entered). Rank fields
// (base $/hr, medic, education, special ops, longevity) come from rankInputs.
function _numRaw(x){ if(x===undefined||x===null||x==="") return null; const n=parseFloat(String(x).replace(/[^0-9.\-]/g,"")); return isNaN(n)?null:n; }
function _rankStruct(nativeObj, rawStr){ // rank incentive entered in the agency's native unit
  const n=_numRaw(rawStr); if(n===null) return {z:1};
  if(nativeObj&&nativeObj.pct!==undefined) return (nativeObj.flat!==undefined)?{pct:n/100,flat:nativeObj.flat}:{pct:n/100};
  if(nativeObj&&nativeObj.flat!==undefined) return {flat:n};
  return {pct:n/100}; // default to % when native has none
}
function _sharedStruct(nativeObj, n){ if(n===null) return {z:1};
  if(nativeObj&&nativeObj.pct!==undefined) return (nativeObj.flat!==undefined)?{pct:n/100,flat:nativeObj.flat}:{pct:n/100};
  if(nativeObj&&nativeObj.flat!==undefined) return {flat:n};
  return {flat:n};
}
function _holidayStruct(nativeH, n){ if(n===null) return {z:1};
  if(nativeH&&nativeH.pctEFGH!==undefined) return {pctEFGH:n/100};
  if(nativeH&&nativeH.pct!==undefined) return (nativeH.hrs!==undefined)?{pct:n/100,hrs:nativeH.hrs}:{pct:n/100};
  return {hrs:n};
}
// tc_deferred and tc_other are NOT in this list: both can differ by rank (Vacaville pays
// Fire Captains 2% deferred vs 1% for everyone else, and its $100/mo C.E. pay skips Captain
// entirely), so they come from RANK_INCENTIVES with the Verification tab as the fallback.
const _VERIFY_TO_NATIVE={tc_uniforms:"unif",tc_holiday:"holiday",tc_vacation:"vaca",tc_sick:"sick",
  tc_eeRHS:"eeRHS",tc_cityRHS:"cityRHS",tc_medical:"med",tc_dv:"dv",tc_ltd:"ltd",tc_life:"life",
  tc_ssMed:"ss",tc_pers:"pers",tc_deferred:"deferred",tc_other:"other"};
const RANK_SHARED_KEYS=["tc_uniforms","tc_holiday","tc_vacation","tc_sick","tc_eeRHS","tc_cityRHS","tc_medical","tc_dv","tc_ltd","tc_life","tc_ssMed","tc_pers"];
export function buildRankComparison(rank, verifyData={}, rankInputs={}, agenciesOn=null, raises={}, opts={}){
  const ri=(rankInputs&&rankInputs[rank])||{};
  // Classic PERS mode replaces every agency's EMPLOYEE PERS rate with a flat figure.
  // It overrides the Verification tab on this one field only, by design - the whole point
  // is to ask "what does this rank look like for a Classic member", and the Verification
  // tab holds PEPRA rates. Rocklin's cityPERS cost-share is left alone (see CLASSIC_PERS).
  const _classic = !!(opts && opts.classic);
  // Roseville only: true means the member was hired on or after 1/1/2017, so their
  // service pay is the Art. IX Service Term Bonus and is NOT pensionable.
  const _post2017 = !!(opts && opts.post2017);
  const missingBy={};
  const _roseRatio=ROSE_RANK_RATIO[rank]||null;
  const ds=DATA.map(a=>{
    const inp=ri[a.name]||{}; const vr=verifyData[a.name]||{};
    const g=(k)=>_numRaw(vr[k]);
    // Roseville: derive from its own UNRAISED Firefighter base x the MOU ratio, then let the
    // raise machinery below escalate it like any other agency. Deriving from the raised base
    // instead would double-apply whatever is typed in the raise editor.
    const _derived=(a.highlight && _roseRatio!==null);
    const bh=_numRaw(inp.base);
    const B=_derived ? a.base*_roseRatio : ((bh===null)?0:bh*a.hrs/12);
    const ssRaw=g("tc_ssMed"), persRaw=g("tc_pers");
    const miss=[];
    // Only flag what has no value anywhere. Shared fields now fall back to the sourced
    // figure, so they are never "missing"; what matters is an unfilled RANK field.
    RANK_SHARED_KEYS.forEach(k=>{ if(g(k)===null && _VERIFY_TO_NATIVE[k]!==undefined && a[_VERIFY_TO_NATIVE[k]]===undefined) miss.push(k); });
    if(bh===null && !_derived) miss.push("base");
    ["medic","ed","special","longevity"].forEach(k=>{ if(_numRaw(inp[k])===null) miss.push(k); });
    if(_numRaw(inp.deferred)===null && g("tc_deferred")===null) miss.push("deferred");
    if(_numRaw(inp.other)===null && g("tc_other")===null) miss.push("other");
    missingBy[a.name]=miss;
    // Shared benefit fields: the Verification tab wins when it holds a value, otherwise
    // fall back to the agency's own SOURCED figure. Before this fallback existed, a browser
    // with an empty Verification tab silently zeroed medical, PERS, holiday and the rest on
    // these tabs - which read as a plausible but badly wrong total rather than as an error.
    const holiday=(g("tc_holiday")!==null)?_holidayStruct(a.holiday, g("tc_holiday")):a.holiday;
    return {
      // Raise fields are INHERITED from the agency record so the City 55% tab's raise editor
      // drives this tab too: settled agencies keep their locked 2027 value, unsettled ones take
      // whatever is typed, comparison agencies' 2028 raises stay excluded by raisedMonthly, and
      // Roseville's 2028 LMA lever flows straight through to its derived rank base.
      ...a, base:B,
      medic:_rankStruct(a.medic, inp.medic),
      ed:_rankStruct(a.ed, inp.ed),
      special:_rankStruct(a.special, inp.special),
      longev:_rankStruct(a.longev, inp.longevity),
      // Rank value wins; Verification tab is the fallback so nothing silently reads zero.
      deferred:(()=>{ const rv=_numRaw(inp.deferred); if(rv!==null) return _sharedStruct(a.deferred, rv);
                      const vv=g("tc_deferred"); return (vv!==null)?_sharedStruct(a.deferred, vv):a.deferred; })(),
      other:(()=>{ const rv=_numRaw(inp.other); if(rv!==null) return rv;
                   const vv=g("tc_other"); return (vv!==null)?vv:a.other; })(),
      unif:(g("tc_uniforms")===null?a.unif:g("tc_uniforms")),
      holiday, vaca:(g("tc_vacation")===null?a.vaca:g("tc_vacation")), sick:(g("tc_sick")===null?a.sick:g("tc_sick")),
      eeRHS:(g("tc_eeRHS")!==null?_sharedStruct(a.eeRHS, g("tc_eeRHS")):a.eeRHS), cityRHS:(g("tc_cityRHS")===null?a.cityRHS:g("tc_cityRHS")),
      med:(g("tc_medical")===null?a.med:g("tc_medical")), dv:(g("tc_dv")===null?a.dv:g("tc_dv")),
      ltd:(g("tc_ltd")===null?a.ltd:g("tc_ltd")), life:(g("tc_life")===null?a.life:g("tc_life")),
      ss:(ssRaw===null?a.ss:(ssRaw/100-0.0145)),
      // Uniform is pensionable only for Classic members, so this follows the Classic button.
      _pensUnifEligible: _classic,
      _pensOther: (PENSIONABLE_OTHER[a.name]!==undefined ? PENSIONABLE_OTHER[a.name] : 0),
      _pensNoLongevity: (_post2017 && HIRE_DATE_AGENCIES.indexOf(a.name)!==-1),
      pers: _classic ? (CLASSIC_PERS[a.name]!==undefined ? CLASSIC_PERS[a.name] : a.pers)
                     : (persRaw===null?a.pers:persRaw/100),
      // Rocklin only: its Classic 12% already contains the 3% cost-share, so the separate
      // cityPERS line must drop out in Classic mode or it is charged twice.
      cityPERS: (_classic && CLASSIC_PERS_NO_CITYPERS.indexOf(a.name)!==-1) ? 0 : a.cityPERS,
    };
  });
  const rows=buildTrueComp(raises||{},{},null,{},agenciesOn, ds);
  rows.forEach(r=>{ if(r&&!r.isPercentile) r._missing=missingBy[r.name]||[]; });
  return rows;
}
// ---- Verification tab live computation: overlay verify entries on sourced data ----
function _verifiedAgency(a, vr){
  const g=(k)=>_numRaw(vr[k]); const has=(k)=>vr[k]!==undefined&&vr[k]!=="";
  return { ...a,
    ed: has("tc_ed")?_rankStruct(a.ed, vr.tc_ed):a.ed,
    special: has("tc_special")?_rankStruct(a.special, vr.tc_special):a.special,
    longev: has("tc_longevity")?_rankStruct(a.longev, vr.tc_longevity):a.longev,
    deferred: has("tc_deferred")?_sharedStruct(a.deferred, g("tc_deferred")):a.deferred,
    other: has("tc_other")?g("tc_other"):a.other,
    unif: has("tc_uniforms")?g("tc_uniforms"):a.unif,
    holiday: has("tc_holiday")?_holidayStruct(a.holiday, g("tc_holiday")):a.holiday,
    vaca: has("tc_vacation")?g("tc_vacation"):a.vaca,
    sick: has("tc_sick")?g("tc_sick"):a.sick,
    eeRHS: has("tc_eeRHS")?_sharedStruct(a.eeRHS, g("tc_eeRHS")):a.eeRHS,
    cityRHS: has("tc_cityRHS")?g("tc_cityRHS"):a.cityRHS,
    med: has("tc_medical")?g("tc_medical"):a.med,
    dv: has("tc_dv")?g("tc_dv"):a.dv,
    ltd: has("tc_ltd")?g("tc_ltd"):a.ltd,
    life: has("tc_life")?g("tc_life"):a.life,
    ss: has("tc_ssMed")?(g("tc_ssMed")/100-0.0145):a.ss,
    pers: has("tc_pers")?(g("tc_pers")/100):a.pers,
  };
}
// The single dataset every tab should run on, so a Verification correction reaches the
// City 55%, True 55% and rank tabs alike. Where a Verification cell is empty the agency's
// own sourced figure is used, so an unfilled tracker changes nothing.
export function verifiedDataset(verifyData={}, opts={}){
  const post2017=!!(opts&&opts.post2017);
  return DATA.map(a=>{
    const v=_verifiedAgency(a, verifyData[a.name]||{});
    if(post2017 && HIRE_DATE_AGENCIES.indexOf(a.name)!==-1) v._pensNoLongevity=true;
    return v;
  });
}
// Which figures differ between the Verification tracker and the sourced DATA array.
// Surfaced on the tabs so a divergence can never sit there unnoticed.
export const _DIFF_LABEL={med:"Medical",dv:"Dental/Vision",ltd:"LTD",life:"Life",unif:"Uniforms /yr",
  vaca:"Vacation hrs",sick:"Sick hrs",cityRHS:"City RHS",other:"Other Pay",pers:"PERS rate",ss:"Social Security",
  ed:"Education",special:"Special Ops",longev:"Longevity",deferred:"Deferred",eeRHS:"Employee RHS",holiday:"Holiday"};
export function verifiedDiff(verifyData={}){
  const out=[];
  const num=(x)=>{ if(x==null) return null;
    if(typeof x==="number") return x;
    if(typeof x==="object"){ if(x.z!==undefined) return 0;
      return (x.pct!==undefined?x.pct:0)*1e6 + (x.flat!==undefined?x.flat:0) + (x.hrs!==undefined?x.hrs:0)
           + (x.pctEFGH!==undefined?x.pctEFGH*1e6:0); }
    return null; };
  DATA.forEach(a=>{ const v=_verifiedAgency(a, verifyData[a.name]||{});
    Object.keys(_DIFF_LABEL).forEach(k=>{
      const A=num(a[k]), B=num(v[k]);
      if(A!==null && B!==null && Math.abs(A-B)>0.005)
        out.push({agency:a.shortName, name:a.name, field:k, label:_DIFF_LABEL[k],
                  sourced:a[k], verified:v[k], isRose:!!a.highlight});
    });
  });
  return out;
}
// What the Verification corrections are actually worth: the City-method and True-method
// raise with the sourced data versus with the verified data, so the move is attributable.
export function verifiedImpact(verifyData={}, agenciesOn=null){
  const srcd=DATA;
  const verd=DATA.map(a=>_verifiedAgency(a, verifyData[a.name]||{}));
  const solve=(ds)=>{
    const cityRows=buildAgencies({"City of Roseville":{operationalPct:0.05}}, agenciesOn, ds);
    const trueRows=buildTrueComp({},{},null,{},agenciesOn, ds);
    const roseA=ds.find(a=>a.highlight);
    const cityPct=(cityRows.find(r=>r.isPercentile)||{}).monthlyGross;
    const truePct=(trueRows.find(r=>r.isPercentile)||{}).tc_monthlyGross;
    const sv=(fn,target)=>{ if(target==null) return null; let lo=-0.5,hi=2.0;
      for(let i=0;i<60;i++){const mid=(lo+hi)/2; (fn(mid)<target)?lo=mid:hi=mid;} return r2((lo+hi)/2*100); };
    return { city: sv(r=>computeCity(roseA,{_solveRaise:r, operationalPct:0.05}).monthlyGross, cityPct),
             true_: sv(r=>computeTrue(roseA,{_solveRaise:r},{}).tc_monthlyGross, truePct) };
  };
  const A=solve(srcd), B=solve(verd);
  return { sourcedCity:A.city, verifiedCity:B.city, sourcedTrue:A.true_, verifiedTrue:B.true_ };
}
export function verifiedSummary(verifyData={}, agenciesOn=null){
  const ds=DATA.map(a=>_verifiedAgency(a, verifyData[a.name]||{}));
  const trueRows=buildTrueComp({},{},null,{},agenciesOn, ds);
  const cityRows=buildAgencies({"City of Roseville":{operationalPct:0.05}}, agenciesOn, ds);
  const roseA=ds.find(a=>a.highlight);
  const truePct=(trueRows.find(r=>r.isPercentile)||{}).tc_monthlyGross;
  const cityPct=(cityRows.find(r=>r.isPercentile)||{}).monthlyGross;
  const roseTrue=(trueRows.find(r=>r.highlight)||{}).tc_monthlyGross;
  const roseCity=(cityRows.find(r=>r.highlight)||{}).monthlyGross;
  const solve=(fn,target)=>{ if(target==null) return null; let lo=-0.5,hi=2.0; for(let i=0;i<60;i++){const mid=(lo+hi)/2; (fn(mid)<target)?lo=mid:hi=mid;} return r2((lo+hi)/2*100); };
  const trueRaise=solve(r=>computeTrue(roseA,{_solveRaise:r},{}).tc_monthlyGross, truePct);
  const cityRaise=solve(r=>computeCity(roseA,{_solveRaise:r, operationalPct:0.05}).monthlyGross, cityPct);
  const trueTotals=Object.fromEntries(trueRows.filter(r=>!r.isPercentile).map(r=>[r.name, r.tc_monthlyGross]));
  const cityTotals=Object.fromEntries(cityRows.filter(r=>!r.isPercentile).map(r=>[r.name, r.monthlyGross]));
  return { truePct, cityPct, roseTrue, roseCity, trueRaise, cityRaise, trueTotals, cityTotals };
}
// ---- Auto-generated "raises + how the box is calculated" note addendum (base-salary row) ----
const RAISE_DESC = {
  "City of Roseville": "2026 +6.5% (eff 3/21/2026, in base) · 2027 +0% · 2028 = LMA adjustment (the raise you solve for) · 2029 +1.75% (reference; after survey)",
  "City of Vacaville": "2026 +2.0% (eff ~Nov 1 2026, in base) · 2027 +0% (MOU expires 10/2027)   [verify Nov-2026 date]",
  "Sacramento Metro Fire": "Current schedule; prior side-letters folded into base. MOU 2023–24 expired — no modeled raise.   [UNSETTLED]",
  "City of Fairfield": "2024 +6.0% (in base) · 2025+ TBD (MOU ended 6/30/2025)   [UNSETTLED]",
  "Cosumnes CSD": "2026 +6.0% (eff 7/1/2026, in base) · 2027+ TBD (MOU ends 6/30/2027)   [UNSETTLED]",
  "El Dorado Hills Fire": "2026 +8.94% (eff 7/1/2026, in base) · 2027 +3% (eff 7/1/2027, COUNTED) · 2028 +4% (eff 7/1/2028, EXCLUDED — after survey)   [verify 7/1/2027]",
  "City of Folsom": "2025 +2.5% · 2026 +2.5% (eff 7/1/2026, in base) · 2027 +2.5% (eff 7/1/2027, COUNTED)   [verify 7/1/2027]",
  "City of Rocklin": "2025 +2.0% · 2026 +2.0% (eff 7/2026, in base) · 2027 +2.0% (eff date UNCONFIRMED, COUNTED)   [VERIFY DATE]",
  "City of Sacramento": "2025 +3.0% (eff 10/4/2025, in base) · 2026 +3.0% (eff 10/3/2026, in base) · 2027 +3.5% (eff 10/2/2027 — CONTESTED: lands after the 9/1/2027 survey date; defaulted ON, editable, flagged red)",
};
export const RAISE_CALC = (function(){
  const money=(v)=>"$"+v.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
  const out={};
  DATA.forEach(a=>{
    const {m:B}=raisedMonthly(a,{}); const E=medicMonthly(a,B); const hourly=B*12/a.hrs;
    const r27=a.r27lock?a.r27:a.r27;
    let calc="Base "+money(a.base)+"/mo (schedule, incl. 2026 raise)";
    if(r27) calc+=" × "+(1+r27).toFixed(4)+" (2027 +"+r2(r27*100)+"%)";
    calc+=" = "+money(B)+"/mo";
    const m=a.medic;
    if(m.z!==undefined) calc+="; medic already in base → FF+Medic "+money(E)+"/mo";
    else if(m.pct!==undefined&&m.flat!==undefined) calc+=" + "+money(m.flat)+" & ×"+(1+m.pct)+" medic → FF+Medic "+money(E)+"/mo";
    else if(m.pct!==undefined) calc+=" × "+(1+m.pct)+" (+"+r2(m.pct*100)+"% medic) → FF+Medic "+money(E)+"/mo";
    else if(m.flat!==undefined) calc+=" + "+money(m.flat)+" medic → FF+Medic "+money(E)+"/mo";
    calc+=".\nTop-step hourly = "+money(B)+" × 12 ÷ "+a.hrs+" = $"+(hourly).toFixed(2)+"/hr.";
    out[a.name]="RAISES (effective dates — verify each):\n"+(RAISE_DESC[a.name]||"—")+"\n\nHOW THE BOX IS CALCULATED:\n"+calc;
  });
  return out;
})();

// ── VERIFIED ROSEVILLE FIGURES, derived (not hardcoded) ───────────────────────
// Single source of truth for the presentation tabs (Cost of Employee, OT Savings,
// Total % 4yr). Everything here is computed from the same DATA record the City 55%
// and True 55% comparisons use, so those tabs can no longer drift away from the
// verified dataset. Items genuinely outside this file - the CalPERS EMPLOYER rate
// and workers' comp - stay in the component and are labelled there.
export const ROSEVILLE_VERIFIED = (function(){
  const a = DATA.find(x=>x.highlight);
  const {m:B} = raisedMonthly(a,{});
  const E = medicMonthly(a,B);
  const pct = (d)=> (d && d.pct!==undefined) ? d.pct : 0;
  return {
    name:a.name, hrs:a.hrs,
    baseMonthly:r2(B), baseAnnual:r2(B*12), hourly:B*12/a.hrs,
    ffMedicMonthly:r2(E),
    edPct:pct(a.ed), specialPct:pct(a.special), longevPct:pct(a.longev), deferredPct:pct(a.deferred),
    medicalMonthly:a.med, dvMonthly:a.dv, ltdMonthly:a.ltd, lifeMonthly:a.life,
    medicarePct:0.0145+a.ss, uniformAnnual:a.unif,
    holidayHrs:(a.holiday&&a.holiday.hrs!==undefined)?a.holiday.hrs:null,
    vacationHrs:a.vaca, sickHrs:a.sick,
    eeRHSPct:pct(a.eeRHS), cityRHSMonthly:a.cityRHS, persEEPct:a.pers,
  };
})();

// ── OPEN ITEMS REGISTER ───────────────────────────────────────────────────────
// Standing record of everything identified in the 11/10/2026 third-pass audit that
// was deliberately NOT changed. Rendered at the bottom of the site. Kinds:
//   decision = a methodology call that is ours to make
//   data     = a figure we believe is wrong or unverifiable
//   doc      = a source document we do not have
//   omission = something real that no field currently captures
export const OPEN_ITEMS = [
  {kind:"unverified", impact:"0.01 pt", title:"Fairfield medical $2,010 is unverified",
   detail:"The figure appears nowhere in the Fairfield MOU - the only four-digit dollar amount in the whole document is $1,000. Art.10.A sets an escalator only: the City contribution moves by 50% of the change in the Kaiser $35-copay premium, with no coverage tiers and no base amount stated. The anchor predates the agreement and is never reproduced in it, so neither $2,000 nor $2,010 can be confirmed or refuted from the document. $2,010 is carried by standing decision and left flagged; it is worth 0.011 points on True 55% and $0.00 on City 55%. The escalator is symmetric ('increase or decrease'), so trending upward by default is not what the clause says - if this is ever challenged, $2,000 is the more defensible figure. Resolving it needs the pre-2017 predecessor MOU for the anchor plus the Kaiser/Delta premium tables. This MOU expired 6/30/2025 and Fairfield remains out of contract."},
  { kind:"decision", impact:"+0.71 pt", title:"City model credits only Roseville's specialty pay",
    detail:"computeCity derives specialty from an operationalPct override passed for Roseville alone (5%); it never reads each agency's own special field, so Vacaville 5%, Sac Metro 7%, Fairfield 5%, Sac City 5% and Folsom $600/mo are all counted as zero. The True model handles this correctly. Making computeCity symmetric raises the 55th percentile $80.49 and the City ask from 2.45% to roughly 3.2%. COUNTER-RISK: it also legitimises the \u201cmaximum available\u201d reading, under which Roseville's own three stackable programs (Hazmat, Rescue, Fire Investigation \u2014 5% each, no cross-program cap in Ch.2 Art.VI E\u2013G) could be scored at 10\u201315%, which puts Roseville above the 55th percentile and zeroes the ask entirely." },
  { kind:"decision", impact:"~0.1 pt", title:"Cosumnes mandatory 4.5%-of-base OPEB not counted",
    detail:"Cosumnes Appendix C Sec.II requires employees to contribute 3% of base (Side Letter 2018-04) plus 1.5% effective 7/1/2021 = 4.5%, mandatory and pre-tax, to an irrevocable retiree-medical trust. That is \u2212$475.88/mo against the \u2212$50/mo carried. Held at $50 to mirror the City Total Compensation Study, which has omitted it in two consecutive studies. Note Roseville's own mandatory 5% RHS contribution IS counted as a negative, so the treatment is not like-for-like, and \u201cEmployee Contributions Towards RHSA\u201d is a named element of the binding study methodology. Exposure fell from ~2.2 pts to ~0.1 pt once Cosumnes left the percentile bracket." },
  { kind:"decision", impact:"structural", title:"Appendix \u201cB\u201d names 11 survey agencies; the tool runs 8",
    detail:"MOU Appendix \u201cB\u201d (printed p.45) lists City of Sacramento, Davis, Fairfield, Folsom, Lodi, Rocklin, Sacramento Metro, Vacaville, West Sacramento, El Dorado Hills and Cosumnes, and Ch.5 Art.I twice binds the comparison to that list. Davis, Lodi and West Sacramento are excluded here on the basis that they have no Firefighter/Paramedic classification. Defensible, but it is the easiest structural challenge available to the City: with 8 comparables the 55th percentile interpolates at position 3.85 (85% of the way from #4 to #5); with 11 it would sit at 5.5, squarely between #6 and #7." },
  { kind:"decision", impact:"valuation", title:"Holiday and vacation cash-outs are valued at the wrong rate for some agencies",
    detail:"Sac City Art.9.3(a) caps holiday accrual at 24 hours and force-cashes the remaining ~132.8 hrs at \u201cbase rate of pay plus applicable incentives identified in Article 15\u201d \u2014 roughly base +29.5% for a top-step FF/Paramedic. Art.17.2(l) uses the same incentive-inclusive rate for vacation in-lieu. The engine values holiday at the FF+Medic hourly rate, understating Sac City by about $166/mo. Several MOUs also expressly report holiday pay to CalPERS as special compensation (Roseville Ch.3 Art.II C; Folsom Art.VII \u00a72) while the PERS base here is FF+Medic + education + specialty + longevity only." },
  { kind:"data", impact:"unverifiable", title:"Fairfield medical $2,000 and dental/vision $50 \u2014 both held RED",
    detail:"Fairfield Art.10.A states only an escalator (50% of the increase in the Kaiser $35 copay plan premium, and a 50/50 split on Kaiser plus Delta Dental HMO going forward) applied to an anchor contribution that predates the agreement and is never reproduced in it. There are no coverage tiers and no base dollar amount anywhere in the MOU, so no absolute figure for any year is computable from it. Neither $2,000 nor the alternative $2,010 can be confirmed or refuted. The escalator is also symmetric (\u201cincrease or decrease\u201d). Dental/vision has the further problem that the stored $50 contradicts the $111 + $14 = $125 recorded in its own note." },
  { kind:"data", impact:"low", title:"Rocklin medical is capped at the employee+1 tier, not family",
    detail:"Rocklin Sec.III Art.1.C.5 caps the total City contribution at \u201c100% of the Kaiser plan at the employee plus one coverage level,\u201d and states it \u201cnever exceeds the Kaiser employee +1 tier premium.\u201d A family enrollee pays the balance. Every other agency in the comparison is scored at a family-tier contribution, so Rocklin is the one genuine tier mismatch. Separately, from plan year 2027 the City pays only 80% of premium increases, so this figure must not be trended forward at full premium." },
  { kind:"data", impact:"low", title:"Payroll-tax and benefit-premium figures are inferences, not MOU terms",
    detail:"No MOU in the set states a Medicare or Social Security rate. Folsom's 7.65% rests entirely on Art.IV \u00a710, whose full text is \u201cThe City agrees to reopen and negotiate the direction of funds, should the City withdraw from Social Security\u201d \u2014 a withdrawal reopener implies participation but never states it, and it is a live reopener, so the 6.2% is not locked for the term. Dental/vision, LTD and life premiums across all nine agencies come from the City Total Compensation Study; the MOUs confirm the obligations (100% of premium, face amounts) but almost never state a dollar." },
  { kind:"doc", impact:"high", title:"Eight of nine top-step rates rest on salary schedules not on file",
    detail:"Only Rocklin's schedule is held (Firefighter Step 10 $117,164 eff. 7/12/2025, verified exactly). Roseville's MOU contains no wage table at all and Folsom's Appendix A \u201cSalary Schedule\u201d (p.65) is a blank placeholder. Base pay drives every percentage field on the sheet, so these are the highest-leverage unverified inputs in the model." },
  { kind:"doc", impact:"medium", title:"Fairfield and Sac Metro are both out of contract",
    detail:"Fairfield's MOU ran 7/1/2022\u20136/30/2025 with no evergreen or holdover clause and no successor on file; its last contractual increase was +6.0% in July 2024. Sac Metro's ran 1/1/2023\u201312/31/2024. Both are modelled as unsettled. Also note both Sac Metro PDFs in the LMA Docs folder are single-page webpage screenshots containing no MOU body \u2014 Art.16.A was read from the District's published PDF instead." },
  { kind:"omission", impact:"against us", title:"Roseville's own LTD is carried at $0",
    detail:"Long-Term Disability Insurance is a named element of the binding Total Compensation Study methodology, and the Roseville MOU twice confirms a City LTD contribution for this unit (Ch.7 Art.XVIII D and Ch.7 Art.XX E). No premium amount appears in the MOU, so the figure must come from the City's study. Carrying $0 understates Roseville's own total compensation in a 55th-percentile comparison. Also uncaptured: the 1959 Survivor Benefit at Ch.5 Art.I C \u2014 City +$3.00/mo and a mandatory employee \u2212$2.00/mo." },
  { kind:"decision", impact:"0.21 pt", title:"Sac City's 2027 raise lands after the survey date \u2014 counted anyway, flagged",
    detail:"The recovered successor MOU (Fire Department Unit 2025\u20132028, Art.6.1) sets +3.0% on 10/4/2025, +3.0% on 10/3/2026 and +3.5% on 10/2/2027. The first two are already inside the stored base. The 10/2/2027 increase falls about a month AFTER the 9/1/2027 Total Compensation Study data date, which is why Folsom, Rocklin and El Dorado Hills (July 2027 raises) are counted and this one is arguable. DECIDED: counted by default at 3.5% so the comparison reflects Sac City\u2019s real settled wage, with the cell flagged red and editable so the timing argument can be modelled either way. ON = 2.66% needed, OFF = 2.45%. The swing is only 0.21 of a point, so this is not worth spending credibility on if the City pushes back." },
  { kind:"data", impact:"blocks the tabs", title:"Rank tabs: base pay now verified, but incentives are NOT",
    detail:"Engineer and Captain base pay was verified 11/10/2026 against all nine published salary schedules and pinned to the 9/1/2027 survey date. Six of nine agencies were stale by one or two raises, and the Roseville engineer rate was $32.45 - 28% BELOW the firefighter rate - against an actual $46.4842 on Schedule B. Base pay is now sound. What is NOT verified is the rank-specific incentives, and almost every agency pays paramedic differently by rank: Sac Metro FF 9.30% / Eng 7.9% / Capt 6.5%; Sac City 10% / 8.5% / 7.5%; Folsom 10% / 6% / 5%; Cosumnes $550 + 1.0% for firefighters but 0.5% for engineers and captains; Roseville Engineer 5% and Captain 4-5% both TERMINATE 1/9/2027 in exchange for the rank separation; Vacaville captain deferred comp is 2% not 1%; Roseville\u2019s 10% Chief Fire Officer education incentive is CAPTAINS ONLY so the captain education max is not the firefighter\u2019s 15%. These were picked up incidentally while auditing the firefighter sheet and need the same three-pass verification. Also unresolved: several agencies have Engineer/Paramedic and Captain/Paramedic as separate classes from plain Engineer and Captain, so the like-for-like question that took a week to settle on the firefighter sheet has to be settled again per rank. BC tab is blocked outright - Roseville battalion chiefs are not in the RFF schedule, so there is no baseline row." },
  { kind:"omission", impact:"caution", title:"The percentile is fragile by construction",
    detail:"With 8 comparables the 55th percentile interpolates at position 0.55 \u00d7 7 = 3.85, i.e. 85% of the way from the 4th-ranked agency to the 5th. The answer is therefore dominated by whichever single agency occupies the #5 slot, and a single agency crossing that boundary moves the required raise by a full point or more. Current bracket: Folsom $13,833.25 \u2192 Sac Metro $14,508.25. Any figure quoted from this tool should name the two bracket agencies alongside it." },
];

export const VERIFIED_LOCKED = {
  "City of Roseville": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "City of Vacaville": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "Sacramento Metro Fire": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "Cosumnes CSD": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "El Dorado Hills Fire": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "City of Fairfield": ["tc_cityRHS","tc_deferred","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "City of Folsom": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "City of Sacramento": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"],
  "City of Rocklin": ["tc_cityRHS","tc_deferred","tc_dv","tc_ed","tc_eeRHS","tc_ffMedicMonthly","tc_holiday","tc_life","tc_longevity","tc_ltd","tc_medical","tc_other","tc_pers","tc_sick","tc_special","tc_ssMed","tc_topStepHrly","tc_uniforms","tc_vacation"]
};
export const AGENCIES = buildAgencies();

// ─────────────────────────────────────────────────────────────────────────────
// FLSA LEAVE TREATMENT — nine Sacramento-region agencies
// Reproduced from "Does Paid Leave Count Toward FLSA Overtime?" (IAFF Local 1592,
// November 2026). CONFIDENTIAL. Content is faithful to that document; nothing has
// been added, re-derived or re-verified here.
// ─────────────────────────────────────────────────────────────────────────────
export const FLSA_LEAVE = {
  title: "Does Paid Leave Count Toward FLSA Overtime?",
  sub: "Whether leave hours count toward the 182-hour threshold in a 24-day work period · nine Sacramento-region agencies · November 2026",
  confidential: "CONFIDENTIAL — IAFF LOCAL 1592",
  types: ["Vacation", "Sick", "Holiday", "CTO", "Union", "Jury", "Work Comp"],
  groups: [
    { label: "Leave counts — members keep full credit", tone: "good", rows: [
      { a: "Rocklin",          c: ["y","y","y","y","y","y","y"] },
      { a: "Sac Metro",        c: ["y","y","y","y","y","y","y"] },
      { a: "El Dorado Hills",  c: ["y","y","y","y","y","y","y"] },
      { a: "Vacaville",        c: ["y","y","y","y","y","y","y"] },
      { a: "Fairfield",        c: ["y","y","y","y","y","y","y"] },
    ]},
    { label: "Leave counts, with exceptions", tone: "mid", rows: [
      { a: "Sacramento City",  c: ["y","n","y","y","y","y","y"] },
      { a: "Cosumnes",         c: ["y","y","n","n","y","y","n"] },
    ]},
    { label: "Leave does not count — members lose credit", tone: "bad", rows: [
      { a: "Folsom",           c: ["n","n","-","n","n","n","n"] },
      { a: "ROSEVILLE",        c: ["n","n","n","n","n","n","n"], rsv: true },
    ]},
  ],
  matrixNote: "El Dorado Hills and Folsom holiday and CTO: EDH shift staff are shown as protected across the board because their holiday is paid as cash every pay period and there is no shift CTO program — there is no leave of that type to lose. Folsom's holiday works the same way, which is why it is the one cell in Folsom's row that is not an exclusion.",
  mou: [
    { a: "Rocklin", cite: "Sec. II Art. 5.A.1 — the simplest language in the region:",
      q: "All time with the exception of overtime, will be used to reach the one hundred eighty-two (182) hour ceiling." },
    { a: "Sac Metro", cite: "Art. 13.B, with Art. 13.E protecting sick leave specifically:",
      q: "all paid leave will be considered ‘hours worked’ for purposes of determining overtime owed under this Agreement." },
    { a: "El Dorado Hills", cite: "— **no hours-worked clause at all**, and it does not need one.",
      after: "Art. VII.F.4 pays the premium for the **ten scheduled overtime hours** built into the 48/96 schedule **every pay period**, regardless of any leave taken, and Art. VII.F.5 adds an unconditional FLSA true-up. Holiday is 130 hours of cash spread across every paycheck (Art. X.A) and there is no shift CTO program, so no leave of any type can erode a member's position." },
    { a: "Vacaville", cite: "§5.3 — but note this names *contractual* overtime; its FLSA treatment is silent:",
      q: "Paid time off shall be counted as hours worked for contractual overtime calculation purposes." },
    { a: "Sacramento City", cite: "§12.5(b) — everything except sick leave:",
      q: "All paid time shall count as time worked for purposes of calculating overtime with the exception of sick leave." },
    { a: "Cosumnes", cite: "§5.1.2(b) — a named list, and the omissions matter. Holiday, CTO and workers' comp are deliberately left out:",
      q: "Full-paid absences covered by the following leaves... shall count as ‘time worked’ for FLSA purposes: Sick Leave (7.1); Bereavement Leave (7.2); Employee Organizational Leave (7.3); Jury Duty Leave (7.4); Emergency Leave (7.10); New Child Leave (7.11) and Vacation Leave (8)." },
    { a: "Fairfield", cite: "Art. 2.E.1 makes overtime purely schedule-based — *“all time worked other than regularly scheduled hours”* — so leave never reduces the rate on an extra shift. Fairfield also beats us on all three of the other levers:",
      q: "the regular hourly rate for cash payment of overtime will be an individual unit member's standard hourly rate plus any premium pays identified in this MOU for which a unit member receives, and as set forth in the Fair Labor Standards Act.",
      qcite: "Art. 2.E.5",
      after: "Art. 2.E.1 makes overtime schedule-based — *“all time worked other than regularly scheduled hours”* — so leave never reduces the rate on an extra shift. Art. 2.E.4 allows a **480-hour** CTO bank for 56-hour personnel, cashable on 30 days' request. Art. 9.A pays **6.4% of actual salary plus educational incentive** as holiday pay every two weeks, plus 24 floating holiday hours a year. Art. 8.A confirms a **2,912-hour payroll basis**." },
    { a: "Folsom", cite: "Art. V §1.B — blanket, no carve-outs:",
      q: "It is understood that leave time taken by an employee shall continue to not be counted as time worked for FLSA purposes." },
    { a: "Roseville", cite: "Ch. 2 Art. II.E — the only MOU that names the leaves one by one:", rsv: true,
      q: "Fair Labor Standards Act (FLSA) computations (for 24 day work cycle) will not include holiday, sick leave, compensatory time off (CTO), vacation and/or floating holidays as time worked.",
      after: "Three more exclusions sit elsewhere: workers' comp, LWOP, suspension and short weeks (Art. II.F.4); jury duty (Ch. 3 Art. IV.A); and union bank hours, which also lose **retirement** credit (Ch. 7 Art. IV.D.4)." },
  ],
  rateIntro: "Separate from the threshold question: when overtime *is* owed, what rate is it calculated on? Roseville is near the bottom here too.",
  rates: [
    { a: "Rocklin",         r: "base rate **plus any special forms of compensation**" },
    { a: "Folsom",          r: "straight time rate **including all compensation regularly and routinely received**" },
    { a: "Cosumnes",        r: "base salary **plus educational incentives and paramedic/EMT stipends**" },
    { a: "Fairfield",       r: "standard hourly rate **plus any premium pays in the MOU, “as set forth in the Fair Labor Standards Act”**" },
    { a: "Sacramento City", r: "“regular rate of pay”" },
    { a: "Vacaville",       r: "“regular rate of pay”" },
    { a: "El Dorado Hills", r: "**base hourly rate only**" },
    { a: "ROSEVILLE",       r: "**base hourly rate only**", rsv: true },
  ],
  closers: [
    { tone: "bad", body: [
      "**Folsom applies the same rule we do — and that is the whole comparison.** Folsom and Roseville are the only two agencies that exclude every category of leave from FLSA hours worked.",
      "But Folsom pays its members for it. Their overtime rate sweeps in all regularly received compensation, where ours is base only. And they receive **6.0% holiday-in-lieu** every pay period, pensionable. Roseville gets neither.",
      "Roseville also goes further than Folsom in two ways: our exclusions are spread across **four separate articles** covering nine categories, and ours is the **only MOU of the nine** that strips **retirement** credit as well as overtime credit.",
    ]},
    { tone: "plain", body: [
      "**Say this part carefully.** Under the FLSA itself, no paid leave counts as hours worked — that is the federal floor. Roseville is not breaking any rule, and neither is Folsom. The argument is not legal, it is comparative:",
      "**Seven of the eight comparable agencies protect their members above the federal floor. Only Folsom shares our position — and Folsom pays for it elsewhere.**",
    ]},
    { tone: "plain", body: [
      "**Three levers, not one.** Whether leave counts toward 182 is only the first. The other two are what overtime is *paid at*, and how much comp time a member can bank. Roseville is at or near the bottom of all three:",
      "**Rate:** base hourly only — where Rocklin, Folsom, Cosumnes and Fairfield all build incentives in. **CTO cap:** 144 hours — where Fairfield and Cosumnes both allow **480**, the federal maximum for public safety. **Holiday:** Fairfield pays 6.4% of actual salary *plus educational incentive*; Folsom 6.0%; El Dorado Hills 130 hours a year.",
      "An agency can be silent on the threshold question and still treat its members better than we do. Fairfield is the proof.",
    ]},
  ],
  sourcing: "Most entries are quoted from contract language; the Fairfield row reflects RFF leadership's knowledge of that agency's administration. Every provision read in the source MOU; sections and verbatim language recorded in “FLSA Hours Worked — Leave Treatment.md” in the Comparable LMA Docs folder. Sac Metro read from the District's published MOU online — page citations and its side letter to 6/30/2026 still outstanding. No side letters on file for any agency. Fairfield's MOU expired in 2025.",
  caveat: "Document text only. None of this shows how payroll actually codes these hours at any agency, including ours.",
};

// ─────────────────────────────────────────────────────────────────────────────
// RFF TIME BANK & OVERTIME — E-Board brief
// Reproduced from "RFF Time Bank & Overtime — Where We Stand" (prepared for the
// E-Board meeting, November 2026). CONFIDENTIAL — RFF EXECUTIVE BOARD.
// Content is faithful to that document; nothing has been added or re-verified here.
// ─────────────────────────────────────────────────────────────────────────────
export const TIMEBANK_BRIEF = {
  title: "RFF Time Bank & Overtime — Where We Stand",
  sub: "Prepared for the E-Board meeting · November 2026 · Sources: RFF MOU 2026–29, eight comparable agency MOUs, City HR correspondence",
  confidential: "CONFIDENTIAL — RFF EXECUTIVE BOARD",
  sections: [
    { n: "1", h: "Bottom line", blocks: [
      { t: "callout", tone: "bad", title: "The issue", body: [
        "For at least seven years — and the City cannot say how much longer — a member who used RFF Time Bank hours and then worked an extra shift in the same pay period was paid **time and a half** on that extra shift. The City now says that was an error, and that those hours should never have counted toward overtime." ]},
      { t: "p", x: "**Nothing is signed.** The City has offered a side letter. It would restore the overtime — and **invoice RFF for the cost of it**, with the City's own contribution capped at 100 hours a year." },
      { t: "p", x: "The City has also announced it will apply the same correction to **workers' compensation leave, jury duty, leave without pay, suspension, and short weeks worked by new employees**. That part has no stated effective date and does not appear to depend on RFF signing anything." },
    ]},
    { n: "2", h: "The history", blocks: [
      { t: "table", head: ["Period", "Payroll system", "How Time Bank hours were treated", "Basis"], rows: [
        ["2012 → June 2019", "Prior system", "Counted as time worked — extra shift paid at 1.5×", "RFF POSITION"],
        ["Before July 2019", "Prior system", "Same treatment; City cannot identify a start date", "CITY ADMITS"],
        ["July 2019 → today", "Current system", "Same treatment, carried through the migration", "CITY ADMITS"],
      ]},
      { t: "p", x: "The City's Human Resources Director put the key fact in writing:" },
      { t: "quote", q: "Further research by Jana did not confirm that these inadvertent overpayments started with the last admin change. It went further back into the prior payroll system, so prior to July 2019.", cite: "Stacey Peterson, HR Director, email to Brett" },
      { t: "p", x: "**Why that sentence matters.** A past-practice claim turns on whether a practice was longstanding and consistent. The City has now conceded both: the treatment survived a full payroll system migration, ran across multiple administrations, and they cannot date its beginning. It also predates every current member of HR, the City Council, and the City Manager's office." },
      { t: "callout", tone: "gold", title: "Be precise on the date", body: [
        "The **2012** start date is RFF's position, supported by member recollection — it is **not yet documented**. What the City has admitted in writing is “prior to July 2019” and “further back into the prior payroll system.” Our records request reaches back to 2010 and is still outstanding.",
        "Until those records are in hand, the E-Board and anyone speaking publicly should say **“at least seven years, across two payroll systems, with no start date the City can identify.”** That statement is fully supported by the City's own email. Asserting 2012 before we can prove it risks our credibility on the one element we are strongest on." ]},
    ]},
    { n: "3", h: "How we got here", blocks: [
      { t: "ol", items: [
        "**RFF raised a narrow question.** We argued Union Business Leave should count as time worked for FLSA overtime, because it was not listed among the leaves the MOU expressly says do not count.",
        "**The City answered with something broader and worse.** Their position: UBL should not count for either FLSA or contract overtime.",
        "**We conceded the FLSA point** in our September 9, 2026 letter. That concession was correct — under federal law no paid leave counts as “hours worked,” so silence in the MOU defaults against us. It was the weaker of our two arguments and it cost little to give up.",
        "**The City then widened the review** to workers' comp, jury duty, LWOP, suspension and short weeks — and stated it will correct all of them.",
      ]},
      { t: "callout", tone: "bad", title: "The honest assessment", body: [
        "We asked a question about one leave category and triggered a rollback across six. The exposure was always in the contract; raising the issue is what caused the City to look. That is worth understanding before we decide what to do next, because the same dynamic applies to every move from here." ]},
    ]},
    { n: "4", h: "What the City is offering — and what it costs", blocks: [
      { t: "h3", x: "The offer" },
      { t: "ul", items: [
        "Side letter making Time Bank hours count toward **contract** overtime (FLSA stays excluded)",
        "RFF **reimburses the City** the additional overtime cost out of the Time Bank; if the bank is short, RFF pays cash within 30 days of invoice",
        "City contributes **up to 100 hours per year** to the Time Bank",
        "City will not pursue recovery of past overpayments",
        "New pay code and programming, possibly ready January 2027",
      ]},
      { t: "h3", x: "The price — two redline edits" },
      { t: "p", x: "These are the real cost of the deal, and they are presented as housekeeping." },
      { t: "table", head: ["Proposed edit", "What it actually does"], rows: [
        ["Add **“and over scheduled shifts per pay period”** to the overtime trigger in Ch. 2, Art. II, Sec. B",
         "Writes a per-pay-period hours threshold into the contract. **No such threshold exists today.** Overtime currently triggers per shift (“Over twenty-four hours per shift”), and contract OT is defined as “all extra shift assignments.” That per-shift structure is the reason the leave exclusions have nothing to bite on. This edit gives them teeth."],
        ["Add the cross-reference **“(See Chapter 7, Article IV. D. ...)”** into the overtime exclusion list",
         "Today the union-leave sentence sits in the Union Activities article, between two sentences about tax liability — which is the heart of our ambiguity argument. This edit relocates it into the overtime article, where it becomes unambiguous by design."],
      ]},
      { t: "p", x: "Together these do not merely settle union leave. They convert ambiguous language into clear language for **every leave on that list, permanently** — and clear language is exactly what defeats a past-practice claim. The side letter also asks RFF to stipulate that all of those leaves were “excluded...based on the historical and current MOU provisions.” **That stipulation is the forfeiture.**" },
      { t: "callout", tone: "good", title: "One claim we checked and should not contest", body: [
        "Adding “jury duty leave” to the consolidated list looks like new language. It is not. Chapter 3, Article IV.A already states: “Jury duty is not considered time worked for overtime purposes.” Consolidating it is accurate. Challenging it would put us wrong on the record." ]},
      { t: "h3", x: "The economics do not work — using the City's own numbers" },
      { t: "table", head: ["Year", "Hours available", "Hours used", "Year-end balance", "Utilization"], num: [1,2,3,4], rows: [
        ["2025", "955.25", "962.75", "−7.50", "100.8%"],
        ["2026 (partial)", "808", "641", "167", "79.3%"],
      ]},
      { t: "p", x: "In 2025 we **overspent the bank**. Roughly 116 members donated 8 hours each. Now layer a reimbursement obligation on a bank that is already fully consumed:" },
      { t: "table", head: ["If this share of UBL hours coincides with an extra shift", "Premium RFF owes", "Shortfall after the City's 100 hrs"], num: [1,2], rows: [
        ["25%", "120 hrs", "55 hrs"],
        ["50%", "241 hrs", "175 hrs"],
        ["100%", "481 hrs", "416 hrs"],
      ]},
      { t: "p", x: "**Every scenario is a shortfall**, payable in cash within 30 days of invoice. The City's 100-hour contribution equals **10.4%** of our 2025 usage. The City's exposure is capped; **ours is not.**" },
      { t: "p", x: "Net effect: our members are made whole, **RFF pays for it**, and the practical result is either writing checks to the City or cutting union activity — which is the participation problem Trevor raised in the first place." },
    ]},
    { n: "5", h: "How every other department handles this", blocks: [
      { t: "p", x: "All eight comparable MOUs read in full. **Not one charges the union for the overtime differential on union leave.**" },
      { t: "table", head: ["Agency", "Employer-funded hours/yr", "Union billed for OT cost?", "Leave counts as time worked?"], rows: [
        ["Sacramento City", "4,000", "No", "Yes — all paid time except sick leave"],
        ["Sac Metro", "2,000 (+1,500)", "No", "Yes — all paid leave, contract OT"],
        ["El Dorado Hills", "500", "No", "Silent"],
        ["Rocklin", "120", "No", "Yes — all paid status counts to the 182-hr ceiling"],
        ["Cosumnes", "Uncapped", "No", "Yes — union leave named expressly for FLSA"],
        ["Folsom", "Uncapped", "No", "No for FLSA; contract OT unaffected"],
        ["Vacaville", "0", "No", "Yes — all paid time off, contract OT"],
        ["Fairfield", "0", "No", "Silent"],
        ["**ROSEVILLE (City position)**", "**0 → offer of 100**", "**Yes — proposed**", "**No**"],
      ], rsvRow: 8 },
      { t: "callout", tone: "good", title: "Sac Metro is the model — and the on-point precedent", body: [
        "**Two separate accounts.** Art. 4.F: the District provides **2,000 hours per calendar year** for Union Leave, plus **1,500 additional hours** annually if a Metro member holds the Local 522 President seat. Art. 4.G: unused hours **roll over**, with accrual capped at **5,000 hours**. Art. 4.H lets the Union buy more hours if it wants them, and lets members donate vacation — but those donations sit in a separate account on top of the District's 2,000 hours.",
        "In Roseville, member donations **are** the entire program. There is no District-funded account at all.",
        "**And Art. 13.B is the language we should be asking for:** “all paid leave will be considered ‘hours worked’ for purposes of determining overtime owed under this Agreement.” That is a blanket inclusion, and it governs contract overtime — which is precisely the fight we are in. Twenty miles away, bargaining with the same IAFF local number, the opposite rule applies." ]},
      { t: "callout", tone: "gold", title: "Two Sac Metro details to state carefully", body: [
        "The **Day assignment** (40-hour administrative schedule) in Art. 4 is offered to the Metro Union **Vice President**, not the President, and it is an option — if the Union waives it, the District provides the 2,000 hours instead. Metro's own MOU labels two consecutive subsections “F,” so the relationship between the Day assignment and the hour totals is ambiguous in their document.",
        "**Backfill by promotion and overtime eligibility for a released officer appear nowhere in the MOU.** Art. 31 fills on-duty Captain and Engineer vacancies from promotional lists in rank order, but that is general shift staffing, not a union-leave term. If Metro does those things, it is by practice — so we should not assert them as contract terms." ]},
      { t: "p", x: "**Roseville is last in the region.** We are one of only three agencies whose employer funds zero union leave hours — and the other two, Vacaville and Fairfield, at least do not bill their unions for the overtime. Our members cap out at 8 donated hours each per year, and ours is the **only MOU of the nine** that strips those hours of overtime and retirement credit by name." },
      { t: "p", x: "**Two models for the fix.** Sac Metro Art. 13.B is the closest to our dispute: all paid leave counts as hours worked for contract overtime, full stop. Cosumnes names union leave in an express inclusion list — “Employee Organizational Leave” counts as time worked — which is the model for the FLSA side. Both districts fund the leave themselves." },
    ]},
    { n: "6", h: "Recommendations", blocks: [
      { t: "ol", items: [
        "**Do not sign the two redline edits.** They are the entire cost of this deal and they are permanent. Everything else is negotiable; these are not.",
        "**Do not stipulate that the practice was error.** Agreeing those leaves were “always excluded” forfeits the past-practice claim across all six categories, not just union leave.",
        "**Demand the co-occurrence data before pricing anything.** How many work periods in each of the last seven years did a member use Time Bank hours and work an extra shift, and what was the dollar differential? We cannot agree to an uncapped obligation we have never measured. The City must have run this to propose a reimbursement scheme.",
        "**Pin down the implementation date in writing** for the correction to workers' comp, jury duty, LWOP, suspension and short weeks. It has no stated effective date and does not appear contingent on the side letter. If the City implements unilaterally, that triggers our demand to bargain — and a filing clock.",
        "**Counter-propose: if contract OT counts, the City funds it.** That is what all eight comparables effectively do. If the City insists on reimbursement, the obligation must be capped at the same 100 hours they are capping themselves at.",
        "**Keep the two tracks separate.** FLSA inclusion is a bargaining proposal for the next cycle, using Sac Metro or Cosumnes language verbatim. Contract overtime is the fight now — that is where the structure favors us.",
        "**Audit our own records first.** When the 2010-forward records arrive, hunt for the instances that hurt us before the City finds them. A past-practice case is judged by its weakest instances. Scattered exceptions read as noise; a cluster in one year reads as a change point.",
        "**Get counsel on past practice and filing deadlines** before we respond. The textual analysis here is solid enough to brief an attorney with; it is not a substitute for one.",
      ]},
    ]},
    { n: "7", h: "What we still do not know", blocks: [
      { t: "ul", items: [
        "**Records request back to 2010 — outstanding.** This is what converts “at least seven years” into a documented start date.",
        "**Co-occurrence counts and dollar value — never provided.** Without it the reimbursement obligation cannot be priced.",
        "**Whether the City has already started correcting the other leaves**, or when it intends to.",
        "**Sac Metro figures need page citations.** The provisions above are from the District's own published MOU and the substance is solid, but they were read online rather than from a downloaded copy, so we do not yet have section-and-page citations in the form the City will demand.",
        "**Sac Metro's side letter extending to June 30, 2026 — body not yet read.** If Metro changed Art. 4 or Art. 13 when they extended, that is where it happened.",
        "**No side letters on file for any comparable agency.** Overtime computation is a common side-letter subject, so some of the comparison above may be incomplete.",
        "**How these hours were coded historically** — a dedicated pay code is far harder for the City to call an accident than a generic overtime code.",
      ]},
    ]},
  ],
  sourcing: "Every MOU provision cited here was read in the source document and is recorded with section and page in the extraction files held in the Comparable LMA Docs folder. Bank utilization figures are the City's own, as reported by HR. Items marked RFF POSITION are not yet documented.",
  caveat: "Not legal advice. Past-practice doctrine and administrative filing deadlines are legal questions for RFF's counsel.",
};

// ─────────────────────────────────────────────────────────────────────────────
// RETIREE MEDICAL — nine Sacramento-region agencies
// Read from the source MOUs on 2026-11-11. Every figure below is quoted or
// paraphrased from the contract named in `cite`. Nothing is computed.
// Sac Metro is the one agency NOT read from the local MOU collection: both local
// files are saved web-viewer pages rather than PDFs, so it was read from the
// District's own published MOU at metrofire.ca.gov.
// ─────────────────────────────────────────────────────────────────────────────
export const RETIREE_MEDICAL = {
  title: "What Each Agency Gives You For Medical When You Retire",
  sub: "Employer contribution toward retiree health · nine Sacramento-region agencies · every hire-date tier · read from the source MOUs 11/11/2026",
  confidential: "CONFIDENTIAL — IAFF LOCAL 1592",

  pemhca: "Every CalPERS agency must pay a statutory minimum toward an eligible retiree's medical premium — the PEMHCA minimum employer contribution under Government Code §22892. For 2026 that is $162.00 per month; for 2027, $167.00. Where a row below says “PEMHCA minimum only,” that is the floor every agency already has to pay, not a negotiated benefit.",

  // ── per-agency detail, every tier ──────────────────────────────────────────
  agencies: [
    { a: "City of Roseville", rsv: true, cite: "RFF MOU 2026–2029, Ch. 4 Art. II",
      lead: "Four tiers. The City's baseline maximum monthly contribution for each eligible retiree equals the PEMHCA minimum; everything above that is the tier benefit.",
      tiers: [
        { t: "Tier 1 — hired before 1/1/2004", b: "Up to **$1,200/mo**, with a **2% annual escalator** each January 1 (since 1/1/13).", v: "None stated" },
        { t: "Tier 2 — hired 1/1/2004 to 12/31/2011", b: "Up to **$1,200/mo** + 2% annual escalator.", v: "Vesting ladder. 5 yrs Roseville service required; 10 yrs CalPERS-credited service to be eligible at all." },
        { t: "Tier 3 — hired on/after 1/1/2012", b: "**$720/mo** + 2% annual escalator. Must reach normal retirement age. Minimum 10 years of Roseville service for anything above the PEMHCA minimum. Employee pays 1% of base per year for the first 5 years, capping at **5% of base**.", v: "Vesting ladder" },
        { t: "Tier 4 — hired on/after 8/15/2015", b: "**No vested post-employment medical benefit of any kind.** Instead the employee contributes 1% of base at hire, rising 1%/yr to a **5% of base** maximum, into an RHS account. After 5 years of service the City adds **$100/mo** to that account until retirement or separation.", v: "N/A — nothing to vest in", bad: true },
      ],
      notes: ["Vesting ladder (Art. II E): 10 yrs = 50% of the City contribution, rising 5 points per year, 20+ yrs = 100%.",
              "Tier 3 and Tier 4 employee contributions are mandatory, irrevocable, and forfeited entirely if the employee leaves before vesting."] },

    { a: "Cosumnes CSD", cite: "Cosumnes MOU 2025–2027, Appendix C §II–III",
      lead: "The most generous of the nine — and the most expensive to the employee.",
      tiers: [
        { t: "Tier 2 — retiring on/after 1/1/2015", b: "District pays **100% of the applicable monthly rate minus a retiree share**: **$85** employee-only, **$175** employee + one, **$225** full family. At Medicare eligibility this converts to a reimbursement **capped at $600/mo**. Retirees who never qualify for Medicare keep the CalPERS Region 1 reimbursement.", v: "Hired on/after 7/1/2010: 5 yrs Cosumnes service to qualify, then the vesting ladder from 10 yrs" },
        { t: "Tier 1 — retired on/before 12/31/2014", b: "District pays the premium for the lowest-cost HMO (Kaiser or Blue Shield Access+), with a retiree share of **$0** employee-only / **$15** two-party or family.", v: "Same ladder for post-7/1/2010 hires" },
      ],
      notes: ["**Employees contribute 4.5% of base salary** to an irrevocable medical trust — 3% under Side Letter 2018-04 plus 1.5% effective 7/1/2021, in exchange for the District putting $2.4M/yr district-wide into the OPEB trust. Pre-tax.",
              "Must retire through CalPERS within 120 days of the last day worked.",
              "Vesting ladder: 10 yrs = 50%, rising 5 points per year, 20+ = 100%."] },

    { a: "El Dorado Hills Fire", cite: "EDH MOU 2026–2029, Art. IX.C",
      lead: "Retirees are held at the same contribution level as active employees.",
      tiers: [
        { t: "Hired before 3/1/2012", b: "Benefits in retirement **at the same level provided to current personnel**, as negotiated from time to time — whether or not the Department stays in CalPERS.", v: "None stated" },
        { t: "Hired after 2/29/2012", b: "Department contribution **at the same level as current employees**, defined by Government Code §22893. The active level is **100% of the fifth-highest cost plan in CalPERS Region 1** at the tier elected.", v: "Vesting ladder. Needs 5 yrs EDH CalPERS service AND 10 yrs total CalPERS service" },
      ],
      notes: ["Dental and vision continue into retirement at a maximum contribution level of employee + one. Hired on/after 10/1/2013 need 10 years of EDH CalPERS service for that.",
              "Vesting ladder: 10 yrs = 50%, rising 5 points per year, 20+ = 100%."] },

    { a: "Sacramento Metro Fire", cite: "Sac Metro / Local 522 MOU, Art. 16 — read from the District's published MOU, NOT from the local file", webonly: true,
      lead: "A percentage of premium rather than a flat dollar amount.",
      tiers: [
        { t: "All retirees, Basic or Combination plans", b: "District contributes **92% of the medical premium**. The retiree pays the remaining 8% plus anything above the cap. Effective 7/1/13.", v: "See hire-date rule below" },
        { t: "Medicare-eligible retirees", b: "District contributes **100%** of the third-highest plan in CalPERS Region 1 at the tier elected.", v: "Same" },
        { t: "Hired after 12/1/2011", b: "**5% credit per year toward retiree medical, reaching 100% at 20 years** of employment. Excludes service-connected disability retirements.", v: "5%/yr to 100% at 20 yrs" },
        { t: "Hired before 3/31/1986 and not Medicare-eligible", b: "District provides a stipend equal to 8% of the premium, up to the third-highest CalPERS Region 1 plan.", v: "—" },
      ],
      notes: ["Premium cap effective 1/1/14 is the **third-highest plan in CalPERS Region 1** at the selected tier.",
              "Art. 16.E: future retirees and survivors hold **a vested right to the maximum retiree health benefits provided as of July 1, 2013**.",
              "Retirees may buy dental and vision at their own cost — no District contribution."] },

    { a: "City of Rocklin", cite: "Rocklin MOU 2025–2028, Art. 5",
      lead: "A flat dollar cap with no vesting ladder at all — the only agency of the nine that rescinded one.",
      tiers: [
        { t: "Employed or retired as of 6/30/2025", b: "City contributes a maximum of **$1,200/mo** toward health insurance. **Eligible retirees receive 100% of the City's contribution** — there is no service-based reduction.", v: "**None.** The vesting schedule (Reso. 2003-91, GC §22983) was rescinded in the 2018 MOU" },
        { t: "Hired on/after 7/1/2025", b: "**Not yet negotiated.** The MOU states the retiree medical benefit for these employees “will be negotiated by the Parties immediately following the conclusion of the negotiation for the 2025 to 2028 Memorandum of Understanding.”", v: "Unknown", warn: true },
      ],
      notes: ["Eligibility: meet CalPERS retirement requirements and retire within 120 days of separation.",
              "In exchange for rescinding the vesting schedule, the benefit was made **permanent** — it continues beyond the term of any MOU for anyone retired or employed as of 6/30/2025."] },

    { a: "City of Vacaville", cite: "Vacaville FA MOU 2025–2027, §§11.7–11.8",
      lead: "The PEMHCA floor plus a small service-based stipend, backed by a funded savings account.",
      tiers: [
        { t: "Tier 3 — hired on/after 1/1/2020", b: "**PEMHCA minimum**, plus paid directly to the retiree when enrolled in a CalPERS plan: **$100/mo at 10–15 yrs**, **$150/mo at 15–20 yrs**, **$200/mo at 20+ yrs**. The minimum plus the City amount may not exceed 100% of the single-rate premium of the plan chosen.", v: "Service tiers at 10, 15, 20 yrs" },
        { t: "Tier 3 — “Bridge Gap” RHS while active", b: "Employer contribution rises with service: **$600/yr** (probation–yr 5), **$840/yr** (yr 5–7), **$960/yr** (yr 7–10), **$1,200/yr** (yr 10+). The employee matches at $600 / $720 / $840 / $960.", v: "Vests at 5 yrs. Leave earlier and the employee gets only their own contributions back" },
        { t: "Tiers 1 and 2 — hired before 1/1/2020", b: "Covered by City Resolutions 2019-117 and 2019-118 — **terms are not in the MOU and have not been read**.", v: "Unknown", warn: true },
      ],
      notes: ["OPEB trust: Tier 1 and Tier 2 employees contribute **$1,200/yr** ($46.15/pay period). **Tier 3 contributes nothing to the trust.**",
              "Employee trust contributions stop once the City's actuarial liability is fully funded."] },

    { a: "City of Folsom", cite: "Folsom MOU 2025–2028, §§12–13",
      lead: "A hard cutoff at May 8, 2007.",
      tiers: [
        { t: "Hired on/before 5/8/2007, retiring 7/1/2007 or later", b: "City contribution equals **the City's active-employee health contribution** for the matching tier: retiree only, retiree + one, or retiree + two or more until age 55 — after 55 that drops to the employee + one rate **plus $100**.", v: "Under 5 yrs service: nothing. Over 5 yrs: qualifies" },
        { t: "Cap on the above", b: "Frozen at the **1/1/2012** active-employee contribution, adjusted each January by CPI-W but **never more than 3% a year**.", v: "—" },
        { t: "Hired after 5/8/2007", b: "**$25 per pay period into an HRA** — $650/yr, about **$54.17/mo**. No vested retiree medical benefit.", v: "N/A", bad: true },
      ],
      notes: ["The City runs a bi-annual actuarial study of retiree health costs, and either party may reopen the MOU on health benefits.",
              "“Retire” means applying to CalPERS within 90 days of terminating City employment and receiving a CalPERS benefit."] },

    { a: "City of Sacramento", cite: "Sac City MOU 2023–2024, §§8.8–8.9",
      lead: "A defined package for legacy employees, and nothing at all for anyone hired this decade.",
      tiers: [
        { t: "Hired on/before 12/31/2019", b: "The total of: the **lowest-cost $25-copay medical plan for one**, the **lowest-cost PPO dental plan for one**, and **$25**.", v: "10–15 yrs = 50%, 15–20 yrs = 75%, 20+ yrs = 100%. Minimum age 50, or 30 yrs at any age" },
        { t: "Retired on/after 7/1/1992 and before 1/1/2020", b: "Same package **plus an additional 5.28%** of the medical cost.", v: "Same ladder" },
        { t: "Hired on/after 1/1/2020", b: "**“No employee hired on or after January 1, 2020, shall be eligible for any retiree insurance contributions provided by this Section.”** Nothing.", v: "N/A", bad: true },
        { t: "Industrial disability / line-of-duty death survivors", b: "**100%** of the City retiree insurance contribution regardless of years of service.", v: "None required" },
      ],
      notes: ["Must retire through CalPERS within 120 days of separation or lose eligibility and the right to enroll in any City plan.",
              "MERP: employees contribute **$75/mo** — both pre- and post-2020 hires. This is **employee** money, not a City contribution. (A successor MOU raising this to $150/mo effective 8/8/2026 was used elsewhere in this tool but is **not** in the local MOU folder.)",
              "The Fire OPEB Trust was closed to new contributions; the existing balance is being spent down on post-employment medical."] },

    { a: "City of Fairfield", cite: "Fairfield MOU 2022–2025, Art. 10 §§B and I",
      lead: "The only agency of the nine that contributes nothing toward a retiree's premium.",
      tiers: [
        { t: "All retirees", b: "**“Retirees are responsible for paying the full cost of the premium.”** Miss a payment and the retiree and all dependents are terminated from the program with no right to re-enroll. Once coverage ends it cannot be reinstated.", v: "N/A", bad: true },
        { t: "Retiree Medical Expense Program", b: "In place of a premium contribution, the City contributes **$75/mo per employee** to a MissionSquare Retiree Health Savings account. Tax-free, usable against any health premium or unreimbursed cost, and passes to a spouse or dependents at death.", v: "N/A" },
      ],
      notes: ["Retirees must enroll in a Medicare supplement at 65 or be terminated from the program. The Medicare premium is the retiree's own cost.",
              "Surviving spouses and dependents may continue only at their own cost under COBRA.",
              "Sick leave above 650 hours is converted each December at the regular hourly rate into the same RHS account.",
              "This MOU expired 6/30/2025 and Fairfield remains out of contract."] },
  ],

  // ── what a 2026 hire actually gets ─────────────────────────────────────────
  newHireIntro: "Every agency above has a legacy tier that is better than what it offers now. This is the only comparison that describes someone hired today — and it is the one that will describe most of the department within fifteen years.",
  newHire: [
    { a: "Cosumnes CSD", g: "Full premium less $85 / $175 / $225, vesting 10–20 yrs — but the employee pays 4.5% of base to get it", tone: "good" },
    { a: "El Dorado Hills", g: "100% of the fifth-highest CalPERS Region 1 plan, vesting 10–20 yrs", tone: "good" },
    { a: "Sac Metro", g: "92% of premium capped at the third-highest Region 1 plan; 5%/yr to 100% at 20 yrs", tone: "good" },
    { a: "City of Rocklin", g: "Unknown — deliberately left unnegotiated for anyone hired on/after 7/1/2025", tone: "warn" },
    { a: "City of Vacaville", g: "PEMHCA minimum + $100–$200/mo by service, plus an employer-funded RHS reaching $1,200/yr", tone: "mid" },
    { a: "ROSEVILLE", g: "Nothing vested. PEMHCA minimum + $100/mo into an RHS after 5 years of service", tone: "bad", rsv: true },
    { a: "City of Fairfield", g: "Nothing toward premium. $75/mo into an RHS", tone: "bad" },
    { a: "City of Folsom", g: "Nothing vested. $25/pay period into an HRA — about $54/mo", tone: "bad" },
    { a: "City of Sacramento", g: "Nothing. No employer contribution of any kind for post-2020 hires", tone: "bad" },
  ],

  closers: [
    { tone: "bad", body: [
      "**Four of the nine have closed the door on new hires — and we are one of them.** Roseville (8/15/2015), Folsom (5/8/2007), Sacramento City (1/1/2020) and Fairfield all give a modern hire no vested retiree medical. Rocklin has not decided yet.",
      "**But we are not the worst of that group.** Our $100/mo RHS after five years beats Fairfield's $75/mo and Folsom's $54/mo, and Sacramento City gives nothing at all. The honest statement is that Roseville sits in the bottom half for new hires, not at the bottom.",
    ]},
    { tone: "plain", body: [
      "**The gap that matters is against the districts, not the cities.** Cosumnes, El Dorado Hills and Sac Metro all still provide a real premium-based benefit to someone hired today, tied to a CalPERS Region 1 plan and vested over 10 to 20 years. All three are special districts. Every city in the comparison except Rocklin and Vacaville has moved to a savings-account model.",
      "Cosumnes is the one to read carefully before citing it. Their benefit is the best of the nine, and their employees pay **4.5% of base salary** for it — roughly $475 a month at top step. That is a trade, not a gift.",
    ]},
    { tone: "gold", body: [
      "**Three structural points worth making at a table.**",
      "**1. The vesting ladder is near-universal.** Roseville, Cosumnes, El Dorado Hills and Sac Metro all use the same shape — 50% at 10 years rising to 100% at 20. Rocklin is the outlier: it rescinded its ladder in 2018 and pays 100% to every eligible retiree.",
      "**2. The 120-day rule is near-universal too.** Roseville, Cosumnes, Rocklin and Sacramento City all require retiring through CalPERS within 120 days of separation. Folsom uses 90 days. Missing it forfeits the benefit entirely.",
      "**3. A savings account is not a substitute for a premium contribution, and should not be compared to one as if it were.** $100/mo into an RHS for 25 years is a finite pot. A percentage-of-premium benefit lasts as long as the retiree does and rises with medical inflation. The two are different kinds of promise.",
    ]},
  ],

  unknowns: [
    "**Vacaville Tiers 1 and 2.** Governed by City Resolutions 2019-117 and 2019-118, which are referenced by the MOU but not contained in it. Not read.",
    "**Rocklin post-7/1/2025 hires.** Deliberately unnegotiated. Whatever they settle on is the most directly comparable data point we will get.",
    "**Sac Metro page citations.** Read from the District's published MOU online. Both copies in the local MOU folder are saved web-viewer pages, not PDFs, so they extract no contract text at all — worth replacing. The side letter extending to 6/30/2026 has still not been read.",
    "**Fairfield is out of contract** — its MOU expired 6/30/2025, so the $75/mo RHS figure is from an expired agreement.",
    "**Sacramento City successor MOU** is not in the local folder. The §8.9 figures above are from the 2023–2024 agreement.",
    "**No agency's actual premium dollars were pulled.** “Third-highest” and “fifth-highest CalPERS Region 1 plan” are formulas, not amounts — converting them to dollars needs the current CalPERS Region 1 rate table.",
    "**Dental and vision in retirement** were only checked where the MOU raised them. This is a medical comparison.",
  ],

  sourcing: "Every provision was read in the source MOU in the Comparable LMA Docs folder on 11/11/2026, except Sacramento Metro Fire, which was read from the District's published MOU at metrofire.ca.gov because both local copies are saved web pages rather than PDFs. PEMHCA minimum figures are from the City of Roseville's published retiree PEMHCA page ($162.00/mo for 2026, $167.00/mo for 2027).",
  caveat: "Contract text only. None of this reflects how any agency actually administers these benefits, what the premiums cost in dollars, or what a given individual would receive. Eligibility turns on hire date, age, service credit and the 120-day retirement window — an individual member's answer requires their own dates.",
};

// ─────────────────────────────────────────────────────────────────────────────
// RETIREMENT VALUE ENGINE — pension + retiree medical, one monthly figure
// Researched 2026-11-11. Every constant below is sourced; see RETIRE_SOURCES.
// NOTHING here is estimated. Where a figure cannot be derived from a contract or
// a published rate table, the tier returns ok:false and is reported as unknown
// rather than guessed.
// ─────────────────────────────────────────────────────────────────────────────

// CalPERS local safety benefit factors, % of final comp per year of service.
// Source: CalPERS "Retirement Formulas and Benefit Factors" charts, read 11/11/2026.
export const PENSION_FACTORS = {
  "3@50":   { 50:3.000, 51:3.000, 52:3.000, 53:3.000, 54:3.000, 55:3.000, 56:3.000, 57:3.000, 58:3.000, 59:3.000, 60:3.000 },
  "3@55":   { 50:2.400, 51:2.520, 52:2.640, 53:2.760, 54:2.880, 55:3.000, 56:3.000, 57:3.000, 58:3.000, 59:3.000, 60:3.000 },
  "2@50":   { 50:2.000, 51:2.140, 52:2.280, 53:2.420, 54:2.560, 55:2.700, 56:2.700, 57:2.700, 58:2.700, 59:2.700, 60:2.700 },
  "2.7@57": { 50:2.000, 51:2.100, 52:2.200, 53:2.300, 54:2.400, 55:2.500, 56:2.600, 57:2.700, 58:2.700, 59:2.700, 60:2.700 },
};
export const PENSION_MIN_AGE = 50;

// PEPRA pensionable compensation cap. Source: CalPERS Circular Letter 200-001-26,
// "2026 Compensation Limits for Classic and PEPRA Members", effective 1/1/2026.
// 2027 limits were not published as of 11/11/2026, so 2026 figures are used.
export const PEPRA_CAP = { noSS: 191679, withSS: 159733, classic401a17: 360000, year: 2026 };

// CalPERS Region 1 Basic (non-Medicare) plans, 2027, Employee + 2 or more.
// Source: CalPERS "2027 Region 1 Health Premiums (Actives and Annuitants)".
// Ranked high to low — this is what "third-highest" and "fifth-highest" resolve to.
export const REGION1_2027_FAMILY = [
  { p: "PERS Platinum", v: 4624.41 },
  { p: "Anthem Traditional HMO", v: 4504.55 },
  { p: "Anthem Select HMO", v: 3864.74 },
  { p: "Blue Shield Access+ HMO", v: 3845.71 },
  { p: "Blue Shield EPO", v: 3845.71 },
  { p: "PERS Gold", v: 3159.44 },
  { p: "Blue Shield Trio HMO", v: 3126.68 },
  { p: "POdRAC", v: 3115.00 },
  { p: "Kaiser Permanente", v: 3087.84 },
  { p: "Sutter Health Plan", v: 2939.74 },
  { p: "Western Health Advantage HMO", v: 2680.08 },
];
export const PEMHCA_MIN = { 2026: 162.00, 2027: 167.00 };

// The standard 10-to-20-year ladder used by Roseville, Cosumnes and El Dorado Hills.
function ladder(y) { if (y < 10) return 0; if (y >= 20) return 1; return (50 + (y - 10) * 5) / 100; }
// Sac Metro: 5% credit per year of employment, 100% at 20 years.
function metroVest(y) { return Math.min(1, Math.max(0, y * 0.05)); }
// Sacramento City: 50% at 10, 75% at 15, 100% at 20.
function sacCityVest(y) { if (y < 10) return 0; if (y < 15) return 0.5; if (y < 20) return 0.75; return 1; }

// ── pension tiers by hire date ────────────────────────────────────────────────
// `from` is inclusive. Tiers are evaluated newest-first.
export const PENSION_TIERS = {
  "City of Roseville":     [{ from: 2013, f: "2.7@57", fc: "3-year (PEPRA)", lbl: "PEPRA" },
                            { from: 0,    f: "3@50",   fc: "not stated in MOU", lbl: "Classic" }],
  "City of Rocklin":       [{ from: 2013, f: "2.7@57", fc: "3-year (PEPRA)", lbl: "PEPRA" },
                            { from: 0,    f: "3@50",   fc: "One-Year (GC 20042)", lbl: "Classic" }],
  "City of Vacaville":     [{ from: 2013, f: "2.7@57", fc: "Three-Year (GC 20037)", lbl: "PEPRA" },
                            { from: 2012.67, f: "2@50", fc: "Three-Year (GC 20037)", lbl: "Classic, hired on/after 9/1/2012" },
                            { from: 0,    f: "3@50",   fc: "One-Year (GC 20042)", lbl: "Classic, hired before 9/1/2012" }],
  "City of Folsom":        [{ from: 2013, f: "2.7@57", fc: "36-month", lbl: "PEPRA" },
                            { from: 2011.8, f: "2@50", fc: "36-month", lbl: "Classic, hired on/after 10/17/2011" },
                            { from: 0,    f: "3@50",   fc: "single highest 12 months", lbl: "Classic, hired on/before 10/16/2011" }],
  "City of Fairfield":     [{ from: 2013, f: "2.7@57", fc: "Three-Year", lbl: "PEPRA (Tier 3)" },
                            { from: 2012.65, f: "3@55", fc: "Three-Year", lbl: "Classic Tier 2, hired on/after 8/26/2012" },
                            { from: 0,    f: "3@50",   fc: "Single highest year (GC 20042)", lbl: "Classic Tier 1, hired on/before 8/25/2012" }],
  "El Dorado Hills Fire":  [{ from: 2013, f: "2.7@57", fc: "Three-Year (GC 20037)", lbl: "PEPRA (Tier 3)" },
                            { from: 2012.91, f: "3@55", fc: "Three-Year (GC 20037)", lbl: "Classic Tier 2, hired after 11/27/2012" },
                            { from: 0,    f: "3@50",   fc: "One-Year (GC 20042)", lbl: "Classic Tier 1, hired on/before 11/27/2012" }],
  "Cosumnes CSD":          [{ from: 2013, f: "2.7@57", fc: "Three-Year", lbl: "PEPRA" },
                            { from: 0,    f: "3@50",   fc: "One-Year", lbl: "Classic" }],
  "Sacramento Metro Fire": [{ from: 2013, f: "2.7@57", fc: "not stated in MOU", lbl: "PEPRA" },
                            { from: 0,    f: "3@50",   fc: "not stated in MOU", lbl: "Classic Safety" }],
  "City of Sacramento":    [{ from: 2013, f: "2.7@57", fc: "36 consecutive months", lbl: "PEPRA (Tier IV)", modified: true },
                            { from: 0,    f: "3@55",   fc: "One-year highest", lbl: "Tiers I–III", modified: true, datesUnknown: true }],
};
// Folsom is the only agency in the comparison that pays Social Security, so its
// PEPRA members carry the lower pensionable-compensation cap.
export const SOCIAL_SECURITY_AGENCIES = ["City of Folsom"];

export function pensionTierFor(agency, hireYear) {
  const list = PENSION_TIERS[agency] || [];
  for (const t of list) if (hireYear >= t.from) return t;
  return list[list.length - 1] || null;
}

// ── retiree medical tiers by hire date ────────────────────────────────────────
// amt() returns { v, ok, basis }. ok:false means the dollar value is NOT derivable
// from the contract plus a published rate table, and must be reported as unknown.
const R1 = (n) => REGION1_2027_FAMILY[n - 1].v;   // nth-highest family premium

export const RETMED_TIERS = {
  "City of Roseville": [
    { from: 2015.62, lbl: "Tier 4 — hired on/after 8/15/2015", vest: null,
      amt: () => ({ v: 0, ok: true, basis: "No vested post-employment medical. The $100/mo City RHS contribution is paid while ACTIVE (after 5 yrs) and is not a retirement benefit." }) },
    { from: 2012, lbl: "Tier 3 — hired on/after 1/1/2012", vest: ladder,
      amt: () => ({ v: 720 * Math.pow(1.02, 14), ok: true, basis: "$720/mo base with a 2% annual escalator each 1/1 since 1/1/2013, carried to 2027 (MOU Ch.4 Art. II D). NOTE: the City's published retiree page lists maximums of $1,580 (2% Escalator Retirees) and $1,347 (MOU) for 2027, which could not be mapped to the four MOU tiers." }) },
    { from: 2004, lbl: "Tier 2 — hired 1/1/2004–12/31/2011", vest: ladder,
      amt: () => ({ v: 1580, ok: true, basis: "City's published 2027 maximum for 2% Escalator Retirees ($1,200 base + 2%/yr since 1/1/2013)." }) },
    { from: 0, lbl: "Tier 1 — hired before 1/1/2004", vest: null,
      amt: () => ({ v: 1580, ok: true, basis: "City's published 2027 maximum for 2% Escalator Retirees. No vesting schedule stated for this tier." }) },
  ],
  "City of Rocklin": [
    { from: 2025.5, lbl: "Hired on/after 7/1/2025", vest: null,
      amt: () => ({ v: null, ok: false, basis: "Deliberately unnegotiated. Art. 5: to be negotiated immediately following the 2025–2028 MOU." }) },
    { from: 0, lbl: "Employed or retired as of 6/30/2025", vest: null,
      amt: () => ({ v: 1200, ok: true, basis: "$1,200/mo maximum, 100% to every eligible retiree. Vesting schedule rescinded in the 2018 MOU." }) },
  ],
  "Cosumnes CSD": [
    { from: 0, lbl: "Tier 2 — retiring on/after 1/1/2015", vest: ladder, vestFrom: 2010.5,
      amt: () => ({ v: R1(9) - 225, ok: true, basis: "100% of the applicable monthly rate less the $225 full-family retiree share. Priced on Kaiser family 2027 ($3,087.84), the lowest-cost HMO named in their Tier 1 language — a richer plan choice raises this. Converts to a $600/mo cap at Medicare age." }) },
  ],
  "El Dorado Hills Fire": [
    { from: 0, lbl: "All tiers — same level as active employees", vest: ladder, vestFrom: 2012.91,
      amt: () => ({ v: R1(5), ok: true, basis: "100% of the fifth-highest CalPERS Region 1 plan, family tier, 2027 = $3,845.71 (Blue Shield EPO; tied with Blue Shield Access+ at rank 4–5)." }) },
  ],
  "Sacramento Metro Fire": [
    { from: 0, lbl: "All retirees, Basic or Combination plans", vest: metroVest, vestFrom: 2011.92,
      amt: () => ({ v: 0.92 * R1(3), ok: true, basis: "92% of premium, capped at the third-highest Region 1 plan, family tier, 2027 = Anthem Select $3,864.74. 100% of that cap once Medicare-eligible." }) },
  ],
  "City of Vacaville": [
    { from: 2020, lbl: "Tier 3 — hired on/after 1/1/2020", vest: null, svcStipend: true,
      amt: () => ({ v: PEMHCA_MIN[2027], ok: true, basis: "PEMHCA minimum ($167/mo in 2027) plus a direct service-based payment: $100/mo at 10–15 yrs, $150 at 15–20, $200 at 20+." }) },
    { from: 0, lbl: "Tiers 1 and 2 — hired before 1/1/2020", vest: null,
      amt: () => ({ v: null, ok: false, basis: "Governed by City Resolutions 2019-117 and 2019-118, which the MOU references but does not contain. Not read." }) },
  ],
  "City of Folsom": [
    { from: 2007.35, lbl: "Hired after 5/8/2007", vest: null,
      amt: () => ({ v: 0, ok: true, basis: "No vested retiree medical. The $25/pay-period HRA (about $54/mo) is paid while ACTIVE and is not a retirement benefit." }) },
    { from: 0, lbl: "Hired on/before 5/8/2007", vest: null,
      amt: () => ({ v: null, ok: false, basis: "Equals the City's active-employee contribution, capped at the 1/1/2012 level plus CPI (max 3%/yr). The 1/1/2012 base amount is not in the MOU." }) },
  ],
  "City of Sacramento": [
    { from: 2020, lbl: "Hired on/after 1/1/2020", vest: null,
      amt: () => ({ v: 0, ok: true, basis: "“No employee hired on or after January 1, 2020, shall be eligible for any retiree insurance contributions provided by this Section.”" }) },
    { from: 0, lbl: "Hired on/before 12/31/2019", vest: sacCityVest,
      amt: () => ({ v: null, ok: false, basis: "Lowest-cost $25-copay medical plan for one, plus lowest-cost PPO dental for one, plus $25. The $25-copay plan design is not identifiable in the CalPERS Region 1 rate table, so this cannot be priced." }) },
  ],
  "City of Fairfield": [
    { from: 0, lbl: "All retirees", vest: null,
      amt: () => ({ v: 0, ok: true, basis: "“Retirees are responsible for paying the full cost of the premium.” The $75/mo RHS contribution is paid while ACTIVE and is not a retirement benefit." }) },
  ],
};

export function retmedTierFor(agency, hireYear) {
  const list = RETMED_TIERS[agency] || [];
  for (const t of list) if (hireYear >= t.from) return t;
  return list[list.length - 1] || null;
}

// ── the combined figure ───────────────────────────────────────────────────────
export function retirementValue(agency, pensionableMonthly, opts) {
  const hireYear = opts.hireYear, years = opts.years, age = opts.age;
  const out = { notes: [] };

  const pt = pensionTierFor(agency, hireYear);
  const isPEPRA = pt && pt.f === "2.7@57";
  const tbl = PENSION_FACTORS[pt ? pt.f : "2.7@57"];
  const a = Math.max(PENSION_MIN_AGE, Math.min(60, age));
  const factor = (tbl[a] || 0) / 100;

  // PEPRA caps pensionable compensation; Classic is capped far higher by IRC 401(a)(17).
  let fc = pensionableMonthly || 0;
  let capped = false;
  if (isPEPRA) {
    const annual = SOCIAL_SECURITY_AGENCIES.indexOf(agency) !== -1 ? PEPRA_CAP.withSS : PEPRA_CAP.noSS;
    const cap = annual / 12;
    if (fc > cap) { fc = cap; capped = true; }
  }
  out.formula = pt ? pt.f : null;
  out.formulaLabel = pt ? pt.lbl : null;
  out.finalCompBasis = pt ? pt.fc : null;
  out.factor = factor;
  out.pensionable = pensionableMonthly || 0;
  out.cappedPensionable = fc;
  out.capped = capped;
  out.pension = factor * years * fc;
  if (capped) out.notes.push("Pensionable pay exceeds the PEPRA cap (" + (SOCIAL_SECURITY_AGENCIES.indexOf(agency) !== -1 ? "$159,733" : "$191,679") + "/yr, 2026 limits) — the pension is computed on the capped figure.");
  if (pt && pt.modified) out.notes.push("The MOU calls this a “Modified” formula, which in CalPERS usage means coordination with Social Security and a reduction to final compensation. This agency is carried elsewhere in the tool as paying no Social Security, so no reduction is applied here. Unresolved.");
  if (pt && pt.datesUnknown) out.notes.push("Hire-date boundaries for this agency's earlier tiers are not stated in the MOU.");
  if (pt && /not stated/.test(pt.fc || "")) out.notes.push("The final compensation averaging period is not stated in this agency's MOU.");

  const mt = retmedTierFor(agency, hireYear);
  out.medTierLabel = mt ? mt.lbl : null;
  if (!mt) { out.medical = null; out.medicalOk = false; }
  else {
    const r = mt.amt();
    out.medicalBasis = r.basis;
    if (!r.ok) { out.medical = null; out.medicalOk = false; out.notes.push(r.basis); }
    else {
      let v = r.v;
      // Vesting applies only where the tier carries a ladder AND the hire date falls
      // inside the window that made vesting a condition.
      if (mt.vest && (mt.vestFrom === undefined || hireYear >= mt.vestFrom)) {
        out.vestPct = mt.vest(years);
        v = v * out.vestPct;
      } else { out.vestPct = 1; }
      if (mt.svcStipend) {
        const st = years >= 20 ? 200 : years >= 15 ? 150 : years >= 10 ? 100 : 0;
        v += st; out.stipend = st;
      }
      out.medical = v; out.medicalOk = true;
    }
  }
  out.total = out.medicalOk ? out.pension + out.medical : null;
  return out;
}

export const RETIRE_SOURCES = [
  "Benefit factors: CalPERS “Retirement Formulas and Benefit Factors” charts for Local Safety 3%@50, 3%@55, 2%@50 and 2.7%@57, read 11/11/2026.",
  "PEPRA cap: CalPERS Circular Letter 200-001-26, 2026 limits — $191,679 without Social Security, $159,733 with. 2027 limits were not yet published.",
  "Premiums: CalPERS 2027 Region 1 Health Premiums (Actives and Annuitants), Employee + 2 or more.",
  "PEMHCA minimum: City of Roseville published retiree PEMHCA page — $162.00/mo for 2026, $167.00/mo for 2027.",
  "Retirement formulas and retiree medical terms: each agency's MOU in the Comparable LMA Docs folder, except Sacramento Metro Fire, read from the District's published MOU because both local copies are saved web pages.",
];

// ─────────────────────────────────────────────────────────────────────────────
// UNION BUSINESS LEAVE — how each agency funds it and whether it counts for FLSA
// Read from the source MOUs 2026-11-11. Sac Metro from the District's published
// MOU (both local copies are saved web pages). Appended to the FLSA Leave tab.
// ─────────────────────────────────────────────────────────────────────────────
export const UBL_TREATMENT = {
  intro: "The matrix above answers whether union leave counts toward the 182-hour FLSA threshold. It does not show who pays for the leave, how many hours exist, or whether the union is billed when a member uses them. Those are the terms actually in dispute in Roseville, so they are set out here.",
  cols: ["Agency", "Who funds the hours", "Hours per year", "Counts as time worked?", "Does the union pay?"],
  rows: [
    { a: "Cosumnes CSD", fund: "District", hrs: "Uncapped", fl: "y",
      flTxt: "**Yes, named expressly.** §5.1.2(b) lists “Employee Organizational Leave (7.3)” in the leaves that count as time worked for FLSA.", pay: "No" },
    { a: "Sac Metro", fund: "District", hrs: "2,000 (+1,500)", fl: "y",
      flTxt: "**Yes.** Art. 13.B: all paid leave counts as hours worked for contract overtime. No union-leave carve-out.", pay: "No" },
    { a: "Sacramento City", fund: "City", hrs: "4,000 pool", fl: "y",
      flTxt: "**Yes.** §12.5(b) counts all paid time except sick leave. Union leave is not carved out.",
      pay: "Only above 4,000", payWarn: true,
      payTxt: "§4.1(b)(5): if the Union exceeds the 4,000-hour pool it reimburses the City for the excess at **1.43 times** the employee's regular hourly rate." },
    { a: "El Dorado Hills", fund: "Department", hrs: "500", fl: "y",
      flTxt: "**Effectively yes.** No hours-worked clause, but Art. VII.F.4 pays the premium for the ten scheduled overtime hours every pay period regardless of leave taken, so union leave cannot erode a member's position.", pay: "No" },
    { a: "Rocklin", fund: "City", hrs: "120", fl: "y",
      flTxt: "**Yes.** Sec. II Art. 5.A.1: “all time with the exception of overtime” counts toward the 182-hour ceiling. Art. 1.B and 1.C add City-paid grievance and negotiation leave on top of the 120 hours.", pay: "No" },
    { a: "Folsom", fund: "City, plus a member-donated bank", hrs: "“Reasonable”, uncapped", fl: "n",
      flTxt: "**No for FLSA.** Art. V §1.B excludes all leave from FLSA hours worked. But union leave is **not** singled out, and contract overtime is unaffected.",
      pay: "No",
      payTxt: "Art. III §1: release time “without loss of compensation or benefits,” plus 30 minutes before and 15 after each meeting and travel time. §2's member-donated Union Bank is **in addition to** that City-paid time." },
    { a: "Vacaville", fund: "Members only", hrs: "Unlimited donation", fl: "y",
      flTxt: "**Yes for contract overtime.** §5.3: “Paid time off shall be counted as hours worked for contractual overtime calculation purposes.” FLSA treatment is silent.",
      pay: "Yes — backfill", payWarn: true,
      payTxt: "§15.2: donated hours convert to dollars, and “**a dollar amount shall be charged to the Union Bank at the hourly overtime cost of that employee's replacement.**” A member is always hired back to fill a union leave position regardless of staffing. Members may donate without limit." },
    { a: "Fairfield", fund: "Members only", hrs: "350 bank", fl: "y",
      flTxt: "**Not reduced.** Art. 2.E.1 makes overtime purely schedule-based — “all time worked other than regularly scheduled hours” — so leave of any kind never reduces the rate on an extra shift.",
      pay: "No",
      payTxt: "Art. 9 §E: a 350-hour annual bank funded by FPFA members at 0.25 hours per pay period (6.5 hrs/yr each). Two negotiating committee members get City-paid leave on top, and officers get unlimited shift trades." },
    { a: "ROSEVILLE", rsv: true, fund: "Members only", hrs: "8 hrs per member", fl: "n",
      flTxt: "**No — and uniquely, no retirement credit either.** Ch. 7 Art. IV.D.4: “Hours donated to association members shall not be considered time worked for **overtime, retirement, or any other benefit purpose**.”",
      pay: "Proposed — yes", payWarn: true,
      payTxt: "The City's offered side letter would make Time Bank hours count toward contract overtime, then invoice RFF for the additional overtime cost, with the City contributing up to 100 hours a year. Nothing is signed." },
  ],

  roseville: {
    title: "The Roseville sentence, in its actual setting",
    body: [
      "Ch. 7 Art. IV.D.4 reads in full: *“RFF members assume any tax liability for being assessed vacation or CTO hours and/or using Time Bank hours. Hours donated to association members shall not be considered time worked for overtime, retirement, or any other benefit purpose. However, any donated hours will be subject to applicable state and federal payroll taxes.”*",
      "The exclusion sits in the **Union Activities** article, sandwiched between two sentences about **tax liability** — not in the overtime article with the other FLSA exclusions. That placement is the whole of the ambiguity argument, and it is why the City's proposed cross-reference edit matters so much: moving it into the overtime article makes it unambiguous by design.",
      "Roseville's bank is also the smallest in the region by a wide margin: **8 donated hours per member per year**, carried over, with no City-funded account at all. Fairfield's members fund 6.5 hours each but into a 350-hour pooled bank; Vacaville's members may donate without limit.",
    ],
  },

  findings: [
    { tone: "bad", body: [
      "**Only two of the nine exclude union leave from FLSA hours worked — Roseville and Folsom.** Folsom excludes *all* leave by one blanket sentence and does not name union leave; contract overtime is unaffected and the City still funds the release time.",
      "**Roseville is the only MOU of the nine that strips retirement credit from these hours as well as overtime credit.** No other agency's union-leave provision mentions retirement at all.",
    ]},
    { tone: "gold", body: [
      "**Correction to an earlier claim, before someone else finds it.** The E-Board brief states that not one comparable agency charges the union for the overtime cost of union leave. Read strictly — about the premium on a member's *own* extra shift — that still holds. But two agencies do bill their unions in related circumstances, and both will be cited back at us:",
      "**Vacaville §15.2** charges the Union Bank the full **overtime cost of the replacement** every time a member takes union leave, and guarantees a hire-back regardless of staffing. **Sacramento City §4.1(b)(5)** charges the Union **1.43× regular rate** for any hours beyond the 4,000-hour pool.",
      "The defensible version of the claim is narrower: **no comparable agency bills its union for the overtime differential a member earns on a separate extra shift**, which is what the City's side letter proposes. Vacaville and Sacramento City charge for backfill or for hours beyond a City-funded pool — and in Sacramento City's case only after 4,000 free hours.",
    ]},
    { tone: "plain", body: [
      "**Seven of nine have an employer-funded account. Roseville has none.** Cosumnes uncapped, Sac City 4,000, Sac Metro 2,000 plus 1,500, EDH 500, Rocklin 120, Folsom “reasonable” release time, Fairfield City-paid negotiating leave on top of the member bank. Roseville's program is member donations and nothing else.",
      "**Two models for a fix.** Cosumnes §5.1.2(b) names union leave in an express FLSA inclusion list. Sac Metro Art. 13.B is a blanket inclusion for contract overtime. Both districts fund the leave themselves.",
    ]},
  ],

  unknowns: [
    "**Sac Metro's union-leave hours** (Art. 4.F–4.H) were read from the District's published MOU online, not from a local copy. Section-and-page citations are still outstanding, and the side letter extending to 6/30/2026 has not been read.",
    "**No side letters are on file for any comparable agency.** Overtime computation and release time are common side-letter subjects, so any of these could be modified by a document not in the collection.",
    "**Fairfield's MOU expired 6/30/2025** and the city is still out of contract.",
    "**How each agency actually codes these hours in payroll** is not shown by any contract. A dedicated pay code is far harder to call an accident than a generic overtime code — that question is still open in Roseville too.",
  ],
};
