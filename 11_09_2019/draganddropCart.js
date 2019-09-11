const cartModule = (() => {
  const updateCart = () => {
    let total = 0;
    const itemsList = document.querySelectorAll('.cart-list li');
    itemsList.forEach(item => {
      const price = +item.getAttribute('data-price');
      const count = +item.firstElementChild.firstElementChild.getAttribute('data-count');
      
      total += count * price;
    });
    
    document.querySelector('#total').setAttribute('data-total', total);
    document.querySelector('#total').textContent = `Total: \$${total.toFixed(2)}`;
  }
  
  const addItem = (item, id) => {
    const name = item.getAttribute('data-name');
    const price = item.getAttribute('data-price');
    const listItem = document.createElement('li');
    const labelsContainer = document.createElement('div');
    const count = document.createElement('span');
    const deleteItem = document.createElement('span');
    count.textContent = 1;
    count.classList = 'count badge badge-info badge-pill';
    count.setAttribute('data-count', 1);
    deleteItem.textContent = 'X';
    deleteItem.classList = 'delete badge badge-danger ml-3';
    listItem.textContent = name.toUpperCase();
    listItem.setAttribute('data-price', price);
    listItem.setAttribute('data-id', id);
    listItem.classList = 'list-group-item d-flex justify-content-between align-items-center';
    labelsContainer.appendChild(count);
    labelsContainer.appendChild(deleteItem);
    listItem.appendChild(labelsContainer);
    document.querySelector('.cart-list').appendChild(listItem);
    
    updateCart();
  }
  
  const deleteItem = (item) => {
    item.parentNode.removeChild(item);
    updateCart();
  }
  
  const updateItem = (item) => {
    const countLabel = item.querySelector('.count');
    let count = +countLabel.getAttribute('data-count');
    countLabel.textContent = ++count;
    countLabel.setAttribute('data-count', count++);
    updateCart();
  }
  
  return {
    deleteItem,
    addItem,
    updateItem
  }
})();


let cart = document.querySelector('#shopping-cart');
const products = document.querySelectorAll('.product');

const onDelete = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const item = event.target.parentNode.parentNode;
  cartModule.deleteItem(item);
}

const onDragStart = event => {
  const id = event.target.id;
  event.dataTransfer.setData('Text', id);
  event.dataTransfer.effectAllowed = 'copy';
  event.dataTransfer.dropEffect = 'copy';
  
  cart.firstElementChild.classList.remove('bg-light');
  cart.firstElementChild.classList.add('bg-warning');
}

const onDragEnd = event => {
  cart.firstElementChild.classList.remove('bg-warning');
  cart.firstElementChild.classList.add('bg-light');
}

const onDragOver = event => {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

const onDragEnter = event => {
  cart.firstElementChild.classList.remove('bg-warning');
  cart.firstElementChild.classList.add('bg-light');
}

const onDrop = event => {
  const id = event.dataTransfer.getData('Text');
  const item = document.querySelector(`#${id}`).firstElementChild;
  const exists = document.querySelector(`[data-id='${id}']`);
  if (exists) cartModule.updateItem(exists);
  else cartModule.addItem(item, id);
  
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', onDelete);
  });
}

for (let product of products) {
  product.setAttribute('draggable', true);
  product.addEventListener('dragstart', onDragStart);
  product.addEventListener('dragend', onDragEnd);
}

cart.addEventListener('dragover', onDragOver);
cart.addEventListener('dragenter', onDragEnter);
cart.addEventListener('drop', onDrop);
