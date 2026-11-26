#!/bin/sh
# Stamp a new build id into index.html and version.json so open games offer an update.
# Run this right before every commit that changes the game.
set -e
cd "$(dirname "$0")"
B=$(date -u +%Y%m%d%H%M%S)
sed -i.bak -E "s/const BUILD='[^']*'/const BUILD='$B'/" index.html && rm -f index.html.bak
printf '{"build":"%s"}\n' "$B" > version.json
echo "build $B"
