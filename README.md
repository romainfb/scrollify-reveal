# Scroll Reveal
## _Créer des animations de défilement réactives_

La fonction scrollReveal vous permet de créer des animations de défilement (scroll reveal) pour les éléments HTML. Elle utilise l'API Intersection Observer pour détecter quand les éléments deviennent visibles à l'écran et appliquer des animations spécifiées.

## Utilisation de base

```sh
scrollReveal('.element', options);
```
>    .element : Un sélecteur CSS qui cible les éléments que vous souhaitez animer.
    options : Un objet contenant les options de configuration (facultatif).

## Options disponibles

Les options peuvent être passées sous forme d'objet lors de l'appel de scrollReveal. Voici les options disponibles :

- delay (nombre, par défaut: 0) : Le délai en millisecondes avant que l'animation ne commence après que l'élément devient visible.
- distance (chaîne de caractères, par défaut: '0px') : La distance de translation verticale à appliquer à l'élément lors de son apparition.
- duration (chaîne de caractères, par défaut: '1000ms') : La durée de l'animation.
- easing (chaîne de caractères, par défaut: 'cubic-bezier(0.5, 0, 0, 1)') : La fonction de temporisation pour l'animation.
- zoom (booléen, par défaut: true) : Activer ou désactiver l'effet de zoom de l'élément lors de son apparition.
- hideOnExit (booléen, par défaut: true) : Activer ou désactiver la disparition de l'élément lorsqu'il sort de la vue.

## Exemple d'utilisation

```sh
scrollReveal('.tagline', { delay: 500, distance: '20px', duration: '800ms', zoom: true, hideOnExit: true });
```

Cet exemple cible les éléments avec la classe "tagline" et leur applique une animation de défilement avec un délai de 500 millisecondes, une distance de translation de 20 pixels, une durée de 800 millisecondes, un effet de zoom et une disparition lors de la sortie de la vue.
