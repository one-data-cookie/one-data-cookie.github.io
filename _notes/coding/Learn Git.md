---
title: Learn Git
title-cs: Nauč se Git
category: coding
tags: [learn, git]
season: spring
dates: [13 Feb 2021, 13 Feb 2021]
sources: https://stackoverflow.com/questions/18418718/git-still-adds-and-tracks-folders-marked-in-gitignore
---

## General
*   Doporučil bych začít tím, že si (ještě jednou) přečtete [tento článek](https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car), který na pěkné asociaci vysvětluje princip Gitu.
*   Následně bych pokračoval postupným přečtením [tohoto článku](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners), který shrnuje úplné základy, jak pracovat s Git(Hub)em.
*   Velmi bych doporučil, abyste si to potom procvičili na nějakých příkladech. Mně se osvědčil [tento interaktivní web](https://learngitbranching.js.org/), který se doporučuje i na konci předchozího článku.
*   Až začnete tvořit první commits, tak si doporučuju ještě přečíst [tento krátký text](https://juffalow.com/other/write-good-git-commit-message), jak dobře psát commit messages.

## Tips
* Make `.gitignore` ignore the files that were commited before added into the file

```
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```