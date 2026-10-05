#!/system/bin/sh
set -eu

# Raksa-site: täydellisen verkkosivuston tilannekuvan luonti.
# Aja projektin juuresta komennolla: sh snap.sh

SNAPDIR="snapshots"
FULL_SNAPSHOT="$SNAPDIR/snapshot_full.txt"

mkdir -p "$SNAPDIR"
ROOT=$(pwd)

ALL_FILELIST=".snap_all_$$.tmp"
TEXT_FILELIST=".snap_text_$$.tmp"
ASSET_FILELIST=".snap_assets_$$.tmp"
OUTPUT_TEMP="${FULL_SNAPSHOT}.tmp"

TEXTCOUNT=0
ASSETCOUNT=0
SKIPPED=0

cleanup() {
    rm -f "$ALL_FILELIST" "$TEXT_FILELIST" "$ASSET_FILELIST" "$OUTPUT_TEMP"
}
trap cleanup EXIT INT TERM

# Vanhoja täysiä tai muutospohjaisia snapshotteja ei tarvita. Jokainen ajo
# tuottaa yhden ajantasaisen snapshots/snapshot_full.txt-tiedoston.
rm -f "$SNAPDIR"/raksa_site_snapshot_*.txt
rm -f "$SNAPDIR"/site_snapshot_*.txt
rm -f "$SNAPDIR/snapshot_changes.txt"

# Kerätään sivuston lähdetiedostot. Kehitysriippuvuudet, julkaisu-/välimuistit,
# editoritiedostot, snapshotit ja toimituspaketit jätetään pois.
find . -type f \
 ! -path './.git/*' \
 ! -path './node_modules/*' \
 ! -path '*/node_modules/*' \
 ! -path './dist/*' \
 ! -path '*/dist/*' \
 ! -path './build/*' \
 ! -path '*/build/*' \
 ! -path './coverage/*' \
 ! -path '*/coverage/*' \
 ! -path './.cache/*' \
 ! -path '*/.cache/*' \
 ! -path './.parcel-cache/*' \
 ! -path '*/.parcel-cache/*' \
 ! -path './.next/*' \
 ! -path '*/.next/*' \
 ! -path './.nuxt/*' \
 ! -path '*/.nuxt/*' \
 ! -path './.vite/*' \
 ! -path '*/.vite/*' \
 ! -path './.idea/*' \
 ! -path '*/.idea/*' \
 ! -path './.vscode/*' \
 ! -path '*/.vscode/*' \
 ! -path './snapshots/*' \
 ! -name '.snap_*.tmp' \
 ! -name 'snap.sh' \
 ! -name '*.zip' \
 ! -name '*.tar' \
 ! -name '*.tar.gz' \
 ! -name '*.tgz' \
 ! -name '*.7z' \
 ! -name '*.keystore' \
 ! -name '*.jks' \
 ! -name '.env' \
 ! -name '.env.*' \
 | sort > "$ALL_FILELIST"

: > "$TEXT_FILELIST"
: > "$ASSET_FILELIST"

while IFS= read -r FILE; do
    [ -n "$FILE" ] || continue
    REL=${FILE#./}
    LOWER=$(printf '%s' "$REL" | tr '[:upper:]' '[:lower:]')

    case "$LOWER" in
        *.html|*.htm|*.css|*.scss|*.sass|*.less|*.js|*.mjs|*.cjs|*.ts|*.tsx|*.jsx|\
        *.json|*.jsonld|*.webmanifest|*.xml|*.svg|*.txt|*.md|*.yml|*.yaml|*.toml|\
        *.ini|*.conf|*.config|*.properties|*.sh|*.gitignore|*.nojekyll|robots.txt|\
        sitemap.xml|cname|license|license.txt)
            echo "$FILE" >> "$TEXT_FILELIST"
            TEXTCOUNT=$((TEXTCOUNT + 1))
            ;;
        *.png|*.jpg|*.jpeg|*.webp|*.gif|*.avif|*.bmp|*.ico|\
        *.woff|*.woff2|*.ttf|*.otf|*.eot|\
        *.mp4|*.webm|*.mov|*.mp3|*.ogg|*.wav|*.pdf)
            echo "$REL" >> "$ASSET_FILELIST"
            ASSETCOUNT=$((ASSETCOUNT + 1))
            ;;
        *)
            SKIPPED=$((SKIPPED + 1))
            ;;
    esac
done < "$ALL_FILELIST"

# Kirjoitetaan ensin väliaikaiseen tiedostoon. Edellinen valmis snapshot säilyy,
# jos suoritus keskeytyy ennen lopullista mv-komentoa.
{
    echo "RAKSA-SITE-PROJEKTIN TILANNEKUVA"
    echo "Tyyppi: FULL"
    echo "Luotu: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "Projektin juuri: $ROOT"
    echo "Vertailupohja: täydellinen verkkosivuston projektitilanne"
    echo "============================================================"
    echo "1. GIT-TIEDOT"
    echo "Haara: $(git branch --show-current 2>/dev/null || true)"
    echo "Commit: $(git rev-parse HEAD 2>/dev/null || true)"
    echo "Git status:"
    git status --short --branch 2>/dev/null || true
    echo "============================================================"
    echo "2. SNAPSHOTIIN SISÄLLYTETTÄVÄT TIEDOSTOT"

    if [ -s "$ALL_FILELIST" ]; then
        sed 's#^./##' "$ALL_FILELIST"
    else
        echo "Projektista ei löytynyt snapshotiin sisällytettäviä tiedostoja."
    fi

    echo "============================================================"
    echo "3. TEKSTITIEDOSTOJEN SISÄLTÖ"
} > "$OUTPUT_TEMP"

while IFS= read -r FILE; do
    [ -n "$FILE" ] || continue
    REL=${FILE#./}
    {
        echo
        echo "############################################################"
        echo "TIEDOSTO: $REL"
        echo "############################################################"
        cat "$FILE"
        echo
        echo "LOPPU: $REL"
    } >> "$OUTPUT_TEMP"
done < "$TEXT_FILELIST"

{
    echo
    echo "============================================================"
    echo "4. BINÄÄRISTEN ASSET-TIEDOSTOJEN LUETTELO"
    echo "============================================================"

    if [ "$ASSETCOUNT" -eq 0 ]; then
        echo "Binäärisiä kuva-, fontti-, media- tai PDF-tiedostoja ei löytynyt."
    else
        echo "Löydettyjä binäärisiä asset-tiedostoja: $ASSETCOUNT"
        echo
        cat "$ASSET_FILELIST"
    fi

    echo
    echo "Huomautus:"
    echo "- HTML-, CSS-, JavaScript-, JSON-, manifesti-, metadata- ja SVG-sisältö lisätään tekstiosioon."
    echo "- PNG-, JPG-, WEBP-, AVIF-, GIF-, fontti-, media- ja PDF-tiedostojen sisältö ohitetaan, mutta nimet luetellaan."
    echo "- node_modules-, dist-, build-, coverage-, välimuisti-, editori-, snapshot- ja pakettitiedostot ohitetaan."
    echo "- .env-tiedostot ja allekirjoitusmateriaalit ohitetaan aina."
    echo "- Snapshot sisältää jokaisella suorituskerralla koko nykyisen lähdeprojektin tilanteen."

    echo
    echo "============================================================"
    echo "5. YHTEENVETO"
    echo "============================================================"
    echo "Snapshotin tyyppi: FULL"
    echo "Sisältöön lisättyjä tekstitiedostoja: $TEXTCOUNT"
    echo "Lueteltuja binäärisiä asset-tiedostoja: $ASSETCOUNT"
    echo "Muita ohitettuja tiedostoja: $SKIPPED"
    echo "Raportti: $FULL_SNAPSHOT"
} >> "$OUTPUT_TEMP"

mv "$OUTPUT_TEMP" "$FULL_SNAPSHOT"
OUTPUT_TEMP=""

echo "Valmis: uusi Raksa-site-projektin täysi snapshot"
echo "Tiedosto: $FULL_SNAPSHOT"
echo "Tekstitiedostoja lisätty: $TEXTCOUNT"
echo "Binäärisiä asset-tiedostoja lueteltu: $ASSETCOUNT"
echo "Muita tiedostoja ohitettu: $SKIPPED"
