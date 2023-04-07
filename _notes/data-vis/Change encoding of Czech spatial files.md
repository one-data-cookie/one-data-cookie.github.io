---
title: Change encoding of Czech spatial files
lang: en
category: data-vis
tags: [tutorial, tableau, map, czechia]
season: spring
created: 30 Nov 2020
updated: 07 Apr 2023
sources: https://help.tableau.com/current/pro/desktop/en-us/maps_shapefiles.htm
---

1.  Download the version of WGS84
2.  The encoding is Czech, i.e. *Windows-1250* (or sometimes *Latin II*)
3.  To change it for some programmes, it would work to change the `*.cpg` file from *1250* to *UTF-8*
4.  For Tableau, you need to change the encoding of `*.dbf` file, ideally through Open Office and using [this guide](https://gis.stackexchange.com/questions/3529/which-character-encoding-is-used-by-the-dbf-file-in-shapefiles/3663#3663)
5.  Then it works!

(Also, [here](https://o106.com/konverze-kodovani-z-windows-1250-na-utf-8/) is how it works for a normal text file.)