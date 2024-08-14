document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-button');
    
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito');
            // Aquí puedes agregar la lógica para añadir el producto al carrito
        });
    });
});
