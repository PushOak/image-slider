
const imgArr = [
    'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    'OHR.SpiralHill_ROW7328923046_1920x1080.jpg'
];

let currentImage = 0;

function renderImg() {
    const imgURL = 'images/' + imgArr[currentImage];
    document.getElementById('slider-image').src = imgURL;
}

function prevImg() {
    currentImage--;
    if(currentImage < 0) {
        currentImage = imgArr.length - 1;
    }
    renderImg();

}

function nextImg() {
    currentImage++;
    if (currentImage > (imgArr.length - 1)) {
        currentImage = 0;
    }
    renderImg();
}

document.getElementById('prev').addEventListener('click', prevImg)
document.getElementById('next').addEventListener('click', nextImg)