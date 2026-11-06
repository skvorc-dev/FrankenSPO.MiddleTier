#!/usr/bin/env bash
# Downloads the FrankenSPO packages named by FrankenSpoVersion in Directory.Build.props from the GitHub pre-release
# and verifies them against the release's SHA256SUMS.txt. Needs the GitHub CLI (gh).
set -euo pipefail
cd "$(dirname "$0")/.."
version=$(sed -n 's:.*<FrankenSpoVersion>\(.*\)</FrankenSpoVersion>.*:\1:p' Directory.Build.props)
rm -rf .packages
mkdir -p .packages
gh release download "v$version" -R skvorc-dev/FrankenSPO -p '*.nupkg' -p SHA256SUMS.txt -D .packages
cd .packages
if command -v sha256sum >/dev/null 2>&1; then sha256sum -c SHA256SUMS.txt; else shasum -a 256 -c SHA256SUMS.txt; fi
