---
title: Learn Python
title-cs: Nauč se Python
category: data-coding
tags: [learn, python]
season: autumn
created: 21 Feb 2021
updated: 15 Aug 2022
sources: Misc
---

* [Quora Discussion](https://www.quora.com/How-should-I-start-learning-Python-1)
* [81 Python Code Snippets for Everyday Problems](https://therenegadecoder.com/code/python-code-snippets-for-everyday-problems/)
* [pythonji](https://github.com/gahjelle/pythonji)
  * Write Python with emojis
* [Learn Python The Hard Way, 3rd Edition.pdf](../../assets/files/Learn-Python-The-Hard-Way.pdf)
* [Jupyter Samples](https://github.com/ibm-et/jupyter-samples)

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
