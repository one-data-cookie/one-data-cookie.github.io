---
title: Understand that SQL queries start with FROM
lang: en Pochop, že SQL začíná od FROM
category: data-coding
tags: [idea, sql]
season: winter
created: 09 Oct 2019
updated: 07 Apr 2023
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