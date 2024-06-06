const myBooks = [];

function Book(title, author, readed) {
    this.title = title;
    this.author = author;
    this.readed = readed; 
}

function guardarLibro(libro) {
    myBooks.push(libro);
}

const HarryPotter = new Book('Harry Potter', 'JK ROWLING', true);

const HarryPotter2 = new Book('Harry Potter', 'jk', false)

guardarLibro(HarryPotter);
guardarLibro(HarryPotter2)

console.log(myBooks);

myBooks.forEach((libro) => {
    const contenedor_libro = document.createElement('div');
    contenedor_libro.textContent = `Título: ${libro.title}, Autor: ${libro.author}, Leído: ${libro.readed}`;
    document.body.append(contenedor_libro);
});