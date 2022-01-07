---
title: Use launchd to run scripts on Mac
title-cs: 
category: data-coding
tags: [mac]
season: winter
created: 26 Nov 2021
updated: 07 Jan 2022
sources: Misc
---

`launchd` differentiates between *agents* and *daemons*. The main difference is that an *agent* is run on behalf of the logged in user while a *daemon* runs on behalf of the root user or any user you specify with the `UserName` key.

- [How to Use launchd to Run Scripts on Schedule in macOS](https://www.maketecheasier.com/use-launchd-run-scripts-on-schedule-macos/)
- [A launchd tutorial](https://www.launchd.info/)
- [Apple documentation](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
- [How to Trigger Any Action When a File or Folder Changes](https://mayeu.me/post/how-to-trigger-any-action-when-a-file-or-folder-changes-on-macos-on-the-cheap/)
- `launchd` runs scheduled jobs after the computer wakes up, `cron` does not