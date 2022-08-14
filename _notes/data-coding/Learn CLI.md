---
title: Learn CLI
title-cs: 
category: data-coding
tags: [learn, cli]
season: spring
created: 19 Aug 2021
updated: 14 Aug 2022
sources: Misc
---

## UNIX Philosophy
- [Unix philosophy](http://catb.org/esr/writings/taoup/html/ch01s06.html) (by [Doug McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy), creator of Unix pipes) is to
	- Write programs that do one thing and do it well
	- Write programs to work together
	- Write programs to handle text streams, because that is a universal interface

## Materials
- Learn from [Marek Šuppa](https://mareksuppa.com/teaching/linux-cli/2020/)
- Learn from [Missing Semester](https://missing.csail.mit.edu/)

## Worth reading or watching
- [The UNIX Command Language](https://github.com/susam/tucl): This paper from 1976 (!), written by no one else but Ken Thompson, is the first paper ever published on the Unix shell.. If for nothing else, it's almost certainly worth reading for its amazing clarity of presentation and concise treatment.
- [AT&T Advertisement for UNIX](https://www.youtube.com/watch?v=tc4ROCJYbm0&feature=youtu.be&t=297): Watch Brian Kernighan describe (in a very down-to-earth fashion) what's great about UNIX, especially how pipes play an important role in that.
- [Introduction to text manipulation on UNIX-based systems](https://developer.ibm.com/articles/au-unixtext/): A very extensive in-depth guide into what's possible with just the standard tools, when it comes to text processing on UNIX-like systems. (Spoiler alert: a lot!)
- [Linux Filesystem Hierarchy](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/): A deeper discussion on the various parts of the standard Linux filesystem, describing several of the directories in much higher detail than the slides ever could. Less in-depth also [on Wikipedia](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard).
- [How dotfiles came to be](https://web.archive.org/web/20190211155005/https://plus.google.com/+RobPikeTheHuman/posts/R58WgWwN9jp): A short story by Rob Pike about how *dotfiles* came to be and what it says about the unintended effects of cutting corners and just "hacking around" a problem.
- [The origins of grep](https://thenewstack.io/brian-kernighan-remembers-the-origins-of-grep/): Brian Kernighan, one of the forefathers of UNIX discusses how `grep` came to be, and it makes for a rather interesting story! (If you are in a hurry, here is a [10 minute video](https://www.youtube.com/watch?v=NTfOnGZUZDk).)


## Snippets
- Customising prompt:
```bash
export VIRTUAL_ENV_DISABLE_PROMPT=1
function virtualenv_info {
    [ $VIRTUAL_ENV ] && echo ' ('`basename $VIRTUAL_ENV`')'
}

# https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
source ~/.git-prompt.sh
function git_info {
  __git_ps1 "(%s) "
}

setopt PROMPT_SUBST ; PS1='%F{green}@%*%f %F{cyan}[%n]%f%F{yellow}$(virtualenv_info)%f%F{red} $(git_info)%f%F{magenta}%~%f $ '
```

- Making a Python file executable:
```shell
chmod u+x samlapi.py # only for user; +x for all
```

- Checking your `path`:
```shell
sudo nano /etc/paths
```

- Stop a process and start again, right where you left off, based on [this](https://major.io/2009/06/15/two-great-signals-sigstop-and-sigcont/)
```bash
kill -SIGSTOP [pid]
kill -SIGCONT [pid]
```

- Take `n`th column from CSV and sum it
```bash
cat file.csv | cut -d, -f[n] | paste -sd+ | bc
```

