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
  const productName = event.target.dataset.name;
  const productPrice = event.target.dataset.price;
  const productData = {
    id: productId,
    productName,
    productPrice,
    count: 1
  };
  event.dataTransfer.dropEffect = 'copyMove';
  event.dataTransfer.effectAllowed = 'copyMove';
  event.dataTransfer.setData('Text',JSON.stringify(productData));
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
  updateCartItems(JSON.parse(data));
  cart.style.borderColor = '#D91667';

}

function updateCartItems(item) {
  const exists = document.querySelector(`[data-id=${item.id}]`);
  if (exists) {
    cartModule.updateProduct(exists);
  } else {
    cartModule.addProduct(item);
  }
}