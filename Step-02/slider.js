// function buttonChange(btnId) {
//     const buttonElement = document.getElementById(btnId);

//     buttonElement.addEventListener('click', function() {

//         if(btnId == 'prev') {
//             console.log('you clicked the previous button');
//         } else if(btnId == 'next') {
//             console.log('you clicked the next button');
//         }
//     })
// };

// buttonChange('prev');
// buttonChange('next');


function prevImg() {
    console.log('You clicked on the previous image button');
}

function nextImg() {
    console.log('You clicked on the next image button');
}

document.getElementById('prev').addEventListener('click', prevImg)
document.getElementById('next').addEventListener('click', nextImg)