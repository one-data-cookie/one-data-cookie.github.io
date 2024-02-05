---
title: Prefer trunk-based development over other branching models
lang: en 
category: data-coding
tags: [idea]
season: spring
created: 2021-03-17
updated: 2023-04-07
sources: https://trunkbaseddevelopment.com/
---

### One-line summary
A source-control branching model, where developers collaborate on code in a single branch called ‘trunk’[^1], resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after.

### Claims
-   You should do Trunk-Based Development instead of GitFlow and other branching models that feature multiple long-running branches
-   You can either do a direct to trunk commit/push (v small teams) or a Pull-Request workflow as long as those feature branches are short-lived and the product of a single person.

### For small teams
![](https://trunkbaseddevelopment.com/trunk1b.png)

### At scale
![](https://trunkbaseddevelopment.com/trunk1c.png)

### Notes
* Trunk-Based Development is a key enabler of [Continuous Integration](https://trunkbaseddevelopment.com/continuous-integration/) and by extension [Continuous Delivery](https://trunkbaseddevelopment.com/continuous-delivery/). (...) [It] ensures the codebase is always releasable on demand and helps to make Continuous Delivery a reality.
* The largest of development organizations, like Google (as mentioned) and Facebook practice it at scale.
* Very similar to [GitHub flow](https://trunkbaseddevelopment.com/alternative-branching-models/index.html#modern-claimed-high-throughput-branching-models)

 [^1]: _main_ or _master_, in Git nomenclature