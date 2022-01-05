---
title: Understand that CTEs are mostly pass-throughs now
title-cs: 
category: data-analytics
tags: [idea, sql]
season: winter
created: 02 Mar 2021
updated: 05 Jan 2022
sources: https://discourse.getdbt.com/t/ctes-are-passthroughs-some-research/155, https://news.ycombinator.com/item?id=7024419
---

- All modern analytical database optimizers appear to treat our “import statement” CTEs as pass-throughs. These CTEs have no impact on performance whatsoever, and just act in the way that we want: as a great tool to clean up our code but not ultimately to change the explain plan.
- Tested on: Redshift, Bigquery, Snowflake
- Yet, CTEs originally used to be – and sometimes still are – optimisation boundaries, i.e. databases are not allowed to optimise across CTEs, hence they are always be resolved first. If you later join that CTE against some other table, eliminating most of the rows fetched by the CTE, you will have wasted all the time for retrieving these rows. This used to be the case for PostreSQL for instance (due to this being an SQL standard).
- However, there [might be some limits](https://medium.com/@AtheonAnalytics/snowflake-query-optimiser-unoptimised-cf0223bdd136) to it.

