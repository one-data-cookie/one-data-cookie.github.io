---
title: Take care of your dotfiles
title-cs: 
category: data-coding
tags: [how-to, idea]
season: spring
created: 11 Apr 2022
updated: 21 Aug 2022
sources: https://kevinquinn.fun/blog/personalize-your-development-environment-with-dotfiles/, https://missing.csail.mit.edu/2020/command-line/
---

## What are dotfiles?
On your computer, there are hidden files called **dotfiles**, they’re hidden because they start with a `'.'` e.g. `~/.bashrc` . they usually control configuration of tools or the terminal (command line) itself.

## How should you organise your dotfiles?
They should be in their own folder, under version control, and symlinked into place using a script. This has the benefits of:
- **Easy installation**: if you log in to a new machine, applying your customisations will only take a minute.
- **Portability**: your tools will work the same way everywhere.
- **Synchronisation**: you can update your dotfiles anywhere and keep them all in sync.
-  **Change tracking**: you’re probably going to be maintaining your dotfiles for your entire programming career, and version history is nice to have for long-lived projects.

## Track dotfiles
- Git repo, syncing via a [script](https://github.com/I-Dont-Remember/dotfiles/blob/master/link_dotfiles.sh) through [symlinks](https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/) 
- Some tool from [this list](https://dotfiles.github.io/), e.g. [Dotbot](https://github.com/anishathalye/dotbot)

## Draw inspiration from others
- Simply from [GitHub](https://github.com/search?o=desc&q=dotfiles&s=stars&type=Repositories) but you might be better off with [some navigation help](https://dotfiles.github.io/)

## Work on multiple machines
- A common pain with dotfiles is that the configurations might not work when working with several machines or you might want some configuration to be applied only in a given machine.
- There are some tricks for making this easier:
	- If statements
	- Use `[include]` (in `~/.gitconfig`)
	- Use `source` (in `~/.zshrc`)
