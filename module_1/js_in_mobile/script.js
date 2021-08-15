// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel



window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
        //console.log(event.touches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log('Move');
        console.log(event.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();

        console.log('End');
    });
});

// touches
// targetTouches
// changedTouches
