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

syntax:
-   Make sure your filename ends in `.plist`, e.g. `/Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
-   Check the syntax of the file: `plutil /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
-   Unload and reload your service:
    -   `launchctl unload /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
    -   `launchctl load /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
-   Force load in case your job has been disabled: `launchctl load -w /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`

from [here](https://developer.apple.com/forums/thread/665661?answerId=689612022#689612022)

essential </true> before

```shell
launchctl error <insert numerical error code here>
```
from [here](https://stackoverflow.com/a/60308816)

error 78:
[solutions](https://www.reddit.com/r/macsysadmin/comments/np53cv/big_sur_launchd_and_zsh/?utm_source=share&utm_medium=web2x&context=3) leading to this [`launchd` plist generator](https://zerolaunched.herokuapp.com/)

essentially, you better run it through `ProgramArguments` and add through what it should be run


error 126:
An return code status of [126](https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html) signifies that the command you are trying to use is available, but not executable.

[solution](https://apple.stackexchange.com/a/338214)

if python functions not recognise, change PATH as [here](https://github.com/jamietr1/obsidian-automation/blob/main/obsidian-automation-daily-notes.plist#L8-L12)

```
launchctl list | grep local.restart
```