---
title: Consider using notebooks for analyses
lang: en
category: data-analytics
tags: [tools, sql, python]
season: spring
created: 2021-09-15
updated: 2024-02-15
sources: Misc
---

- Well, [notebook programming environments](https://en.wikipedia.org/wiki/Notebook_interface) can be really handy for doing certain types of interactive or exploratory development.
- There is [quite a few of them](https://datasciencenotebook.org/).

## SQL & Python
- [Deepnote](https://deepnote.com/)
	- Free for individuals/small teams
	- SQL + Python
	- Modern-looking
	- Buzz, Czech
	- All in UI, including versioning
	- Should be integrated with dbt
- [Hex](https://hex.tech/)
	- Free for individuals
	- Python + SQL + vizzes
	- Modern-looking, most of the features
	- Generates buzz
	- Only UI version-control and collaboration
	- More info on how it works [here](https://hightouch.io/blog/hex-data-and-the-future-of-apps/)
	- [How could it work with dbt?](https://clrcrl.notion.site/clrcrl/How-I-think-about-Hex-and-dbt-e8aa7a8c5c394784bb265294487c147f)
	- [dbt Cloud integration](https://hex.tech/blog/dbt-integration/)

## Python
- [Jupyter Notebook](https://jupyter.org/)
	- Using SQL from Python
	- [tutorial](https://towardsdatascience.com/heres-how-to-run-sql-in-jupyter-notebooks-f26eb90f3259) and [magics](https://towardsdatascience.com/jupyter-magics-with-sql-921370099589)
	- [ReviewNB](https://www.reviewnb.com/)
- [Streamlit](https://streamlit.io/)
	- Interactive data apps built in Python, directly from Github
	- Enables data caching
	- Mostly built for ML though
- [Gradio](https://gradio.app/)
	- Build & share delightful ML apps
	- Quick to set up, using Python
	- Similar to Streamlit
- [Marimo](https://marimo.io/)
	- The future of Python notebooks
	- No baggage, very nicely works even in virtual env, no extensions
	- Solves a lot of [issues of standard Jupyter notebooks](https://www.youtube.com/watch?v=7jiPeIFXb6U)
	- Itself written and run in Python and nothing else – easier to git-version etc.
	- Has Copilot and Black out of the box

## SQL
- [Evidence](https://www.evidence.dev/)
	- Markdown + SQL + vizes
	- Open-source
	- dbt integration
	- Code-based, so version control in repo is an option
- [Tellery](https://tellery.io/)
	- SQL + simple vizes
	- Open-source
	- dbt integration
	- All in UI
- [Husprey](https://www.husprey.com/)
	- Not sure about pricing
	- SQL + vizes
	- Modern, but not so shiny as the others
	- Not too much info
- [Count](https://count.co/)
	- Free for individuals
	- Only SQL + vizzes
	- Works like CTEs
	- Modern-looking, drag-and-drop
	- Version control in UI, but with forking and merging

---

- [Mode](https://mode.com/)
	- Not  just a notebook, but a whole analytics solution
	- SQL editor
	- Python Notebook
	- Dashboards
- [PopSQL](https://popsql.com/)
	- Collaborative SQL editor
- [Querybook](https://www.querybook.org/)
	- Open-source big data IDE via a notebook interface from Pintrest
