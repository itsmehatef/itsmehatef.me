---
title: dangerously skip permissions
author: hatef
pubDatetime: 2026-04-19T02:00:00.000Z
description: how --dangerously-skip-permissions wiped my home directory, and what i learned.
tags:
  - agents
  - claude-code
featured: true
draft: false
hideEditPost: false
---

loved it, still do, until it wiped my home directory entirely.

i wasn't sure if it's going for the kill but i can tell you my ohmyzsh was gone, all the mods i put on my mac suddenly flipped, and got signed out of apple id. i even got a warning if i'm sure if wanna remove an icloud directory?!

lessons learned.

## why this happened?

so the project im working on has a home variable where it defines the home directory of the build. after a build failure it tried to clean it and it cleaned it alright 🙂

## lesson learned

this just shows how important designing agents with access control and sandboxing from ground up has become. if you want to work with someone on a project, do you tell them sit behind your laptop and take the wheel? or you give them their own setup?

my mistake was that i gave claude code my own personal set up and let it do anything it wants. don't get me wrong, im still gonna run it with —dangerously-skip-permissions flag, but i think it's time we do this right.

this type thing is the exact reason i've started [dclaw](https://github.com/itsmehatef/dclaw). a image based agent framework that mitigates the risk of bad behavior. more on that later. irony is it was during smoke testing dclaw that this happened 🫠
