---
title: Understand that SQL queries start with FROM
title-cs: Pochop, že SQL začíná od FROM
category: data-analysis
tags: [idea, sql]
season: winter
dates: [09 Oct 2019, 22 Feb 2021]
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