<script>
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones con la clase 'btn-custom2'
    const addButtons = document.querySelectorAll('.btn-custom2');

    // Agrega un evento de clic a cada botón
    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('¡Combo añadido al carrito!');
        });
    });
});
</script>


