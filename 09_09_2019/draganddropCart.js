let cart = document.querySelector('#shopping-cart');
const products = document.querySelectorAll('.product');

const onDragStart = event => {
  const id = event.target.id;
  event.dataTransfer.setData('Text', id);
  event.dataTransfer.effectAllowed = 'copy';
  event.dataTransfer.dropEffect = 'copy';
  
  cart.firstElementChild.classList.remove('bg-light');
  cart.firstElementChild.classList.add('bg-warning');
}

const onDragEnd = () => {
  cart.firstElementChild.classList.remove('bg-warning');
  cart.firstElementChild.classList.add('bg-light');
}

const onDragOver = event => {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

const onDragEnter = () => {
  cart.firstElementChild.classList.remove('bg-warning');
  cart.firstElementChild.classList.add('bg-light');
}

const onDrop = event => {
  const id = event.dataTransfer.getData('Text');
  const li = document.createElement('li');
  li.textContent = id;
  document.querySelector('.cart-list').appendChild(li);
}


for (let product of products) {
  product.setAttribute('draggable', true);
  product.addEventListener('dragstart', onDragStart);
  product.addEventListener('dragend', onDragEnd);
}

cart.addEventListener('dragover', onDragOver);
cart.addEventListener('dragenter', onDragEnter);
cart.addEventListener('drop', onDrop);