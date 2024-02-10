---
title: Gérer ses dépendances logicielles facilement avec Renovate
date: '2024-02-02T16:00'
description: Comment maintenir les dépendances d'un projet logiciel de manière sûre et rapide grâce à un outil automatisé.
image: 2024/1-renovate-article/jenga.jpg
tags: ['dépendances', 'intégration continue']
---

Vous vous êtes sans doute déjà retrouvé dans un projet de longue date, concentré sur l'ajout de nouvelles fonctionnalités,
de tests, de corrections de bugs, mais en négligeant de maintenir à jour fréquemment les dépendances
logicielles associées au projet.

## La situation ##

Lorsqu'un projet logiciel démarre, il est créé par défaut avec un certains nombres de dépendances, surtout lorsqu'il s'agit
par exemple d'un projet Node.JS qui va contenir une liste assez longue dans son fichier package.json.
Au fil du temps, les fonctionnalités ajoutées au projet vont nécessiter des dépendances supplémentaires, et cela peut entraîner
des problèmes qui ne se déclareront qu'au dernier moment si celles-ci ne sont pas maintenues régulèrement.

Si le code *legacy* (code rédigé au début d'un projet devenu difficile à maintenir, nécessitant du refactoring) est
généralement considéré comme de la dette technique et finit par être traité, il en est autre chose des nombreuses dépendances
car les développeurs ont tendance à les oublier une fois installées et elles peuvent mettre des années avant que quelqu'un
s'en occupe, avec parfois des incidences sur le projet.
Le problème, c'est que ces dépendances, même si elles viennent d'une tierce partie font partie intégrante du projet, et
peuvent même poser des risques de sécurité si elles ne sont pas maintenues correctement.

Aussi lors de l'ajout d'une
nouvelle fonctionnalité nécessitant par exemple une librairie externe, un développeur pourra se rendre compte que cette
librairie n'est pas compatible avec un composant déjà installé, mais trop vieux, et soit être bloqué dans son travail,
soit ralenti par une montée de version nécessaire mais non prévue initialement, nécessitant des tests de non régression
qui, si ils ne sont pas fait, pourront laisser passer de nouveaux problèmes.

Généralement, c'est au dernier moment que les librairies ou autres composants logiciels sont mises à jour sur un projet.
Par exemple, lorsque a été détectée la faille de sécurité associée à Log4J fin 2021, son caractère critique a nécessité
une mise à jour rapide sur le projet sur lequel je travaillais. Le problème c'est que cette mise à jour demandait d'autres
montées de versions, notamment Spring, qui elle-même imposait plusieurs modifications dans le code et la configuration
du projet de part le décalage entre la version que nous utilisions et la version compatible avec le correctif Log4J.
Cela a donc rajouté du temps au déploiement du correctif, et aurait pû être évité avec des mises à jour régulières.

## Renovate ##

C'est là qu'intervient Renovate, un outil créé par Mend (article non sponsorisé) pour aider les développeurs à maintenir
les dépendances d'un projet, de manière incrémentale et configurable.
Renovate va analyser le dépôt dans lequel se trouve le code source, détecter les fichiers de configuration de dépendances
(package.json, pom.xml, etc.) ainsi que les autres outils intégrant des versions (Dockerfile, Gradle wrapper,
configuration Yaml d'une Action Github, etc.) et proposer des mise à jour sous la forme de *pull requests*, avec
au passage des notes de releases indiquant les modifications apportées par la nouvelle version.
L'outil scannant régulièrement le dépôt, vous n'aurez pas à chercher manuellement et régulièrement quelles sont les mise
à jour disponibles à un moment donné, il le fera à votre place en vous fournissant des statistiques
(taux d'adoption par exemple) de manière configurable.

| [![Une pull request proposée par Renovate pour mettre à jour Angular Material](/blog/2024/1-renovate-article/update-pr-angular.png)](<https://github.com/ArnaudFlaesch/Dash-Web/pull/1038>) | 
|:--:| 
| *Une pull request proposée par Renovate pour mettre à jour Angular Material* |

Les forces de Renovate sont sa facilité de prise en main, ne nécessitant que peu de temps d'installation et ses multiples
options de configuration,vous permettant de le faire fonctionner à votre guise. Sur ce deuxième point, l'outil n'a pas
pour but de complétement remplacer un développeur, mais de facilier son travail en proposant des modifications au code
via une pull request, mais en nécessitant toujours une validation (sauf si vous modifiez la configuration manuellement
que l'outil merge sans validation).

Votre projet a sûrement un processus d'intégration continue que vous allez pouvoir utiliser avec cet outil. À chaque
pull request de créée par Renovate et à chaque modification apportée à celle-ci, vos tests vont pouvoir s'exécuter
sur cette nouvelle version et vérifier qu'il n'y a aucune régression dans le code. Ils vont aussi pouvoir détecter en avance
les changements dans l'API de la librairie mise à jour, suite à quoi un développeur pourra faire les modifications nécessaires.
Ensuite, une fois les changements validés par l'intégration continue et les développeurs, il ne vous restera plus qu'à valider
la pull request pour intégrer les changements.

## La gestion sémantique de version ##

La version d'un composant logiciel est généralement constituée de trois numéros formés de telle sorte: majeur.mineur.correctif
(exemple : 4.2.30).
Dans cet exemple, 4 désigne la version majeure, 2 la version mineure et 30 la version de correctif
(respectivement major, minor et patch en anglais). Si un composant logiciel veut respecter la gestion sémantique de version,
notamment pour aider d'éventuels utilisateurs à mieux gérer leurs dépendances, il doit respecter un certain nombre de règles,
parmi lesquelles :

* Déclarer une API publique.
* Respecter le format majeur.mineur.correctif.
* Incrémenter le nombre associé au correctif lorsqu'un correctif rétrocompatible est introduit.

* Incrémenter le nombre associé à la version mineure lorsqu'une nouvelle fonctionnalité rétrocompatible est introduite dans l'API publique. Le nombre associé au correctif est remis à 0.

* Incrémenter le nombre associé à la version majeure lorsqu'une nouvelle fonctionnalité non rétrocompatible est introduite dans l'API publique. Les nombres associés à la version mineure et au correctif sont remis à 0.

* Ne pas modifier le contenu d'une version existante mais à la place en livrer une nouvelle avec les numéros de versions correctement incrémentés.

## Installation et utilisation ##

Si vous utilisez Github, vous pouvez l'installer facilement en tant qu'application en vous rendant dans <https://github.com/settings/installations>.
À partir de là, vous pouvez choisir les projets auxquels vous souhaitez rajouter l'outil.

Sur les autres plateformes, cela demandera un tout petit peu plus de configuration :

* Sur Gitlab, ajouter gitlab ci, fichier config.js et token gitlab + github pour avoir les releases notes indiquées dans la PR
* Sur bitbucket,
* sur Azure
* En entreprise, il existe une solution auto hébergée ? (on premise) ?
* Il est également possible d'utiliser une chart helm avec un token, un fichier config avec la liste des projets

Une fois Renovate ajouté à un projet, une *onboarding pull request* sera créée sous peu pour ajouter un fichier
de configuration minimal et dès que celle-ci sera merge, le projet sera scanné régulièrement.

## Quelques points importants ##

Avec cet outil, on serait vite tenté dans un premier temps de merge dès qu'une pull request se présente
pour avoir la dernière version en tout instant. En soi, il n'est jamais nécessaire d'avoir systèmatiquement
les dernières fonctionnalités d'une libairie, mais surtout une version mineure qui n'ait pas trop de retard
sur la dernière version disponible, pour anticiper une éventuelle montée de version nécessaire.

Intégrer la dernière version d'un composant dès sa sortie vous expose à des risques, comme par exemple
celui d'être au final le beta-testeur de l'outil, car de nombreuses fois vous verrez qu'un correctif est
déployé dans les heures ou jours qui suivent la livraison d'une nouvelle version majeure. De plus,
vous risquez de vous rendre compte plus tard que d'autres composants que vous utilisez ne sont pas encore
compatibles avec cette nouvelle version (surtout dans le cas d'une nouvelle version majeure) et risquez
de devoir revenir en arrière.

Le plus important est surtout d'avoir une suite de tests exécutés à chaque changement (comme lorsque vous
ajoutez une nouvelle fonctionnalité) qui valide le bon fonctionnement de votre application. Si les tests passent,
vous pouvez considérer que la pull request peut être merge sans problème. Si vous vous rendez compte qu'il y a un
bug après le merge, c'est qu'il manquait un test :).

Dans le cas des dépendances backend, un changement dans l'API du composant mis à jour se traduira souvent par un test
en erreur ou une compilation du projet en échec. Une lecture des *release notes* affichée dans la pull request
s'avèrera nécessaire pour comprendre ce qui doit être modifié.
Côté frontend, cela peut être un peu plus complexe, car certains changements peuvent ne pas causer de
problème de compilation mais effectuer des modifications visuelles, attention donc suivant les
dépendances à potentiellement checkout la branche associée et tester correctement.


Renovate peut être comparé à Snyk de par son fonctionnement et son utilité. Cependant, Renovate
a pour but de vous proposer une nouvelle version dès que celle-ci est disponible alors que Snyk
attendra qu'une faille de sécurité se présente pour vous proposer une mise à jour. Pour ma part
je pense que les deux outils devraient être utilisés en même temps car ils se complètent, ainsi
vous aurez des alertes de sécurité de Snyk plus facile à corriger car vous aurez déjà des dépendances
suffisament à jour.

## Conclusion ##

Renovate est un outil facile à utiliser, ne demandant pas beaucoup de configuration
et permettant d'enlever une charge de travail laborieuse mais nécessaire aux développeurs.
Utilisé avec une intégration continue robuste, il vous permettra de maintenir vos
dépendances à jour sereinement pour éviter les rushs de dernière minute quand il n'y
a plus d'autres solutions que de faire une montée de version. // @TODO
Pour ma part, je l'utilise sur mes projets personnels car cela me permet de ne pas avoir
à faire toutes les mises à jour d'un coup quand je les laisse en stand-by pendant plusieurs semaines/mois ;).
J'incite également les équipes avec lesquelles je travaille à l'installer, ayant fait face
à des situations professionnelles où ce genre d'outil aurait fait gagner du temps.

## Liens utiles ##

* Site officiel de Renovate : <https://docs.renovatebot.com/>
* Documentation sur la configuration : <https://docs.renovatebot.com/configuration-options/>
* Gestion sémantique de version : <https://semver.org/lang/fr/>
