// Book Class: Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks

class UI {
    static displayBooks() {
        const StoreBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '344312'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '142541'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookList());
    }

    static addBookToList() {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    }
}

// Store Class: Handle Storage

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book
