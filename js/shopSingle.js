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


const shopItems = [
    {id:1,name:'MODERN CHAIR',price:249.00,path:'images/Modern Chair.png',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1},
    {id:2,name:'ELEGANT LAMP',price:129.00,path:'images/Elegant Lamp.png',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1},
    {id:3,name:'BLACK CHAIR',price:199.00,path:'images/Black Chair.png',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1},
    {id:4,name:'LISBON SOFA',price:1699.00,path:'images/Lisbon-shop.jpg',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1},
    {id:5,name:'RETRO CHAIR',price:399.00,path:'images/Retro Chair.jpg',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1},
    {id:6,name:'BLACK CHAIR',price:199.00,path:'images/Black Canape.jpg',desc:'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',count:1}
]

const title = document.querySelector('title')

let locationSearch = location.search
let urlSearchParams = new URLSearchParams(locationSearch)

let itemIdParam = Number(urlSearchParams.get('id'))

let popupWrapper = document.querySelector('.pop-up_wrapper')

let closeBtn = document.querySelector('.close-btn')

let detailsWrapper = document.querySelector('.item-details')

let mainItem = shopItems.filter(function(item){
    return item.id === itemIdParam
})

let mapItem = mainItem.map(function(item){
    return addItemFromArrayToShop(item)
})

let cartsArray = []

let modal = document.querySelector('.modal')
let modalDesc = document.querySelector('.modal-desc')
function addItemFromArrayToShop(item){
    let imgWrapperElem = document.createElement('div')
    imgWrapperElem.className = 'col-12 col-lg-6 item-img-wrapper'

    let itemImgElem = document.createElement('img')
    itemImgElem.src = item.path
    itemImgElem.alt = item.name
    itemImgElem.className = 'item-img'

    imgWrapperElem.append(itemImgElem)

    let itemDetailWrapper = document.createElement('div')
    itemDetailWrapper.className = 'col-12 col-lg-6 item-detail__wrapper'

    let itemTitle = document.createElement('h1')
    itemTitle.className = 'item-title'
    itemTitle.innerHTML = item.name

    let itemPrice = document.createElement('p')
    itemPrice.className = 'item-price'
    itemPrice.innerHTML = '$ ' + item.price + '.00 USD'


    let itemDesc = document.createElement('p')
    itemDesc.className = 'item-description'
    itemDesc.innerHTML = item.desc

    let shoppingWrapper = document.createElement('div')
    shoppingWrapper.className = 'shopping-wrapper'

    let itemCount = document.createElement('div')
    itemCount.className = 'shop-item__count'
    itemCount.innerHTML = item.count

    let addToBasketBtn = document.createElement('button')
    addToBasketBtn.type = 'button'
    addToBasketBtn.className = 'add-button'
    addToBasketBtn.innerHTML = 'ADD TO CART'
     
    addToBasketBtn.addEventListener('click',function(){
        let someArray = cartsArray.some(function(product){
            return product.id === item.id
        })
        if(!someArray){
            addToBasket()
            setLocalStorage(cartsArray)
          modalDesc.innerHTML = 'آیتم با موفقیت اضافه شد'
          modal.classList.add('modal-add')
          setTimeout(function(){
            modal.classList.remove('modal-add')
          },3000)
        }else{
            setLocalStorage(cartsArray)
            modalDesc.innerHTML = 'شما این آیتم را قبلا اضافه کردید'
            modal.classList.add('modal-show')
            setTimeout(function(){
             modal.classList.remove('modal-show')
            },3000)
        }
    })


    let socialShare = document.createElement('div')
    socialShare.className = 'social-share'
    

    
    socialShare.addEventListener('click',function(event){
        if(event.target.tagName === 'P'){
          popupWrapper.classList.add('pop-up_bg')
        }
    })


    let details = document.createElement('p')
    details.className = 'details'
    details.innerHTML = 'DETAILS'

    let delivery = document.createElement('p')
    delivery.className = 'delivery'
    delivery.innerHTML = 'DELIVERY'

    let returns = document.createElement('p')
    returns.className = 'returns'
    returns.innerHTML = 'RETURNS'

    title.innerHTML = item.name

 
    socialShare.append(details,delivery,returns)
    
    shoppingWrapper.append(itemCount,addToBasketBtn)


    itemDetailWrapper.append(itemTitle,itemPrice,itemDesc,shoppingWrapper,socialShare)

    detailsWrapper.append(imgWrapperElem,itemDetailWrapper)

}

closeBtn.addEventListener('click',function(){
    popupWrapper.classList.remove('pop-up_bg')
})


// Related section

const relatedItems = [
    {id:1,name:'MODERN CHAIR',price:249.00,path:'images/Modern Chair.png'},
    {id:2,name:'ELEGANT LAMP',price:129.00,path:'images/Elegant Lamp.png'},
    {id:3,name:'BLACK CHAIR',price:199.00,path:'images/Black Chair.png'},
]

const relatedItemsWrapper = document.querySelector('.Featured-wrapper')

relatedItems.forEach(function(item){
    createRelatedItems(item,item.path,item.name,item.price,item.id)
})



function createRelatedItems(item,path,name,price,id){
    relatedItemsWrapper.insertAdjacentHTML('beforeend','<div class="col-12 col-sm-6 col-md-4 Featured-room">'+
     '<img src="'+ path +'" alt="'+name+'" class="img-room">'+
     '<a href="shopSingle.html?id= '+ id +'" class="name-room">'+ name +'</a>'+
     '<p class="price-room"> $ '+ price +' .00 USD</p>'+
     '</div>')
}



// shopping cart


let cart = document.querySelector('.cart')

let itemRoom = document.querySelectorAll('.name-room')

let cartWrapper = document.querySelector('.main-cart-wrapper')

let cartRow = document.querySelector('.cart-row__wrapper')

let closeCart = document.querySelector('.cart-close')

let clearButton = document.querySelector('.clearBasket')

let itemCountShop = document.querySelector('.item-count-shop')

// add to array

function addToBasket(){
    cartRow.innerHTML = ''
    let newItem = shopItems.find(function(item){
        return item.id === itemIdParam
    })
    cartsArray.push(newItem)
    cartsArray.forEach(function(item){
        addfromBasketToDom(item)
    })
    calcTotalPrice()
    setLocalStorage(cartsArray)
    itemCount(cartsArray)
}

// add from array to dom

function addfromBasketToDom(item){
    let cartItem = document.createElement('div')
    cartItem.className = 'cart-item'

    let cartImgWrapper = document.createElement('div')
    cartImgWrapper.className = 'cart-img_wrapper'

    let cartImg = document.createElement('img')
    cartImg.className = 'cart-img'
    cartImg.src = item.path
    
    let cartDescWrapper = document.createElement('div')
    cartDescWrapper.className = 'cart-desc__wrapper'

    let cartName = document.createElement('h3')
    cartName.className = 'cart-name'
    cartName.innerHTML = item.name

    let cartPrice = document.createElement('p')
    cartPrice.className = 'cart-price'
    cartPrice.innerHTML = '$ ' + item.price + ' .00 USD'

    let responsiveImgElem = document.createElement('img')
    responsiveImgElem.src = item.path
    responsiveImgElem.alt = item.name
    responsiveImgElem.className = 'responsive-cart__img'

    let cartRemove = document.createElement('p')
    cartRemove.className = 'remove'
    cartRemove.innerHTML = 'REMOVE'

    let cartCount = document.createElement('input')
    cartCount.className = 'cart-count'
    cartCount.type = 'number'
    cartCount.min = '1'
    cartCount.value = item.count
    cartCount.max = '100'
    
    cartCount.addEventListener('input',function(event){
        item.count = Number(event.target.value)
        if(event.target.value > 9){
            event.target.style.paddingLeft = '1.1rem'
        }else{
            event.target.style.paddingLeft = '1.4rem'
        }
        calcTotalPrice()
        setLocalStorage(cartsArray) 
        itemCount(cartsArray)
    })



    cartImgWrapper.append(cartImg)

    cartDescWrapper.append(cartName,cartPrice,responsiveImgElem,cartRemove)

    cartItem.append(cartImgWrapper,cartDescWrapper,cartCount)

    cartRow.append(cartItem)

    // remove item from basket
    
    cartRemove.addEventListener('click',function(event){
        event.target.parentElement.parentElement.remove()
        cartsArray = cartsArray.filter(function(product){
            return product.id !== item.id
        })
        calcTotalPrice()
        setLocalStorage(cartsArray)
        itemCount(cartsArray)
        modal.classList.add('modal-delete')
        modalDesc.innerHTML = `آیتم با موفقیت حذف شد`
        setTimeout(function(){
          modal.classList.remove('modal-delete')
        },3000)
    })
}

let totalPriceDom = document.querySelector('.total-price')

let clearModal = document.querySelector('.clear-modal')
let clearModalDesc = document.querySelector('.clear-modal__desc')


clearButton.addEventListener('click',function(event){
   if(!cartsArray.length && cartRow.innerHTML === ''){
      clearModal.classList.add('modal-show')
      clearModalDesc.innerHTML = 'سبد خرید شما خالی است:('
      setTimeout(function(){
       clearModal.classList.remove('modal-show')
      },3000)
   }else{
    clearModal.classList.add('modal-show')
    clearModalDesc.innerHTML = 'خرید شما با موفقیت انجام شد:)'
    cartRow.innerHTML = ''
    cartsArray.forEach((cart)=>{
        cart.count = 1
        
    })
    cartsArray = []
    calcTotalPrice()
    itemCount(cartsArray)
    setLocalStorage(cartsArray)
    setTimeout(function(){
      clearModal.classList.remove('modal-show')
    },3000)
   }
})


function itemCount (cart){
    itemCountShop.innerHTML = cart.length
}
// set localStorage
function setLocalStorage(carts){
    localStorage.setItem('carts',JSON.stringify(carts))
}

// calcTotalPrice
function calcTotalPrice (){
    let totalPrice = 0
    cartsArray.forEach(function(product){
        totalPrice = totalPrice + (product.count * product.price)
    })
    totalPriceDom.innerHTML = `$ ${totalPrice} .00 USD`
}

cart.addEventListener('click',function(event){
    cartWrapper.classList.add('pop-up_bg')
}) 

closeCart.addEventListener('click',function(){
    cartWrapper.classList.remove('pop-up_bg')
})



window.addEventListener('load',function(){
    cartRow.innerHTML = ''
    let newlocal = JSON.parse(localStorage.getItem('carts'))
       if(newlocal){
        cartsArray = newlocal
       }else{
        cartsArray = []
       }
        cartsArray.forEach(function(item){
            addfromBasketToDom(item)
        })
        calcTotalPrice()
        setLocalStorage(cartsArray)
        itemCount(cartsArray)
})
