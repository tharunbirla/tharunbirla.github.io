window.onscroll = function (e) {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');
    header.style.transition = 'transform 0.1s';

    scrollY <= this.lastScroll
        ? header.style.visibility = 'visible'
        : header.style.visibility = 'hidden';

    this.lastScroll = scrollY;
}
