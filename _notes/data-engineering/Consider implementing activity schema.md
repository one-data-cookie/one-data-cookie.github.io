---
title: Consider implementing activity schema
title-cs: 
category: data-engineering
tags: [idea]
season: spring
dates: [22 Oct 2021, 22 Oct 2021]
sources: https://www.activityschema.com/, https://github.com/ActivitySchema/ActivitySchema/blob/main/spec.md
---

## Principles
- At its core an activity schema consists of transforming raw tables into a single, time series table called an activity stream. All downstream plots, tables, materialized views, etc used for BI are built directly from that single table, with no other dependencies.
- There are two types of tables in an Activity Schema
	1. activity stream (one per activity schema)
	2. entity table (optional; one per activity schema)
- Sometimes metadata is only relevant to a particular activity and still doesn't fit in the three feature columns. To support this there is actually a third type of table in the activity schema, called an enrichment table, but it's not used very often. Borrowing is generally a better strategy, and joining in another table has a performance impact.
- The activity stream table is designed for fast queries on common data warehouses like Redshift, BigQuery, and Snowflake. Nearly all modern data warehouses are column-oriented – tables with fewer columns and many rows perform fastest.
- Wide tables (with lots of useful columns) are built only when querying the activity stream, not when defining activities.
- There is a strong separation between modeling and querying. Any changes to how activities are built has no downstream impact on the queries depending on them. This makes it extremely easy to keep up with changes in production systems. Any type of source data change — from a changed column to swapping out to a completely different system with a new set of tables — simply requires updating the activity, while changing none of the downstream queries. This makes each activity the actual source of truth for each concept in the warehouse.
- An activity schema differs in some fundamental ways to more traditional approaches
	1. data is in a time-series format
	2. queries only select from the activity stream table (and optionally join in enrichment tables)
	3. any activity can be related (joined) to any other activity using only the entity and timestamp
- This means that querying is a bit different but substantially more powerful. An activity schema does not require any foreign key joins. All joins are self-joins to the `activity_stream` table, and they only use the entity and timestamp columns. This means there is always a way to relate any data in an activity schema to anything else. This means that someone could build a customer lifetime value analysis, and run it on any number of companies' data with minimal modification.
- And because the activity schema ensures all activities can relate to each other, there are no queries that have to be hand-built. As long as an activity exists, it can be used for querying, analysis, etc with no extra work. Implementations of an activity schema (see below) will often provide a UI for the user to select activities and the relationships between them, and automatically generate and run queries.

## My notes
- The main notion sounds intriguing. It might certainly simplify the *staging* layer of transformations.
- It could be especially powerful and useful if data streaming is already a part of your data stack.
- It might have a great impact for business users for whom a star schema is often too complex.
- What I like:
	- It's quite a natural concept as it follows a customer-journey point of view.
	- One *main* table, hence much simpler for maintanance, documentation, understanding.
	- Avoids duplication of attributes, super-wide tables, dependencies
	- Clearly separates modelling and querying layers
	- High reusability of code
	- Opens door for automation, esp. funnels
- What I see as a challenge:
	- Working with features – one might need to have wide dimension tables anyway, should there be a lot of them, which is often the case.
	- One won't avoid complexity altogether, esp. as business and its needs grow – several streams (for each "customer"), a lot of dimension tables (if a lot of features), and still keeping reporting tables (as transformations of streams).
- It'd be very interesting to see a repo with a proper implementation of it, as well as talk to someone who transitioned from a standard relational schema to activity schema. Alternatively, if someone uses it alongside star schema.
