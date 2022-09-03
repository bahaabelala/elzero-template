let cur = 'current',
    l = 'left',
    r = 'right';

function slideLeft() {
    const leftSlide = document.querySelector('.left'),
        rightSlide = document.querySelector('.right'),
        currentSlide = document.querySelector('.current');

    currentSlide.classList.remove(cur);
    currentSlide.classList.add(l);
    rightSlide.classList.remove(r);
    rightSlide.classList.add(cur);
    leftSlide.classList.remove(l);
    // leftSlide.style.visibility = 'hidden';
    leftSlide.classList.add(r);
    // setTimeout(() => {
    //     leftSlide.style.visibility = 'visible';
    // }, 600);

    // slides.forEach((el) => {
    //     if (el.classList.contains('current')) {
    //         el.classList.remove('current');
    //         el.classList.add('left');
    //     } else if (el.classList.contains('right')) {
    //         el.classList.remove('right');
    //         el.classList.add('current');
    //     } else if (el.classList.contains('left')) {
    //         el.classList.remove('left');
    //         el.classList.add('right');
    //     }
    // });
}

function slideRight() {
    const leftSlide = document.querySelector('.left'),
        rightSlide = document.querySelector('.right'),
        currentSlide = document.querySelector('.current');

    currentSlide.classList.remove(cur);
    currentSlide.classList.add(r);
    leftSlide.classList.remove(l);
    leftSlide.classList.add(cur);
    rightSlide.classList.remove(r);
    // rightSlide.style.visibility = 'hidden';
    rightSlide.classList.add(l);
    // setTimeout(() => {
    //     rightSlide.style.visibility = 'visible';
    // }, 600);

    // slides.forEach((el) => {
    //     if (el.classList.contains('current')) {
    //         el.classList.remove('current');
    //         el.classList.add('right');
    //     } else if (el.classList.contains('left')) {
    //         el.classList.remove('left');
    //         el.classList.add('current');
    //     } else if (el.classList.contains('right')) {
    //         el.classList.remove('right');
    //         el.classList.add('left');
    //     }
    // });
}
