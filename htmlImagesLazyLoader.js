var htmlImagesLazyLoader = (function () {

    let observer;

    function init({selector, offset = 0}) {
        //since no root is set, wiewport will be used as default config
        let options = {
            rootMargin: `${offset}px`,
            threshold: 0
        }

        observer = new IntersectionObserver(loadImage, options);
        let lazyImages = document.querySelectorAll(selector);

        window.addEventListener("load", function(){
            lazyImages.forEach(function(element){
                observer.observe(element);
            });
        });
    }

    function loadImage(entries){
        entries.forEach((element) => {
            if (element.intersectionRatio > 0) {
                let image = element.target;
                let imageToBeLoaded = image.getAttribute('data-lazy-src');
                image.setAttribute('src', imageToBeLoaded);
                console.info(
                    `%c ${imageToBeLoaded} has been loaded!!!`,
                    'color: green; font-weight: bold;'
                );
                observer.unobserve(image);
            }
        });
    }

    return {
        init
    }

}());