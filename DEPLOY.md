# RFF Regional Comparison — Deploy & Reset
**Authoritative. If a note anywhere else disagrees with this file, this file wins.**
Last corrected: 2026-11-10 after a bad deploy shipped May 2026 code to the live site.

## Where things live

| Path | Role |
|---|---|
| `~/Development/rff-regional-comparison/` | **THE REPO. Only place that builds and deploys.** |
| `~/Development/rff-regional-comparison/src/` | The two live source files |
| `~/Documents/Claude/Projects/Comparable Calculator/` | Working copy. Claude/Cowork sessions write here. Also holds the dated `.bak-*` rollback points. |
| ~~`~/Desktop/Claude CoWork/.../rff-regional-comparison/`~~ | **DEAD. Emptied 2026-11-10.** Was a May 2026 copy. Never deploy from it. Drag the empty folder to the Trash. |

## Deploy

```
cp ~/Documents/Claude/Projects/Comparable\ Calculator/agencyData.js ~/Development/rff-regional-comparison/src/ && \
cp ~/Documents/Claude/Projects/Comparable\ Calculator/ComparisonTool.jsx ~/Development/rff-regional-comparison/src/ && \
cd ~/Development/rff-regional-comparison && npm run deploy
```

If a session already placed the files in `src/` for you, just:

```
cd ~/Development/rff-regional-comparison && npm run deploy
```

Wait ~60 seconds, then hard refresh: **Cmd+Shift+R**. A plain refresh will not do it —
GitHub Pages caches hard. Live at https://neitling78.github.io/rff-regional-comparison/

## Check before you deploy

The two source files should be roughly **100 KB** and **200 KB**. If either reads
~14 KB or ~22 KB, that is the dead May 2026 code — **stop, do not deploy.**

```
ls -la ~/Development/rff-regional-comparison/src/
md5 ~/Development/rff-regional-comparison/src/agencyData.js ~/Development/rff-regional-comparison/src/ComparisonTool.jsx
```

Current build (2026-11-11, Verification tab removed - = snapshots/2026-11-11-no-verify-tab):
```
agencyData.js       7f33a6add1d55ab4fc461652510e818f   129838 bytes
ComparisonTool.jsx  39967d5602f3a3618dacddf347f65da1   210199 bytes
```
Previous build, also good (2026-11-10, last one with the Verification tab
- = snapshots/2026-11-11-pre-verify-removal):
```
agencyData.js       6a4f3cc78a2cc9511c4353b3c2ccbc30   128560 bytes
ComparisonTool.jsx  7613ed0f7ce953ec91dae877f63ea055   225733 bytes
```
These md5s change with every release. **The size check above is the real guard** - it is
what would have caught the May 2026 disaster. Do not treat an unlisted md5 as a failure.

## Reset to the verified baseline

```
cp ~/Development/rff-regional-comparison/snapshots/2026-11-11-no-verify-tab/*.js* \
   ~/Development/rff-regional-comparison/src/ && \
cd ~/Development/rff-regional-comparison && npm run deploy
```

The old `snapshots/2026-baseline/` (May 2026) was **deleted** — restoring it would have
wiped roughly six months of work. Every new snapshot folder must be dated and carry a
README with md5 fingerprints.

## Resetting the tool's own inputs

For raises, Special Ops, Longevity and Other Pay, use the **in-app Reset buttons** on the
City 55% and True Comp tabs. That is the real reset.

**Changed 2026-11-11: the Verification tab is gone.** Every verified figure now lives in the
`DATA` array in `agencyData.js`, so the headline no longer depends on browser localStorage
and there is nothing to import. A code rollback now DOES fully revert the data - which was
not true before. The trade: correcting a figure is a code edit plus a deploy, not a browser
edit.

Current headline: **City 2.66% / True 9.57%**. Roseville $14,128.82 against a 55th
percentile of $14,430.61 on the City method. If the site shows 3.68%, that is a stale
cached build or stale localStorage from the old tab - hard refresh with Cmd+Shift+R.

## Do not

- Do not run `npm install` from a Claude/Cowork session. Those shells are Linux; your
  `node_modules` holds macOS arm64 binaries. Installing from there replaces them and breaks
  the build on this Mac. Build and deploy from the Mac's own Terminal.
- Do not create a second working copy of this project anywhere. One repo, one working copy.
