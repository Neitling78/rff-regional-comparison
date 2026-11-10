SNAPSHOT: 2026-11-10 VERIFIED BASELINE
======================================
This replaces snapshots/2026-baseline (May 2026), which is NOW OBSOLETE and
would destroy ~6 months of work if restored.

STATE AT SNAPSHOT
- Verification tab: 169 of 171 fields locked green. Only Fairfield medical and
  Fairfield dental/vision remain red.
- Third-check audit complete (11/10/2026).
- City method: Roseville needs +2.66%. True method: +9.55%.
- Sac City 2027 raise defaulted ON at 3.5%, flagged red (lands 10/2/2027,
  one month after the 9/1/2027 survey date).
- Raises display to 2 decimal places.
- Engineer and Captain tabs filled from all 9 MOUs + salary schedules,
  pre-seeded via RANK_INCENTIVES. Engineer -5.31%, Captain -9.06%.
- Rank tabs are PIN-gated behind admin and are an internal extension: the
  contractual survey benchmark is Firefighter Paramedic (PEPRA) only.

FILE FINGERPRINTS (md5) - check these before trusting a restore
  agencyData.js      eed729db21d5b060cd303bb39b45a5ea   104668 bytes
  ComparisonTool.jsx 449554b950faafdc25edb95087070604   202240 bytes

TO RESTORE
  cp ~/Development/rff-regional-comparison/snapshots/2026-11-10-verified/*.js* \
     ~/Development/rff-regional-comparison/src/
  cd ~/Development/rff-regional-comparison && npm run deploy
