#!/bin/zsh

# copy files from vault to assets
cp -R _notes/_files/. assets/files

# change file links to assets
find _notes -type f -name "*.md" -exec sed -i '' -e "s#\.\./_files/#\.\./\.\./assets/files/#g" {} \;

# sync notes
git add _notes
git add assets/files
timestamp=$(date -u "+%Y/%m/%d %H:%M:%S %Z")
git commit -m "sync notes and files as of $timestamp"
git push origin main

# change file links back to vault
find _notes -type f -name "*.md" -exec sed -i '' -e "s#\.\./\.\./assets/files/#\.\./_files/#g" {} \;
