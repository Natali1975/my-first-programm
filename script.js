const elem = document.querySelector('.elem:nth-child(1)');

let counter = 0,
dir = 0

const animation = () => {
    elem.style.position = 'relative';
    
    elem.style.left = `${counter}px`;
    elem.style.top = `${counter}px`;

    if (counter < 500 && dir !== 1) {
        counter += 10;;
        requestAnimationFrame(animation);
    } else if (counter > 0) {
        dir = 1;
        counter -= 10;
        requestAnimationFrame(animation);
    } else {
        dir = 0;
        requestAnimationFrame(animation);
    }

}

animation();