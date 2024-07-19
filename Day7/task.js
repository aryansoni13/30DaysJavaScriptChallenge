//! Task 1

let book = {
    author: "Aryan",
    title: "xyz",
}
console.log(book);

//! Task 2 

console.log(book.author);
console.log(book.title);

//! Task 3

book.getTitleAndAuthor = function () {
    return `${this.title} by ${this.author}`;
};
console.log(book.getTitleAndAuthor());

//! Task 4 

book.updateYear = function (newYear) {
    this.year = newYear
}
book.updateYear(2024)
console.log(book);

//!Task 5

let library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};
console.log(library);

//! Task 6 

console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});

//! Task 7 

library.books.forEach(book => {
    book.getTitleAndYear = function () {
        return `${this.title} (${this.year})`;
    };
});

library.books.forEach(book => {
    console.log(book.getTitleAndYear());
});


//! Task 8 

let exampleBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
    }
};

for (let key in exampleBook) {
    console.log(`${key}: ${exampleBook[key]}`);
}

//! Task 9 

console.log("Keys:", Object.keys(exampleBook));
console.log("Values:", Object.values(exampleBook));
