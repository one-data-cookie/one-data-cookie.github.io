---
title: Use MD5 function to create unique IDs
title-cs: 
category: coding
tags: [idea, sql]
season: spring
dates: [03 Apr 2021, 03 Apr 2021]
sources: https://blog.getdbt.com/one-analysts-guide-for-going-from-good-to-great/
---

* I first encountered this function when trying to join two tables together using about eight separate fields. Not ideal.
* The natural inclination is to create your own ID by simply concatenating a bunch of fields together. These columns are bad because they _kind of_ look like data but operate as an ID. It’s important to have a column whose sole function is to be a unique identifier for that row.
* Instead, use [MD5 functions](https://docs.aws.amazon.com/redshift/latest/dg/r_MD5.html) to create unique IDs on AWS. IDs that are obviously IDs reduce confusion among junior analyst and end users by removing semi-comprehensible data strings throughout your database.

```sql
select md5('Amazon Redshift')
# ---
# f7415e33f972c03abd4f3fed36748f7a (1 row)
```