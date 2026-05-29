---
title: Farmer, Congelador e uma nova direção visual
description: "Duas novas habilidades e uma reformulação completa da interface marcam a última atualização antes de a demo do Don't Step Wrong 2 entrar no ar na Steam."
date: 2026-05-29
locale: pt
coverImage: /images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.jpg
---

Don't Step Wrong 2 é um puzzle game onde cada fase tem uma regra implícita. O jogo nunca te diz qual é. Você descobre por tentativa e erro. Essa é a mecânica, e é a mesma desde o primeiro jogo.

Esta atualização adiciona duas novas habilidades e reformula grande parte da interface. As duas mudanças estão conectadas a algo em comum: a demo está quase pronta.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="As habilidades Farmer e Congelador e a nova interface com bordas quadradas em Don't Step Wrong 2">
  <source src="/images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.webm" type="video/webm">
</video>

## Duas novas habilidades

Farmer e Congelador se juntam à lista de habilidades, elevando o total para sete. Habilidades em Don't Step Wrong 2 são capacidades permanentes que você desbloqueia e equipa entre as fases. Elas não revelam a regra. O que fazem é oferecer formas diferentes de interagir com o tabuleiro enquanto você trabalha a lógica.

As sete são completamente opcionais. Sentido Aranha, Trilha de Migalhas, Início Seguro, Sentido de Beco Sem Saída, Super Pulo, Farmer e Congelador. Você pode jogar sem nenhuma delas. A [página de mecânicas](/pt/mecanicas) descreve o que cada uma faz sem revelar como as regras funcionam.

## Uma nova direção visual

A interface passou por um redesign significativo nesta atualização. O layout agora usa um design com bordas quadradas em toda a interface, o que dá mais estrutura visual ao jogo e o deixa com um aspecto mais acabado.

Os toasts, as pequenas notificações que aparecem durante o jogo, receberam duas melhorias: uma borda animada e um comportamento de ciclo de vida mais inteligente. Eles pausam quando você passa o cursor por cima e mostram um tooltip, então você tem tempo de ler o que dizem antes de desaparecerem.

O ESC agora funciona de forma consistente em todo o jogo: fechando popups, navegando entre as cenas e saindo de onde você estiver. Um rótulo de versão foi adicionado a todos os menus.

## Preparação da demo

Esta atualização finaliza a separação entre a demo e a edição completa. Habilidades e itens que fazem parte do jogo completo agora estão bloqueados corretamente na versão demo. O mapa-múndi mostra quais fases estão disponíveis dependendo da versão que você está jogando.

Os planos de fase agora são carregados e armazenados em cache no início do jogo em vez de sob demanda. A mudança é invisível durante o jogo normal, mas faz diferença em hardware mais lento.

A demo foi enviada à Steam para revisão.
