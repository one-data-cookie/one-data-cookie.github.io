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
* [Github](https://github.com/fishtown-analytics/dbt)
* [COALESCE Conference](https://www.getdbt.com/coalesce)
* https://discourse.getdbt.com/t/how-we-set-up-our-computers-for-working-on-dbt-projects/243
* [Materialisation types](https://docs.getdbt.com/docs/building-a-dbt-project/building-models/materializations)
* https://atom.io/
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


What if you could actually implement your data pipelines as a graph of materialized views?

Taken far enough, the promise of such an idea would be to build a _declarative data lake_, where the code that manages the lake focuses more on defining _what_ the datasets are and less on _how_ to mechanically build or update them.

The ideas presented in this post are not new. But materialized views never saw widespread adoption as a primary tool for building data pipelines, likely due to their [limitations](https://stackoverflow.com/a/25642149/877069)^[No support of progressive / partial updates.] and ties to relational database technologies. Perhaps with this new wave of tools like dbt and Materialize we’ll see materialized views used more heavily as a primary building block in the typical data pipeline.

https://nchammas.com/writing/data-pipeline-materialized-view
