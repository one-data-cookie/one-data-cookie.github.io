#!/bin/zsh

### Launch
echo # add empty line before new log
echo "Launching the script at $(date -u "+%Y-%m-%d %T %Z")"

# Load config file
# https://askubuntu.com/a/743641
echo "Loading config file"
source ./utilities/config

### Exporting from Obsidian
# Fix file links of public folders in _notes, eg. from ![[image.png]] to ![](../_files/image.png)
echo "Fixing links in public folders"
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e 's#!\[\[\(.*\)\]\]#![](..\/__files\/\1)#g' {} \;

# Change file links of public folders in _notes to assets
# https://www.grymoire.com/Unix/Sed.html
echo "Changing links in public folders"
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e "s#\.\./__files/#\.\./\.\./assets/files/#g" {} \;

# Move files from vault to assets
echo "Moving files from vault to assets"
rsync --verbose --update --recursive --checksum _notes/__files/. assets/files

# Stage changes in notes and files
echo "Staging changes"
git add _notes
git add assets/files

# Update files from _notes
# From https://stackoverflow.com/a/33721446
# and https://stackoverflow.com/a/10274182
# split by only tab: https://www.gnu.org/software/bash/manual/bash.html#Word-Splitting

echo "Updating modified files"
git diff --cached --name-status | grep "^M" | grep "_notes/" | while IFS=$'\t' read a b; do
  cat "$b" | sed "/---.*/,/---.*/s/^updated:.*$/updated: $(date -u "+%Y-%m-%d")/" > tmp
  mv tmp "$b"
  git add "$b"
done

echo "Updating renamed files"
git diff --cached --name-status | grep "^R" | grep "_notes/" | while IFS=$'\t' read a b c; do
  cat "$c" | sed "/---.*/,/---.*/s/^title:.*$/title: $(basename "$c" .md)/" > tmp
  cat tmp | sed "/---.*/,/---.*/s/^category:.*$/category: $(basename $(dirname "$c"))/" > tmp
  cat tmp | sed "/---.*/,/---.*/s/^updated:.*$/updated: $(date -u "+%Y-%m-%d")/" > tmp
  mv tmp "$c"
  git add "$c"
done

echo "Updating added files"
git diff --cached --name-status | grep "^A" | grep "_notes/" | while IFS=$'\t' read a b; do
  cat "$b" | sed "/---.*/,/---.*/s/^title:.*$/title: $(basename "$b" .md)/" > tmp
  cat tmp | sed "/---.*/,/---.*/s/^category:.*$/category: $(basename $(dirname "$b"))/" > tmp
  mv tmp "$b"
  git add "$b"
done

# Commit and push to Github
echo "Pushing changes"
git commit -m "Sync notes and files as of $(date -u "+%Y-%m-%d %T %Z")"
git push origin main

# Change file links of public folders in _notes back to vault
# https://www.grymoire.com/Unix/Sed.html
echo "Changing links in public folders back again"
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e "s#\.\./\.\./assets/files/#\.\./__files/#g" {} \;

### Importing to Obsidian
# Import files from phone
# echo "Importing files from phone"
# rsync --verbose --update --recursive --checksum "$google_path/phone/." _notes/_0-inbox/phone

# Import files from tablet
# echo "Importing files from tablet"
# rsync --verbose --update --recursive --checksum "$google_path/tablet/." _notes/_0-inbox/tablet

# Run Python script to import items from Pocket
echo "Importing items from Pocket"
source .venv/bin/activate
python3 ./utilities/import_pocket.py
deactivate

# # Run Python Script to create daily note
# echo "Creating daily note"
# python3 ./utilities/create_note.py

### Finish up
echo "Amazing, all done!"
