---
title: Keep BI tool light and simply clever to truly enable self-service
title-cs: 
category: data-business
tags: [idea]
season: spring
created: 18 Apr 2021
updated: 07 Apr 2023
sources: https://benn.substack.com/p/self-serve-still-a-problem, https://getdbt.slack.com/archives/C0VLNUUTZ/p1617896542331100
---

- By conceptualizing self-serve BI as a simplified means for doing an analyst’s job, we’re not only making the self-serve problem too hard—we’re solving the wrong thing altogether.
- When you ask an analyst a question, their first thought is often, “how might we measure that?” They work like scientists, creating new datasets and aggregating them in novel ways to draw conclusions about specific, nuanced hypotheses. Non-analysts work like journalists, collating existing metrics and drawing conclusions by considering them in their totality. Rather than looking for new ways to assess a question, they start by asking, “how do we currently measure that?”
- In this context, it doesn't make sense to design self-serve tools to answer the complex questions that analysts ask. A better solution recognizes what that majority wants: **metric extraction.** They want to choose from a list of understood KPIs, apply it to a filtered set of records, and aggregate it by a particular dimension. It's analytical [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)—show me _average order size_ for _orders that used gift cards_ by _month_.
- As a data team, each question we get is a little different, and doesn’t always fit into the clean structure above. In those cases, it’s easy to expand the boundaries of our existing self-serve tooling just a bit, adding a new option here or a new complication there. Eventually, we tell ourselves, with enough additions like these, our self-serve models will be “complete”. But this path is a catch-22.
- The more questions people can theoretically self-serve, the fewer they can practically self-serve. As you add more options, self-serve tools stop looking like Mad Libs, and start looking like a blank document that requires people to write their own stories in their entirety. While that’s what analysts want, it’s not what everyone wants.
- Opinionated simplicity is better than indifferent optionality.

---

- What we found also important is report retention policy. If report was not visited in last 3 months it goes to quarantine. After one year the report is archived. We are also planning to do this with metrics. Think it is super important since you do not have to manage and repair metrics that nobody uses.
- Obviously, these things aren’t absolutes, but I think we should support three classes of work:  
	- *Dashboards*. This really should be the very standard stuff, above all else because that’s what keeps the business focused. If you’ve got 30 KPIs, you’re not focused on anything.
	- *Operational reports*. These are things like tools for sales people to see their leads, PMs to see product usage, etc. I think it’s appropriate to be prescriptive on this, and important that these don’t become KPIs to monitor, but stay as tools to help people make day-to-day decisions. Not to answer any question, but to have the regular info they need (ie, how an ad campaign is doing)
	- *Ad-hoc work* – for everything else. If it’s a question that can’t be answered with these things, I believe you’re generally better off answering fewer well than trying to answer all of them poorly (which also dilutes the effectiveness of the first two bullets)

