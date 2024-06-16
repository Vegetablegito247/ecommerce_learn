let burger = document.querySelector('.burger');
let sidemenu = document.querySelector('.sidemenu');

burger.addEventListener('click', () => {
    if (sidemenu.style.bottom == '-100vh') {
        sidemenu.style.transition = 'bottom .7s'
        sidemenu.style.bottom = 0
    }
    else {
        sidemenu.style.bottom = '-100vh'
    }
    hfdhfgf
})