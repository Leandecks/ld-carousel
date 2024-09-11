# ld-carousel

JS module for easy implementation of image carousels or slideshows in HTML.  
Developed by [Leandecks](https://github.com/Leandecks) (rigel1631).

## Installation

```
npm i -D ld-carousel
```

You need to have npm in your project. If you don't, run `npm init`.

## Usage

The module gives you a custom JavaScript function for creating modules and a basic stylesheet that styles it. Both can be customized.

### JavaScript

```js
function createCarousel(
  container,
  wrapper,
  images = [],
  circleBackgroundColor = "#000"
)
```

- `container`: the element that will contain the images.
- `wrapper`: the element that wraps the container of the images. It will display the navigation bar at the bottom.
- `images`: an array of all the images that will be in the dropdown.
- `circleBackgroundColor`: the background color of the navigation circles at the bottom. Defaults to black.

### CSS

This module also contains a simple CSS stylesheet. It positions the buttons that are used to cycle through the images, styles the navbar and puts everything in its place. This is optional but highly recommended!

You can customize the colors using CSS variables. Pay attention to importing the carousel's stylesheet BEFORE your stylesheet.

```css
:root {
  --prime: #000;
  --second: #2f2e3d;
  --accent: #8d8ab9;
  --button-hover-color: #fff;
}
```

- `--prime`: used for the navigation circles, the buttons and the buttons' hover effect.
- `--second`: used as background color for the image container. This color only shows up with too small or big images.
- `--accent`: used as background color for the buttons and the navbar.
- `--button-hover-color`: the text color of the buttons on hover.

## Implementation Example

HTML:

```html
<div class="carousel-wrapper">
  <div class="images"></div>
</div>
```

JS:

```js
import "../index.html";
import "ld-carousel/style.css"; // NOTE: Before your custom stylesheet
import "../css/style.css";
import Image1 from "../img/1.jpg"; // The module also works without a bundler
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";
import Image4 from "../img/4.jpg";
import Image5 from "../img/5.jpg";
import createCarousel from "ld-carousel";

const container = document.querySelector(".images");
const wrapper = document.querySelector(".carousel-wrapper");
const images = [Image1, Image2, Image3, Image4, Image5]; // Without bundler: pass source
createCarousel(container, wrapper, images, "#1ff");
```

CSS:

```css
:root {
  --accent: #1ff;
}

::selection {
  color: var(--second);
  background: var(--prime);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-size: var(--font-size);
  color: var(--prime);
  background-color: var(--second);
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
