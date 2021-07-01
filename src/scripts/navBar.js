var navBarM

window.addEventListener('scroll', () => {
    let navBar = document.querySelector('#menu');
    let navBarRect = navBar.getBoundingClientRect();
    // console.log('Координаты меню' + ' '  + navBarRect.top);
    if (navBarRect.top < -38) {
        console.log('First circumstance')
        navBar.style.position = 'fixed'
        navBar.style.top = '-38px'
        navBar.style.transform = 'translateY(38px)'
        navBar.style.transition = '1000ms'
    }

});
// window.addEventListener('scroll', () => {
//     let navBar = document.querySelector('#menu');
//     let navBarRect = navBar.getBoundingClientRect();
//     let opener = document.querySelector('#opener');
//     let openerRect = opener.getBoundingClientRect();
//     // console.log('Координаты меню' + ' '  + navBarRect.top);
//     if (navBarRect.top < -39) {
//         console.log('Second circumstance')
//         navBar.style.position = 'fixed'
//         navBar.style.top = '0'
//         navBar.style.transform = 'translateY(38px)'
//         navBar.style.transition = '2750ms'
//     }

// });
    








    //Возвращает меню на свое место при прокрутке вверх
window.addEventListener('scroll', () => {
    let navBar = document.querySelector('#menu');
    let opener = document.querySelector('#opener');
    let openerRect = opener.getBoundingClientRect();
    // console.log('opener bottom = ' + openerRect.bottom);
    if (openerRect.bottom > 0) {
        console.log('Тут уже должно работать равенство')
        navBar.style.position = 'relative'
        navBar.style.left = '0'
        // navBar.style.top = '0'
        navBar.style.transform = 'translateY(38px)'
        
    }
 
});