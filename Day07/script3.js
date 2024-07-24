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

console.log("Keys:", Object.keys(exampleBook));
console.log("Values:", Object.values(exampleBook));