---
title: Maintenir ses dépendances logicielles facilement avec Renovate
date: '2024-02-10T16:00'
description: Comment maintenir les dépendances d'un logiciel de manière sûre et rapide grâce à un outil automatisé.
image: 2024/1-renovate/renovate-logo.png
tags: ['Dépendances', 'Renovate', 'Sécurité logicielle']
---

Vous vous êtes sans doute déjà retrouvé dans un projet de longue date, concentré sur l'ajout de nouvelles fonctionnalités,
de tests, de corrections de bugs, mais en négligeant de garder à jour régulièrement les dépendances associées au projet.

## Le contexte

Lorsqu'un projet logiciel démarre, il est créé par défaut avec un certains nombres de dépendances, surtout lorsqu'il s'agit
par exemple d'une application Node.JS qui va contenir une liste assez longue dans son fichier package.json.
Au fil du temps les fonctionnalités ajoutées au projet vont nécessiter des dépendances supplémentaires, et cela peut entraîner
des problèmes qui ne se déclareront qu'au dernier moment si elles ne sont pas maintenues régulièrement.

Par exemple, lorsque la faille de sécurité associée à Log4J a été détectée fin 2021, son caractère critique a nécessité
une mise à jour rapide sur l'application sur laquelle je travaillais. Le problème c'est que cette mise à jour demandait d'autres
montées de versions, notamment Spring, qui elle-même imposait plusieurs modifications dans notre code et la configuration
du projet à cause du décalage entre la version que nous utilisions et celle compatible avec le correctif Log4J.
Cela a donc rajouté du temps au déploiement du correctif, et aurait pu être évité avec des mises à jour régulières.

Les dépendances font au final partie intégrante d'un projet même si elles proviennent d'une tierce partie, et peuvent
devenir avec le temps similaires à du code legacy.
Aussi lors de l’ajout d’une nouvelle fonctionnalité pouvant nécessiter une librairie externe, un développeur pourra se
rendre compte que cette librairie n’est pas compatible avec un composant déjà installé, mais trop vieux.
Dans ce cas il pourra soit être bloqué dans son travail, soit être ralenti par une montée de version nécessaire
mais non prévue initialement.

|     ![Personne en train de jouer à Jenga.](/blog/2024/1-renovate/jenga.jpg)      |
| :------------------------------------------------------------------------------: |
| _Développeur frontend essayant de mettre à jour un package.json vieux de 2 ans._ |

## Présentation de Renovate

C'est sur le maintien de ces dépendances qu'intervient Renovate, un outil créé par Mend (article non sponsorisé)
pour aider les développeurs à maintenir leurs projets à jour de manière incrémentale et configurable.
L'outil va analyser le dépôt dans lequel se trouve le code source, détecter les fichiers de configuration de dépendances
(package.json, pom.xml, etc.) ainsi que les autres outils intégrant des versions (Dockerfile, Gradle wrapper,
configuration Yaml d'une Action Github, etc.) et proposer des mise à jour sous la forme de pull requests, avec
au passage des releases notes indiquant les modifications apportées par la nouvelle version.
L'outil scannant régulièrement le dépôt, vous n'aurez pas à chercher manuellement et régulièrement quelles sont les mise
à jour disponibles à un moment donné, il le fera à votre place en vous fournissant des statistiques
(taux d'adoption par exemple) de manière configurable.

Les forces de Renovate sont sa facilité de prise en main, ne nécessitant que peu de temps d'installation et ses multiples
options de configuration, vous permettant de le faire fonctionner à votre guise. Sur ce deuxième point, l'outil n'a pas
pour but de complètement remplacer un développeur, mais de faciliter son travail en proposant des modifications au code
via une pull request tout en nécessitant toujours une validation (sauf si vous modifiez la configuration manuellement
que l'outil merge sans approbation).

| [![Pull request de Renovate sur Github.](/blog/2024/1-renovate/update-pr-angular.png)](https://github.com/ArnaudFlaesch/Dash-Web/pull/1038) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
|                                _Une pull request proposée par Renovate pour mettre à jour Angular Material._                                |

Votre projet a sûrement un processus d'intégration continue que vous allez pouvoir utiliser avec cet outil. À chaque
pull request créée par Renovate, vos tests vont pouvoir s'exécuter sur cette nouvelle version et vérifier que
le projet fonctionne toujours correctement. Si ce n'est pas le cas, c'est sans doute qu'il y a eu un ou plusieurs
changements dans l'API de la librairie mise à jour et un développeur pourra faire les modifications nécessaires en s'appuyant
sur les releases notes affichées dans la PR.
Ensuite, une fois les changements validés par l'intégration continue et les développeurs, il ne vous restera plus qu'à valider
la pull request pour mettre à jour la dépendance.

## La gestion sémantique de version

Pour comprendre la façon avec laquelle sont versionnés les logiciels, voici une brève explication de la gestion sémantique
de version (_SemVer_ en anglais).
La version d'un composant logiciel est généralement constituée de trois numéros formés de telle sorte: majeur.mineur.correctif
(exemple : 4.2.30).
Si un composant logiciel veut respecter _SemVer_, notamment pour aider d'éventuels
utilisateurs à s'y retrouver plus facilement, il doit respecter un certain nombre de règles parmi lesquelles :

- Déclarer une API publique.
- Respecter le format majeur.mineur.correctif.
- Incrémenter le nombre associé au correctif lorsqu'une correction rétrocompatible est introduite.
- Incrémenter le nombre associé à la version mineure lorsqu'une nouvelle fonctionnalité rétrocompatible est introduite dans l'API publique. Le nombre associé au correctif est remis à 0.
- Incrémenter le nombre associé à la version majeure lorsqu'une nouvelle fonctionnalité non rétrocompatible est introduite dans l'API publique. Les nombres associés à la version mineure et au correctif sont remis à 0.
- Ne pas modifier le contenu d'une version existante mais à la place en livrer une nouvelle avec les nombres correctement incrémentés.

## Installation et utilisation de Renovate

Si vous utilisez Github, vous pouvez l'installer facilement en tant qu'application en vous rendant dans <https://github.com/settings/installations>.
À partir de là, vous pourrez sélectionner les projets à analyser.

Sur les autres plateformes, cela demandera un tout petit peu plus de configuration. Sans faire un tutoriel détaillé
pour chacune d'entre elles, il vous faudra :

- Un fichier config.js définissant entre autre la plateforme que vous utilisez.
- Un fichier .yml servant à la configuration d'un pipeline (.gitlab-ci.yml, azure-pipelines.yml, etc.).
- Un token utilisateur propre à votre plateforme ayant les droits de créer une PR et d'accéder à vos dépôts.
- Un token Github, optionnel mais servant à récupérer les releases notes vous indiquant ce qui a changé entre deux versions.

Les différentes façons d'utiliser Renovate sont détaillées ici :
<https://docs.renovatebot.com/getting-started/running/> et ici <https://docs.renovatebot.com/examples/self-hosting/>.

Pour vous donner un exemple, voici la configuration nécessaire pour Azure Devops :

#### **`azure-pipelines.yml`**

```yml
pool:
  vmImage: ubuntu-latest

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '18.x'
      checkLatest: true
      displayName: 'Node Installation'

  - bash: export GITHUB_COM_TOKEN=$(GITHUB_TOKEN) && npx renovate --endpoint https://dev.azure.com/$(PROJECT_GROUP_NAME) --token=$(AZURE_TOKEN)
    displayName: 'Run renovate'
```

#### **`config.js`**

```js
module.exports = {
  platform: 'azure',
  logFileLevel: 'warn',
  logLevel: 'info',
  printConfig: true,
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
  }
  gitAuthor: "Renovate Bot bot@renovateapp.com",

  repositories: [
    'HelloWorld',
    'BonjourMonde'
  ]
}
```

Vous pouvez créer ces deux fichiers dans un dépôt à part, créer les variables d'environnement nécessaires,
lancer le pipeline et Renovate analysera les dépôts définis dans _repositories_. Ensuite vous pourrez ajouter
un schedule dans le fichier azure-pipelines.yml pour que le pipeline se lance régulièrement.
Sur Gitlab, le processus sera assez similaire et vous devrez créer un fichier _.gitlab-ci.yml_ à la place
de celui pour le pipeline Azure.

Pour aller plus loin, vous pouvez modifier la configuration par défaut en modifiant le fichier renovate.json
présent dans chaque projet analysé en ajoutant des options telles que :

- _reviewers_ pour renseigner les utilisateurs assignés aux PR créées.
- _packageRules_ pour appliquer une règle à plusieurs packages, comme les dépendances Angular, et les grouper pour ne pas créer des PR séparées à chaque fois.
- _automerge_ pour merge automatiquement une PR. Personnellement je ne recommande pas cette option pour la plupart des dépendances, mais associée à _packageRules_ par exemple, cela vous permet de merge automatiquement certains outils mineurs comme les _types_ des projets Node.JS ou d'autres devDependencies qui ne risquent pas d'ajouter des bugs. Cela permettra de ne pas saturer la liste des pull requests et de vous concentrer sur les plus importantes d'entre elles.

## Quelques points importants

Avec cet outil, on serait vite tenté dans un premier temps de merge dès qu'une pull request se présente
pour avoir tout le temps la dernière version des frameworks et librairies. En soi, il n'est jamais nécessaire d'avoir systématiquement
les dernières fonctionnalités, mais plutôt une version mineure qui n'ait pas trop de retard
sur la dernière disponible pour anticiper une éventuelle mise à jour nécessaire.

Intégrer la dernière version majeure d'un composant dès sa sortie vous expose à des risques, comme par exemple
celui d'être au final le beta-testeur de l'outil. De nombreuses fois vous verrez qu'un correctif est
déployé dans les heures ou jours qui suivent sa release. De plus, vous pourriez vous rendre compte plus tard que
d'autres dépendances que vous utilisez ne sont pas encore compatibles avec cette nouvelle
release et risquez de devoir revenir en arrière.

Le plus important est surtout d'avoir une suite de tests exécutés à chaque changement (comme lorsque vous
ajoutez une nouvelle fonctionnalité à votre application) qui valide le bon fonctionnement de celle-ci. Si les tests passent,
vous pouvez considérer que la pull request peut être validée sans problème. Si vous vous rendez compte qu'il y a un
bug après le merge, c'est qu'il manquait un test :).

Renovate peut être comparé à Snyk de par son fonctionnement et son utilité. Cependant il
a pour but de vous proposer une nouvelle version dès que celle-ci est disponible alors que Snyk
attendra qu'une faille de sécurité se présente pour vous proposer une mise à jour. Pour ma part
je pense que les deux outils devraient être utilisés en même temps car ils se complètent, ainsi
vous aurez des alertes de sécurité de Snyk plus facile à corriger car vous aurez déjà des dépendances
suffisamment récentes.

## Conclusion

Renovate est un outil facile à mettre en place, ne demandant pas beaucoup de configuration et permettant d'enlever une
partie de la charge de travail des développeurs.
Utilisé avec une intégration continue fiable, il vous permettra de maintenir vos dépendances sereinement pour éviter
d'accumuler les retards de version et devoir tout mettre à jour au dernier moment.

Pour ma part je l'utilise sur mes projets personnels car cela me permet de ne pas avoir à faire toutes les mises
à jour d'un coup quand je les laisse en stand-by pendant plusieurs semaines/mois ;) et je vous
invite à l'essayer pour que les montées de versions ne soient plus un évènement pour vous !

## Liens utiles

- Site officiel de Renovate : <https://docs.renovatebot.com/>
- Documentation sur la configuration : <https://docs.renovatebot.com/configuration-options/>
- Gestion sémantique de version : <https://semver.org/lang/fr/>
