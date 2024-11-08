const shopWrapper = document.querySelector('.shop-item__wrapper')

const shopItems = [
    {id:1,name:'MODERN CHAIR',price:249.00,path:'images/Modern Chair.png'},
    {id:2,name:'ELEGANT LAMP',price:129.00,path:'images/Elegant Lamp.png'},
    {id:3,name:'BLACK CHAIR',price:199.00,path:'images/Black Chair.png'},
    {id:4,name:'LISBON SOFA',price:1699.00,path:'images/Lisbon-shop.jpg'},
    {id:5,name:'RETRO CHAIR',price:399.00,path:'images/Retro Chair.jpg'},
    {id:6,name:'BLACK CHAIR',price:199.00,path:'images/Black Canape.jpg'}
]

let shopFragment = new DocumentFragment()

shopItems.forEach(function(item){
    addItemsToShop(item)
})


function addItemsToShop(item){
    let newDivElem = document.createElement('div')
    newDivElem.className = 'col-12 col-sm-6 col-md-4 shop-Featured-room'


    let imgElem = document.createElement('img')
    imgElem.className = 'shop-img-room mb-1'
    imgElem.alt = item.name
    imgElem.src = item.path

    let linkELem = document.createElement('a')
    linkELem.innerHTML = item.name
    linkELem.href = 'shopSingle.html?id=' + item.id
    linkELem.className = 'name-room primary-color pt-1'

    let priceElem = document.createElement('p')
    priceElem.className = 'price-room'
    priceElem.innerHTML = '$   ' + item.price + '.00' + '   USD'
    
    newDivElem.append(imgElem,linkELem,priceElem)
    shopFragment.append(newDivElem)
}

shopWrapper.append(shopFragment)


let firstShopItem = document.querySelector('.shop-Featured-room')
let newItem = document.createElement('div')
newItem.innerHTML = 'NEW'
newItem.className = 'new'

firstShopItem.append(newItem)


