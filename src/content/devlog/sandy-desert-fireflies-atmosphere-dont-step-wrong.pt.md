---
title: "Deserto de Areia, Vagalumes e Nova Atmosfera"
description: "10 novas fases no Deserto de Areia, vagalumes, névoa sutil, efeitos visuais e correção no roller de loot no alpha.29."
date: 2026-06-19
locale: pt
coverImage: /images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong.jpg
---

10 novas fases chegaram ao Deserto de Areia. É uma das zonas visualmente mais distintas do jogo, e os novos layouts aprofundam ainda mais a sensação de calor e isolamento que define a área.

## Botões de Loot no Popup de Fase

O popup de próxima fase agora exibe os botões de loot diretamente, tornando o fluxo após completar uma fase mais ágil.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Botões de loot aparecendo no popup de próxima fase em Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-loot.webm" type="video/webm">
</video>

Um novo efeito visual também sinaliza com clareza quando um bloco está bloqueado.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Animação do efeito visual de bloqueio de bloco em Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-lock.webm" type="video/webm">
</video>

## Vagalumes

Essa foi a parte mais divertida de fazer. Os vagalumes não têm nenhum papel no gameplay. Só voam pelo cenário. Mas a gente queria que os ambientes parecessem vivos, e cenas estáticas só chegam até certo ponto.

Cada vagalume é um pequeno objeto com uma luz que pulsa. Em volta dele existe uma esfera invisível. O time implementou dois algoritmos de movimentação diferentes: um que faz o vagalume orbitar a esfera em loops suaves, e outro que traça um caminho em forma de oito. Uma transição limpa entre os dois faz com que o movimento pareça aleatório sem realmente ser. Eles já estão nas cenas da Floresta e vão se espalhando para outras zonas aos poucos.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Vagalumes voando pelo ambiente de uma cena em Don't Step Wrong 2">
  <source src="/images/devlog/sandy-desert-fireflies-atmosphere-dont-step-wrong-fireflies.webm" type="video/webm">
</video>

## Atmosfera e Névoa

Uma névoa bem sutil posicionada na frente da câmera foi adicionada junto com os vagalumes. Quase não dá para notar sozinha. A diferença na sensação das cenas é surpreendentemente grande para uma adição tão pequena.

## Correções

- Habilidades que você já possui não aparecem mais no roller de loot
- Perfis de volume global estavam ausentes em várias fases. Corrigido em todas.

## Jogue a Demo

A demo gratuita já está disponível na [Steam](https://store.steampowered.com/app/4627790/). Se você já jogou, adoraríamos ouvir o que achou. Entre no nosso [Discord](https://discord.gg/KX8mzVuqzm) e nos conta.
