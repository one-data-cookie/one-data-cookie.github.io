---
title: Learn regular expressions
lang: en 
category: data-coding
tags: [learn, regexp]
season: spring
created: 2022-04-26
updated: 2023-04-07
sources: Misc
---

## Intro
- Regular Expressions = "regex" or "regexp"
- Comes from the `ed` editor but you'll mostly encounter the `grep` program
- A quick way of describing a particular pattern of characters in text
- Allows for extremely effective search and replace
- Comes from the `ed` editor from UNIX but you'll mostly encounter the `grep` program

> Knowing [regular expressions] can mean the difference between solving a problem in 3 steps and solving it in 3,000 steps. When you’re a nerd, you forget that the problems you solve with a couple keystrokes can take other people days of tedious, error-prone work to slog through.
> 
> -- Cory Doctorow in [Here's what ICT should really teach kids: how to do regular expressions](https://www.theguardian.com/technology/2012/dec/04/ict-teach-kids-regular-expressions)


![](https://imgs.xkcd.com/comics/regular_expressions.png)

## Notes

### BRE vs ERE
- `grep` uses so called "basic regular expressions" (BRE) by default.
- What we normally consider "regular expressions" are actually "extended regular expressions" (ERE)
- The main difference is in backslashing the meta characters:
    -   **BRE**: `\?`, `\+`, `\{`, `\}`
    -   **ERE**: `?`, `+`, `{`, `}`
- EREs can be turned on in `grep` by passing the `-E` parameter.
- More details [here](https://www.johndcook.com/blog/2019/12/05/why-doesnt-grep-work/)

## Links
- [The origins of grep](https://thenewstack.io/brian-kernighan-remembers-the-origins-of-grep/): Brian Kernighan, one of the forefathers of UNIX discusses how `grep` came to be, and it makes for a rather interesting story! (If you are in a hurry, here is a [10 minute video](https://www.youtube.com/watch?v=NTfOnGZUZDk).)
- [RegexOne](https://regexone.com/): interactive tutorial.
- [Regex101](https://regex101.com/): an integrated development environment (IDE) for regular expressions.
- [Regexper](https://regexper.com/): visualises regular expressions as "proto programs".
- Games:
	- [RegexGolf](https://alf.nu/RegexGolf)
	- [Regex Tuesday](https://callumacrae.github.io/regex-tuesday/)
	- [RegexCrossword](https://regexcrossword.com/)
- There are also [some alternatives to `grep`](https://beyondgrep.com/feature-comparison/), esp. [`ripgrep` = `rg`](https://github.com/BurntSushi/ripgrep)
- You can even use regex to [search prime numbers](https://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/). [Not so easy](https://emailregex.com/) for [email addresses](https://www.regular-expressions.info/email.html) though.

## Tips
- Use [non-capturing groups](https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions), if needed
- If you are looking through file, use `find [path] -name [pattern]` or even `find [path] -regex [pattern]` (typically with `-type f` just for files) instead of `grep`