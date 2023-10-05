# Scrollify Reveal
## _Create responsive scroll animations_

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![Latest release](https://badgen.net/github/release/Naereen/Strapdown.js)](https://github.com/romainfb/Scrollify-Reveal/releases)

The ScrollifyReveal class allows you to create scroll reveal animations for HTML elements. It utilizes the Intersection Observer API to detect when elements become visible on the screen and applies specified animations.

## Demo
https://romainfb.github.io/scrollify-reveal/

## Basic Usage

```sh
scrollifyReveal.reveal('.element', options);
```
>    .element: A CSS selector targeting the elements you want to animate.
options: An object containing configuration options (optional).

## Available Options

Options can be passed as an object when calling scrollReveal. Here are the available options:

- delay (number, default: 0): The delay in milliseconds before the animation starts after the element becomes visible.
- distance (string, default: '0px'): The vertical translation distance to apply to the element upon appearing.
- duration (string, default: '1000ms'): The animation duration.
- easing (string, default: 'cubic-bezier(0.5, 0, 0, 1)'): The timing function for the animation.
- zoom (number, default: 0.8): Set the initial value for the element's zoom effect upon appearing.
- hideOnExit (boolean, default: true): Enable or disable the element's disappearance when it exits the view.
- opacity (number, default: 1): Set the opacity of the element after it appears.

## Example Usage

```sh
scrollifyReveal.reveal('.element', { delay: 500, distance: '20px', duration: '800ms', zoom: true, hideOnExit: true, opacity: 1});
```

This example targets elements with the "tagline" class and applies a scroll animation with a 500-millisecond delay, a 20-pixel vertical translation distance, an 800-millisecond duration, a zoom effect, and disappearing when exiting the view.
This license is subject to modification by the copyright holder, and any new version of this license will be effective from the date of publication by the copyright holder.
