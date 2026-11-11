7613ed0f7ce953ec91dae877f63ea055  ComparisonTool.jsx
6a4f3cc78a2cc9511c4353b3c2ccbc30  agencyData.js

Snapshot taken 2026-11-11 immediately BEFORE the Verification tab was removed.
This is the last build that still had the Verification tab and read browser localStorage.
Headline with the corrected verification JSON imported: City 2.66% / True 9.57%.
WITHOUT that import it reads City 2.66% / True 9.55%.
Restore: cp this folder/*.js* ../../src/ && cd ../.. && npm run deploy
