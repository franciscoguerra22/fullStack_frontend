// La clave para guardar el carrito en localStorage
const CART_STORAGE_KEY = 'shoppingCart';

// Array para el carrito de compras, inicializado con datos del localStorage
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

// Elementos del DOM
const cartList = document.getElementById('cart-list');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// Función para guardar el carrito en localStorage
const saveCart = () => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

// Función para renderizar los productos del carrito
const renderCart = () => {
    cartList.innerHTML = ''; // Limpiamos la lista para evitar duplicados
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<li class="list-group-item bg-dark text-white border-0">El carrito está vacío.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-0';
            li.innerHTML = `
                ${item.title} - ${item.price}
                <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Eliminar</button>
            `;
            cartList.appendChild(li);
            // Sumar al total
            const price = parseInt(item.price.replace('$', '').replace('.', ''));
            total += price;
        });
    }

    // Actualizar el total en la página
    cartTotalElement.textContent = `$${total.toLocaleString('es-CL')}`;
};

// Función para agregar un producto al carrito
const addItem = (product) => {
    // Busca si el producto ya está en el carrito para no duplicarlo
    const existingItem = cart.find(item => item.id === product.id);
    if (!existingItem) {
        cart.push(product);
        saveCart();
        alert(`"${product.title}" ha sido agregado al carrito.`);
    } else {
        alert(`"${product.title}" ya está en el carrito.`);
    }
    renderCart(); // Vuelve a renderizar la lista para mostrar el cambio
};

// Función para eliminar un producto del carrito
const removeItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
};

// Manejar el botón de pagar
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('¡Pago procesado con éxito! Gracias por tu compra.');
        cart = []; // Vaciar el carrito
        saveCart();
        renderCart();
    } else {
        alert('El carrito está vacío. Agrega productos para continuar.');
    }
});

// Llamada inicial para renderizar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderCart);



function cartCountElement() {
    const cartCountElement = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', updateCartCount);