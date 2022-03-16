const container = document.querySelector(".cards");
const basket = document.querySelector(".basket__items");
const price = document.querySelector(".basket__price-value");
const items = document.querySelectorAll(".card");
const state = {
  totalPrice: 0,
  cartElements: [],
};

items.forEach((item) => {
  item.setAttribute("draggable", true);
});

function renderTotal() {
  price.textContent = `$${state.totalPrice}`;
}

function updateTotalPrice(price) {
  state.totalPrice += price;
  renderTotal();
}

function handleDragStart(event) {
  const target = event.target;
  if (target.closest(".card")) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("id", target.id);
  }
}

function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("id");
  const el = document.getElementById(data);
  if (
    event.target.classList.contains("basket__items") &&
    el instanceof HTMLElement
  ) {
    if (!event.target.querySelector(`#basket-${data}`)) {
      const element = el.cloneNode(true);
      element.className = "basket__item";
      element.setAttribute("id", `basket-${data}`);
      event.target.append(element);
      const cardPrice = Number(
        element.querySelector(".card__price").innerText.slice(1)
      );
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("card__delete-button");
      deleteButton.innerHTML = "&times";

      const countItem = document.createElement("p");
      countItem.classList.add("card__quantity");
      countItem.innerText = "1";
      element.append(countItem);
      element.append(deleteButton);

      element.removeAttribute("draggable");
      deleteButton.addEventListener("click", () => {
        element.remove();
        updateTotalPrice(-cardPrice);
      });

      updateTotalPrice(cardPrice);
    } else {
      const cartElement = document.getElementById(`basket-${data}`);
      const quantity = Number(
        cartElement.querySelector(".card__quantity").innerText
      );
      cartElement.querySelector(".card__quantity").innerText = String(
        quantity + 1
      );
    }
  }
}

function handleDragOver(event) {
  event.preventDefault();
}

renderTotal();

container.addEventListener("dragstart", handleDragStart);
basket.addEventListener("drop", handleDrop);
basket.addEventListener("dragover", handleDragOver);
