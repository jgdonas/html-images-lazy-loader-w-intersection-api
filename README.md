# HTML images lazy loader

This is my previous **[simplest image lazy loader](https://github.com/jgdonas/html-images-lazy-loader)** (improved using using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)) for your website, made just for fun. This module allows you 'mark' your images to be loaded only if the user is close enough (depending on your preferences), so you can save bandwidth as long as only neccesarry pictures will be loaded.

All you have to do is:
  - Use any css selector to mark your images as 'lazy'. You could even use "img" selector if you want all your pictures to behave this lazy way.
  - Choose an offset value, i.e.: the distance in pixels from the bottom of the viewport for the pictures to be loaded.
  - Include lazyLoad.js as any other script in your webpage
  - Invoke htmlImagesLazyLoader.init() with the both the correct selector and offset, that is, for example:

```js
htmlImagesLazyLoader.init({selector: ".lazy", offset: 400});
```

You can easily check how easy is to use is in the html file: lazy.html in this repository.


