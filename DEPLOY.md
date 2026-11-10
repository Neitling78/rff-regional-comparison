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

Current build (2026-11-10, Classic PERS + longevity years + pensionable income):
```
agencyData.js       d14ad0ddbab08e2c71a7e979b6af44d8   123743 bytes
ComparisonTool.jsx  0b5155cc442f26a41979ae47d8746058   217647 bytes
```
Previous build, also good (pre-Classic, = snapshots/2026-11-10-verified):
```
agencyData.js       eed729db21d5b060cd303bb39b45a5ea   104668 bytes
ComparisonTool.jsx  449554b950faafdc25edb95087070604   202240 bytes
```
These md5s change with every release. **The size check above is the real guard** - it is
what would have caught the May 2026 disaster. Do not treat an unlisted md5 as a failure.

## Reset to the verified baseline

```
cp ~/Development/rff-regional-comparison/snapshots/2026-11-10-verified/*.js* \
   ~/Development/rff-regional-comparison/src/ && \
cd ~/Development/rff-regional-comparison && npm run deploy
```

The old `snapshots/2026-baseline/` (May 2026) was **deleted** — restoring it would have
wiped roughly six months of work. Every new snapshot folder must be dated and carry a
README with md5 fingerprints.

## Resetting the tool's own inputs

For raises, Special Ops, Longevity and Other Pay, use the **in-app Reset buttons** on the
City 55% and True Comp tabs. That is the real reset. Do not re-deploy old code to undo an
input change — the Verification tab lives in browser localStorage, not in these files.

## Do not

- Do not run `npm install` from a Claude/Cowork session. Those shells are Linux; your
  `node_modules` holds macOS arm64 binaries. Installing from there replaces them and breaks
  the build on this Mac. Build and deploy from the Mac's own Terminal.
- Do not create a second working copy of this project anywhere. One repo, one working copy.
