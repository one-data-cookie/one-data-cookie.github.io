---
title: Harness the power of XmR charts
lang: en
category: data-business
tags:
  - idea
  - business
season: spring
created: 2024-02-09
updated: 2024-11-09
sources: https://commoncog.com/becoming-data-driven-first-principles
---

> PBCs charts, i.e. XmR charts → understanding variation → process control worldview → acting, not just analysing → knowledge

> I have never, not once, seen a data tool vendor or data publication explain how one might go from topics like ‘the modern data stack!’ or ‘the rise of the analytics engineer!’ or ‘data: product vs service org?’ to ‘here’s how you build a culture of data-driven business operators.’

- got there thanks to Benn's article on [Data Arithmetics](https://benn.substack.com/p/data-arithmetic)
- to read upon this more/again/further, look at this [Statistical Process Control: A Practitioner’s Guide](https://two-wrongs.com/statistical-process-control-a-practitioners-guide.html) where there is a bit more statistics and description how to design XmR charts
- Python script for generating these in [here](https://github.com/Hagtronics/statistics-scripts/tree/main/python) (might be improved by adding the evaluation of the charts)
- it connects to Six Sigma (Define, Measure, Analyse, Improve, Control)

- "The purpose of data is knowledge. Knowledge is ‘theories or models that allow you to predict the outcomes of your business actions."
- the underlying challenge of becoming data-driven is "wiggling charts"
- if you have a tool for really evaluating charts for changes, you can create a common knowledge as a result
- the trick is not the magical tool but the cultural change it brings – understanding variation and "continuous improvement" =  Statistical Process Control (SPC) 
	- “Continuous Improvement is a style of thinking with a few tools attached.”
	- process control worldview vs optimisation worldview = "make number go up"
	- The process control (...) says: “Here is a process. Your job is to _discover_ all the control factors that affect this process. To help you accomplish this, we will give you a data tool that tells you when the process has changed. You will discover these control factors through one of two ways: either you run experiments and then see if they work, or you observe sudden, unexplained special variation in your data, which you must then investigate to uncover new control factors that you don’t already know about. Your job is to figure out what you can control that affects the process, _and then systematically pursue that._”
	- in short: "to systematically identify and then pursue control factors in service of improving a process"
	- "An important consequence of this worldview is that _insight is derived from action, not analysis_: you only learn to improve your business when you test control factors, not when you discover them."
- magical tool → Shewhart chart → Process Control Chart (PCC) → Process Behaviour Chart (PBC) → XmR chart 
	- two charts, basically: X – metric, mR – moving range
	- created by Walter Shewhart, Bell Labs, back in 30s
	- it tests for homogeneity: "The XmR chart detects the presence of more than one probability distribution in the variation observed in a set of data.", hence 3-sigmas (approximated from mean of Xm) not just sigma (= standard deviation)
	- key requirement is that your process displays routine variation
- variations:
	- routine variation (= within range) → predictable → you'd need to fundamentally redesign the process to shift it
	- special variation (= out of range) & unexpectedly → unpredictable → external, go figure it out first
	- special variation (= out of range) & expectedly → you're seeing response to your changes
- when to investigate:
	- strong (or "special cause", "variation"): point outside the limit lines
	- moderate (or "short run"): 3 out of 4 consecutive points nearer to limit than centre line
	- subtle (or "long run"): 8 consecutive points on one side of the centre line

![](../__files/xmr-charts.png)

- calculating control limits, based on [ChatGPT convo](https://chat.openai.com/c/e2d235af-dfcb-4a1c-b286-f949249590da):
	- **X Chart**:
	    - **Traditional SPC Approach**: Uses the $A_2$ constant to calculate control limits as $\overline{X} \pm A_2 \times \overline{MR}$, where $\overline{X}$ is the average of individual measurements and $\overline{MR}$ is the average moving range. $A_2 = 1.88$ for individual measurements.
	    - **3-Sigma Approach**: Some practices use a 3-sigma estimation, simplified as $2.66 \times \overline{MR}$, to calculate control limits directly as $\overline{X} \pm 2.66 \times \overline{MR}$. This method integrates the estimation of the process standard deviation ($\sigma$) from the moving range into the control limit calculation.
	        - *Sometimes marked as $E_2$*
	- **mR Chart**:
	    - Control limits focus on process variability, with the Upper Control Limit (UCL) calculated as $D_4 \times \overline{MR}$. $D_4 = 3.267$ for two consecutive observations. There's typically no Lower Control Limit (LCL) as the moving range cannot be negative.
	        - *Sometimes also $3.268$*
	- Difference Between $A_2$​ and 3-Sigma
		- **$A_2$​ Constant**: Specific to the XmR chart context, derived from statistical theory to adjust the moving range for setting control limits, reflecting established SPC practices.
		- **3-Sigma Approach (2.66)**: Offers a simplified, direct estimation method for setting control limits based on the moving range. This approach assumes a direct relationship between the moving range and the process standard deviation, simplifying control limit calculations by incorporating a factor for 3$\sigma$ directly.
- it seems that 1.88 comes from wanting 95% of the data falling within while 2.66 from (Shewart) wanting 99.7% (based on [this](http://openonlinecourses.com/cqi/xmr.asp) and [this](https://en.wikipedia.org/wiki/Control_chart)):
> The constant E depends on how many consecutive observations are included in the moving range.  When 2 consecutive observations are examined, the constant is 2.66 for control limits that include 99% of the data.  If the moving range is calculated from 2 consecutive time periods then the correction factor E for control limits that include 95% of the data is 1.88.
