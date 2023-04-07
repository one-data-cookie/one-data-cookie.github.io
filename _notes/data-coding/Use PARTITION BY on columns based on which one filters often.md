---
title: Use PARTITION BY on columns based on which one filters often
lang: en Používej PARTITION BY na sloupce, podle kterých filtruješ
category: data-coding
tags: [idea, sql]
season: winter
created: 16 Mar 2019
updated: 07 Apr 2023
sources: https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-tips-for-amazon-athena/
---

Partitioning divides your table into parts and keeps the related data together based on column values such as date, country, region, etc. Partitions act as virtual columns. You define them at table creation, and they can help reduce the amount of data scanned per query, thereby improving performance.

When deciding the columns on which to partition, consider the following:
* Columns that are used as filters are good candidates for partitioning.
* Partitioning has a cost. As the number of partitions in your table increases, the higher the overhead of retrieving and processing the partition metadata, and the smaller your files. Partitioning too finely can wipe out the initial benefit.
* If your data is heavily skewed to one partition value, and most queries use that value, then the overhead may wipe out the initial benefit