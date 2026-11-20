$(function() {

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    // Menú Responsive
    var ancho = $(window).width(),
        enlaces = $('#enlaces, .menu__enlaces_caja'), // <-- Incluye también la caja de LOGIN
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono-menu');

    if (ancho <= 1023) { // <-- Cambiado de 700 a 1023 para coincidir con tu CSS
        enlaces.hide();
        icono.addClass('fa-bars');
    }

    btnMenu.on('click', function(e) {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    $(window).on('resize', function() {
        if ($(this).width() > 1023) {
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
});