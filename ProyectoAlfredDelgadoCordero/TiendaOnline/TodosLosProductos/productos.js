/*Menu desplegable*/
let btnMenu = document.getElementById('icono-menu');
let mainNav = document.getElementById('main-nav1');
btnMenu.addEventListener('click',function(){
    mainNav.classList.toggle('mostrar');
});
