---
title: Use INNER JOIN over subqueries mostly
lang: en
category: data-coding
tags: [idea, sql]
season: spring
created: 2023-08-23
updated: 2023-08-23
sources: Misc
---

It's mostly believed that `INNER JOIN`s over `WHERE IN` subqueries, i.e.:

Not this:
```sql
select count(*)
from t1
where col in (select col from t2)
```

But rather this:
```sql
select count(*)
from t1
inner join t2
    on t1.col = t2.col
```

> Often the results from a **correlated sub-query** can be replicated using an `INNER JOIN`. Depending on what your requirements are, using an `INNER JOIN` may be more efficient because it only makes one pass through the data whereas the **correlated sub-query** must execute for each row in the outer query.
> -- [DataCamp](https://campus.datacamp.com/courses/improving-query-performance-in-sql-server/sub-queries-and-presence-or-absence?ex=4)

> Historically, explicit joins usually win, hence the established wisdom that joins are better, but optimisers are getting better all the time, and so I prefer to write queries first in a logically coherent way, and then restructure if performance constraints warrant this.
> -- [Marcel Cantos, Stack Overflow](https://stackoverflow.com/a/2577188)

> A `LEFT JOIN` can be faster than an equivalent subquery because the server might be able to optimize it better—a fact that is not specific to MySQL Server alone.
> -- [MySQL docs](https://dev.mysql.com/doc/refman/5.7/en/rewriting-subqueries.html)

> Generally speaking, using an `INNER JOIN` is often more efficient than using a subquery with an `IN` clause. The `INNER JOIN` allows the database engine to optimize the query execution by using indexes and other optimization techniques, whereas the subquery with IN might be executed as a separate step, leading to less efficient processing.
> -- [ChatGPT](https://chat.openai.com/share/83172c2d-7dc1-45bf-968e-d4c5608941fe)

But be aware that it really depends. Like, for Athena and big tables, you might easily run into pushing its resources a bit too much and then optimising against `JOIN`s, i.e. cartesian products:
> 1. Try to reduce the resource required by intermediate results in the plan:  
>     a. Reduce the number of columns projected.  
>     b. Try to split the query into 2 or more queries and materialize the any the earlier parts in a permanent table.  
>     c. Look hard to see if plan stalling operation like sorts on subqueries can be eliminated.
> 2. Split the query into smaller data increments.
> 3. Try different join orders.
> -- [AWS Athena, Query exhausted resources at scale factor](https://repost.aws/questions/QUtoS_74Y6SgahbwRrDi-wJA/athena-query-exhausted-resources-at-this-scale-factor)
