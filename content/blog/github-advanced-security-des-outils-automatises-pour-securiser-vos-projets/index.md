---
title: 'GitHub Advanced Security : Des outils automatisés pour sécuriser vos projets'
date: '2024-04-04T18:00'
description: "Présentation d'outils permettant d'améliorer la sécurité d'un projet dès son développement : analyse de secrets, de code et de dépendances."
image: 2024/2-ghas/ghas-logo.png
imageSubtitle: 'Logos de GitHub, CodeQL, Dependabot et GitHub Actions. Source images : <a href="https://www.svgrepo.com">https://www.svgrepo.com</a>.'
tags: ['GitHub', 'DevSecOps', 'Azure DevOps', 'Sécurité logicielle', 'DevOps']
---

Récemment j'ai étudié plus en profondeur la gestion de la sécurité dans GitHub dans le but de passer la certification
[GitHub Advanced Security](https://docs.github.com/fr/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications#certification-github-advanced-security).

Utilisant souvent GitHub pour des projets, mais pas dans un contexte professionnel qui aurait permis
une mise en situation réelle,j'ai souhaité en apprendre davantage sur les moyens à disposition pour
mieux sécuriser un projet et quelles étaient les bonnes pratiques.

L'idée derrière GitHub AS est d'intégrer les bonnes pratiques liées à la sécurité et la détection des problèmes
au plus tôt dans le cycle de vie d'un projet. Pour cela, GitHub propose une approche visant à intégrer la gestion
et l'amélioration de la sécurité dès la phase de développement en donnant aux développeurs les moyens de sécuriser
au maximum le projet grâce à différents outils qui vont analyser le projet à chaque modification.

Dans cet article je vais vous parler des principaux outils proposés, qui, dans un contexte d'entreprise,
vous permettront d'améliorer la sécurité de vos applications et de les mettre en production plus sereinement.
Ces outils sont disponibles gratuitement pour les projets publics mais nécessitent une licence payante
pour les projets privés dont le coût dépendra du nombre de développeurs actifs dessus.

Si vous utilisez Azure DevOps, vous pouvez continuer à lire car nous allons voir que ces outils
peuvent tout aussi bien fonctionner avec !

## La gestion des dépendances

Comme évoqué dans mon précédent article sur Renovate, les projets ont généralement une quantité de dépendances difficile
à gérer au fil du temps. Avec GitHub AS, le but est plutôt de détecter et résoudre les failles de sécurité dès
qu'elles sont rendues publiques.

Pour cela GitHub met à disposition des développeurs Dependabot, un outil permettant d'analyser vos dépendances
et d'avertir les développeurs quand une faille de sécurité est détectée.

Dans l'onglet "Sécurité" d'un dépôt, vous pouvez cliquer sur "Dependabot" et ainsi trouver
la liste des alertes qui requièrent votre attention.

![Un exemple d'alertes remontée par Dependabot sur un de mes projets personnels.](/blog/2024/2-ghas/dependabot.png)
_Un exemple d'alertes remontées par Dependabot sur un de mes projets personnels._

Un point important à prendre en compte et que les dépendances affectées par une faille de sécurité ne sont pas toutes
systématiquement mises à jour rapidement. Garder une dépendance vulnérable peut vous faire prendre des risques,
et donc dans certains cas vous pourriez être amenés à devoir la supprimer de votre projet et la remplacer par une autre
maintenue plus régulièrement.

En plus de vous alerter, Dependabot peut analyser votre code pour éviter d'intégrer une nouvelle dépendance vulnérable,
via une Action GitHub que vous pouvez ajouter à votre intégration continue et exécuter par exemple pour chaque pull request.

Aussi, de manière similaire à Renovate, vous pouvez configurer l'outil via le fichier de configuration _dependabot.yml_
pour qu'il analyse régulièrement votre liste de dépendances et propose des pulls requests pour les mettre à jour.
Pour cela, il suffit de se rendre dans "Paramètres" -> "Sécurité et analyse du code" puis "Dependabot version updates"
et cliquer sur "Activer". Cela vous amènera sur une page où vous pourrez créer le fichier dependabot.yml
et l'ajouter au dépôt.

#### **`dependabot.yml`**

```yml
# Exemple de configuration Dependabot pour mettre
# à jour régulièrement des dépendances NPM et Docker.
# Source : https://docs.github.com/fr/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: 'npm'
    # Look for `package.json` and `lock` files in the `root` directory
    directory: '/'
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: 'daily'

  # Enable version updates for Docker
  - package-ecosystem: 'docker'
    # Look for a `Dockerfile` in the `root` directory
    directory: '/'
    # Check for updates once a week
    schedule:
      interval: 'weekly'
```

## Détection de secrets

Une problématique malheureusement trop souvent rencontrée est l'ajout de secrets, volontaire ou non, dans un dépôt visible
par d'autres développeurs. Qu'il s'agisse d'un token permettant d'accéder aux ressources d'une API ou d'un mot
de passe utilisateur, le fait que ce genre de données se retrouve accessible génère immédiatement un problème de
sécurité. Par exemple quelqu'un pourra s'authentifier en tant qu'un autre utilisateur et même avoir accès
à des privilèges supérieurs lui permettant d'accéder à des données sensibles.

Qu'il s'agisse du contexte d'un projet open source ou d'un projet privé en entreprise, un secret rendu public
est un sujet qui doit être traité immédiatement pour limiter les risques.

GitHub propose la fonctionnalité _secret scanning_ qui permet donc de détecter les secrets présents dans un dépôt.

![L'écran de détection des secrets dans un de mes projets sur GitHub.](/blog/2024/2-ghas/secret_scanning.png)
_L'écran de détection des secrets dans un de mes [projets](https://github.com/ArnaudFlaesch/arnaudflaesch.github.io/security/secret-scanning) sur GitHub._

La fonctionnalité doit tout d'abord être activée via les paramètres du dépôt GitHub en allant dans le menu
"Sécurité et analyse du code". Il est également possible au même endroit d'activer la "Push protection"
qui scannera les commits envoyés sur les branches du dépôt par un développeur et empêchera que des
secrets soient rendus publics.

De plus, l'analyse de détection de secret va également scanner les _issues_, _pull requests_, et les
_discussions_ (titre, description et commentaires à chaque fois) pour y chercher des secrets.

Dans le cas où un secret détecté est lié à un des partenaires de GitHub, celui-ci sera notifié immédiatement
qu'un secret est compromis et pourra le révoquer. La liste des partenaires peut être trouvée
ici : <https://docs.github.com/fr/code-security/secret-scanning/secret-scanning-patterns#supported-secrets>
et on y trouve notamment AWS, Azure et Docker.

## Analyse de code

GitHub permet aussi d'analyser le code aussi bien déjà existant que rajouté au fil du temps par les développeurs
grâce à leur outil d'extraction et de requête, CodeQL. Dans votre intégration continue, vous pouvez utiliser
l'action github/codeql-action/analyze qui va, lorsqu'elle sera exécutée pour la première fois, créer une
base de données contenant les différentes lignes de code pour ensuite permettre à l'analyse de savoir
quelles lignes comportent des problèmes. Il peut s'agir de simples avertissements liés à des erreurs
de styles (conventions de nommage non respectées, formatage incorrect, etc.) ou bien d'alertes de sécurité.

Pour ajouter un scan CodeQL à un de vos projets, il suffit d'aller dans l'onglet "Actions", puis de cliquer
sur "New workflow", de chercher "CodeQL" et de configurer l'action "CodeQL Analysis." Cela vous guidera
dans la création d'un nouveau workflow et il ne restera qu'à choisir le ou les langages à analyser.

![Exemple d'alertes remontées (entre autres) par CodeQL sur un de mes projets GitHub.](/blog/2024/2-ghas/code_scanning.png)
_Exemple d'alertes remontées (entre autres) par CodeQL sur un de mes projets GitHub._

Comme vous pouvez le voir sur l'image juste dessus, il y a des alertes remontées par CodeQL, mais aussi par
[Snyk](https://github.com/marketplace/actions/snyk) et [Codacy](https://github.com/marketplace/actions/codacy-analysis-cli)
car ces outils sont utilisés ici via des Actions GitHub pour respectivement analyser l'image Docker
du projet et les styles de code (d'où le nombre élevé dû à beaucoup d'erreurs de styles remontées par Codacy).
Les alertes et informations recueillies dans l'onglet "Sécurité" d'un projet GitHub sont des informations reçues
en utilisant le format SARIF, et donc toute Action GitHub produisant un fichier de ce format peut les intégrer
dans l'onglet, ce qui vous permet d'avoir au même endroit tous les résultats d'analyses de votre code, qu'il
s'agisse d'erreurs de style ou de problèmes de sécurité, le tout triable bien sûr en fonction de la sévérité.

## Azure DevOps

Comme je l'écrivais au début, les fonctionnalités dont je vous ai parlé sont aussi disponibles sur Azure DevOps,
ce qui est pratique car cette plateforme est plus répandue dans le monde professionnel.
Il est possible d'activer ces fonctionnalités au niveau d'un dépôt, d'un projet, ou de l'organisation entière.

### Analyse des dépendances

Dans un fichier de pipeline, il est possible de rajouter une tâche dédiée au scan des dépendances :

#### **`azure-pipelines.yml`**

```yml
# Advanced Security Dependency Scanning v1
# Scan for open source dependency vulnerabilities in your source code.
- task: AdvancedSecurity-Dependency-Scanning@1
  inputs:
  # Advanced
  # directoryExclusionList: # string. Directory exclusion list.
```

Après chaque analyse, la liste des dépendances contenant une vulnérabilité sera mise à jour et visible dans l'onglet
"Advanced Security -> Dependencies" depuis la page du dépôt sélectionné.

Documentation sur l'analyse de dépendances : <https://learn.microsoft.com/fr-fr/azure/devops/repos/security/github-advanced-security-dependency-scanning?view=azure-devops>

### Analyse de secrets

La détection de secrets démarre automatiquement lorsque Advanced Security est activée pour un dépôt.
L'analyse va dans un premier temps s'exécuter sur tous les commits existant déjà dans le dépôt et
afficher les secrets détectés dans l'onglet "Secrets" via Repos > Advanced Security.
La "Push protection" est également activée par défaut en même temps qu'Advanced Security.

![L'écran de détection des secrets sur Azure DevOps.](/blog/2024/2-ghas/azure-secret-scanning.png)
_Source image : <https://learn.microsoft.com/fr-fr/azure/devops/repos/security/media/secret-scanning-alerts.png?view=azure-devops>._

Documentation sur l'analyse de secrets : <https://learn.microsoft.com/fr-fr/azure/devops/repos/security/github-advanced-security-secret-scanning?view=azure-devops>

### Analyse de code

Comme avec GitHub, il faut ajouter plusieurs tâches dans un pipeline :

1. AdvancedSecurity-Codeql-Init@1 en sélectionnant les langages à analyser, séparés par une virgule.
2. AdvancedSecurity-Codeql-Autobuild@1 ou une étape de compilation personnalisée suivant le projet ou le langage
3. AdvancedSecurity-Codeql-Analyze@1

Exemple de configuration yaml :

#### **`azure-pipelines.yml`**

```yml
# Initialize CodeQL database
- task: AdvancedSecurity-Codeql-Init@1
  inputs:
    language: csharp
  displayName: 'Advanced Security Initialize CodeQL'

# Build project using Autobuild or your own custom build steps
- task: AdvancedSecurity-Codeql-Autobuild@1
  displayName: 'Advanced Security Autobuild'

# Run analysis
- task: AdvancedSecurity-Codeql-Analyze@1
  displayName: 'Advanced Security Code Scanning'
```

Documentation sur l'analyse de code : <https://learn.microsoft.com/fr-fr/azure/devops/repos/security/github-advanced-security-code-scanning?view=azure-devops>

Documentation pour CodeQL: <https://learn.microsoft.com/fr-fr/azure/devops/pipelines/tasks/reference/advanced-security-codeql-analyze-v1?view=azure-pipelines>

## Conclusion

Ce que j'ai apprécié en en apprenant plus sur GitHub Advanced Security est de voir qu'il est possible de sécuriser
le code d'un projet sans avoir à sortir de GitHub et recourir à des applications tierces comme Snyk par exemple,
même si je continue de l'utiliser sur des projets personnels.

L'utilisation de GitHub Advanced Security n'empêche pas cependant de rester vigilant et de mettre en place les bonnes pratiques au niveau du code
et de la sécurité, ainsi que de faire de la veille sur ces sujets. Ces outils sont là pour donner la possibilité
aux développeurs d'améliorer la sécurité d'une application tout en allégeant leur travail, mais le plus important
est que l'équipe de développement soit formée et sensibilisée au sujet de la sécurité.

### Liens utiles

- Présentation de GitHub Advanced Security : <https://docs.github.com/fr/get-started/learning-about-github/about-github-advanced-security>
- Configurer GitHub Advanced Security avec Azure DevOps: <https://learn.microsoft.com/fr-fr/azure/devops/repos/security/configure-github-advanced-security-features?view=azure-devops&tabs=yaml>
