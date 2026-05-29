---
title: Farmer, Freezer, and a New Visual Direction
description: "Two new skills and a full interface redesign mark the last update before the Don't Step Wrong 2 demo goes live on Steam."
date: 2026-05-29
locale: en
coverImage: /images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.jpg
---

Don't Step Wrong 2 is a puzzle game where every level has one implicit rule. The game never tells you what it is. You figure it out through trial and error. That's the mechanic, and it's been the same since the first game.

This update adds two new skills and rebuilds large parts of the interface. Both changes are connected to the same thing: the demo is almost ready.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Farmer and Freezer skills and the new square bordered interface in Don't Step Wrong 2">
  <source src="/images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.webm" type="video/webm">
</video>

## Two new skills

Farmer and Freezer join the skill roster, bringing the total to seven. Skills in Don't Step Wrong 2 are permanent abilities you unlock and equip between levels. They don't reveal the rule. What they do is give you different ways to interact with the grid while you're working out the logic.

All seven are entirely optional. Spider Sense, Breadcrumb Trail, Safe Start, Dead End Sense, Super Jump, Farmer and Freezer. You can play without any of them. The [mechanics page](/mechanics) describes what each one does without spoiling how the rules work.

## A new visual direction

The interface went through a significant redesign in this update. The layout now uses a square bordered design throughout, which gives the UI more visual structure and makes the game feel more finished.

Toasts, the small notifications that appear during gameplay, received two improvements: an animated border and smarter lifecycle behavior. They pause when you hover over them and show a tooltip, so you have time to read what they say before they disappear.

ESC now works consistently throughout the game: closing popups, navigating between scenes, and quitting from wherever you are. A version label was added to all menu screens.

## Demo preparation

This update finalizes the boundary between the demo and the full edition. Skills and items that belong to the full game are now properly locked in the demo version. The world map reflects which stages are available depending on which version you're playing.

Stage plans are now loaded and cached at game start rather than on demand. The change is invisible during normal play but makes a difference on slower hardware.

The demo has been submitted to Steam for review.
