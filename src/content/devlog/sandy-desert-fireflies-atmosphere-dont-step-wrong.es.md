---
title: "Desierto de Arena, Luciérnagas y Nueva Atmósfera"
description: "10 nuevas fases en el Desierto de Arena, luciérnagas, niebla sutil, efectos visuales y corrección en el roller de loot en alpha.29."
date: 2026-06-19
locale: es
coverImage: /images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong.jpg
---

10 nuevas fases están disponibles en el Desierto de Arena. Es una de las zonas más visualmente distintivas del juego, y los nuevos diseños profundizan la sensación de calor y aislamiento que la define.

## Botones de Loot en el Popup de Fase

El popup de siguiente fase ahora muestra los botones de loot directamente, haciendo que el flujo tras completar una fase sea más ágil.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Botones de loot apareciendo en el popup de siguiente fase en Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-loot.webm" type="video/webm">
</video>

Un nuevo efecto visual también indica claramente cuando un bloque está bloqueado.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Animación del efecto visual de bloqueo de bloque en Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-lock.webm" type="video/webm">
</video>

## Luciérnagas

Esta fue la parte más divertida de hacer. Las luciérnagas no tienen ningún papel en el gameplay. Solo vuelan por el escenario. Pero queríamos que los ambientes se sintieran vivos, y las escenas estáticas solo llegan hasta cierto punto.

Cada luciérnaga es un pequeño objeto con una luz que pulsa. Alrededor tiene una esfera invisible. El equipo implementó dos algoritmos de movimiento distintos: uno que hace que la luciérnaga orbite la esfera en bucles suaves, y otro que traza un camino en forma de ocho. Una transición limpia entre los dos hace que el movimiento parezca aleatorio sin serlo realmente. Ya están en las escenas del Bosque y se irán expandiendo a otras zonas poco a poco.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Luciérnagas volando por el ambiente de una escena en Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-fireflies.webm" type="video/webm">
</video>

## Atmósfera y Niebla

Una niebla muy sutil posicionada justo frente a la cámara fue añadida junto con las luciérnagas. Casi no se nota por sí sola. La diferencia en cómo se sienten las escenas es sorprendentemente grande para una adición tan pequeña.

## Correcciones

- Las habilidades que ya posees ya no aparecen en el roller de loot
- Los perfiles de volumen global faltaban en varias fases. Corregido en todas.

## Jugá la Demo

La demo gratuita ya está disponible en [Steam](https://store.steampowered.com/app/4627790/). Si ya la jugaste, nos encantaría saber qué te pareció. Unite a nuestro [Discord](https://discord.gg/KX8mzVuqzm) y contanos.
