#!/bin/zsh

### Launch
timestamp=$(date -u "+%Y/%m/%d %T %Z")
echo # add empty line before new log
echo "Launching the script at $timestamp"

# Load config file
# https://askubuntu.com/a/743641
echo "Loading config file"
source ./utilities/config

### Exporting from Obsidian
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

# Update "updated" on modified files from _notes
# From https://stackoverflow.com/a/33721446
# split by only tab: https://www.gnu.org/software/bash/manual/bash.html#Word-Splitting
echo "Updating date updated"
git diff --cached --name-status | grep "^M" | grep "_notes/" | while IFS=$'\t' read a b; do
  cat "$b" | sed "/---.*/,/---.*/s/^updated:.*$/updated: $(date -u "+%d %b %Y")/" > tmp
  mv tmp "$b"
  git add "$b"
done

# Update "category" on renamed and added files from _notes
# From https://stackoverflow.com/a/33721446
# and https://stackoverflow.com/a/10274182
echo "Updating categories"
git diff --cached --name-status | grep "^R" | grep "_notes/" | while IFS=$'\t' read a b c; do
  cat "$c" | sed "/---.*/,/---.*/s/^category:.*$/category: $(basename $(dirname "$c"))/" > tmp
  mv tmp "$c"
  git add "$c"
done

git diff --cached --name-status | grep "^A" | grep "_notes/" | while IFS=$'\t' read a b; do
  cat "$b" | sed "/---.*/,/---.*/s/^category:.*$/category: $(basename $(dirname "$b"))/" > tmp
  mv tmp "$b"
  git add "$b"
done

# Commit and push to Github
echo "Pushing changes"
timestamp=$(date -u "+%Y/%m/%d %T %Z")
git commit -m "sync notes and files as of $timestamp"
git push origin main

### Importing to Obsidian
# Change file links of public folders in _notes back to vault
# https://www.grymoire.com/Unix/Sed.html
echo "Changing links in public folders back again"
find _notes -type f -name "*.md" -not -path "_notes/_*" -exec sed -i '' -e "s#\.\./\.\./assets/files/#\.\./__files/#g" {} \;

# Import files from phone
echo "Importing files from phone"
rsync --verbose --update --recursive --checksum "$google_path/phone/." _notes/_0-inbox/phone

# Import files from tablet
echo "Importing files from tablet"
rsync --verbose --update --recursive --checksum "$google_path/tablet/." _notes/_0-inbox/tablet

# Run Python script to import items from Pocket
echo "Importing items from Pocket"
python3 ./utilities/import_pocket.py

# # Run Python Script to create daily note
# echo "Creating daily note"
# python3 ./utilities/create_note.py

### Finish up
echo "Amazing, all done!"
