const Rooms = [
    {id:1,name:'Oslo',path:'images/Rooms/Room-1.jpg'},
    {id:2,name:'Oslo',path:'images/Rooms/Room-2.jpg'},
    {id:3,name:'Lisbon',path:'images/Rooms/Room-3.jpg'},
    {id:4,name:'Berlin',path:'images/Rooms/Room-4.jpg'},
    {id:5,name:'Madrid',path:'images/Rooms/Room-5.jpg'}
]

let titleWrapper = document.querySelector('.Room-title__wrapper')
let roomImgWrapper = document.querySelector('.room-img_wrapper')
let urlParams = new URLSearchParams(location.search)
let idParam = urlParams.get('id')
let mainRoom
let currentParam = 1
let toNumberParam
let nextRoomWrapper = document.querySelector('.next-room__wrapper')


function addRoomsToDom(mainId,Rooms){
   mainRoom = Rooms.find((Room)=>{
    return Room.id === Number(mainId)
   })

  let roomTitle = document.createElement('h1')
  roomTitle.className = 'room-title'
  roomTitle.innerHTML = mainRoom.name

  let roomCaption = document.createElement('p')
  roomCaption.className = 'room-caption'
  roomCaption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque.'

  let arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="6" viewBox="0 0 32 6" fill="none">
  <rect x="0.5" y="2.5" width="30" height="1" fill="#343339"/>
  <path d="M28.5 0.5L31 3L28.5 5.5" stroke="#343339"/>
  </svg>`

  let backToRoomsBtn = document.createElement('a')
  backToRoomsBtn.href= 'Rooms.html'
  backToRoomsBtn.className = 'back-btn'
  backToRoomsBtn.innerHTML = 'ROOMS ' + arrowSvg

  let imgContainer = document.createElement('div')
  imgContainer.className = 'img-container'

  let roomImg = document.createElement('img')
  roomImg.className = 'room-img'
  roomImg.src = mainRoom.path
   
  titleWrapper.append(roomTitle,roomCaption,backToRoomsBtn)

  imgContainer.append(roomImg)
  roomImgWrapper.append(imgContainer)

}


function showNextRoom (){
    let imgTitle = document.createElement('h2')
    imgTitle.className = 'next-img__title'
    imgTitle.innerHTML = 'NEXT'

    let imgLink = document.createElement('a')
    imgLink.className = 'img-link'


    imgLink.addEventListener('click',function(){
      let mainParam = 1
      mainParam = mainParam + Number(idParam)
       toNumberParam = Number(mainParam)
      if(toNumberParam > 5){
        toNumberParam = 1
      }
      imgLink.href = 'Room.html?id=' + toNumberParam
    })
    
    let nextImg = document.createElement('img')
    nextImg.className = 'next-img'
    nextImg.src = 'images/Rooms/Room-' + (mainRoom.id+ 1)  + '.jpg' 
    
    if(mainRoom.id >= 5){
      mainRoom.id = 1
      nextImg.src = 'images/Rooms/Room-' + (mainRoom.id) + '.jpg'
    }

    imgLink.append(nextImg)

    nextRoomWrapper.append(imgTitle,imgLink)
}

addRoomsToDom(idParam,Rooms)
showNextRoom()


