---
title: Optimise PostgreSQL to use it as data warehouse
title-cs: 
category: data-engineering
tags: [idea]
season: winter
dates: [24 Jun 2021, 24 Jun 2021]
sources: https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/
---

-   Don't use the [same server](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#configuring-postgres-as-a-data-warehouse) as your production system
-   Upgrade to pg 12+ (or avoid [common table expressions](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#avoid-common-table-expressions) in your queries)
-   Go [easy on indexes](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#use-indexes-sparingly) – less is more
-   Consider [partitioning](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#partitioning) long tables
-   Ensure you're not [I/O-bound](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#minimize-disk-and-io)
-   [Vacuum analyze](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#vacuum-after-bulk-inserts) after bulk insertion
-   Explore [parallel queries](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#look-at-parallel-queries)
-   Increase [statistics sampling](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#increase-statistics-sampling)
-   Use [fewer columns](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#use-fewer-columns) on frequently-queried tables
-   At scale, consider a [dedicated warehouse](https://www.narrator.ai/blog/using-postgresql-as-a-data-warehouse/#consider-a-data-warehouse-at-scale)