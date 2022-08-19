---
title: Learn CLI
title-cs: 
category: data-coding
tags: [learn, cli]
season: spring
created: 19 Aug 2021
updated: 19 Aug 2022
sources: Misc
---

## UNIX Philosophy
- [Unix philosophy](http://catb.org/esr/writings/taoup/html/ch01s06.html) (by [Doug McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy), creator of Unix pipes) is to
	- Write programs that do one thing and do it well
	- Write programs to work together
	- Write programs to handle text streams, because that is a universal interface

## Materials
- Learn long-term from:
	- [Marek Šuppa](https://mareksuppa.com/teaching/linux-cli/2020/)
	- [The Missing Semester at MIT](https://missing.csail.mit.edu/)
	- [Great Practical Ideas in CS at CMU](https://www.cs.cmu.edu/~07131/f20/)
- If you are in a hurry:
	- [Learn X in Y minutes: bash](https://learnxinyminutes.com/docs/bash/)
- Read:
	- [UNIX: A History and a Memoir](https://www.amazon.com/UNIX-History-Memoir-Brian-Kernighan/dp/1695978552) by Brian W Kernighan
	- [The Cuckoo's Egg: Tracking a Spy Through the Maze of Computer Espionage](https://www.amazon.com/Cuckoos-Egg-Tracking-Computer-Espionage/dp/1416507787/) by Cliff Stoll

## Worth reading or watching
- [The UNIX Command Language](https://github.com/susam/tucl): This paper from 1976 (!), written by no one else but Ken Thompson, is the first paper ever published on the Unix shell.. If for nothing else, it's almost certainly worth reading for its amazing clarity of presentation and concise treatment.
- [AT&T Advertisement for UNIX](https://www.youtube.com/watch?v=tc4ROCJYbm0&feature=youtu.be&t=297): Watch Brian Kernighan describe (in a very down-to-earth fashion) what's great about UNIX, especially how pipes play an important role in that.
- [Introduction to text manipulation on UNIX-based systems](https://developer.ibm.com/articles/au-unixtext/): A very extensive in-depth guide into what's possible with just the standard tools, when it comes to text processing on UNIX-like systems. (Spoiler alert: a lot!)
- [Linux Filesystem Hierarchy](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/): A deeper discussion on the various parts of the standard Linux filesystem, describing several of the directories in much higher detail than the slides ever could. Less in-depth also [on Wikipedia](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard).
- [How dotfiles came to be](https://web.archive.org/web/20190211155005/https://plus.google.com/+RobPikeTheHuman/posts/R58WgWwN9jp): A short story by Rob Pike about how *dotfiles* came to be and what it says about the unintended effects of cutting corners and just "hacking around" a problem.
- [[Learn regular expressions]]: Quite a bit of information on regular expressions.
- [[Learn Vim]]: quite a bit of details about Vim.
- [Symlinks, Hardlinks, Reflinks and ML projects](https://dev.to/robogeek/reflinks-vs-symlinks-vs-hard-links-and-how-they-can-help-machine-learning-projects-1cj4): This article goes deeper into how these concepts of links can be used for various Machine Learning (ML) projects where you work with a ton of data.


## Snippets
- Customise prompt like [here](https://dev.to/cassidoo/customizing-my-zsh-prompt-3417):

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

- `read`: Read a value from input:

```shell
echo "What's your name?"
read Name # not declaring a new variable
echo Hello, $Name!
```

- `ls`: List your files properly:

```shell
ls -l
```

Make sure to [read the info right](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/07-attrs-find-xargs/images/perms1.png) if needed.

- `chmod`: Change permissions to make a file executable:

```shell
# chmod {u,g,o,a}{+,-,=}{r,w,x} file
chmod u+x samlapi.py # add execute rights for user
```

Or you can use [octal representation](https://talks.mareksuppa.com/teaching/2022/unix-summer-of-cli/07-attrs-find-xargs/images/permissions.png).

- `sudo`: Do as superuser to check your `PATH`:

```shell
sudo nano /etc/paths
```

- `kill`: Stop a process and start again, right where you left off, based on [this](https://major.io/2009/06/15/two-great-signals-sigstop-and-sigcont/):

```shell
kill -SIGSTOP [pid]
kill -SIGCONT [pid]
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

-  `find`, `xargs`: "Parametrise" standard input line by line and "apply" a command on each line, esp. useful with preceding pipe, e.g. for removing empty files:

```shell
find . -type f -empty | xargs rm # or xargs -I{} rm {}
```

More info on this is [here](http://offbytwo.com/2011/06/26/things-you-didnt-know-about-xargs.html), for instance.

- `curl`: Outputs the file it reads from the network to `stdout`.

```shell
curl uniba.sk > index.html
```

- `sed`: Take in a stream of text line by line and transform it in one, esp. for substitution (`s`) but also deletion (`d`) or printing (`p`).

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
- `#!/bin/bash`: Use a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) as a header to define the absolute path to the file's interpreter directly in the script (and not later on the command line), i.e. `./script.sh` instead of `bash script.sh`
- `printenv`: See all pre-set variables
- `export VAR=exported`: Export variable to be exposed to child processes, otherwise variables are local to the process in which they are defined.
- `echo '$name' vs echo "$name"`: First returns verbatim, second interpolates first. Well, (almost) [always double-quote your variable references](http://www.compciv.org/topics/bash/variables-and-substitution/).
- `echo ${my_array[0]}` or sometimes just simply `echo ${MY_VAR}`: Parameter expansion is also useful
- `a=$(echo 'hello')`: Command expansion to save output to variable.
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

# Most often, `test` (`man 1 test`) is used; or [ ] for short
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