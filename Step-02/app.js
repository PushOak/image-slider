let currentPageId = 'home-page';

function makeMenuLinkChangePage(linkId, pageToShow) {
    // console.log(linkId, pageToHide, pageToShow);

    const pageLinkElement = document.getElementById(linkId);

    pageLinkElement.addEventListener('click', function () {
        console.log('You clicked me');

        // first solution to bug
        if (currentPageId == pageToShow) {
            return;
        }

        // second solution to bug - insert the lower code into curly brackets
        // if(currentPageId != pageToShow) {}

        // show the page
        document.getElementById(pageToShow).classList.remove('d-none');

        // hide the page
        document.getElementById(currentPageId).classList.add('d-none');
        currentPageId = pageToShow;
    });
};

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('media-page-link', 'media-page');