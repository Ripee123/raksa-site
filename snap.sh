#!/system/bin/sh
set -eu
D="snapshots"; O="$D/snapshot_full.txt"; mkdir -p "$D"; T="${O}.tmp"; trap 'rm -f "$T"' EXIT INT TERM
{ echo "RAKSA-SITE-PROJEKTIN TILANNEKUVA"; echo "Tyyppi: FULL"; echo "Luotu: $(date '+%Y-%m-%d %H:%M:%S')"; echo "Projektin juuri: $(pwd)"; echo "============================================================"; git status --short --branch 2>/dev/null || true; find . -type f ! -path './.git/*' ! -path './snapshots/*' ! -path './node_modules/*' ! -name 'snap.sh' ! -name '*.zip' | sort | while read -r F; do R=${F#./}; case "$R" in *.html|*.css|*.js|*.svg|*.json|*.md|*.txt|*.xml|*.yml|*.yaml|.nojekyll) echo; echo "### TIEDOSTO: $R"; cat "$F";; *) echo "BINÄÄRINEN ASSET: $R";; esac; done; } > "$T"; mv "$T" "$O"; trap - EXIT INT TERM; echo "Valmis: $O"
