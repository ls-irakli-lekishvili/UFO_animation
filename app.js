const scene = document.querySelector('.scene');
const img = document.querySelector('.scene>img');
const imageCount = 125;
let imageLoaded = 0;
const urls = new Array(imageCount).fill("").map((_, i) => `./img/UFO_20Animation_atlas_${i + 1}.png`);

urls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
        imageLoaded++;
        if (imageLoaded === imageCount) {
            init();
        }
        // scene.appendChild(img);
    }
});

function init() {
    let index = 0;
    setInterval(() => {
        img.src = urls[index];
        index++;
        if(index === imageCount) {
            index = 0;
        }
    }, 1000 / 30)
}

