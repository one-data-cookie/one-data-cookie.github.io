---
title: Make your metrics management scalable
lang: en
category: data-analytics
tags: [metrics]
season: winter
created: 2021-06-23
updated: 2023-04-07
sources: Misc
---

## Problem
[Headless BI](https://basecase.vc/blog/headless-bi)
- Imagine instead that you could disentangle metric definition from visualization. In this world, the teams that own metrics would be able to define them once, in a way that’s consistent across dashboards, automation tools, sales reporting, and so on.

## Solutions
- dbt [soon](https://github.com/dbt-labs/dbt-core/issues/4071), [for sure](https://github.com/dbt-labs/dbt-core/pull/4235)
- [Metriql](https://metriql.com/)
- [Cube SQL API](https://cube.dev/docs/backend/sql)