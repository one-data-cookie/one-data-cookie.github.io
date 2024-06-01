---
title: Keep it ACID
lang: en
category: data-engineering
tags: [idea]
season: winter
created: 2024-05-31
updated: 2024-05-31
sources: https://en.wikipedia.org/wiki/ACID
---

# ACID
Set of properties that ensure reliable processing of database transactions, maintaining data integrity and consistency.

- **Atomicity**: All parts of a transaction must complete successfully, or the transaction is rolled back.
- **Consistency**: Transactions must transition the database from one valid state to another, adhering to all rules and constraints.
- **Isolation**: Transactions are processed independently and invisibly to each other until they are finalized.
- **Durability**: Once a transaction is committed, it remains so, even in case of a system failure.
