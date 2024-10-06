// Modal visible
let addBookBtn = document.querySelector('.addBook');
let modalContainer = document.querySelector('.modalContainer');
addBookBtn.addEventListener('click', ()=>{
    modalContainer.classList.add('visible')
})