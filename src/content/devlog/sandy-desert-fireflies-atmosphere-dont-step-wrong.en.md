---
title: "Sandy Desert, Fireflies, and New Atmosphere"
description: "10 new Sandy Desert stages, fireflies, subtle fog, visual effects, and a fix for the loot roller in alpha.29."
date: 2026-06-19
locale: en
coverImage: /images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong.jpg
---

10 new Sandy Desert stages are live. The zone is one of the game's most visually distinct areas, and the new layouts push it further into the heat and isolation feel that defines it.

## Loot Buttons on the Stage Popup

The next stage popup now shows loot buttons directly, so the flow after completing a stage feels snappier.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Loot buttons appearing on the next stage popup in Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-loot.webm" type="video/webm">
</video>

A new visual effect also signals clearly when a block is locked.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Block lock visual effect animation in Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-lock.webm" type="video/webm">
</video>

## Fireflies

This one was genuinely fun to make. Fireflies have no role in gameplay at all. They just fly around. But we wanted the environments to feel alive, and static scenes only go so far.

Each firefly is a small object with a pulsing light. Around it sits an invisible sphere. The team implemented two separate movement algorithms: one that makes the firefly orbit the sphere in smooth loops, and another that traces a figure-eight path. A clean transition between the two makes the movement read as random without actually being random. They are already in the Forest scenes and will spread to other zones gradually.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Fireflies flying through a scene environment in Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-fireflies.webm" type="video/webm">
</video>

## Atmosphere and Fog

A subtle fog layer sitting just in front of the camera was added alongside the fireflies. It is barely noticeable on its own. The difference in how the scenes feel is surprisingly large for such a small addition.

## Fixes

- Skills you already own no longer appear in the loot roller
- Global volume profiles were missing from several stages. Fixed across the board.

## Come Play the Demo

There is a free playable demo on [Steam](https://store.steampowered.com/app/4627790/). If you have played it, we would love to hear your feedback. Join our [Discord](https://discord.gg/KX8mzVuqzm) and tell us what you think.
