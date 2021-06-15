---
title: Learning dbt
title-cs: Nauč se dbt
category: analytics-engineering
tags: [learn, dbt]
season: autumn
dates: [21 Feb 2021, 21 Feb 2021]
sources: Misc
---

* [What is dbt?](https://blog.getdbt.com/what--exactly--is-dbt-/)
* [Analytics Viewpoint](https://docs.getdbt.com/docs/about/viewpoint/)
* Fundamentals?
* [Github](https://github.com/fishtown-analytics/dbt)
* [COALESCE Conference](https://www.getdbt.com/coalesce)
* https://discourse.getdbt.com/t/how-we-set-up-our-computers-for-working-on-dbt-projects/243
* [Materialisation types](https://docs.getdbt.com/docs/building-a-dbt-project/building-models/materializations)
* https://atom.io/
* https://github.com/smomni/howtheydbt
* https://www.youtube.com/watch/zc8wLzoAkVc
* http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html
* https://discourse.getdbt.com/t/your-essential-dbt-project-checklist/1377
* https://discourse.getdbt.com/t/why-the-fishtown-sql-style-guide-uses-so-many-ctes/1091/10
* https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/macros/utils/simple_cte.sql
* https://www.youtube.com/channel/UCVpBwKK-ecMEV75y1dYLE5w/videos?view=0&sort=p&flow=grid
* https://courses.getdbt.com/courses/fundamentals
* [Slack Community](https://community.getdbt.com/)
* [Learning on Demand](https://courses.getdbt.com/collections)
* [Locally Optimistic](https://locallyoptimistic.com/)
	*  Blog for current and aspiring data analytics leaders
* https://technically.dev/posts/what-your-data-team-is-using
* https://victorcouste.github.io/data-tools/
* https://towardsdatascience.com/data-stacks-for-fun-nonprofit-part-iii-dcfd46da9f9f
* https://discourse.getdbt.com/t/why-the-fishtown-sql-style-guide-uses-so-many-ctes/1091
* https://discourse.getdbt.com/t/writing-models-backwards-an-unorthodox-approach-to-data-transformation/2287
* https://materialize.com/
* https://hub.getdbt.com/tailsdotcom/dbt_artifacts/latest/
* https://hightouch.io/ (Reverse ETL)
	* • **ETL or Extract, Transform and Load:** data moves from cloud apps to a data warehouse via a robust transformation layer built into the ETL tool

	* **ELT or Extract, Load, and Transform:** data moves from cloud apps to a data warehouse directly post which transformation and data modelling take place in the warehouse via SQL. The main difference here is that with ETL, transformation takes place before data is loaded into the warehouse, whereas with ELT, transformation takes place afterwards

	* **Reverse ETL:** data moves from a data warehouse to cloud apps. Typically, the core transformation takes place in the warehouse before the reverse ETL process, but the reverse ETL tool may have a minimal transformation layer to fit data to an external system’s schema

	(https://www.hightouch.io/blog/data-integration/)

* https://github.com/emilyriederer/dbtplyr (dbtplyr)


What if you could actually implement your data pipelines as a graph of materialized views?

Taken far enough, the promise of such an idea would be to build a _declarative data lake_, where the code that manages the lake focuses more on defining _what_ the datasets are and less on _how_ to mechanically build or update them.

The ideas presented in this post are not new. But materialized views never saw widespread adoption as a primary tool for building data pipelines, likely due to their [limitations](https://stackoverflow.com/a/25642149/877069)^[No support of progressive / partial updates.] and ties to relational database technologies. Perhaps with this new wave of tools like dbt and Materialize we’ll see materialized views used more heavily as a primary building block in the typical data pipeline.

https://nchammas.com/writing/data-pipeline-materialized-view


--- 

```jinja
{%- set my_query -%}
SELECT distinct {{pivot_column}}  FROM {{my_table}} ;
{%- endset -%}
{%- set results = run_query(my_query) -%}
{%- if execute -%}
{%- set items = results.columns[0].values() -%}
{%- endif %}
```

Jinja uses a run_query() function, which executes SQL and returns a result object. Using the result object properties, we obtain a distinct list of column values as an array which we can then assign to a variable for subsequent use.

https://serge-g.medium.com/dynamic-sql-pivots-with-dbt-dea16d7b9b63