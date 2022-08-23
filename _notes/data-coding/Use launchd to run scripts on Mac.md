---
title: Use launchd to run scripts on Mac
title-cs: 
category: data-coding
tags: [mac]
season: winter
created: 26 Nov 2021
updated: 23 Aug 2022
sources: Misc
---

## Intro
- From [The Missing Semester](https://missing.csail.mit.edu/2020/potpourri/):
> You are probably already familiar with the notion of daemons, even if the word seems new. Most computers have a series of processes that are always running in the background rather than waiting for a user to launch them and interact with them. These processes are called daemons and the programs that run as daemons often end with a `d` to indicate so. For example `sshd`, the SSH daemon, is the program responsible for listening to incoming SSH requests and checking that the remote user has the necessary credentials to log in.

## Links
- [Apple documentation](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
- [A launchd tutorial](https://www.launchd.info/)
- [How to Use launchd to Run Scripts on Schedule in macOS](https://www.maketecheasier.com/use-launchd-run-scripts-on-schedule-macos/)
- Another [cool tutorial](https://ellismin.com/2020/03/launchd-1/), even if specifically about Git
- [How to Trigger Any Action When a File or Folder Changes](https://mayeu.me/post/how-to-trigger-any-action-when-a-file-or-folder-changes-on-macos-on-the-cheap/)

## Notes
- `launchd` runs scheduled jobs after the computer wakes up, `cron` does not (but it can be useful sometimes)
- `launchd` differentiates between *agents* and *daemons*. The main difference is that an *agent* is run on behalf of the logged in user while a *daemon* runs on behalf of the root user or any user you specify with the `UserName` key.
- If you see `</true>` in `plist`, it specifies value for boolean key, like `RunAtLoad`
- Commands from [here](https://developer.apple.com/forums/thread/665661?answerId=689612022#689612022) 
	- Make sure your filename ends in `.plist`, e.g. `/Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
	- Check the syntax of the file: `plutil /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
	- Unload and reload your service:
	    -   `launchctl unload /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
	    -   `launchctl load /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
	- Force load in case your job has been disabled: `launchctl load -w /Users/johnny/Library/LaunchAgents/com.appleseed.runthings.plist`
- To check if it's running, do `launchctl list | grep com.appleseed.runthings`
- If you don't see status `0`, [see help on errors](https://stackoverflow.com/a/60308816) via `launchctl error <error code>`
- Some of my previous errors and their solution:
	- error `78`:
		- [these solutions](https://www.reddit.com/r/macsysadmin/comments/np53cv/big_sur_launchd_and_zsh/?utm_source=share&utm_medium=web2x&context=3) lead to this [`launchd` plist generator](https://zerolaunched.herokuapp.com/) to fix
		- Essentially, you better run any scripts (even bash) through `ProgramArguments` and add by what it should be run
		- error `126`:
			- An return code status of [126](https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html) signifies that the command you are trying to use is available, but not executable.
			- [solution](https://apple.stackexchange.com/a/338214)
		- Python functions not recognised
			- change `PATH` same as [here](https://github.com/jamietr1/obsidian-automation/blob/main/obsidian-automation-daily-notes.plist#L8-L12)
