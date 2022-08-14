
const imagesArray = [
    {
        imageURL: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    },
    {
        imageURL: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    },
    {
        imageURL: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    },
    {
        imageURL: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    },
];


let currentImage = 0;

function renderImg() {
    const imgURL = 'images/' + imagesArray[currentImage].imageURL;
    document.getElementById('slider-image').src = imgURL;
}

function prevImg() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = imagesArray.length - 1;
    }
    renderImg();

}

function nextImg() {
    currentImage++;
    if (currentImage > (imagesArray.length - 1)) {
        currentImage = 0;
    }
    renderImg();
}

let interval = null;

function imageCycle() {
    if (interval != null) {
        return;
    }

    interval = setInterval(function () {
        nextImg();
    }, 1000);

    console.log('interval', interval);
};

function stopImageCycle() {
    clearInterval(interval);
    interval = null;
    console.log('stopImageCycle', interval);
};

document.getElementById('prev').addEventListener('click', prevImg);
document.getElementById('next').addEventListener('click', nextImg);
document.getElementById('cycle').addEventListener('click', imageCycle);
document.getElementById('stop').addEventListener('click', stopImageCycle);



