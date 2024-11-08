const items = [
    {id:1,name:'English Chair',path:'images/LookBook/image-1.jpg'},
    {id:2,name:'Armenia Chair',path:'images/LookBook/image-2.jpg'},
    {id:3,name:'Elegant Lamp',path:'images/LookBook/image-3.jpg'},
    {id:4,name:'Arabian Chair',path:'images/LookBook/image-4.jpg'},
    {id:5,name:'Norwegian Chair',path:'images/LookBook/image-5.jpg'},
    {id:6,name:'Germany Chair',path:'images/LookBook/image-6.jpg'},
    {id:7,name:'Turkey Chair',path:'images/LookBook/image-7.jpg'},
    {id:8,name:'Spanish Chair',path:'images/LookBook/image-8.jpg'},
    {id:9,name:'Italy Chair',path:'images/LookBook/image-9.jpg'},
    {id:10,name:'Indian Chair',path:'images/LookBook/image-10.jpg'},
    {id:11,name:'French Chair',path:'images/LookBook/image-11.jpg'},
    {id:12,name:'Finland Chair',path:'images/LookBook/image-12.jpg'},
    {id:13,name:'Sweedian Chair',path:'images/LookBook/image-13.jpg'},
    {id:14,name:'Autrisian Chair',path:'images/LookBook/image-14.jpg'},
]



let ItemsWrapper = document.querySelector('.items-wrapper')



function createElemItemsInDom(items){
    items.forEach((item) => {
        ItemsWrapper.insertAdjacentHTML('beforeend',`<div class="col-12 col-sm-6 col-md-4 col col-lg-3 LookBook-item">
        <img src="${item.path}" alt="${item.name}" class="LookBook-img" id="${item.id}">
        </div>`)
    })
}

createElemItemsInDom(items)

let LookItems = document.querySelectorAll('.LookBook-img')
let popUpWrapper = document.querySelector('.pop-up__wrapper')
let popUp = document.querySelector('.pop-up')
let newArray = Array.from(LookItems)
let mainArray


for(let item of LookItems){

    item.addEventListener('click',(event) => {
      popUpWrapper.classList.add('pop-up_remove')
      let mainArray = items.filter((item)=>{
        return item.id === Number(event.target.id)
      })
      mainArray.forEach((item) => {
        createPopUpElems(item)
      })
    })
    item.addEventListener('mousemove',event => {
        fillteredArray = newArray.filter((item) => {
          return item.id !== event.target.id
        })
        fillteredArray.forEach((item) => {
            item.classList.add('blur')
        })
      
    })
    item.addEventListener('mouseleave',event => {
        newArray.forEach((item) => {
            item.classList.remove('blur')
        })
    })
}

function createPopUpElems(item){
    popUp.innerHTML = ''
    popUp.insertAdjacentHTML(`beforeend`,`
    <P class="pop-up__close" onclick="hidePopUp()">close</P>
    <h2 class="pop-up_title">${item.name}</h2>
    <div class="pop-up_img__wrapper">
     <img class="pop-up__img" src="${item.path}" alt="${item.name}">
     </div>
     <P class="pop-up__caption">Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.</P>
     <span class="pop-up__button">GET PRODUCT</span>
    `)
}

function hidePopUp(){
    popUpWrapper.classList.remove('pop-up_remove')
}