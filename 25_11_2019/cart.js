const cartModule = (function () {
  // TO DO: remove unused methods and variables: cartItems, getProduct...
  // let cartItems = [];
  let total = 0;

  const addProduct = (item) => {
    // cartItems = [...cartItems, item];
    createCartItemDOMElement(item);
    updateCart();
  };

  const updateProduct = (item) => {
    const itemCount = item.querySelector('.count').textContent;
    item.querySelector('.count').textContent = +itemCount + 1;

    updateCart();
  }

  const deleteProduct = (id) => {
    // TO DO: rewrite delete function to remove DOM element from cart
    cartItems = cartItems.filter(item => item.id !== id);
    updateCart();
  };

  const getProduct = (id) => cartItems.find(item => item.id === id);

  const updateCart = () => {
    // TO DO: rewrite updateCart function to calculate total sum by DOM element attributes/values
    total = cartItems.reduce((sum, curr) => {
      return sum += curr.count * curr.productPrice;
    }, 0);
  }

  const getTotal = () => total;

  const createCartItemDOMElement = (item) => {
    const list = document.querySelector('.cart__list');
    const li = document.createElement('li');
    const cartItemName = document.createElement('span');
    const cartItemPrice = document.createElement('span');
    const cartItemLabelsContainer = document.createElement('div');
    const cartCountLabel = document.createElement('span');
    const cartDeleteLabel = document.createElement('span');
    cartItemName.textContent = item.productName;
    cartItemPrice.textContent = item.productPrice;
    cartCountLabel.textContent = item.count;
    cartDeleteLabel.textContent = 'X';
    cartDeleteLabel.classList.add('cart__list-delete');
    cartCountLabel.classList.add('count');
    li.classList.add('cart__list-item');
    li.setAttribute('data-id', item.id);
    cartItemLabelsContainer.appendChild(cartCountLabel);
    cartItemLabelsContainer.appendChild(cartDeleteLabel);
    li.appendChild(cartItemName);
    li.appendChild(cartItemPrice);
    li.appendChild(cartItemLabelsContainer);
    list.appendChild(li);
  }

  return {
    addProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getTotal
  };
})();