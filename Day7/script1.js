let book = {
    author: "Aryan",
    title: "xyz",
}
console.log(book);

console.log(book.author);
console.log(book.title);

book.getTitleAndAuthor = function () {
    return `${this.title} by ${this.author}`;
};
console.log(book.getTitleAndAuthor());

book.updateYear = function (newYear) {
    this.year = newYear
}
book.updateYear(2024)
console.log(book);
