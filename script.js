let cart = [];
function addToCart(nome, preco) {
  cart.push({ nome, preco });
  document.getElementById('cart-count').textContent = cart.length;
  renderCart();
}

function renderCart() {
  const items = document.getElementById('cart-items');
  const total = document.getElementById('total');
  items.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    items.appendChild(li);
    sum += item.preco;
  });
  total.textContent = sum.toFixed(2);
}

function toggleCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.classList.toggle('hidden');
}

function checkout() {
  alert('Compra finalizada! Obrigado por comprar na OneStyle!');
  cart = [];
  document.getElementById('cart-count').textContent = '0';
  renderCart();
  toggleCart();
}
