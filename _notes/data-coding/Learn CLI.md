---
title: Learn CLI
lang: en 
category: data-coding
tags: [learn, cli]
season: summer
created: 2021-08-19
updated: 2023-04-07
sources: Misc but mostly Mrshu from https://mareksuppa.com/teaching/linux-cli-data-science/2021/
---

## Why, really?
- [Become shell literate](https://drewdevault.com/2020/12/12/Shell-literacy.html): Attempt at trying to persuade you that this whole thing makes sense. _Full disclosure_: the author of the article is a well-known free software advocate, so he is far from impartial in his article. That said, he is certainly not alone in suggesting it; here is another example from [Letters To A New Developer](https://letterstoanewdeveloper.com/2019/02/04/learn-the-command-line/)

## UNIX philosophy
- [Unix philosophy](http://catb.org/esr/writings/taoup/html/ch01s06.html) (by [Doug McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy), creator of Unix pipes) is to:
	- Write programs that do one thing and do it well
	- Write programs to work together
	- Write programs to handle text streams, because that is a universal interface

## Materials
- Learn long-term from:
	- [Marek Šuppa](https://mareksuppa.com/teaching/linux-cli-data-science/2021/)
	- [The Missing Semester at MIT](https://missing.csail.mit.edu/)
	- [Great Practical Ideas in CS at CMU](https://www.cs.cmu.edu/~07131/f20/)
- If you are in a hurry:
	- [Linux Productivity Tools slides](https://www.usenix.org/sites/default/files/conference/protected-files/lisa19_maheshwari.pdf)
- If you are in a real hurry:
	- [Learn X in Y minutes: bash](https://learnxinyminutes.com/docs/bash/)

## Worth reading or watching
- [The UNIX Command Language](https://github.com/susam/tucl): This paper from 1976 (!), written by no one else but Ken Thompson, is the first paper ever published on the Unix shell.. If for nothing else, it's almost certainly worth reading for its amazing clarity of presentation and concise treatment.
- [AT&T Advertisement for UNIX](https://www.youtube.com/watch?v=tc4ROCJYbm0&feature=youtu.be&t=297): Watch Brian Kernighan describe (in a very down-to-earth fashion) what's great about UNIX, especially how pipes play an important role in that.
- [Introduction to text manipulation on UNIX-based systems](https://developer.ibm.com/articles/au-unixtext/): A very extensive in-depth guide into what's possible with just the standard tools, when it comes to text processing on UNIX-like systems. (Spoiler alert: a lot!)
- [Linux Filesystem Hierarchy](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/): A deeper discussion on the various parts of the standard Linux filesystem, describing several of the directories in much higher detail than the slides ever could. Less in-depth also [on Wikipedia](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard).
- [How dotfiles came to be](https://web.archive.org/web/20190211155005/https://plus.google.com/+RobPikeTheHuman/posts/R58WgWwN9jp): A short story by Rob Pike about how *dotfiles* came to be and what it says about the unintended effects of cutting corners and just "hacking around" a problem.
- [[Learn regular expressions]]: Quite a bit of information on regular expressions.
- [[Learn Vim]]: quite a bit of details about Vim.
- [Symlinks, Hardlinks, Reflinks and ML projects](https://dev.to/robogeek/reflinks-vs-symlinks-vs-hard-links-and-how-they-can-help-machine-learning-projects-1cj4): This article goes deeper into how these concepts of links can be used for various Machine Learning (ML) projects where you work with a ton of data.
- [ShellCheck](https://www.shellcheck.net/#): This page allows you to easily find bugs in your shell scripts.
- [UNIX: A History and a Memoir](https://www.amazon.com/UNIX-History-Memoir-Brian-Kernighan/dp/1695978552) by Brian W Kernighan: A historical account of how UNIX came to be by someone who was there when it happened. It will help you paint the proper picture of what is meant when people say stuff like "UNIX legacy" or "the UNIX era".
- [The Cuckoo's Egg: Tracking a Spy Through the Maze of Computer Espionage](https://www.amazon.com/Cuckoos-Egg-Tracking-Computer-Espionage/dp/1416507787/) by Cliff Stoll: A true story of a physicist who tracked one of the first documented "hackers" who he found snooping around his systems. The best part is that it's all real, down to the (obviously UNIX) commands that were used.

## Make yourself at home
- Use [iTerm2](https://iterm2.com/), the terminal for MacOS
- Use [`tmux`](https://github.com/tmux/tmux), terminal multiplexer with [simple setup](https://www.ocf.berkeley.edu/~ckuehl/tmux/) that can be also used for pair-programming
- Use [`ohmyzsh`](https://ohmyz.sh/) as framework for managing zsh configuration or in particular [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions) for autosuggestion in zsh shell
- Later, use aliases or functions and define them in `.bashrc` or `.bash_profile`, e.g. `alias cx='chmod +x'` or `mcd() { mkdir -p $1; cd $1 }`
- Customise prompt through [`starship`](https://starship.rs/) or like [here](https://dev.to/cassidoo/customizing-my-zsh-prompt-3417):

```shell
export VIRTUAL_ENV_DISABLE_PROMPT=1
function virtualenv_info {
    [ $VIRTUAL_ENV ] && echo ' ('`basename $VIRTUAL_ENV`')'
}

# https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
source ~/.git-prompt.sh
function git_info {
  __git_ps1 "(%s) "
}

# https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html
setopt PROMPT_SUBST ; PS1='%F{green}@%*%f %F{cyan}[%n]%f%F{yellow}$(virtualenv_info)%f%F{red} $(git_info)%f%F{magenta}%~%f $ '
```

## Commands
- Anatomy of a typical command:

```shell
# cmd1 -options arg1 (pipe) cmd2 arg2
ls -lh /etc | grep 'conf'
```

- `!!`: repeat the last command
- `cd -`: change to previous directory; btw check out [`z`](https://github.com/rupa/z) or [`j`](https://github.com/wting/autojump), too
- `which`: check if a command is available and if so, from where it is run
- `man`/`info` (or [`tldr`](https://github.com/tldr-pages/tldr) or even [`tealdeer`](https://github.com/dbrgn/tealdeer) as modern alternatives): show docs
- `cat` (or [`bat`](https://github.com/sharkdp/bat) as modern alternative): read your files.
- `touch file.txt`: create an empty file
- `ctrl-r`: recall from history; `history`: print history
- Almost all of these are [core utilities commands](https://en.wikipedia.org/wiki/List_of_GNU_Core_Utilities_commands)

- `less`: Read your long files (pagination, scrolling, etc.):

```shell
cat long_text.txt | less
```

- `read`: Read a value from input:

```shell
echo "What's your name?"
read Name # not declaring a new variable
echo Hello, $Name!
```

- `ls` (or [`lsd`](https://github.com/Peltoche/lsd) or [`exa`](https://the.exa.website/) as modern alternatives): List your files properly but make sure to [read the info right](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/07-attrs-find-xargs/images/perms1.png) if needed.:

```shell
ls -lh
```

- `chmod`: Change permissions to make a file executable (or you can use [octal representation](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/07-attrs-find-xargs/images/permissions.png).)

```shell
# chmod {u,g,o,a}{+,-,=}{r,w,x} file
chmod u+x samlapi.py # add execute rights for user
```

- `sudo`: Do as superuser to check your `PATH`:

```shell
sudo nano /etc/paths
```

- `ps` (or [`procs`](https://github.com/dalance/procs) as modern alternative): List all process statuses:

```shell
ps -e
```

- `kill`: Kill a process or just stop a process and start again, right where you left off, based on [this](https://major.io/2009/06/15/two-great-signals-sigstop-and-sigcont/):

```shell
# kill
ps -e | grep -i "[process name]"
kill -9 [pid]

# stop and start again
kill -SIGSTOP [pid] # or -19
kill -SIGCONT [pid] # or -18
```

`jobs`: List your running process and use`<Ctrl-Z>` with `bg`, `fg` to send them to background/foreground:

```shell
$ sleep 1000
^Z
[1]  + 18653 suspended sleep 1000

$ jobs
[1]  + suspended sleep 1000

$ bg %1
[1]  - 18653 continued sleep 1000

$ jobs
[1]  - running sleep 1000
```

```

- `bc`: Calculate better:

```shell
echo "9.45 / 2.327" | bc -l # => 4.06102277610657498925
```

- `cut`, `paste`: Take `n`th column from CSV and sum it:

```shell
cat file.csv | cut -d, -f[n] | paste -sd+ | bc
```

- `iconv`: Convert text form one character encoding to another:

```shell
iconv -f [encoding] -t [encoding] -o [outputfile] [inputfile]
```

-  `find` (or [`fd`](https://github.com/sharkdp/fd) as modern alternative or [`fzf`](https://github.com/junegunn/fzf) for fuzzy finding), `xargs`: "Parametrise" standard input line by line and "apply" a command on each line, esp. useful with preceding pipe, e.g. for removing empty files; more info [here](http://offbytwo.com/2011/06/26/things-you-didnt-know-about-xargs.html):

```shell
find . -type f -empty | xargs rm # or xargs -I{} rm {}
```

- `ssh` (or [`mosh`](https://mosh.org/) as a modern alternative): Access remote servers through a "Secure SHell" whilst generating keys via `ssh-keygen` (stored in `~/.ssh/id_ed25519`) and even using `ssh-agent` for not needing to type the passphrase every time or `~/.ssh/config` to create aliases for hosts, e.g. as [on GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh):

```shell
ssh foobar@192.168.1.42 ls -l
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519
ssh-copy-id -i .ssh/id_ed25519 foobar@remote

# copy a file
cat localfile | ssh remote_server tee serverfile # tee: STDIN > STDOUT + file

# copy more files
rsync source_folder destionation_folder # or you can try rclone

# local port forwarding
ssh -L 9999:localhost:8888 foobar@remote_server # link local 9999 to remote 8888
```

- `curl`: Outputs the file it reads from the network to `stdout`; handy to use [`pup`](https://github.com/EricChiang/pup) if working with HTML and [`jq`](https://stedolan.github.io/jq/) if with JSON:

```shell
curl uniba.sk > index.html
```

- `sed` (or [`sd`](https://github.com/chmln/sd) as modern alternative): Take in a stream of text line by line and transform it in one, esp. for substitution (`s`) but also deletion (`d`) or printing (`p`).

```shell
# cat [filename] | sed [addr]X[options] # addr=lines, x=cmd
cat text.txt | sed -E 's/Unix/UNIX/g' # s/[regex]/[replacement]/[flags]
cat text.txt | sed -E 's/(her)/[\1]/g' # \m to reference groups in ()
cat text.txt | sed -E 's/[0-9]+/[&]/g' # & to reference the whole match
```

- `awk`:  Scan file for lines that match any of a set of patterns and make an action. It basically translates the below into simple `pattern { action1[; action2] }` (yet [quite powerful](https://iridakos.com/programming/2019/05/16/remove-duplicate-lines-preserving-order-linux)).

```python
for line in file.readlines():
	for pattern, actions in patterns_actions:
		if pattern.match(line):
			eval(actions)
```

```shell
cat text.txt | awk '/regex/' # rows that match regex
cat text.txt | awk -F, '{ print $n }' # print n-th column for each row where , is Field Sep
cat text.txt | awk '$4 == "F" { print $1 }' # 1st col for rows with "F" in col4
ls *.txt -l | awk '$5 >= 100 { sum += $5 } END { print sum }' # sum sizes of txt files over 100 B
cat people.txt | awk '{ p[$4]++ } END { for(i in p) print i, ":", p[i] }' # agg
```

## Scripting
- Some notes on it below but if you want to go deeper, [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/) would be where to go
- Especially when starting, it might be a good idea to use [`spellcheck`](https://github.com/koalaman/shellcheck)
- `#!/bin/bash`: Use a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) as a header to define the absolute path to the file's interpreter directly in the script (and not later on the command line), i.e. `./script.sh` instead of `bash script.sh`
- `printenv`: See all pre-set variables
- `export VAR=exported`: Export variable to be exposed to child processes, otherwise variables are local to the process in which they are defined.
- `echo '$name' vs echo "$name"`: First returns verbatim, second interpolates first. Well, (almost) [always double-quote your variable references](http://www.compciv.org/topics/bash/variables-and-substitution/).
- `echo ${my_array[0]}` or sometimes just simply `echo ${MY_VAR}`: Parameter expansion is also useful
- `a=$(echo "hello")`: Command expansion to save output to variable.
- `{1..10}`: Brace expansion even more
- `$(( 10 + 5 ))`: [Simply calculate](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Shell-Arithmetic) or maybe just use `bc`
-  `0` exit code is success ("true"), `1` is fail "false").
- `cmd1 | cmd2`, `cmd1 && cmd2`, `cmd1 || cmd2`, `cmd1 ; cmd2`: Multiple commands can be run together.

- If statements:

```shell
#!/bin/bash
if [ "$USER" == "root" ]; then
	echo "You may proceed";
elif groups | grep -q sudo; then
	echo "Please become root to run this"
else
	echo "Sorry, only root is allowed to run this";
fi

# Most often, `test` (`man 1 test`) is used; or [ ], or even [[ ]], for short
# BTW, there is a difference: http://mywiki.wooledge.org/BashFAQ/031
if [ -d .tmp ]; then
	echo "The directory .tmp exists; proceeding."
fi
```

- Cases:
```shell
#!/bin/bash
case "$1" in
	root) echo "Welcome, you can come in" ;;
	mrshu) echo "Please provide password" ;;
	*) echo "Name not recognized";;
esac
```

- While loop:

```shell
#!/bin/bash
while ps -ef | grep -v grep | grep firefox; do
	echo "Firefox not running, will check in 10 seconds"
	sleep 10
done
```

- For loop:

```shell
#!/bin/bash
for i in $(seq 1 5); do
	echo "Checking number $i"
done
```

- Inplace files:

```shell
sh << EOF
echo "Hello World"
END<enter>
```

- Fallback for no args

```shell
if [ $# -eq 0 ]; then
    #no args
else
    #some args
fi
```

## Modern alternatives
- [Modern Alternatives of Command-Line Tools](https://zaiste.net/posts/shell-commands-rust/)
- Modern shells:
	- [`fish`](https://fishshell.com/): friendly interactive shell
	- [`xonsh`](https://xon.sh/): pythonic shell
	- [`nushell`](https://www.nushell.sh/): new type of shell, esp. for working with data

## When (not) to use it
In general, bash scripts are useful for short and simple one-off scripts when you just want to run a specific series of commands. bash has a set of oddities that make it hard to work with for larger programs or scripts:
- bash is easy to get right for a simple use case but it can be really hard to get right for all possible inputs. For example, spaces in script arguments have led to countless bugs in bash scripts.
- bash is not amenable to code reuse so it can be hard to reuse components of previous programs you have written. More generally, there is no concept of software libraries in bash.
- bash relies on many magic strings like `$?` or `$@` to refer to specific values, whereas other languages refer to them explicitly, like `exitCode` or `sys.args` respectively.

Therefore, for larger and/or more complex scripts we recommend using more mature scripting languages like Python or Ruby.