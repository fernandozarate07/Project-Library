// Modal Visible
let addBookBtn = document.querySelector('.addBook');
let modalContainer = document.querySelector('.modalContainer');
addBookBtn.addEventListener('click', ()=>{
    modalContainer.classList.remove('invisible');
    modalContainer.classList.add('visible')

})
// Modal Invisible
let formExit = document.querySelector('.form__exit')

formExit.addEventListener('click', ()=>{
    modalContainer.classList.remove('visible');
    modalContainer.classList.add('invisible');
})

// Add Book Functionality
let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.form__input')
let isValidate = false;
let formError = document.querySelectorAll('.form__error')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    for(let errorPara of formError){
        errorPara.textContent=''
    }
    for(let input of inputs){
        if(input.value.trim() === ''){
            input.nextElementSibling.textContent = 'Empty field !'
        }
        else if(input === inputs[0] && Number(input.value)|| input === inputs[1] && Number(input.value) ){
            input.nextElementSibling.textContent = 'Error the value is not a text !'
        }
        else if(input === inputs[2] && isNaN(input.value)){
            input.nextElementSibling.textContent = 'Error the value is not a number !'
        }
        else{
            isValidate = true;
            let name = inputs[0].value;
            let autor = inputs[1].value;
            let pag = inputs[2].value;
            let isRead = inputs[3].value;
        }
    }
})
