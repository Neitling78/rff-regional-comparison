39967d5602f3a3618dacddf347f65da1  ComparisonTool.jsx
7f33a6add1d55ab4fc461652510e818f  agencyData.js

Snapshot taken 2026-11-11. Verification tab REMOVED; all verified figures folded into
the sourced DATA array in agencyData.js, which is now the single source of truth.
No browser localStorage dependency for the headline. Nothing to import.
Headline: City 2.66% / True 9.57% (Roseville $14,128.82 vs 55th $14,430.61 on the City method).
Verified headless before deploy: tab gone from the dropdown, all 9 tabs render, no NaN.
Restore: cp this folder/*.js* ../../src/ && cd ../.. && npm run deploy
