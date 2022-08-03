const homePageLinkElement = document.getElementById('home-page-link');
document.getElementById('about-page-link');

console.log(homePageLinkElement);
homePageLinkElement.addEventListener('click', function () {
    console.log('You clicked on the home page link');
    const homePageCLassList = document.getElementById('home-page').classList;
    homePageCLassList.remove('d-none');

    document.getElementById('about-page').classList.add('d-none');

    console.log('homePageClassList', homePageCLassList);
});

const aboutPageLinkElement = document.getElementById('about-page-link');
document.getElementById('about-page-link');

console.log(aboutPageLinkElement);
aboutPageLinkElement.addEventListener('click', function () {
    console.log('You clicked on the about page link');
    const homePageCLassList = document.getElementById('about-page').classList;
    homePageCLassList.remove('d-none');

    document.getElementById('home-page').classList.add('d-none');

    console.log('homePageClassList', homePageCLassList);
});