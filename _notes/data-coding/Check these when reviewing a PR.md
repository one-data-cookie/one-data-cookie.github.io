---
title: Check these when reviewing a PR
title-cs: 
category: data-coding
tags: [checklist]
season: spring
created: 04 Mar 2021
updated: 05 Jan 2022
sources: https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067, https://blog.getdbt.com/how-to-review-an-analytics-pull-request/, https://mtlynch.io/code-review-love/
---

# Overall
## Pull request size
It should be small. The pull request must have a maximum of 250 lines of change.

> 10 lines of code = 10 issues. 500 lines of code = "looks fine."
> -- Code reviews.

## Feature breaking
Whenever its possible break pull requests into smaller ones.

## Single Responsibility Principle
The pull request should do only one thing.

## Title
Make a self-explanatory title describing **what** the pull request does.

## Description
Detail with **what** was changed, **why** it was changed, and **how** it was changed.

# For PR reviewers

### ✅ Represents one logical unit of work
A good pull request should solve a specific thing. Watch out for a PR that is trying to do too much.

### ✅ Description provides context
You should be able to read the description and know what to expect before even looking at the code

### ✅ Continuous integration tests have completed successfully
You should have a CI environment set up to test pull requests.

### ✅ Code adheres to the project’s style guide
When I review a PR that has inconsistent formatting, it takes longer for my brain to read and understand what the code is trying to accomplish.

### ✅ Every new model has a test
I scan the list of files changed and make sure that every completely **new** model created in the pull request has a corresponding test for at least uniqueness and that the unique key is not null.

### ✅ Documentation is added

### ✅ Code is DRY
1. Can the analyst rewrite the model in a more DRY way?
-   Does the analyst repeat code?
-   Does the work duplicate logic that already exists?

2. Can the DAG be modified so that fields can be defined earlier and then cascaded more seamlessly?

3. Should parts of the code by pulled in macros? Or, can macros from be utilized?

4. In a complex model, can CTEs be broken up into models of their own? This is helpful if:
-   The piece of the query can be used elsewhere in the project
-   The piece of the query should be tested to avoid future errors

### ✅ Data returns expected results
For more junior analysts, I do a more thorough code check and actually query the models built in the CI environment to familiarize myself with the work.

### ✅ Models are materialized appropriately

### ✅ Naming is clear and consistent

# For PR authors
Improving code review technique helps your reviewer, your team, and, most importantly: you.

-   **Learn faster**: If you prepare your changelist properly, it directs your reviewer’s attention to areas that support your growth rather than boring style violations. When you demonstrate an appreciation for constructive criticism, your reviewer provides better feedback.
    
-   **Make others better**: Your code review techniques set an example for your colleagues. Effective author practices rub off on your teammates, which makes your job easier when they send code to you.
    
-   **Minimize team conflicts**: Code reviews are a common source of friction. Approaching them deliberately and conscientiously minimizes arguments.

## The golden rule: value your reviewer’s time
Reviews drastically improve when both participants trust each other. Your reviewer puts in more effort when they can count on you to take their feedback seriously. Viewing your reviewer as an obstacle you have to overcome limits the value they offer you.

## Techniques
1. Review your own code first
	- Don’t just check for mistakes – imagine reading the code for the first time. What might confuse you?
1. Write a clear changelist description
	- For a deeper dive into writing excellent changelist descriptions, see [“How to Write a Git Commit Message”](https://chris.beams.io/posts/git-commit/) by Chris Beams and [“My favourite Git commit”](https://dhwthompson.com/2019/my-favourite-git-commit) by David Thompson.
1. Automate the easy stuff
	- Automated tests should be part of your team’s standard workflow.
1. Answer questions with the code itself
	- Code comments are an acceptable solution, but they’re strictly inferior to code that documents itself naturally.
1. Narrowly scope changes
	- “While I’m here,” they think, “I’ll just fix this other thing.”
1. Separate functional and non-functional changes
	- If a piece of code requires refactoring _and_ behavioral changes, it should happen in two to three changelists:
1. Break up large changelists
	-  It’s tedious to break up your code to find a subset that makes a working, intelligible change, but it yields better feedback and puts less strain on your reviewer.
1. Respond graciously to critiques
	- The fastest way to ruin a code review is to take feedback personally.
1. Be patient when your reviewer is wrong
	- Look for ways to refactor the code, or add comments that make the code more [obviously correct](https://wiki.c2.com/?TwoWaysToDesign).
1. Communicate your responses explicitly
	- Establish conventions on your team that make it clear who’s “holding the baton” at any point.
	- For every note that requires action, respond explicitly to confirm that you’ve addressed it.
1. Artfully solicit missing information
	- "This is confusing." > "What changes would be helpful?"
1. Award all ties to your reviewer
    - When your reviewer makes a suggestion, and you each have roughly equal evidence to support your position, defer to your reviewer. Between the two of you, they have a better perspective on what it’s like to read this code fresh.
1. Minimize lag between rounds of review
	- Once you send your code out, driving the review to completion should be your highest priority.
