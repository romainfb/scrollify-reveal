# Scrollify Reveal
## _Create responsive scroll animations_

The ScrollifyReveal class allows you to create scroll reveal animations for HTML elements. It utilizes the Intersection Observer API to detect when elements become visible on the screen and applies specified animations.

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

## LICENSE (Free for personal and commercial use)

```sh
Scrollify Reveal Usage License

Copyright (c) 2023 - Romain Fouillade-Bardet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and its associated documentation (the "Software"), to use the Software for personal or commercial purposes, subject to the following conditions:

1. You may use, copy, and modify the Software for personal or commercial purposes, but you may not sell, rent, lease, sublicense, or distribute the Software.

2. You must retain all copyright notices and this license notice in all copies of the Software that you create.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This license is subject to modification by the copyright holder, and any new version of this license will be effective from the date of publication by the copyright holder.

For any inquiries regarding this license, please contact Romain Fouillade-Bardet.
```
