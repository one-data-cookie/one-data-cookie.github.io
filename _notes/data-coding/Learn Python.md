---
title: Learn Python
title-cs: Nauč se Python
category: data-coding
tags: [learn, python]
season: autumn
created: 21 Feb 2021
updated: 23 Aug 2022
sources: Misc
---

## Links
- [Quora Discussion](https://www.quora.com/How-should-I-start-learning-Python-1)
- [81 Python Code Snippets for Everyday Problems](https://therenegadecoder.com/code/python-code-snippets-for-everyday-problems/)
- [pythonji](https://github.com/gahjelle/pythonji)
	- Write Python with emojis
- [Learn Python The Hard Way, 3rd Edition.pdf](../../assets/files/Learn-Python-The-Hard-Way.pdf)
- [Jupyter Samples](https://github.com/ibm-et/jupyter-samples)

![](../../assets/files/r-vs-python.png)

## Snippets
- Find out available versions for `pip` package:
```bash
pip install package==
```

- Check the list of packages installed, incl. their versions
```bash
pip freeze
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
