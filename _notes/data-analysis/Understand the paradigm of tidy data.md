---
title: Understand the paradigm of tidy data
title-cs:
category: data-analysis
tags: [idea, cleaning]
season: spring
dates: [02 Mar 2021, 02 Mar 2021]
sources: Hadley Wickham, RStudio, https://vita.had.co.nz/papers/tidy-data.pdf
---

A huge amount of effort is spent cleaning data to get it ready for analysis, but there has been little research on how to make data cleaning as easy and effective as possible. This paper tackles a small, but important, component of data cleaning: data tidying.

Tidy datasets are easy to manipulate, model and visualise, and have a specific structure: each variable is a column, each observation is a row, and each type of observational unit is a table.

This framework makes it easy to tidy messy datasets because only a small set of tools are needed to deal with a wide range of un-tidy datasets. This structure also makes it easier to develop tidy tools for data analysis, tools that both input and output tidy datasets.

The advantages of a consistent data structure and matching tools are demonstrated with a case study free from mundane data manipulation chores.

 In **tidy data**:
 1. Each variable forms a column.
 1. Each observation forms a row.
 1. Each type of observational unit forms a table.
