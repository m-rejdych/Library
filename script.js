let addBook = document.getElementById(`addingButton`);
let table = document.querySelector(`table`);

const myLibrary = [];

function render (template) {
    let newRow = document.createElement(`tr`);
    let newCell1 = document.createElement(`td`);
    let newCell2 = document.createElement(`td`);
    let newCell3 = document.createElement(`td`);
    let newCell4 = document.createElement(`td`);

    newCell1.textContent = template.title;
    newCell1.classList.add(`pointer`);
    newCell1.addEventListener(`click`, () => {
        table.removeChild(newRow);
        myLibrary.splice(myLibrary.indexOf(template), 1);
    })

    newCell2.textContent = template.author;

    newCell3.textContent = template.pages;

    newCell4.textContent = template.read;
    newCell4.style.textTransform = `uppercase`;
    (template.read) ? newCell4.style.color = `rgb(25, 80, 231)` : newCell4.style.color = `red`;
    newCell4.style.textShadow = `1px 1px black`;
    newCell4.classList.add(`pointer`);
    newCell4.addEventListener(`click`, () => {
        (template.read) ? template.read = false : template.read = true;
        newCell4.textContent = template.read;
        (template.read) ? newCell4.style.color = `rgb(25, 80, 231)` : newCell4.style.color = `red`;
    })

    table.appendChild(newRow);
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(element) {
    myLibrary.push(element);
}

addBook.addEventListener(`click`, () => {
    let element = new Book(prompt(`What is the title of new book?`)
    , prompt(`What is the author of new book?`), prompt(`How many pages the new book has?`)
    ,confirm(`Click OK, if you have read this book or Cancel, if you haven't.`))

    if (+element.pages == NaN) element.pages = prompt(`Number of pages must be a number!`);

    addToLibrary(element);

    render(myLibrary[myLibrary.length - 1])
})
