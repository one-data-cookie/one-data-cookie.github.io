---
title: Implement a data discovery platform
title-cs: 
category: data-business
tags: [idea]
season: spring
created: 03 Apr 2021
updated: 05 Jan 2022
sources: https://eugeneyan.com/writing/data-discovery-platforms/
---

**Questions we ask in the data discovery process**
- Where can I find data about...?
- What is the data about?
- Who can I ask for access?
- How is the data created? Can I trust it?
- How should I use the data?
- How frequently does the data refresh?

**Features to find, understand, and use data**
- *Finding*:
	- Allow users to search
	- Help users find data via recommendations
- * Understanding*:
	- Display the data schema
	- Provide preview of the data, incl. pre-computed column-level statistics
	- Provide data lineage (upstream)
- *Using*:
	- Show people associated with the table
	- Provide column usage statistic
	- Providing a list of most commonly joined tables
	- Provide recent queries
	- Provide data lineage (downstream)
	- Show how frequently it’s updated, even via jobs