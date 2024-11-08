


let toggleButtons = document.querySelectorAll('.plus-wrapper')
let Allplus = document.querySelectorAll('.plus')
let questionAnswers = document.querySelectorAll('.Question-answer')


toggleButtons.forEach(function(button){
    button.addEventListener('click',function(event){
          let dataID = button.dataset.id
          console.log(dataID)
         let newAllPlus = Array.from(Allplus)
       newAllPlus = newAllPlus.forEach(function(plus){
                if(plus.dataset.id === dataID){
                  plus.classList.toggle('rotate-0')
                }else{
                  plus.classList.remove('rotate-0')
                }
         })
        let newQuestionAnswers = Array.from(questionAnswers)
        newQuestionAnswers = newQuestionAnswers.forEach(function(question){
                 if(question.dataset.id === dataID){
                    question.classList.toggle('show-question')
                 }else{
                    question.classList.remove('show-question')
                 }
        })
    })
})
