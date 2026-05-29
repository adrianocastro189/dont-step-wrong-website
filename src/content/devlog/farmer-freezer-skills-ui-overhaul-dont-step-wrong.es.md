---
title: Farmer, Congelador y una nueva dirección visual
description: "Dos nuevas habilidades y un rediseño completo de la interfaz marcan la última actualización antes de que la demo de Don't Step Wrong 2 llegue a Steam."
date: 2026-05-29
locale: es
coverImage: /images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.jpg
---

Don't Step Wrong 2 es un puzzle game donde cada nivel tiene una regla implícita. El juego nunca te dice cuál es. La descubres por prueba y error. Esa es la mecánica, y es la misma desde el primer juego.

Esta actualización agrega dos nuevas habilidades y rediseña gran parte de la interfaz. Ambos cambios están conectados a lo mismo: la demo está casi lista.

<video autoplay loop muted playsinline width="1200" height="675" aria-label="Las habilidades Farmer y Congelador y la nueva interfaz con bordes cuadrados en Don't Step Wrong 2">
  <source src="/images/devlog/farmer-freezer-skills-ui-overhaul-dont-step-wrong.webm" type="video/webm">
</video>

## Dos nuevas habilidades

Farmer y Congelador se suman a la lista de habilidades, llevando el total a siete. Las habilidades en Don't Step Wrong 2 son capacidades permanentes que desbloqueas y equipas entre niveles. No revelan la regla. Lo que hacen es darte formas distintas de interactuar con el tablero mientras trabajas la lógica.

Las siete son completamente opcionales. Sentido Arácnido, Rastro de Migajas, Comienzo Seguro, Sentido de Callejón sin Salida, Súper Salto, Farmer y Congelador. Puedes jugar sin ninguna de ellas. La [página de mecánicas](/es/mecanicas) describe lo que hace cada una sin revelar cómo funcionan las regras.

## Una nueva dirección visual

La interfaz pasó por un rediseño significativo en esta actualización. El diseño ahora usa bordes cuadrados en toda la interfaz, lo que le da más estructura visual al juego y lo hace sentir más terminado.

Los toasts, las pequeñas notificaciones que aparecen durante el juego, recibieron dos mejoras: un borde animado y un comportamiento de ciclo de vida más inteligente. Se pausan cuando pasas el cursor encima y muestran un tooltip, así tienes tiempo de leer lo que dicen antes de que desaparezcan.

ESC ahora funciona de forma consistente en todo el juego: cerrando popups, navegando entre escenas y saliendo desde donde estés. Se agregó una etiqueta de versión en todos los menús.

## Preparación de la demo

Esta actualización finaliza la separación entre la demo y la edición completa. Las habilidades e ítems que forman parte del juego completo ahora están bloqueados correctamente en la versión demo. El mapa del mundo muestra qué niveles están disponibles según la versión que estés jugando.

Los planes de nivel ahora se cargan y almacenan en caché al inicio del juego en lugar de hacerlo bajo demanda. El cambio es invisible durante el juego normal, pero hace diferencia en hardware más lento.

La demo ha sido enviada a Steam para revisión.
