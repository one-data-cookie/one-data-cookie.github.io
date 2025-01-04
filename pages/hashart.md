---
layout: post
permalink: /hashart
content-type: eg
---

In early 2025, I was inspired by [Aleksandr](https://www.aleksandrhovhannisyan.com/blog/144-shades-of-gray/)
(who was earlier inspired by [Jordan](https://hash.jordanscales.com/)), and created my own generative
hashart – a [PF 2025 card](/datavis/hashart-life).

From the beginning, I liked the idea of putting it on my landing page to balance out all the empty space.
I ended up creating yet another version specifically for the site. In the background, it's quite a
[simple JavaScript](https://github.com/one-data-cookie/one-data-cookie.github.io/blob/main/assets/js/hashArt.js).

What it does:
- Converts my name into a byte array using [UTF-8 encoding](https://en.wikipedia.org/wiki/UTF-8).
- Maps it onto an 11x11 grid – one as visible, zero as not – leaving only a few last cells blank.
- Takes the current date as `YYYYMMDD` and sums its digits into a single number.
- Uses that number as the steps to run [Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
  on the initial grid.
- Outputs the resulting SVG code, which is then displayed on the landing page.

It might seem arbitrary, but I actually put quite a bit of thought into it.
I'm, digitally, taking myself, and playing Life – every day a little differently.

Well, isn't that neat?

<div class="hash-art"></div>
