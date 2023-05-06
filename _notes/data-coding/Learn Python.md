---
title: Learn Python
lang: en
category: data-coding
tags: [learn, python]
season: summer
created: 21 Feb 2021
updated: 06 May 2023
sources: Misc
---

## Links
- [Quora Discussion](https://www.quora.com/How-should-I-start-learning-Python-1)
- [Automate the Boring Stuff with Python](https://www.udemy.com/course/automate/) or [book](https://automatetheboringstuff.com/2e/) – a practical programming course for office workers, academics, and administrators who want to improve their productivity
- [Learn Python The Hard Way, 3rd Edition.pdf](../../assets/files/Learn-Python-The-Hard-Way.pdf)
- [81 Python Code Snippets for Everyday Problems](https://therenegadecoder.com/code/python-code-snippets-for-everyday-problems/)
- [Jupyter Samples](https://github.com/ibm-et/jupyter-samples)
- Should you choose [Python over R](../../assets/files/r-vs-python.png)?

## Specific topics
- [How to Use Generators and `yield` in Python](https://realpython.com/introduction-to-python-generators/), together with [`yield from`](https://python.astrotech.io/advanced/generator/yield-from.html)
- [[Create pip-installable packages]]
- [[Use virtual environments to develop Python code]]

## Running remotely
- [Colaboratory](https://colab.research.google.com/)
	- Colaboratory, or 'Colab' for short, allows you to write and execute Python in your browser with zero configuration required, free access to GPUs, and easy sharing.
- [Kaggle](https://www.kaggle.com/)
	- Kaggle offers a no-setup, customizable, Jupyter Notebooks environment.
- [Python Anywhere](https://eu.pythonanywhere.com/)
	- Host, run, and code Python in the cloud!
- [Heroku](https://www.heroku.com/)
	- Build data-driven apps with fully managed data services.
- [Github Actions](https://github.com/features/actions)
	- You can [use Github Actions to run your Python on schedule](https://github.community/t/how-to-setup-github-actions-to-run-my-python-script-on-schedule/18335).
	- See [this implementation](https://github.com/michalskop/cz-covid-predictive-data) for pulling data into CSVs.
	- See [my updated implementation](https://github.com/one-data-cookie/brno-part-budget/blob/main/.github/workflows/cronjob.yaml)

## General tools
- [shillelagh](https://github.com/betodealmeida/shillelagh/)
	- Making it easy to query APIs via SQL
- [pythonji](https://github.com/gahjelle/pythonji)
	- Write Python with emojis
- [Pyscript](https://www.anaconda.com/blog/pyscript-python-in-the-browser)
	- Python in the browser – running directly on browser client through virtual machine
	- Has some limitations over standard Python
	- Slow but it's expected it will speed up

## Data tools
- [PyGWalker](https://github.com/Kanaries/pygwalker)
	-  Tableau-style UI for visual data exploration
- [Jupyter Notebooks in Excel](https://towardsdatascience.com/python-jupyter-notebooks-in-excel-5ab34fc6439)
	- Embed Jupyter into Microsoft Excel and write Python instead of VBA
- [Python Graph Gallery](https://python-graph-gallery.com/)
	- This website displays hundreds of charts, always providing the reproducible code! It aims to showcase the awesome dataviz possibilities of Python.
- [Python Data Visualization Libraries](https://mode.com/blog/python-data-visualization-libraries/)
	- Ten Python dataviz libraries for any field.


## Snippets
- Find out available versions for `pip` package:
```bash
pip install package==
```

- Check the list of packages installed, incl. their versions:
```bash
pip freeze
```

- Remove all packages that include a certain word:
```bash
pip list | grep "word" | cut -d ' ' -f1 | xargs sudo -H pip uninstall -y
```

- Pretty JSON in JupyterLab:
```python
import json
from IPython.display import JSON

JSON(json.loads('{"map": 1}'))
```


## Debugging
> "Code does not do what you expect it to do, but what you tell it to do."

> "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."
> -- Brian Kernighan, _Unix for Beginners_

- List of tools:
	- Time: [`time`](https://docs.python.org/3/library/time.html)
	- Debugging: [`pdb`](https://docs.python.org/3/library/pdb.html)
	- Static analysis:  [`mypy`](https://github.com/python/mypy) or [`pyflakes`](https://github.com/PyCQA/pyflakes)
	- Linting: [`pycodestyle`](https://github.com/pycqa/pycodestyle/) or [`pylint`](https://github.com/PyCQA/pylint) or even [`black`](https://github.com/psf/black)
	- Profiling: [`cProfile`](https://docs.python.org/3/library/profile.html) 
	- Line-by-line profiling: [`line_profiler`](https://github.com/pyutils/line_profiler)
	- Memory usage: [`memory_profiler`](https://github.com/pythonprofilers/memory_profiler)
	- Visualisation: [`pycallgraph`](https://github.com/gak/pycallgraph) or [`FlameGraph`](https://github.com/brendangregg/FlameGraph)
- Read [this chapter from The Missing Semester](https://missing.csail.mit.edu/2020/debugging-profiling/) to find out more
