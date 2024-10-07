// Array objet
const books = [];

// Create Component
function getComponent(objet) {
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h3');
    title.textContent = ` "${objet.name}"`;
    title.classList.add('card__title');
    card.appendChild(title);

    let autorTitle = document.createElement('p');
    autorTitle.textContent = objet.autor;
    autorTitle.classList.add('card__p');
    card.appendChild(autorTitle);

    let pageNumber = document.createElement('p');
    pageNumber.textContent = `Has ${objet.pag} pages`;
    card.appendChild(pageNumber);

    let isreadContainer = document.createElement('div');
    isreadContainer.classList.add('card__isreadContainer');
    card.appendChild(isreadContainer);

    let readBtn = document.createElement('button');
    readBtn.textContent = 'Read';
    readBtn.classList.add('card__button');
    if (objet.isread === true) {
        readBtn.classList.add('read');
    } else {
        readBtn.classList.add('unread');
    }
    isreadContainer.appendChild(readBtn);

    let unreadBtn = document.createElement('button');
    unreadBtn.textContent = 'Unread';
    unreadBtn.classList.add('card__button');

    if (objet.isread) {
        unreadBtn.classList.add('unread');
    } else {
        unreadBtn.classList.add('read');
    }
    isreadContainer.appendChild(unreadBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('card__delete');
    card.appendChild(deleteBtn);

    return card;
}

// Constructor
function Book(name, autor, pag, isread) {
    this.name = name;
    this.autor = autor;
    this.pag = pag;
    this.isread = isread;
}

// Modal Visible
let addBookBtn = document.querySelector('.addBook');
let modalContainer = document.querySelector('.modalContainer');
addBookBtn.addEventListener('click', () => {
    modalContainer.classList.remove('invisible');
    modalContainer.classList.add('visible');
});

// Modal Invisible
let formExit = document.querySelector('.form__exit');
formExit.addEventListener('click', () => {
    modalContainer.classList.remove('visible');
    modalContainer.classList.add('invisible');
});

// Add Book Functionality
let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.form__input');
let formError = document.querySelectorAll('.form__error');
let cardContainer = document.querySelector('.cardContainer');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValidate = true;

    for (let errorPara of formError) {
        errorPara.textContent = '';
    }
    for (let input of inputs) {
        if (input.value.trim() === '') {
            input.nextElementSibling.textContent = 'Empty field !';
            isValidate = false;
        } else if ((input === inputs[0] || input === inputs[1]) && !isNaN(input.value)) {
            input.nextElementSibling.textContent = 'Error the value is not a text !';
            isValidate = false; 
        } else if (input === inputs[2] && isNaN(input.value)) {
            input.nextElementSibling.textContent = 'Error the value is not a number !';
            isValidate = false;
        }
    }

    // Create Object
    if (isValidate === true) {
        let name = inputs[0].value.toUpperCase();
        let autor = inputs[1].value;
        let page = inputs[2].value;
        let isread = inputs[3].checked;

        const book = new Book(name, autor, page, isread);
        books.push(book);

        cardContainer.textContent = '';

        for (let e of books) {
            let card = getComponent(e);
            cardContainer.appendChild(card);
        }

        // Clean inputs and invisible modal
        for (let input of inputs) {
            if(input !== inputs[3]){
                input.value = '';  
            }
            else if(inputs[3]){
                input.checked = false;
            }
        }
        modalContainer.classList.remove('visible');
        modalContainer.classList.add('invisible');
    }
});
