---
title: Understand semantic versioning
title-cs: 
category: coding
tags: [git]
season: spring
dates: [25 Oct 2021, 25 Oct 2021]
sources: https://blog.getdbt.com/getting-ready-for-v1-0/, https://semver.org/
---

- In semantic versioning, a version is composed of three numbers: `Major.Minor.Patch`.
- For dbt, for instance:
	- **Major:** dbt is going to look, feel, and work _like this_ for a long time. You can know with confidence that, if the code in your project works on v1.0.0, it will keep working on every v1.x.y after that.
	- **Minor** version releases can still include big new things, but changes to existing interfaces will be behind-the-scenes and backwards-compatible. Simply put, the code in your project will not break when you upgrade. In the unlikely case that this happens, we will do everything in our power to fix it, and turn around a patch release with the fix, as quickly as possible.
	- **Patch** releases are for bug fixes only; they will never include net-new features. You can upgrade to a newer patch release with full confidence, and without a moment’s hesitation.