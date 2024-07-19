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

book.getTitleAndAuthor = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getTitleAndAuthor());

//! Task 4 

book.updateYear = function(newYear){
    this.year = newYear
}

book.updateYear(2024)
console.log(book);