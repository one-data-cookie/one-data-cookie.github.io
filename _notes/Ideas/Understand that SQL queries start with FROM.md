---
title: Understand that SQL queries start with FROM
title-czech: Pochop, že SQL začíná od FROM
category: data-analysis
tags: [idea, sql]
season: winter
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

---

    Created: 09 Oct 2019
    Updated: 22 Feb 2021
    Sources: https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/