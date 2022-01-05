---
title: Beware using NULL in WHERE NOT IN
title-cs: 
category: data-coding
tags: [idea, sql]
season: spring
created: 28 Jan 2021
updated: 05 Jan 2022
sources: https://www.polderknowledge.nl/2018/03/02/sql-beware-null-where-not/
---
 
```sql
SELECT *
FROM pony  
WHERE id NOT IN (1, 2, NULL)
-- 0 rows, major wtf
```
 
It's because:
```sql
SELECT *
FROM pony  
WHERE NOT (  
  id = 1  
  OR id = 2  
  OR id = NULL  
)
```

And then remove the parenthesis using De Morgan’s laws:

```sql
SELECT *
FROM pony  
WHERE
  id != 1  
  AND id != 2  
  AND id != NULL
```
 
Like explained in the intro, `id != NULL` is always `NULL`, therefore the entire `WHERE` clause is always `FALSE`.

*Advice*:
Keep using subqueries, mind `NULL` values. Still better than `JOIN`s that can cause duplicates.