const container = document.querySelector(".cards");
const basket = document.querySelector(".basket__items");
const price = document.querySelector(".basket__price-value");
const items = document.querySelectorAll(".card");

items.forEach((item) => {
  item.setAttribute("draggable", true);
});

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
  const element = document.getElementById(data);
  if (event.target.classList.contains("basket__items")) {
    event.target.append(element);
  }

  // element.addEventListener("dragend", ()=>{})
}

function handleDragOver(event) {
  event.preventDefault();
}

container.addEventListener("dragstart", handleDragStart);
basket.addEventListener("drop", handleDrop);
basket.addEventListener("dragover", handleDragOver);
