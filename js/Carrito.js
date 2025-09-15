// js/carrito.js (con imágenes + toasts/modal)
// Clave para localStorage
const CART_STORAGE_KEY = 'shoppingCart';
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

// Elementos del DOM (pueden no existir en todas las páginas)
const cartList = document.getElementById('cart-list');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// ---------------- utilidades ----------------
function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function parsePrice(price) {
  if (typeof price === 'number') return price;
  const digits = String(price).replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

const priceFormatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
function formatPrice(value) { return priceFormatter.format(value); }

function findIndexById(id) {
  const sid = String(id);
  return cart.findIndex(item => String(item.id) === sid);
}
function findItemById(id) {
  const sid = String(id);
  return cart.find(item => String(item.id) === sid);
}

// ---------------- UI helpers (toast/modal) ----------------
function showToast(message) {
  const toastEl = document.getElementById('cart-toast');
  const toastBody = document.getElementById('cart-toast-body');
  if (!toastEl || !toastBody || typeof bootstrap === 'undefined') {
    // fallback
    alert(message);
    return;
  }
  toastBody.textContent = message;
  const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
  toast.show();
}

function showConfirm(message) {
  // si no hay modal o bootstrap, fallback a confirm()
  const modalEl = document.getElementById('confirmModal');
  const modalBody = document.getElementById('confirmModalBody');
  const confirmBtn = document.getElementById('confirmModalBtn');
  if (!modalEl || !modalBody || !confirmBtn || typeof bootstrap === 'undefined') {
    return Promise.resolve(confirm(message));
  }

  modalBody.textContent = message;
  const modal = new bootstrap.Modal(modalEl);
  modal.show();

  return new Promise(resolve => {
    const handler = () => {
      confirmBtn.removeEventListener('click', handler);
      modal.hide();
      resolve(true);
    };
    confirmBtn.addEventListener('click', handler, { once: true });
    modalEl.addEventListener('hidden.bs.modal', () => resolve(false), { once: true });
  });
}

// ---------------- contador ----------------
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  if (!cartCountElement) return;
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  cartCountElement.textContent = totalItems;
}

// ---------------- render carrito (DOM) ----------------
function renderCart() {
  // Si no estamos en carrito.html, igual actualizamos el contador y salimos
  if (!cartList) { updateCartCount(); return; }

  cartList.innerHTML = '';
  let total = 0;

  if (!cart.length) {
    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark text-white border-0 text-center';
    li.textContent = 'El carrito está vacío.';
    cartList.appendChild(li);
  } else {
    cart.forEach(item => {
      const priceNum = parsePrice(item.price);
      const subtotal = priceNum * (item.quantity || 0);
      total += subtotal;

      const li = document.createElement('li');
      li.className = 'list-group-item bg-dark text-white d-flex align-items-center justify-content-between border-0 py-3';

      // Left: imagen + info
      const left = document.createElement('div');
      left.className = 'd-flex align-items-center';

      if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title || 'producto';
        img.style.width = '56px';
        img.style.height = '56px';
        img.style.objectFit = 'cover';
        img.className = 'me-3 rounded';
        left.appendChild(img);
      }

      const info = document.createElement('div');
      info.innerHTML = `<strong>${item.title}</strong><br><small>${formatPrice(priceNum)}</small>`;
      left.appendChild(info);

      // Middle: controles cantidad
      const controls = document.createElement('div');
      controls.className = 'd-flex align-items-center gap-2';

      const btnDec = document.createElement('button');
      btnDec.type = 'button';
      btnDec.className = 'btn btn-sm btn-outline-light';
      btnDec.setAttribute('aria-label', `Disminuir ${item.title}`);
      btnDec.textContent = '−';
      btnDec.addEventListener('click', async () => {
        const idx = findIndexById(item.id);
        if (idx === -1) return;
        if (cart[idx].quantity > 1) {
          cart[idx].quantity--;
          saveCart(); renderCart(); updateCartCount();
        } else {
          const ok = await showConfirm(`El producto "${cart[idx].title}" tiene cantidad 1. ¿Deseas eliminarlo del carrito?`);
          if (ok) { cart.splice(idx, 1); saveCart(); renderCart(); updateCartCount(); showToast(`"${item.title}" eliminado.`); }
        }
      });

      const qtySpan = document.createElement('span');
      qtySpan.className = 'mx-2';
      qtySpan.textContent = item.quantity || 0;

      const btnInc = document.createElement('button');
      btnInc.type = 'button';
      btnInc.className = 'btn btn-sm btn-outline-light';
      btnInc.setAttribute('aria-label', `Aumentar ${item.title}`);
      btnInc.textContent = '+';
      btnInc.addEventListener('click', () => {
        const idx = findIndexById(item.id);
        if (idx === -1) return;
        cart[idx].quantity = (cart[idx].quantity || 0) + 1;
        saveCart(); renderCart(); updateCartCount();
      });

      controls.appendChild(btnDec);
      controls.appendChild(qtySpan);
      controls.appendChild(btnInc);

      // Right: subtotal + eliminar
      const right = document.createElement('div');
      right.className = 'd-flex align-items-center';

      const subEl = document.createElement('div');
      subEl.className = 'me-3 text-end';
      subEl.innerHTML = `<div>${formatPrice(subtotal)}</div>`;

      const btnRemove = document.createElement('button');
      btnRemove.type = 'button';
      btnRemove.className = 'btn btn-danger btn-sm';
      btnRemove.setAttribute('aria-label', `Eliminar ${item.title}`);
      btnRemove.textContent = 'Eliminar';
      btnRemove.addEventListener('click', async () => {
        const idx = findIndexById(item.id);
        if (idx === -1) return;
        const ok = await showConfirm(`¿Eliminar "${cart[idx].title}" del carrito?`);
        if (!ok) return;
        const removed = cart[idx].title;
        cart.splice(idx, 1);
        saveCart(); renderCart(); updateCartCount();
        showToast(`"${removed}" eliminado.`);
      });

      li.appendChild(left);
      li.appendChild(controls);
      right.appendChild(subEl);
      right.appendChild(btnRemove);
      li.appendChild(right);

      cartList.appendChild(li);
    });
  }

  cartTotalElement && (cartTotalElement.textContent = formatPrice(total));
  updateCartCount();
}

// ---------------- acciones del carrito (globales) ----------------

function addItem(product) {
  const id = product.id;
  const idx = findIndexById(id);
  if (idx !== -1) {
    cart[idx].quantity = (cart[idx].quantity || 0) + 1;
    showToast(`Se agregó otra unidad de "${cart[idx].title}" al carrito.`);
  } else {
    const newItem = {
      id: product.id,
      title: product.title ?? product.name ?? 'Producto',
      price: product.price ?? product.price ?? '$0',
      image: product.image ?? product.img ?? null,
      quantity: product.quantity ?? 1
    };
    cart.push(newItem);
    showToast(`"${newItem.title}" ha sido agregado al carrito.`);
  }
  saveCart(); renderCart(); updateCartCount();
}

// Exponer funciones por compatibilidad si otros scripts las llaman
function increaseQuantity(id) { const idx = findIndexById(id); if (idx === -1) return; cart[idx].quantity = (cart[idx].quantity || 0) + 1; saveCart(); renderCart(); updateCartCount(); }
function decreaseQuantity(id) { const idx = findIndexById(id); if (idx === -1) return; if (cart[idx].quantity > 1) { cart[idx].quantity--; saveCart(); renderCart(); updateCartCount(); } else { showConfirm(`El producto "${cart[idx].title}" tiene cantidad 1. ¿Deseas eliminarlo?`).then(ok => { if (ok) { cart.splice(idx,1); saveCart(); renderCart(); updateCartCount(); showToast(`"${cart[idx]?.title || 'Producto'}" eliminado.`); } }); } }
function removeItem(id) { const idx = findIndexById(id); if (idx === -1) return; showConfirm(`¿Eliminar "${cart[idx].title}" del carrito?`).then(ok => { if (!ok) return; const removed = cart[idx].title; cart.splice(idx,1); saveCart(); renderCart(); updateCartCount(); showToast(`"${removed}" eliminado.`); }); }

// Checkout
if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    if (!cart.length) { showToast('El carrito está vacío.'); return; }
    showToast('¡Pago procesado con éxito! Gracias por tu compra.');
    cart = []; saveCart(); renderCart(); updateCartCount();
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => { renderCart(); updateCartCount(); });

// Export global names (compatibilidad con otros scripts)
window.addItem = addItem;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeItem = removeItem;
