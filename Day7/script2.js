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

console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});

library.books.forEach(book => {
    book.getTitleAndYear = function () {
        return `${this.title} (${this.year})`;
    };
});

library.books.forEach(book => {
    console.log(book.getTitleAndYear());
});