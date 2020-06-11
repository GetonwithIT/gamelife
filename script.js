/*eslint-env browser*/

var header = document.getElementById('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 800) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('hamburger').addEventListener('click', function () {
    if (header.classList.contains('dropped')) {
        header.classList.remove('dropped');
    } else {
        header.classList.add('dropped');
    }
});