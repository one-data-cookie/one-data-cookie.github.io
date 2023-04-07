---
title: Find out how it works inside Airbnb's data team
lang: cs
category: data-analytics
tags: [idea]
season: autumn
created: 01 Mar 2021
updated: 07 Apr 2023
sources: 
---

rámcově jsem se jí ptal, jestli mají zkušenosti s:
* aplikací engineering practices – version control, PR reviews, testing, dokumentace, automatizace – do tvoření vizualizací v Supersetu
* Superset API k tomuto i obecně

její reakce:
* celkově to vnímá jako gap, která není nijak dobře vyřešena ani v Supersetu, ani v jiných tools, co má zkušenosti
* kladou důraz na systém chart/dashboard owners – owner je zcela odpovědný za kvalitu a dokumentaci, nehledě na to, jak to udělá
* odrazují od SQL Lab > Explore pro tvoření dlouhodobých charts, a to kvůli optimalizaci (je to pomalejší) a kvalitě (neprochází to review); namísto toho to dělají tak, že doporučují napsat SQL query, uložit do repa a nastavit trigger přes Airflow, kterej tu analytical table vytvoří, a pak na ní postavit s Supersetu viz – ten kód už se pak dá reviewnout, tu viz už pak není tolik potřeba kontrolovat; funguje to fajn, jen to přidává overhead
* dokumentaci řeší to tak, že dají jako první tab markdown s "dokumentací" anebo linkem jinam
* zároveň bojují s tím, že se jim hromadí nepoužívaný vizes, a to skrze automatické mazání charts; ještě to nemají dořešený, ale vidí dvě možnosti:
	* interně: airflow job, která projde nenavštívený charts/dashboards
	* open-source: open issue na GitHub tu
* Superset API nepoužívají, i když poptávka byla (stejnej důvod jako my):
	* zjistí, proč to nakonec nedovolili, ale zdá se, že to bylo právě kvůli strachu z mnoha charts, který by se nedaly mazat at scale, a samozřejmě prioritám
* ohledně API se můžeme:
	* kouknout [sem](https://preset.io/blog/2020-10-01-superset-api/) na nějaký intro do té nové API
	* kouknout na [public roadmap](https://github.com/apache-superset/superset-roadmap)
	* poptat se v jejich Slacku – [invitation](https://join.slack.com/t/apache-superset/shared_invite/zt-l5f5e0av-fyYu8tlfdqbMdz_sPLwUqQ)
