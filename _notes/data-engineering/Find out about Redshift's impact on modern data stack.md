---
title: Find out about Redshift's impact on modern data stack
lang: en
category: data-engineering
tags: [idea, mds, history]
season: spring
created: 2020-12-19
updated: 2024-02-05
sources: https://blog.getdbt.com/future-of-the-modern-data-stack/
---

We saw a tremendous amount of innovation immediately following the launch of Redshift in 2012, unlocking brand new levels of performance, efficiencies, and new behaviors. We then saw a maturation period as these nascent products were deployed by the market, improved their technology, and rounded out their feature sets. By now, these products are ready to act as a foundation on which successive innovations can be built.

- *Ingestion*: Fivetran, Stitch
- *Warehousing*: Snowflake, Bigquery, Redshift
- *Transformation*: dbt
- *BI*: Looker, Mode, Periscope, Chartio, Metabase, Redash

The biggest thing missing here is the ability to feed the data back into tools. Something we do in Slido through Airflow.

---

## Cambrian Explosion I, 2012 - 2016

In my opinion, the modern data stack catalyzed around the release of Amazon Redshift in October of 2012.

This night-and-day difference is driven by the internal architectural differences between MPP (massively parallel processing) / OLAP systems like Redshift and OLTP systems like Postgres. In short, Redshift can respond to analytical queries, processing many joins, on top of huge datasets, 10-1000x faster than OLTP databases.

10-1000x performance increases tend to change the way that you think about building products. Prior to the launch of Redshift, the hardest problem in BI was speed: trying to do relatively straightforward analyses could be incredibly time-consuming on top of even medium-sized datasets, and an entire ecosystem was built to mitigate this problem.
- Data was transformed prior to loading into the data warehouse because the warehouse was too slow (and constrained) to do this heavyweight processing itself.
- BI tools did lots of local data processing to end-around the warehouse bottleneck to give users acceptable response times.
- Data processing was heavily governed by central teams to avoid overwhelming the warehouse with too many end-user requests.

### Deployment, from 2016 - 2020

Each technology individually goes through its own "S" curve, from development to deployment, and as each round of technologies begins to mature it both attracts new customers and becomes more technologically mature.

### Cambrian explosion II, from 2021 - 2025

![](../__files/data-stack.png)