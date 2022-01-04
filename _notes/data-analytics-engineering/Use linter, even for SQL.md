---
title: Use linter, even for SQL
title-cs: 
category: data-analytics-engineering
tags: [ideas, sql]
season: spring
dates: [19 Jun 2021, 19 Jun 2021]
sources: https://towardsdatascience.com/sqlfluff-the-linter-for-modern-sql-8f89bd2e9117
---

### Roles of a linting tool
**Style**
* Nobody likes to nitpick on style in PR reviews, and nobody likes to get these reviews either. Not only is it a bad experience for everyone involved, it also gets in the way of the important conversation around business logic, architecture and testing.
* Raising style issues is a good start, but enforcing them automatically is what allows developers to truly forget about formatting.

**Code Smells**
* Beyond “ugly” code, there is another category of “problematic” code. Code that isn’t _invalid_ per say, but might indicate an issue in the logic.

**Repository of best practices**
* Well documented rules can become a great companion for people trying to learn a new coding language and its best practices.
* In SQLFluff we document our rules with an “Anti-pattern”, the “Best practice” and a short description explaining _why_ a rule exists.

### Challenges of linting modern SQL
* **Several dialects** -> We define a _base_ dialect which is not tied to any specific engine but loosely based on ANSI, and we derive database-specific dialects from this base.
* **Templating with Jinja in dbt/Airflow** ->Today we support turning off templating, using Jinja, or using a dbt templater which re-uses the dbt compiler internally.

### The future of [SQLFluff](https://www.sqlfluff.com/)
* [Plugins](https://docs.sqlfluff.com/en/stable/developingplugins.html) allow users to develop custom rules in their companies.
* Interfaces: [online](https://github.com/sqlfluff/sqlfluff-online), [VSCode](https://github.com/sqlfluff/vscode-sqlfluff), [GitHub Actions](https://github.com/sqlfluff/sqlfluff-github-actions), [CI](https://docs.sqlfluff.com/en/stable/production.html)
* Using metadata from the SQL engines to implement type-safety.

### Contributing to SQLFluff
If you do decide to write code, there are different areas of the project you can contribute to:
* **Dialects**: mostly parsing logic.
* **Rules**: documentation, adding new rules, adding an automated fix for a rule.
* **Templating**: supporting new templating engines, improving the existing templaters and how they interact with the rest of the code like when a fix is applied for a rule.
* **Performance**: speed, cpu and memory usage.

