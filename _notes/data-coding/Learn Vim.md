---
title: Learn Vim
lang: en 
category: data-coding
tags: [learn, vim]
season: spring
created: 2022-08-14
updated: 2026-03-07
sources: Misc
---

## Philosophy
1. Optimise for reading code/text, not writing
2. Be programmable by itself (keystrokes are composable commands)
3. Avoid the mouse (too slow) or even the arrow keys (too much hand movement)

In practice this means using different "modes of operation" for different kinds of tasks.

## Vim modes
- **NORMAL** (`<ESC>`, sometimes double)
    - Default mode the editor starts in; one should spend most of the time here
    - Each keypress is equivalent to an editor command
-   **INSERT** (`i`)
    - "Normal" mode of other editors
    - Each keypress actually inserts a character to a given file
-   **VISUAL** (`v`)
    - Allows you to take a selection of text and apply various transformations
-   **COMMAND** (`*`)
    - Lets you run commands that control the whole editor in its "command line"
    - Technically known as _Command-line_ or _Cmdline_ mode
- You use the `<ESC>` key a lot when using Vim: consider remapping Caps Lock to Escape ([macOS instructions](https://vim.fandom.com/wiki/Map_caps_lock_to_escape_in_macOS)).

## Links
- [Presentation from Marek Suppa](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/06-vim/)
- [Why should you learn Vim in 2020](https://pragmaticpineapple.com/why-should-you-learn-vim-in-2020/): a nice reflection on the question may of you are asking
- [Why does Vim use hjkl](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys) a nice historical explanation of a rather strange phenomenon of hjkl.
- [Your problem with Vim is that you don't grok vi](https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118): probably one of the most famous StackOverflow answers of all time on how Vim relates to Vi and how you can learn much from well designed technologies that haven't changed much in the past.
- [Cheatsheet](http://www.viemu.com/vi-vim-cheat-sheet.gif) & [Best Vim Tips](https://vim.fandom.com/wiki/Best_Vim_Tips)
- [Vim Golf](http://www.vimgolf.com/): real Vim ninjas count every keystroke – do you?
- Customise vim by editing `~/.vimrc`, e.g. like [this](https://missing.csail.mit.edu/2020/files/vimrc), or installing [useful plugins](https://vimawesome.com/)
- Once you get you to it, you might want to [use it everywhere](https://reversed.top/2016-08-13/big-list-of-vim-like-software/)

## Snippets
**Normal**:
- Basic movement: `hjkl` (left, down, up, right)
- Words: `w` (next word), `b` (beginning of word), `e` (end of word)
- Lines: `0` (beginning of line), `^` (first non-blank character), `$` (end of line)
- Screen: `H` (top of screen), `M` (middle of screen), `L` (bottom of screen)
- Scroll: `Ctrl-u` (up), `Ctrl-d` (down)
- File: `gg` (beginning of file), `G` (end of file)
- Line numbers: `:{number}<CR>` or `{number}G` (line {number})
- `fx`: jump to the next occurrence of character `x`
- `/{regexp}<Enter>`: look up `{regex}` from the current line downwards (with `n` for next)
- `u`: undo
- `y`: copy/yank
- `p`: paste

**Insert**:
- `d2w` delete two words or `3dd`delete three lines below or `df)` delete until you find `)` (= noun, verb, modifier); generally `d{motion}`
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
- `:sp`, `:svp`: split windows

## Alternatives
- `nano`: best for beginners and quick edits
- `emacs`: highly extensible and powerful, for advanced users
- `vim`: efficient for those familiar with its modal editing
- `ed`: minimal and historical, not practical for most users
- `cat`: utility for viewing files, not editing
- -.-
- [Helix](https://helix-editor.com/): a post-modern modal text editor

![](https://imgs.xkcd.com/comics/real_programmers.png)
