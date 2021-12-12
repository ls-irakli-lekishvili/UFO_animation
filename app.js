const scene = document.querySelector('.scene');
const animation = document.querySelector('#ufo__animation');
const background = document.querySelector('#ufo__background');
const animationCount = 118;
const backgroundCount = 13;
let imageLoaded = 0;
const animationUrls = new Array(animationCount).fill("").map((_, i) => `./img/animation/UFO_20Animation_atlas_${i + 1}.png`);
const backgroundUrls = new Array(backgroundCount).fill("").map((_, i) => `./img/background/ufo_background_${i + 1}.png`);

animationUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
        imageLoaded++;
        if (imageLoaded === animationUrls.length + backgroundUrls.length) {
            init();
        }
    }
});

backgroundUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
        imageLoaded++;
        if (imageLoaded === animationUrls.length + backgroundUrls.length) {
            init();
        }
    }
});

function init() {
    let position = 0;
    let ufoIndex = 0;
    let backgroundIndex = 0;

    const interval = setInterval(() => {
        

        if (ufoIndex === 118) {
            background.classList.remove('hidden');
            animation.classList.add('hidden');
        }
        if(ufoIndex < 118) {
            animation.src = animationUrls[ufoIndex];
            ufoIndex++;
        }


        if(ufoIndex === 118) {

            background.style.backgroundImage = `url(${backgroundUrls[backgroundIndex]})`;
            backgroundIndex++;
        }

        if (backgroundIndex === backgroundUrls.length) {
            background.classList.add('hidden');
            clearInterval(interval);
        }

    }, 1000 / 30)
}

