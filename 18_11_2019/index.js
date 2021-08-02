const products = document.querySelectorAll('.product-card');
const cart = document.querySelector('.cart__container');

for(let product of products) {
  product.setAttribute('draggable', true);
  product.addEventListener('dragstart', onDragStart);
}

cart.addEventListener('dragover', onDragOver);
cart.addEventListener('drop', onDrop);
cart.addEventListener('dragenter', onDragEnter);

function onDragStart(event) {
  const productId = event.target.getAttribute('id');
  event.dataTransfer.dropEffect = 'copyMove';
  event.dataTransfer.effectAllowed = 'copyMove';
  event.dataTransfer.setData('Text', productId);
  cart.style.backgroundColor = 'yellow';
}

function onDragEnter(event) {
  event.preventDefault();
  event.stopPropagation();
  cart.style.backgroundColor = '#f2f2f2';
  cart.style.borderColor = 'green';
}

function onDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
}

function onDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  const data = event.dataTransfer.getData('Text');
  const list = document.querySelector('.cart__list');
  const li = document.createElement('li');
  li.innerText = data;
  li.classList.add('cart__list-item');
  list.appendChild(li);
  cart.style.borderColor = '#D91667';
}