let $ = document

// handle toggle menu

let toggleButton = $.querySelector('.menu-toggle')
let toggleMenu = $.querySelector('.toggle-menu')
let xmarkIcon = $.querySelector('.xmark-wrapper')
let header = $.querySelector('.header')
let toggleWrapper = $.querySelector('.toggle-wrapper')

toggleButton.addEventListener('click',function(){
    toggleWrapper.classList.add('pop-up_bg')
    toggleMenu.classList.add('right-0')

})

xmarkIcon.addEventListener('click',function(){
    toggleWrapper.classList.remove('pop-up_bg')
    toggleMenu.classList.remove('right-0')

})




// shopping cart (staice)

let cartArray = []

let cartWrapper = document.querySelector('.main-cart-wrapper')

let newLocal

let cartRow = document.querySelector('.cart-row__wrapper')

let totalPrice = document.querySelector('.total-price')

let cart = document.querySelector('.cart')

let closeCart = document.querySelector('.cart-close')

let clearBasket = document.querySelector('.clearBasket')

let itemCount = document.querySelector('.item-count')



let sumAllObjs = 0

function calcTotalPrice(obj){
    sumAllObjs = sumAllObjs + (obj.count * obj.price)

    totalPrice.innerHTML = `$ ${sumAllObjs} .00 USD`
}


let cartCount = document.querySelectorAll('.cart-count')


for(let count of cartCount){
    if(Number(count.value) > 9){
        count.style.paddingLeft = '1.1rem'
    }else{
        count.style.paddingLeft = '1.4rem'
    }
}
function setLocalStorage(cart){
     localStorage.setItem('carts',JSON.stringify(cart))
}

cart.addEventListener('click',function(event){
    cartWrapper.classList.add('pop-up_bg')
}) 

closeCart.addEventListener('click',function(){
    cartWrapper.classList.remove('pop-up_bg')
})


clearBasket.addEventListener('click',function(){
    cartRow.innerHTML = ''
    totalPrice.innerHTML = `$ 0.00 USD`
    itemCount.innerHTML = cartArray.length
    setLocalStorage(cartArray)
})



window.addEventListener('load',function(){
    newLocal = JSON.parse(localStorage.getItem('carts'))

    itemCount.innerHTML = newLocal.length
    
    for(let object of newLocal){
        cartRow.insertAdjacentHTML('beforeend',`<div class="cart-item">
        <div class="cart-img_wrapper">
        <img class="cart-img" src="${object.path}" alt="${object.name}">
        </div>
        <div class="cart-desc__wrapper">
        <h3 class="cart-name">${object.name}</h3>
        <p class="cart-price">$ ${object.price} .00 USD</p>
        <img class="responsive-cart__img" src="${object.path}" alt="${object.name}">
        <p class="remove">REMOVE</p>
        </div>
        <input class="cart-count" type="number" min="${object.count}" max="${object.count}" value="${object.count}"></div>`)
        calcTotalPrice(object)
    }
})

