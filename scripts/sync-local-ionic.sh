#!/bin/bash
# Builds @ionic/core and @ionic/angular from an ionic-framework checkout and installs them into this app.
#
# Usage: IONIC_REPO=/path/to/ionic-framework ./scripts/sync-local-ionic.sh [--skip-core]
#
# Use --skip-core when only the Angular package changed.
set -e

if [ -z "$IONIC_REPO" ]; then
  echo "Set IONIC_REPO to the path of your ionic-framework checkout."
  exit 1
fi

REPO="$(cd "$IONIC_REPO" && pwd)"
OUT="$(cd "$(dirname "$0")/.." && pwd)/.local-ionic"
mkdir -p "$OUT"

if [ "$1" != "--skip-core" ]; then
  (cd "$REPO/core" && npm run build)
fi
(cd "$REPO/packages/angular" && npm run build)

rm -f "$OUT"/*.tgz
(cd "$REPO/core" && npm pack --pack-destination "$OUT" >/dev/null)
(cd "$REPO/packages/angular" && npm pack --pack-destination "$OUT" >/dev/null)

cd "$OUT/.." && npm install --no-audit --no-fund "$OUT"/ionic-core-*.tgz "$OUT"/ionic-angular-*.tgz
rm -rf .angular/cache
echo "Installed. Run: npm start"
