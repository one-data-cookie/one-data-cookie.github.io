---
title: Learn Git
title-cs: Nauč se Git
category: coding
tags: [learn, git]
season: spring
dates: [13 Feb 2021, 3 Apr 2021]
sources: https://stackoverflow.com/questions/18418718/git-still-adds-and-tracks-folders-marked-in-gitignore
---

## General
* Doporučil bych začít tím, že si přečtete [tento článek](https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car), který na pěkné asociaci vysvětluje princip Gitu.
* Následně bych pokračoval postupným přečtením [tohoto článku](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners), který shrnuje úplné základy, jak pracovat s Git(Hub)em.
* Pro bližší pochopení některých pojmů stojí za to přečíst [tento článek](https://xosh.org/explain-git-in-simple-words/).
* Velmi bych doporučil, abyste si to potom procvičili na nějakých příkladech. Mně se osvědčil [tento interaktivní web](https://learngitbranching.js.org/), který se doporučuje i na konci předchozího článku.
* Až začnete tvořit první commits, tak si doporučuju ještě přečíst [tento krátký text](https://juffalow.com/other/write-good-git-commit-message), jak dobře psát commit messages.
* Pokud vám cokoliv bude nejasné, skoro určitě to najdete v [této Git dokumentaci](https://git-scm.com/book/en/v2), který je zároveň online knížkou.

## Tips
* Až se něco pokazí, [tyhle code snippets](https://ohshitgit.com/) se určitě budou hodit.
* Make `.gitignore` ignore the files that were commited before added into the file

```
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```

![](https://imgs.xkcd.com/comics/git_2x.png)