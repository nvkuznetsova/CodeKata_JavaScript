const products = document.querySelectorAll(".product-card");
const cart = document.querySelector(".cart");

products.forEach(product => {
	product.draggable = true;
	product.addEventListener("dragstart", onDragStart);
});

cart.addEventListener("drop", onDrop);
cart.addEventListener("dragover", onDragOver);
cart.addEventListener("dragenter", onDragEnter, true);
cart.addEventListener("dragleave", onDragLeave, true);

function onDragStart(e) {
	e.stopPropagation();
	const title = e.target.children[1].innerText;
	e.dataTransfer.setData("title", title);
	e.dataTransfer.setData("node", e.target);
}

function onDrop(e) {
	e.stopPropagation();
	e.preventDefault();
	const title = e.dataTransfer.getData("title");
	const elemTr = document.createElement("tr");
	elemTr.innerHTML = `<td>${title}</td>
        <td>1000 р.</td><td class="products-table__product-q">1</td>
        <td><button class="products-table__product-x">X</button></td>`;
	const parent = cart.querySelector(".product-table__body");
	parent.append(elemTr);
	cart.style.backgroundColor = "white";
}

function onDragOver(e) {
	e.preventDefault();
	e.stopPropagation();
}

function onDragEnter(e) {
	e.stopPropagation();
	cart.style.backgroundColor = "yellow";
}

function onDragLeave(e) {
	e.stopPropagation();
	if (e.target !== e.currentTarget) {
		return;
	}
	setTimeout(() => {
		cart.style.backgroundColor = "white";
	}, 300);
}
