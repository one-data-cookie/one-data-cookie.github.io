---
title: Understand that SQL queries start with FROM
lang: en
category: data-coding
tags: [idea, sql]
season: winter
created: 2019-10-09
updated: 2024-02-05
sources: https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/
---

When executing, the order actually is:

```sql
FROM
JOIN
ON
WHERE
GROUP BY
HAVING
SELECT -- including window functions
ORDER BY
LIMIT
```