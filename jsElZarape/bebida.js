document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.btn-custom2');
    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('¡Añadido al carrito!');
        });
    });
});
