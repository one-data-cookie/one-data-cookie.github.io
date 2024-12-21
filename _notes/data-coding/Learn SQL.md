---
title: Learn SQL
lang: en
category: data-coding
tags: [learn, sql]
season: summer
created: 2021-02-21
updated: 2024-12-21
sources: Misc
---

## Learning
- [SQL Climber](https://www.sqlclimber.com/assignments/beginner)
- [SQL Zoo](https://sqlzoo.net/wiki/SQL_Tutorial)
- [DataCamp](https://campus.datacamp.com/courses/introduction-to-sql/)
- [Summer of SQL](https://github.com/wjsutton/the_summer_of_sql)
- [Lost at SQL](https://lost-at-sql.therobinlord.com/)
- Window Functions – [intro](https://www.freecodecamp.org/news/window-functions-in-sql/), [questions](http://www.windowfunctions.com/)

## Reading
- Keep in mind that relational database is just one of [several database paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw), even though one of the most commonly used.
- [Learn why SQL should be the default choice for data transformation logic](https://www.robinlinacre.com/recommend_sql/)
- [I don't want to learn your garbage query language. I just want my SQL back.](https://erikbern.com/2018/08/30/i-dont-want-to-learn-your-garbage-query-language.html)
- [[Understand that SQL queries start with FROM]]
- [[Understand that CROSS JOIN UNNEST works through value tables]]
- [[Understand that CTEs are mostly pass-throughs now]]
- [[Use PARTITION BY on columns based on which one filters often]]
- [[Use linter, even for SQL]]
- [[Beware using NULL in WHERE NOT IN]]
- [[Create fizzbuzz for SQL to test analyst candidates]]

## Tools
- [Trino](https://trino.io/) – SQL query engine that runs at ludicrous speed. Used to be PrestoSQL.
- [SQLite](https://sqliteonline.com/)
- [Sribe](https://scribedata.app/) – API that provides line by line descriptions of your queries.
- [Malloy](https://www.malloydata.dev/) – ["React of SQL"](https://roundup.getdbt.com/p/lots-going-on-metrics-malloy-sanity)
- [Splink](https://github.com/moj-analytical-services/splink) – fast, accurate and scalable probabilistic data linkage
- [Ibis](https://github.com/ibis-project/ibis) – translate Python to SQL
- [SQLGlot](https://github.com/tobymao/sqlglot) – translate between SQL flavours

## Snippets
- [Snippets](https://sql-snippets.count.co/)
- [How to use Jinja templating for SQL in Python](https://geoffruddock.com/sql-jinja-templating/):
  - `from jinja2 import Template`
  - Combine minus signs on the start of the opening block and the start of the ending block.
  - Since we now have a nested loop, we need to keep track of two indices. We can do this by using the block {% raw %}`{% set outer_loop = loop %}`{% endraw %} to assign the outer loop to a new variable `outer_loop` before it is “replaced” by the inner loop.

## Notes
>  "SQL is [declarative](https://en.wikipedia.org/wiki/Declarative_programming), but used for [imperative](https://en.wikipedia.org/wiki/Imperative_programming) ends—we need to know how it works, step by step. Software is the opposite: It typically uses imperative means for declarative ends."
>  -- Benn Stancil, [The smol analyst](https://benn.substack.com/p/the-smol-analyst)
