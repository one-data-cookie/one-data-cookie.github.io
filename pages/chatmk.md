---
layout: post
permalink: /chatmk
content-type: eg
---

During the summer of 2025, I was hoping to get myself more familiar with what [Cursor](https://cursor.com/)
and [Windsurf](https://windsurf.com/) can do these days. At the same time, I've long considered
giving others the option to "chat" on top of my [digital garden](/garden) and other content
rather than just browse through them. Long story short, I ended up building ChatMK.

What I needed was a [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) system –
getting relevant notes and pages, and then feeding them to the language model as context.
Thanks to that, ChatMK doesn't just give generic responses but should instead reply based on my knowledge.

Technically, I decided to let AI agents implement a codebase that:
- Crawls through selected pages and notes during the site build process using a [Jekyll plugin](https://jekyllrb.com/docs/plugins/)
- Generates semantic embeddings for each piece of content using [sentence-transformers](https://www.sbert.net/)
- Loads the pre-computed embeddings when opening the ChatMK modal
- Pulls the same embedding model, runs it in your browser, and embeds your search query in real-time
- Uses [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) to find the most relevant content
- Downloads a small language model to generate conversational responses
- Runs everything locally – no data leaves your browser, no API calls to external services

It definitely is overkill for a personal website and, frankly, it really doesn't work well.
But that's mainly because the language models that one is willing to let download are too small
and not powerful enough to deliver decent results. I could potentially host a larger open-source model,
or point to a top-tier model via API, yet these approaches would bring problems of their own.

As I still find this to be a nice experiment and working POC, I'm keeping it live for now.
So, <a href="#" onclick="openChatMKModal(); return false;">give it a go</a>!
