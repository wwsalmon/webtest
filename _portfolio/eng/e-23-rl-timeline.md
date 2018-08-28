---
title: Rocket League Timeline
permalink: rl-timeline
type: Design & Code Concept
timeframe: 2017 - WIP
topStrip: Product Design & Development Case Study
layout: page

cat: eng

displayTitle: Rocket League Timeline (2017 - WIP)
description: Esports is all about the storylines; but with team changes and roster shuffles several times a year, they're hard to follow. RL Timeline is a concept for a way to see RL History in a whole new way.
---

{% include image-gen.html src='/img/eng/rl-timeline/rl-timeline-screenshot.png' alt='Screenshot of RL Timeline' %}

## Vision

The best part of Esports is the storylines. In Rocket League: Kronovi the Mountain, the very first world champion; Paschy90, the team-building legend, always just a hair away from lifting the trophy; Turbopolsa, leading his team to break through the champion's curse and become the three-time. These are the legends of the scene, and it's players like them that get people excited to watch the highest tier of Rocket League competition.

But Esports is hectic. It seems like every day a team disbands, or a player leaves, or suddenly is acquired by a new org and has a totally different name and branding. Major matches and upsets happen all the time and are then talked about for weeks; it's hard to piece everything together unless you've just been there from the very beginning. Resources like Liquipedia and r/RocketLeagueEsports have done a great deal to provide a place to get the latest and most comprehensive information. However, there's still a great deal of piecing-together to be done.

RL Timeline aims to tell the history of Rocket League Esports in a whole new way, with the same level of storytelling of dedicated spotlight videos and articles, but the same level of rigor and thoroughness of a wiki page. RL Timeline lays out all the relevant events - team transfers, competition results - in chronological order relative to each other on a timeline, complete with the first-hand context of Tweets and from-then reactions and commentary.

## RL Timeline

As of late 2018, no active work is being done on RL Timeline. Using CSS Grid, I hand-coded a functional demo. You can find [this demo here](http://wwsalmon.com/rl-timeline/0-1/webdemo/kronovi.html). However, this is extremely cumbersome. I started working on a JS engine to generate the timeline just from a list of events, but this was never completed. The eventual goal would be to either make it very easy for a team of human contributors to fill in and update timelines for players, or have a bot scrape information off of Liquipedia or the like and auto-populate timelines.

<div>
<a href='http://wwsalmon.com/rl-timeline/0-1/webdemo/kronovi.html'>
{% include image-gen.html src='/img/eng/rl-timeline/rl-timeline-demo.png' alt='see the RL timeline live demo by clicking on this image' %}
</a>
</div>

If I have time in the future this is definitely something I might come back to. If you want to work with me on this, please don't hesitate to [reach out to me](/contact).
