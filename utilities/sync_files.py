from dirsync import sync

# Define note categories
categories = [
    'analytics-engineering',
    'business-data',
    'coding',
    'data-analysis',
    'data-engineering',
    'data-literacy',
    'data-science',
    'dataviz',
    'public-data'
]

# Sync notes
for cat in categories:
    source_notes = '/Users/michal/GitHub/one-data-cookie.github.io/_notes/' + cat
    target_notes = '/Volumes/GoogleDrive/My Drive/Obsidian/3. Resources/' + cat.replace('-', ' ').title()
    sync(source_notes, target_notes, 'sync', purge=True, create=True)

# Sync files
source_files = '/Users/michal/GitHub/one-data-cookie.github.io/assets/src'
target_files = '/Volumes/GoogleDrive/My Drive/Obsidian/_resources'
sync(source_files, target_files, 'sync')
