
# About The SVG Animations

### Edit the PSD in Photoshop

The original graphic (in this case `reporting-graphic.psd`) is created in Photoshop using 
exclusively paths, shapes, and text. Any rasterized graphics are strictly avoided.

Note that the folder/layer names in photoshop become html `id` attributes (which are global
to the page). For that reason, we use the prefix "rg" (e.g. `rg-btn-title`) as to namespace
any layers that we need to handle.


### Export the SVG

Once the graphic is done, use `File > Export > Export As...` and choose SVG.

Photoshop will create `reporting-graphic.svg` which is a valid SVG file which could be
references from an <img src= /> tag. We need to style the inner elements with CSS so 
we have to embed the SVG itself on the page.

To be clear, `reporting-graphic.svg` is not used by the code base. It is a temporary file.

### Copy to `thesvg.vue`

The svg created by photoshop is a bohemouth, so we prefer to keep it out of the vue file
that will be doing custom animation & styling. So we copy the text from `reporting-graphic.svg`
and paste it into `thesvg.vue` and add a `<template></template>` tag around the whole thing.

Then we have to fix the classes because Photoshop creates classes like `cls-1`. So in `thesvg.vue`
replace `cls-` with `rg-cls-`.

This `thesvg.vue` file is now references from `graphic.vue`.

### Edit Graphic.vue

`graphic.vue` applies custom styles using CSS & javascript. It also controls the animation.

