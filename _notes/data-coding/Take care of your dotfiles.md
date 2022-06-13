---
title: Take care of your dotfiles
title-cs: 
category: data-coding
tags: [how-to, idea]
season: spring
dates: [11 Apr 2022, 11 Apr 2022]
sources: https://kevinquinn.fun/blog/personalize-your-development-environment-with-dotfiles/
---


## What are dotfiles?
On your computer, there are hidden files called `dotfiles`, they’re hidden because they start with a `'.'` e.g. `~/.bashrc` . they usually control configuration of tools or the terminal (command line) itself.

## Track dotfiles
- Some tool from [this list](https://dotfiles.github.io/), e.g. [Dotbot](https://github.com/anishathalye/dotbot)
- Git repo, syncing via a [script](https://github.com/I-Dont-Remember/dotfiles/blob/master/link_dotfiles.sh) through [symlinks](https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/) 