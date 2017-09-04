# PostCSS Aurelia Ux [![Build Status][ci-img]][ci]

[PostCSS] plugin to load Aurelia UX javascript style bindings into a Post CSS workflow, transforming the string interpolation values into a plain string which compiles as valid CSS, which is then reversed before being given to Aurelia to use.

[PostCSS](https://github.com/postcss/postcss)

[Aurelia-UX](https://github.com/aurelia/aurelia-ux)

[ci-img]:  https://travis-ci.org/ZHollingshead/postcss-aurelia-ux.svg
[ci]:      https://travis-ci.org/ZHollingshead/postcss-aurelia-ux

Input
```css
.foo {
    background-color: ${ background || '#000' };
}
```

While Processing
```css
.foo {
    background-color: "${ background || '#000' }";
}
```

Output
```css
.foo {
    background-color: ${ background || '#000' };
}
```

## Usage

ES6 / Typescript
```typescript
import { PostcssAureliaUx, AureliaUxParse } from 'postcss-aurelia-ux';

postcss([ PostcssAureliaUx ], { parser: AureliaUxParse })
```
