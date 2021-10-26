---
title: Learn SQL
title-cs: Nauč se SQL
category: coding
tags: [learn, sql]
season: autumn
dates: [21 Feb 2021, 25 Oct 2021]
sources: Misc
---

* [SQL Climber](https://www.sqlclimber.com/assignments/beginner)
* [Trino](https://trino.io/)
  * Trino, a SQL query engine that runs at ludicrous speed. Used to be PrestoSQL.
* [SQL Zoo](https://sqlzoo.net/wiki/SQL_Tutorial)
* Keep in mind that relational database is just one of [several database paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw), even though one of the most commonly used.
* [Snippets](https://sql-snippets.count.co/)
* [Sribe](https://scribedata.app/)
	* Scribe is an API that provides line by line descriptions of your queries.
* [Malloy](https://github.com/looker-open-source/malloy)
	* ["React of SQL"](https://roundup.getdbt.com/p/lots-going-on-metrics-malloy-sanity)
* [I don't want to learn your garbage query language. I just want my SQL back.](https://erikbern.com/2018/08/30/i-dont-want-to-learn-your-garbage-query-language.html)
* [How to use Jinja templating for SQL in Python](https://geoffruddock.com/sql-jinja-templating/):
	-  `from jinja2 import Template`
	- Combine minus signs on the start of the opening block and the start of the ending block.
	- Since we now have a nested loop, we need to keep track of two indices. We can do this by using the block `{% set outer_loop = loop %}` to assign the outer loop to a new variable `outer_loop` before it is “replaced” by the inner loop.