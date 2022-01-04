#!/bin/zsh

# replace files from vault in assets
# https://unix.stackexchange.com/questions/412259/how-can-i-copy-a-directory-and-rename-it-in-the-same-command
rm -r assets/files
cp -R _notes/__files/. assets/files

# change file links to assets
# https://www.grymoire.com/Unix/Sed.html
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e "s#\.\./__files/#\.\./\.\./assets/files/#g" {} \;

# sync notes
git add _notes
git add assets/files
timestamp=$(date -u "+%Y/%m/%d %H:%M:%S %Z")
git commit -m "sync notes and files as of $timestamp"
git push origin main

# change file links back to vault
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e "s#\.\./\.\./assets/files/#\.\./__files/#g" {} \;
