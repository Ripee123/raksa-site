#!/bin/sh
# Raksa-site: koko projektin tekstimuotoinen tilannekuva tiedostoon snapshots/snapshot_full.txt.
# Käyttö projektin juuresta: sh snap.sh
# - Listaa vain Gitin seuraamat ja seuraamattomat, ei-ignoroidut tiedostot (git ls-files),
#   joten .git-hakemisto ja snapshots/-kansio (.gitignore) eivät tule mukaan.
# - Binääritiedostoista kirjataan vain polku ja koko.
# - Salaisuuksiin viittaavat tiedostot ohitetaan nimen perusteella.
set -eu

ROOT=$(CDPATH='' cd -- "$(dirname -- "$0")" && pwd)
cd -- "$ROOT"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Virhe: $ROOT ei ole Git-työpuu." >&2
  exit 1
fi

OUT_DIR="snapshots"
OUT="$OUT_DIR/snapshot_full.txt"
TMP="$OUT.tmp"
mkdir -p -- "$OUT_DIR"
trap 'rm -f -- "$TMP"' EXIT INT TERM

{
  echo "RAKSA-SITE-PROJEKTIN TILANNEKUVA"
  echo "Tyyppi: FULL"
  echo "Luotu: $(date '+%Y-%m-%d %H:%M:%S')"
  echo "Projektin juuri: $ROOT"
  echo "Haara: $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo '-')"
  echo "Commit: $(git log -1 --format='%h %s' 2>/dev/null || echo '-')"
  echo "============================================================"
  echo "Git status:"
  git status --short --branch
  echo "============================================================"

  git ls-files --cached --others --exclude-standard | sort -u | while IFS= read -r F; do
    case "$F" in
      "$OUT_DIR"/*) continue ;;
      *.jks|*.keystore|*.p12|*.pem|*.key|.env|.env.*|*/.env|release.properties|*secret*|*password*)
        echo; echo "### OHITETTU (mahdollinen salaisuus): $F"; continue ;;
    esac
    [ -f "$F" ] || continue
    case "$F" in
      *.html|*.css|*.js|*.svg|*.json|*.md|*.txt|*.xml|*.yml|*.yaml|*.sh|.gitignore|.nojekyll|CNAME)
        echo; echo "### TIEDOSTO: $F"; cat -- "$F" ;;
      *)
        echo; echo "BINÄÄRINEN ASSET: $F ($(wc -c < "$F" | tr -d ' ') tavua)" ;;
    esac
  done
} > "$TMP"

mv -- "$TMP" "$OUT"
trap - EXIT INT TERM
echo "Valmis: $ROOT/$OUT"
