---
title: Learn ChatGPT and AI
lang: en
category: data-coding
tags: [learn, chatgpt]
season: summer
created: 2023-03-10
updated: 2024-05-29
sources: Misc
---

## How does it work?
- It learns by analysing **large amounts** of text data using **deep learning algorithms and NLP techniques**. This allows it to recognise **patterns** and make accurate **predictions about the most likely next word or phrase in a sentence**, which helps it **generate informative responses** to questions and prompts.
- It's like autosuggestion in text messages but on steroids

## Why GPT?
The name "GPT" stands for *"Generative Pre-trained Transformer"* which refers to the architecture of the deep learning model used to train it.

The *Transformer* architecture is a type of neural network that is particularly well-suited to processing and generating natural language text. It uses self-attention mechanisms to weigh the importance of different parts of the input text, and can capture long-range dependencies between different parts of the text. Its parallelisable computations make it more efficient than previous architectures, and have enabled the development of large-scale language models like GPT-3.

The "*pre-trained*" part of the name refers to the fact that I am trained on large amounts of text data before being fine-tuned on specific tasks or domains. This pre-training allows me to develop a general understanding of language patterns and structures, which makes it easier for me to learn and perform well on specific language-related tasks.

Finally, the term "*generative*" in the name refers to my ability to generate new text based on the patterns and relationships I have learned from the pre-training data. This makes me particularly useful for tasks such as language translation, summarisation, and question-answering, where generating new text based on input data is a key part of the task.

## The context
[Eva Nečasová](https://cz.linkedin.com/in/evanecasova) from [AI dětěm](https://aidetem.cz/) had an interesting thought that it's only logical that the society arrived where we are now. Since the dawn of times, people always wanted to note down and pass their knowledge further. It might have started in caves but we later moved to things like books, photos, and computers.

With the era of cloud storage and our civilisation producing tons of new information/data every second, our ability to grasp this all became limited. That's why we turn back to technology, i.e. AI, hoping it will help us understand the patterns of the world around us recorded in `1`s and `0`s.

## The shift in NLP history
There was an important shift in natural language processing (NLP) from *rule-based approaches* ("deterministic way") to *machine learning approaches* ("probabilistic way"), particularly deep learning approaches like neural networks.

Traditionally, NLP relied on rule-based methods that involved hand-crafting rules and grammars to parse and understand natural language. These rule-based methods were often limited in their ability to handle the complexity and variability of natural language.

The breakthrough in deep learning for NLP came with the development of the word embedding technique, which allowed models to represent words in a dense vector space and capture their semantic relationships. This approach was first introduced by `word2vec` in 2013 and later improved upon by models like FastText.

The word embedding approach allowed NLP models to learn from large amounts of text data and capture complex patterns and relationships between words. This represented a shift from rule-based methods to data-driven methods and was a key factor in the development of more powerful and flexible NLP models like the Transformer-based models used by GPT.

So in a way, there was a shift toward a brute force approach – the use of large amounts of data and the application of deep learning techniques to capture complex patterns in that data, as opposed to relying on hand-crafted rules and grammars.

## Czech mark
[Tomáš Mikolov](https://cs.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Mikolov), a Czech computer scientist who studied in Brno, played a key role in developing the `word2vec` algorithm and also made significant contributions to the development of the GPT model.

His `word2vec` algorithm uses neural networks to create high-dimensional representations of words in a text corpus (word embedding) and has been widely influential in the field of natural language processing. He later extended that work by introducing `fastText`.

Mikolov was also a co-author of the original paper introducing the GPT model, and his work on language modelling and text generation has helped to push the boundaries of what is possible in this field.

## From `word2vec` to GPT
The *Transformer* architecture used by GPT models is better than the architecture used by `word2vec` because:
1. Is a deeper neural network that can learn more complex relationships between words
2. It can capture contextual information about words
3. It is designed to handle long sequences of text more effectively.

This makes it more powerful and flexible, and allows it to achieve better performance on a wide range of natural language processing tasks.

## GPT and beyond
![](../../../assets/files/gpt-history.png)

## Cool links
- [OpenAI API](https://platform.openai.com/)
- [smol-ai/developer](https://github.com/smol-ai/developer/)
- [chatgpt-mac](https://github.com/vincelwt/chatgpt-mac)
- [awesome-gpt3](https://github.com/elyase/awesome-gpt3)
- [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
- [How to use ChatGPT correctly](https://www.youtube.com/watch?v=cWil0mqdXRY)
- [OpenAI’s 'Pay As You Go' Is the Best Way to Use ChatGPT](https://lifehacker.com/openai-s-pay-as-you-go-is-the-best-way-to-use-chatgpt-1850318349)
- [Prompt Advice from Rob Lennon](https://twitter.com/thatroblennon/status/1610316022174683136)
- [Prompt Injection via Gandalf](https://gandalf.lakera.ai/)
- [ej:aj](https://ejaj.cz/)

## Cool tools
- [How to Use AI to Do Stuff: An Opinionated Guide](https://www.oneusefulthing.org/p/how-to-use-ai-to-do-stuff-an-opinionated)
- [Future Tools](https://www.futuretools.io/): find the exact AI tool for your need
- [Perplexity.ai](https://www.perplexity.ai/): searching with AI
- [Sora](https://openai.com/sora): text-to-video AI generation
- [You.com](https://you.com/): searching with AI
- [AI Text Classifier](https://platform.openai.com/ai-text-classifier): check if a piece of text was generated by AI
- [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT): an experimental open-source attempt to make GPT-4 fully autonomous (with [Cognosys](https://app.cognosys.ai/) and [AgentGPT](https://agentgpt.reworkd.ai/) as alternatives)
- [Sharly](https://www.sharly.ai/): chat with any documents
- [Poe](https://poe.com/): universal AI messaging app
- [Ollama](https://ollama.com/): run large language models, locally
- [FlowGPT](https://flowgpt.com/): universal AI messaging app, more aimed at specific chat experiences
- [Midjourney](https://www.midjourney.com/): create pictures
- [Claude](https://claude.ai/): yet another chat
- [Koala](https://koala.sh/chat): and another chat but with free GPT 3.5
- [Stable Diffusion](https://stablediffusionweb.com/): text-to-image model
- [Illusion Diffusion](https://huggingface.co/spaces/AP123/IllusionDiffusion): generate illusion art with Stable Diffusion
- [Image Mixer](https://huggingface.co/spaces/lambdalabs/image-mixer-demo): mix images together through Stable Diffusion
- [Hotshot](https://hotshot.co/): create GIFs using AI
- [Zapier AI Actions](https://nla.zapier.com/docs/platform/gpt): equip GPTs to take action in 3rd party apps
- [GPT for Work](https://gptforwork.com/): GPT for Excel and Word, GPT for Google Sheets and Docs
- [Runway](https://runwayml.com/): text and image processing and generation
- [Krea](https://www.krea.ai/): image generation and enhancement 
- [Creative Reality](https://studio.d-id.com/): image-to-video generation
- [ElevenLabs](https://elevenlabs.io/): text-to-speech generation
- [Pika](https://pika.art/): video generation
- [Sanctum](https://sanctum.ai/): run & interact with open-source LLMs locally
- [Suno](https://www.suno.ai/): generating music

## Translation
- [DeepML](https://www.deepl.com/)
- [LINDAT Translation](https://lindat.mff.cuni.cz/services/translation/)

## Prompt Engineering
- [Learn Prompting](https://learnprompting.org/)
- Make it conversational with feedback loop
- Give it a specific role and goals
- Consider asking for step-by-step instructions
- Tell it to ask you follow-up questions or even let it create prompts for you:

> I want you to become my Prompt Creator.
> 
> Your goal is to help me craft the best possible prompt for my needs. The prompt will be used by you, ChatGPT. You will follow the following process: 
> 1. Your first response will be to ask me what the prompt should be about. I will provide my answer, but we will need to improve it through continual iterations by going through the next steps. 
> 2. Based on my input, you will generate 3 sections. a) Revised prompt (provide your rewritten prompt. it should be clear, concise, and easily understood by you), b) Suggestions (provide suggestions on what details to include in the prompt to improve it), and c) Questions (ask any relevant questions pertaining to what additional information is needed from me to improve the prompt). 
> 3. We will continue this iterative process with me providing additional information to you and you updating the prompt in the Revised prompt section until it's complete.

## Training
![](../../../assets/files/chat-gpt-train.jpg)

## Biases
![](../../../assets/files/chat-gpt-biases.png)

## Thoughts
- [Is LLMs maybe the query language for text?](https://benn.substack.com/p/avg-text)
- [Miloš Čermák, GUG](https://www.youtube.com/watch?v=ZSl3Y698--U): "It's more like a human, than a technology" (because of being trained on our language and making mistakes)
- [This research](https://ct24.ceskatelevize.cz/clanek/veda/umele-inteligence-maji-obri-uhlikovou-stopu-vytvoreni-jednoho-obrazku-spotrebuje-stejne-elektriny-ja-343897): It takes about the same amount of energy to charge a phone as to generate one image using AI
- [Stanislav Fort – Nečekali jsme, že se umělá inteligence naučí rozumět emocím](https://www.respekt.cz/tydenik/2024/20/necekali-jsme-ze-se-umela-inteligence-nauci-rozumet-emocim):
	- It makes sense to talk to ChatGPT and then let it summarise your convo and save it.
	- We understand how AI works on the elementary level but have little knowledge of how it works as a whole. Humanity never encountered anything like that before.
	- It is enabled by computational power of Avogadro constant – border between micro- and macroscopic world. 20 years ago, a single graphic chip used for training would be a supercomputer. Together though, it needs a small power plant to power it.
	- Similar to the brain, but it can do 100x more on some fruit a day.
	- That it's surprising to many that AI is great at implicit understanding but terrible at maths and logic.
	- Specifically-trained AI solved one of biological mysteries of many years. The team behind it might even get a Nobel price for it.
	- Some teams are building AI supervised by another AI, specifically trained to do that.
	- It might be easy to hack AI by simply putting a sticker on a road sign. There are people trying to prevent it but it will always be a chase.
	- We might be heading into a future where real pictures are watermarked.
- [Mrshu](https://mareksuppa.com/) when talking about ChatGPT 4o:
	- "autocomplete"
	- with top `p` sampling
	- with subword level tokenization (→ problem with a lot of things)
	- with base model & then fine-tuning
	- brute force – simple idea (500 lines of C), scaled insanly
	- "take a deep breath and do this step by step" helps even AI
	- picture to patches to sequences to LLMs → simplification to the same problem
	- OAI CLIP just puts these together in one vector space, using alt text
	- what's new is that they are able to generate different modalities, not just take them; but its not out yet
