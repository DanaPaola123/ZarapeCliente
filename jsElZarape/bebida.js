document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los botones con la clase 'btn-custom2'
    var botonesAñadir = document.querySelectorAll('.btn-custom2');
    
    // Agregar evento 'click' a cada botón
    botonesAñadir.forEach(function(boton) {
        boton.addEventListener('click', function() {
            alert('Producto añadido');
        });
    });
});
