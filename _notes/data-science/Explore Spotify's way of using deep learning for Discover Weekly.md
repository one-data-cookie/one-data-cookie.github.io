---
title: Explore Spotify's way of using deep learning for Discover Weekly
lang: en
category: data-science
tags: [idea, deep-learning]
season: winter
created: 16 Mar 2019
updated: 07 Apr 2023
sources: https://medium.com/s/story/spotifys-discover-weekly-how-machine-learning-finds-your-new-music-19a41ab76efe
---

Spotify doesn't actually use a single revolutionary recommendation model. Instead, they mix together some of the best strategies used by other services to create their own uniquely powerful discovery engine.

To create Discover Weekly, there are three main types of recommendation models that Spotify employs:
1. Collaborative Filtering models (i.e. the ones that Last.fm originally used), which analyze both yourbehavior and others' behaviors.
2. Natural Language Processing (NLP) models, which analyze text.
3.  Audio models, which analyze the raw audio tracks themselves.

### Ad 1
Instead, Spotify's data is implicit feedback -- specifically, the stream counts of the tracks and additional streaming data

When it finishes, we end up with two types of vectors, represented here by X and Y. X is a user vector, representing one single user's taste, and Y is a songvector, representing one single song's profile.

To find out which users' musical tastes are most similar to mine, collaborative filtering compares my vector with all of the other users' vectors, ultimately spitting out which users are the closest matches. The same goes for the Y vector, songs.

### Ad 2
Spotify crawls the web constantly looking for blog posts and other written text about music to figure out what people are saying about specific artists and songs.

Each artist and song had thousands of top terms that changed on the daily. Each term had an associated weight, which correlated to its relative importance -- roughly, the probability that someone will describe the music or artist with that term.

Then, much like in collaborative filtering, the NLP model uses these terms and weights to create a vector representation of the song that can be used to determine if two pieces of music are similar.

### Ad 3
raw audio models take new songs into account.

Convolutional neural networks are the same technology used in facial recognition software. In Spotify's case, they've been modified for use on audio data instead of pixels.