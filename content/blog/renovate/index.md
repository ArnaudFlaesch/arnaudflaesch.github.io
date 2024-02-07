---
title: Renovate, un allié dans vos projets
date: '2024-12-04T15:18'
description: Comment maintenir l'arbre de dépendances d'un projet de manière sûre et rapide grâce à un outil automatisé.
image: renovate-logo.png
---

Vous vous êtes sans doute déjà retrouvé dans un projet de longue date, a développer beaucoup de factures et à negliger les dependances.

Pourtant celles ci sont aussi importantes que le code dune application, et constituent meme la colonne vertébrale de celle ci.

Sommaire
Le problème
Présentation de l’outil
Comment l’installer
Conclusion

- Le problème

Au fil du temps, certaines dependances ne sont plus maintenues, peuvent contenir des failles de securite et peuvent vous bloquer dans l’ajout de nouvelles fonctionnalités, par exemple lorsqu’un nouvel outil est incompatible avec une version trop vieille d’un autre outil.

Cest la qu’intervient Renovate, un outil créée par Mend (article non remunere) pour aider les développeurs a maintenir larbre de Dépendances d’un projet, de manière incrementale et configurable.

Renovate va analyser regulierement le dépôt dans lequel le code source et le fichier de configuration des dépendances (package.json, pom.xml, etc.) et va proposer, sous la forme d’une pull request, une montee De version mineure.

Même Interstellar en comparant Murphy avec la stack technique qui vieillit vite.

Aparté sur le versionnement sémantique, l’explication de la différence entre les versions majeures, mineures et les patchs.

L'outil n’a pas pour but de remplacer le travail d’un développeur, mais bien de le complémenter en étant configurable, et en proposant par défaut une approche minimale, en nécessitant la validation d’au moins un etre humain

Est ce que l’outil va me remplacer ?
Non il est configurable et minimaliste initialement

Est ce qu’il est nécessaire, où est ce que je peux faire le travail asa place
Certes oui, mais generalement ce travail nest pas fait, cause des blocages pouvant arriver au mauvais moment et (ex du packagé json et d’une liste de pr proposées) les dépendances front par exemple sont nombreuses et mises ajour fréquemment.

En quoi l’outil se compare à Snyk ?

La CI permet de valider la mise ajour, si elle ne passe pas il y a quelque chose acorriger, si elle passe mais que ça plante il y a un test a rajouter.

Dependency dashboard

Comment l’installer ?

Github via la marketolace

Si vous utilisez bitbucket ou azure devops (promis je ne vous jugerais pa) c’est plus complique Mais cela reste faisable. Ex gitlab ci, lien bitbucket ou code pipeline asur

Pour vos projets d’entreprose, il existe une solution on premise ?

Conclusion

Je l’utilise sur tous les projets perso car par le passé j’en ai souvent laisse en stand-by assez longtemps pour devoir tout mettre a jour de plusieurs versions avec des api a corriger et j’incite les équipes dans lesquelles je travaille a l’installer car jaiVecu des situations professionnelles ou ce genre d’outil aurait fait gagner du temps.
