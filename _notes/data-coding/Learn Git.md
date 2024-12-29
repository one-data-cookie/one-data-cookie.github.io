---
title: Learn Git
lang: en
category: data-coding
tags: [learn, git]
season: summer
created: 2021-02-13
updated: 2024-12-29
sources: https://stackoverflow.com/questions/18418718/git-still-adds-and-tracks-folders-marked-in-gitignore
---

## Intro
- It is a standardised way of tracking your code and analyses (plus history thereof).
- [Mrshu says](https://talks.mareksuppa.com/teaching/2021/linux-cli-data-science/10-git/#6) that it's a good idea to learn Git, because it:
	- Helps avoid "versioning hell" (you know, files like `essay.doc`, `essay_v2.doc`, `essay_final.doc`)
	- Gives you the ability to "jump in time"
	- Helps you make your work "reproducible"
	- Makes it a bit more straightforward to work on common (larger) projects with others
- And don't forget that `Git != GitHub != GitLab`. Git is the technology that powers GitHub and GitLab who are "web frontends" and business who added things like [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

![](https://imgs.xkcd.com/comics/git_2x.png)

## Learn
- Start with [this article](https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car) that explains the main principles of Git using a fitting analogy with designing a car.
- Follow-up with reading [this tutorial](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) that sums up the very basis how to work with Git(Hub).
- For further getting a better grasp on some terms, it's worth going through [this one](https://xosh.org/explain-git-in-simple-words/).
- When it's time to start playing around on some examples, [this interactive website](https://learngitbranching.js.org/) is the perfect place for it.
- If it still doesn't make sense, maybe a [visual tutorial](https://agripongit.vincenttunru.com/) good be the way to go?
- Before pushing a first commit, it might be a good idea to find out how to write a [good commit message](https://cbea.ms/git-commit/). Like [this one](https://dhwthompson.com/2019/my-favourite-git-commit), for example.
- If there is still anything unclear, [Git docs/book](https://git-scm.com/book/en/v2) will almost certainly have an answer.
- In case you wish to discover more commands that you might encounter and you are a visual learner [this Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html) might be of interest to you.
- Still confused about some terms and hungry for some more (sometimes a bit technical) explanation, try [How to explain git in simple words?](https://xosh.org/explain-git-in-simple-words/).

## Snippets
- When anything goes wrong, [these code snippets](https://ohshitgit.com/) come particularly handy; alternatively [these from CIA](https://wikileaks.org/ciav7p1/cms/page_1179773.html).

- Make `.gitignore` ignore the files that were committed before added into the file:
```shell
  $ git rm -r --cached .
  $ git add .
  $ git commit -m ".gitignore is now working"
```

- Create repo from scratch through this `init.sh` script, based on [this](https://stackoverflow.com/questions/2423777/is-it-possible-to-create-a-remote-repo-on-github-from-the-cli-without-opening-br), which can be run through `sh init.sh repo-name` from directory (or better still `./init.sh repo-name` if you run `chmod u+x init.sh` first):
```shell
  #!/bin/zsh

  mkdir $1
  cd $1

  if [ "$2" = "--p" ] ; then
      python3 -m venv .venv
    source .venv/bin/activate
  fi

  git init
  gh repo create $1
  git pull origin main --rebase
  touch README.md
  atom ./
```

- See your log of changes in a nice format:
```shell
  git log --pretty=oneline
  # or
  git log --oneline --decorate --graph --all
```

- Copy-paste commits from one branch to another:
```shell
  git cherry-pick
```

- Print some nice stats about your changes
```shell
  git diff main...origin/your-branch | diffstat -Cm
  git diff master 00aa0157f23f50151f74e4ba203deb8f11621946 . | diffstat -Cm
```

- Get stats for commits per person per month
```shell
  git log --pretty=format:"%h,%aN,%ad" --date=format:'%Y/%m' | awk -F, '{print $2","$3}' | sort | uniq -c | awk '{print $3","$2","$1}' > output.csv
```

- Save your work for later
```shell
  git stash # stash all files
  git stash push -m "message" [file] # stash file with message
  git stash list # check stashed files
  git stash apply stash@{0} # apply the changes
  git stash drop stash@{0} # delete stashes
```

- Find a `bad` commit when there is a bug, more info [here](https://preset.io/blog/using-git-bisect-to-find-and-fix-bugs/) 
```shell
  git bisect start
  git bisect bad HEAD
  git bisect good xxxxxxx
  git bisect good|bad
  git bisect reset
```

## Links
- Learn from Mrshu [here](https://mareksuppa.com/teaching/linux-cli/2021/#lecture-11-git)
- Use [`lazygit`](https://github.com/jesseduffield/lazygit?tab=readme-ov-file#installation) for simple terminal UI for git commands
- Use Git in Python using [`GitPython`](https://github.com/gitpython-developers/GitPython)
- Version-control large datasets, esp. in ML projects, using [DVC](https://dvc.org/)
- [Merging vs Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
- [Git's data model](https://missing.csail.mit.edu/2020/version-control/)
- Git uses hashing via [SHA-1](https://en.wikipedia.org/wiki/SHA-1) – maps arbitrary-sized inputs to 160-bit outputs (which can be represented as 40 hexadecimal characters, e.g. commit hashes) but [no longer unbroken](https://shattered.io/); more info in [[Learn about cryptography]]
- There are [many](https://nvie.com/posts/a-successful-git-branching-model/) [different](https://www.endoflineblog.com/gitflow-considered-harmful) [workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), i.e. practices to follow when working on big projects.
- [Analyse how a Git repo grows over time](https://github.com/erikbern/git-of-theseus)
- You can also [store your private data](https://github.com/sobolevn/git-secret) inside a git repo
