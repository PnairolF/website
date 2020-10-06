---
title: Et react-query, ça fait le café ? ☕️
date: "2020-10-01"
timeReading: "6 minutes"
excerpt: Pouvoir récupérer, mettre en cache ou mettre à jour des données dans React et React Native sans toucher à un "global state" ? Ça me plaît bien comme idée ! Voici une lib bien prometteuse qu'il fallait absolument que je vous présente.
---

Attention ⚠️ : Je découvre tout juste cette lib que j'ai mise en place sur un projet client.
Il est possible que ma présentation comporte des erreurs, mais l'idée n'est pas
de remplacer la documentation mais plutôt de vous présenter ce que cette lib a
dans le ventre.

## Premier avantage : connaître l'état des requêtes sans avoir rien à faire

La première chose qui m'a séduit avec [React Query](https://react-query.tanstack.com/),
c'est qu'il fait tout seul et automatiquement quelque chose que j'ai jusque-là toujours
fait à la main : gérer l'état de ma requête.

Je me rappelle une époque fastidieuse où j'utilisais redux, et qu'à chaque début de 
requête, je m'amusais à dispatcher une action `FETCHING`, puis à dispatcher une 
`SUCCESS` une fois la donnée reçue, sans oublier l'action `ERROR` en cas de pépin.

Pour pousser le vice, je réalisais ça en TDD bien sagement. En faisant ça pour chaque type de 
requête GET, ça avait presque un côté industriel. Mais c'était clairement sous-optimal, sans compter les duplications de logiques.

React Query répond en premier lieu à abstraire toute cette partie là, une bonne fois pour toute.

Bien entendu, j'imagine que depuis, il existe des nouveaux standards redux qui permettent certainement
d'éviter d'avoir à créer toutes ces actions à la main pour des simples requêtes GET.
Néanmoins, j'avais envie de faire pour une fois un front sans redux, mais en
allant plus loin que de tout gérer avec des hooks à la mano.

Voici comment s'y prendre. Déjà, il faut une app react sous la main. Un petit `npx create-react-app i-love-react-query && cd i-love-react-query` fera l'affaire.

Ensuite, on installe la lib en question `npm i react-query`.