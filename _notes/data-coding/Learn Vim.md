---
title: Learn Vim
title-cs: 
category: data-coding
tags: [learn, vim]
season: winter
created: 14 Aug 2022
updated: 15 Aug 2022
sources:  Misc
---

## Philosophy
1. Optimise for reading code/text, not writing
2. Be programmable by itself (keystrokes are composable commands)
3.  Avoid the mouse (too slow) or even the arrow keys (too much hand movement)

In practice this means using different "modes of operation" for different kinds of tasks.

## Vim modes
- **NORMAL** (`Esc`, sometimes double)
    - the default mode the editor starts in
    - each keypress is equivalent to an editor command
-   **INSERT** (`i`)
    - the "normal" mode of other editors
    - each keypress actually inserts a character to a given file
-   **VISUAL** (`v`)
    - allows you to take a selection of text and apply various transformations
-   **COMMAND** (`*`)
    - lets you run commands that control the whole editor in its "command line"
    - technically known as _Command-line_ or _Cmdline_ mode

## Links
- [Presentation from Marek Suppa](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/06-vim/)
- [Why should you learn Vim in 2020](https://pragmaticpineapple.com/why-should-you-learn-vim-in-2020/): a nice reflection on the question may of you are asking
- [Why does Vim use hjkl](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys) a nice historical explanation of a rather strange phenomenon of hjkl.
- [Your problem with Vim is that you don't grok vi](https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118): probably one of the most famous StackOverflow answers of all time on how Vim relates to Vi and how you can learn much from well designed technologies that haven't changed much in the past.
- [Cheatsheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)
- [Vim Golf](http://www.vimgolf.com/): real Vim ninjas count every keystroke – do you?

## Snippets
**Normal**:
- `fx`: jump to the next occurrence of character `x`
- `u`: undo
- `d2w` delete two words or `3dd`delete three lines below or `df)` delete until you find `)` (= noun, verb, modifier)
- `/{regexp}<Enter>`: look up `{regex}` from the current line downwards (with `n` for next)

**Insert**:
- `a`: append to the right
- `A`: append to the end of line

**Visual**
-  `v`: characters
- `<Shift+v>`: lines
- `<Ctrl+v>`: blocks

**Command**:
- `:q!`: quit without saving
- `:x`: quit with saving
- `:history`, `:help command`
- `:s/{regexp}/{string}/{mod}`: substitute matched `{regexp}` for `{string}` with given `{mod}` (`g` for replace all, `c` with confirmation, `i` for case insensitive) whilst `\r` is the new line
- `:!{cmd}`: execute `{cmd}`
- `:r!{cmd}`: execute `{cmd}` and paste its stdout to the currently opened file (buffer)
- `:%!{cmd}`: pass the contents of the whole file (`%`) through `{cmd}`