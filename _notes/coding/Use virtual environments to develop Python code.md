---
title: Use virtual environments to develop Python code
title-cs: 
category: coding
tags: [idea, python]
season: spring
dates: [04 Apr 2021, 03 Oct 2021]
sources: https://towardsdatascience.com/why-you-should-use-a-virtual-environment-for-every-python-project-c17dab3b0fd0, https://towardsdatascience.com/venvs-pyenvs-pipenvs-oh-my-2411149e2f43
---

## What
* I like to think of virtual environments as package bookshelves for each of my projects. If I’m working on a cooking project, there is no need for me to have a book on surfing.
* Creates special isolated environments where all the packages and versions you install only apply to that specific environment. It’s like a private island! — but for code.

## Why
* Having only the packages I need on my “bookshelf” eliminates all chances for me to possibly experience gross global installation and package collision errors and allows me to focus on what really matters — my code.
* Just like packages, I can also specify what specific version of python I want for my project.
* You can organize your packages much better and know exactly the packages you need to run your code incase someone else needs to run it on their machine
* Your main Python package directory does not get flooded with unnecessary Python packages

## How
### `virtualenv`
*  Avoid the use of after Python 3.3+.

### `venv`
```shell
# create a python3 environment within "env" folder
$ python3 -m venv .venv

# activate the environment
$ source .venv/bin/activate

# deactivate the environment
$ deactivate
```

- Make sure it correctly points to the distribution in your virtual environment, and not your global distribution, via `which python` and `which pip`. If it doesn't work well, you can always make sure you use the right one by specifying the path to `pip` and/or `python` when calling them, e.g. `./.venv/bin/pip3 list`.

### `pyenv`
* Used to isolate Python versions within your machine.

### `pipenv`
* It is a `venv` on steroids: it strives to combine `pipfile`, `pip` and `venv` into a single command.

```shell
# install pipenv
$ pip install pipenv

# create environments
$ pipenv env
```

* Use the command `pipenv` (instead of `pip`) to install all your packages.
* Allows you to:
	* specify into which environment you install the package
	* integrate directly with PyPi or a local repository
	* create a single pipfile with separate sections for each environment (this is an alternative to the `requirements.txt` file required for each environment with `virtualenv` and `venv`)
	*  `pipenv lock` your virtual environment; this creates a `pipfile.lock` file that resolves all dependencies required for a build
*  The biggest advantage pipenv brings, in my opinion, is how it handles dependency management compared to `requirements.txt` and `pip freeze`.


### `direnv`
* When you `cd` into a directory containing a `.env`, it automatically activates the environment.

## Summary
Depending on the scope of your project, I ultimately suggest two options: `venv` and `pipenv`. If you do not need all the bells and whistles that `pipenv` brings, I suggest that you give `venv` a look. On the other hand, if that `pipenv` list struck out to you, go ahead and use that!
