
const productsListItem = document.querySelectorAll(".products__list-item")
const productsList = document.querySelector('.products__list')
const cart = document.querySelector('.cart')

// styles

cart.addEventListener('dragenter', event => {
    cart.classList.add('hovered')
})

cart.addEventListener('dragleave', event => {
    cart.classList.remove('hovered')
})

// end styles

cart.addEventListener('dragover', event => {
    event.preventDefault()
})

const cartCount = document.querySelector('.cart__count')
const parametersList = document.querySelector(".parameters__list")

const orderList = {}
let currentCard


productsList.addEventListener('dragstart', event => {
    currentCard = event.target
})

// helper functions

const renderOrderList = () => {
    let orderString = ''

    const sumCount = Object.values(orderList).reduce((sum, el) => sum + el, 0)
    cartCount.innerText = sumCount

    for (let elem in orderList) {
        if (orderList[elem] !== 0) {
            orderString += `
                <li class="categories__list-item interactive">
                    <span class="item__name">${elem}</span>
                    <div class="item__buttons">
                        <span class="item__count">${orderList[elem]}</span>
                        <button class="item_btn plusBtn">+</button>
                        <button class="item_btn minusBtn">-</button>
                    </div>
                </li>
            `
        }
    }

    parametersList.innerHTML = orderString
}

const addToList = productTitle => {
    if (orderList[productTitle]) {
        orderList[productTitle]++
    } else {
        orderList[productTitle] = 1
    }
}

// end helper functions

// drop on cart

cart.addEventListener('drop', event => {
    const productTitle = currentCard.querySelector('.product__title').innerText
    cart.classList.remove('hovered')

    addToList(productTitle)

    renderOrderList()
})

// end drop on cart

// add button 

const productBtn = document.querySelectorAll('.product__btn')

productBtn.forEach(el => {
    el.addEventListener('click', function() {
        const productTitle = this.closest('.products__list-item').querySelector('.product__title').innerText

        addToList(productTitle)
        renderOrderList()
    })
})

// end add button 

// plus and minus buttons on sidebar

const main = document.querySelector('.main')

main.addEventListener('click', event => {
    if (event.target.classList.contains('plusBtn')) {
        const productTitle = event.target.closest('.categories__list-item').querySelector('.item__name').innerText
        orderList[productTitle]++
        renderOrderList()
    }

    if (event.target.classList.contains('minusBtn')) {
        const productTitle = event.target.closest('.categories__list-item').querySelector('.item__name').innerText
        
        orderList[productTitle]--
        renderOrderList()
    }
})

// end plus and minus buttons on sidebar