---
title: Contemplate on who the analysts of today and tomorrow are
title-cs: 
category: analytics-engineering
tags: [idea]
season: summer
dates: [19 Jul 2021, 17 Aug 2021]
sources: Misc
---

## Users of a silly language called SQL
- Indirectly described by Jamie Brandon in his [Against SQL](https://scattered-thoughts.net/writing/against-sql)
- The relational model is great but SQL is the only widely-used implementation of the relational model, and it is inexpressive, incompressible, and non-porous.
	- *inexpressive*: some things are difficult to express, prone to break, or completely impossible to code
	- *incompressible*: misses variables, functions, expression substitution
	- *non-porous*: not too open for interaction with other systems
- Due to above, it was impossible to develop a library system, so each implementation needs its own ecosystem and already-huge specs keep growing which makes the implementation, innovation and portabilty harder.
- Additional design flaws in SQL database interfaces resulted in moving as much logic as possible to the application layer and limiting the use of the most valuable features of the database.
- It's probably too late to fix the above and make SQL a modern programming language, so there is potentially a huge amount of value to be unlocked by replacing SQL (by learning from its mistakes), and more generally in rethinking where and how we draw the lines between databases, query languages and programming languages.

## Heavier coders and workers than appreciated
- Desribed by Pedram Navid in his [For SQL](https://pedram.substack.com/p/for-sql)
- The article above is not true for him as:
	- SQL was supposed to be dead several times but it survived 50 years and it will survive further.
	- It's understandable to people, compared to other languages.
	- Much of the arguments are against parts of the language that almost no one interacts with.
	- Composability is a valid point but beaten by dbt for instance.
- My real fear is that it discourages people from learning SQL and that it makes those whose primary language is SQL feel inadequate.
	- He worries that the original articles suggests that the entire analytics edifice built on top of SQL is irreparably flawed.
	- Diminishing SQL, particularly its obscure technical quirks, "perpetuates that myth that data analysis is a second-class skill.”^[That's in line with what Tristan Handy, the founder and CEO of dbt Labs thinks – "If you can’t tell, I have a chip on my shoulder. As a career data analyst, I’ve always felt like we were under-appreciated and underestimated: by our companies who don’t create career paths for us, by the vendors that built our tools, by the VCs who fund the vendors who built our tools..." (from [this blogpost](https://blog.getdbt.com/fishtown-analytics-announces-29-5m-fundraise/))]
- There’s a persistent unspoken aura in software engineering around data in general. I’ve seen too often the othering and second-classing of these (data) roles.
- The work is hard, harder than appreciated.
	- The truth is data is hard. The ecosystem is hard. Data is messy. It’s hard to test. We haven’t figured out the right tooling, the right debugging, the right environments, or even the right way to teach it. The level of sophistication and tooling over the past few years has exploded, as has customer expectations of personalization. All driven by data.
- The people who do the work are not any less skilled. And the tools and languages they use are not any less useful because they don’t have features of other languages.

## Curious minds to be guided by analytics engineers
- Described by Benn Stencil in his [Analytics is at a crossroads](https://benn.substack.com/p/analytics-is-at-a-crossroads)
- A lot of people are only finding doors wedged shut by unnecessary technical requirements.
- The article above is true enough, but it sidesteps the more fundamental point: _Analytics isn’t primarily technical. While technical skills are useful, they’re not what separate average analysts from great ones. When someone questions if we’re real engineers, we shouldn’t feel the need to pull out our technical credentials. We should instead say, “So what? That’s not our job.”
	-   Why do we feel so insulted when people don’t give us credit for this particular dimension of our job? You can’t be an effective analyst without being able to clearly communicate in emails, written documents, and presentations, but most of us don’t feel a need to be called writers.
	-   Rather than fighting this claim, we should demand that others judge us against a different yardstick. And that starts with judging ourselves in the same way.
- Positioning analytics inside engineering—or, more broadly, emphasizing the technical aspects of analysts’ work—has real effects. It suggests that great analysts need to be, first and foremost, great engineers. (...) I hate this. In so many ways, I hate this.
1. First, it’s factually wrong. By and large, the hardest and most important problems analysts work on aren’t technical, or even mathematical.
2. Elevating technical skills also encourages us to not just develop those skills, but to see our value in how well we’re able to apply them.
3. In some cases, technical skills can even be counterproductive.  Analysts who are technically and statistically proficient tend to do the same, defaulting to overpowered solutions over more elegant—and ultimately more useful—ones.
4. Finally, as Pedram alluded to, framing analysts in technical terms shuts people out of a field they’re otherwise qualified to work in. Emphasizing the technical elements of the role discourages people—and [women](https://hbr.org/2014/08/why-women-dont-apply-for-jobs-unless-theyre-100-qualified) and [people of color](https://www.gem.com/blog/creating-an-inclusive-job-description) in particular—from considering careers in data at all.
- Analytics engineering can lead us down two paths:
1. It becomes the barrier between engineering and analytics. Data teams can enthusiastically hire creative historians, sociologists, and political scientists who are exceptional communicators rather than mathematicians who are passable coders. With the help and support of analytics engineers, analysts can learn the technical skills they need and focus on being the curious puzzle solvers they are.
2. It becomes the bleed. It’s the conjunction that puts analysts and engineers in the same sentence, creating a continuous spectrum from each role to the next. Analysts, once they become technical enough, “graduate” to becoming analytics engineers. Senior analysts aren’t analytical specialists, but data generalists who can be both analyst and engineer. Though analytics engineering widens what we consider to be technical, technical skills are still the ruler by which we measure ourselves.
- I hope we choose the former path—for ourselves and, more importantly, for the versions of my brother who are looking for open doors, and more than capable of doing the work on the other side of ours.
- The point of AEs isn’t to trade off the technical knowledge for the analytical skills, but to elevate analysis done by analysts, not self-serve drag and drop madlib stuff.
- Great analytics engineers need to be good analysts. A really good AE should be `50% AE, 25% analyst, and 25% project manager`. (Both from [here](https://getdbt.slack.com/archives/C02A4CHCD2S/p1628256268037000).)