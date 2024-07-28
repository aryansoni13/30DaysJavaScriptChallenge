//! Task 1 

function outerFunction() {
    const outerVariable = 'Hello, I am from outer function!';
    
    function innerFunction() {
        return outerVariable;
    }
    
    return innerFunction;
}

const getMessage = outerFunction();
console.log(getMessage()); //* Output: Hello, I am from outer function!

//! Task 2

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); //* Output: 1
counter.increment();
console.log(counter.getCount()); //* Output: 2

//! Task 3

function createIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return `ID-${lastId}`;
    };
}

const generateId = createIdGenerator();
console.log(generateId()); //* Output: ID-1
console.log(generateId()); //* Output: ID-2

//! Task 4

function createGreeter(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetJohn = createGreeter('John');
console.log(greetJohn()); //* Output: Hello, John!

//! Task 5

const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push(function() {
        console.log(i);
    });
}

functions.forEach(fn => fn()); //* Output: 0, 1, 2, 3, 4

//! Task 6

const ItemModule = (function() {
    const items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice();
        }
    };
})();

ItemModule.addItem('Apple');
ItemModule.addItem('Banana');
console.log(ItemModule.listItems()); //* Output: ['Apple', 'Banana']
ItemModule.removeItem('Apple');
console.log(ItemModule.listItems()); //* Output: ['Banana']

//! Task 7 

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); //* Output: 5
console.log(memoizedAdd(2, 3)); //* Output: 5 (cached)

//! Task 8

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); //* Output: 120
console.log(memoizedFactorial(5)); //* Output: 120 (cached)
