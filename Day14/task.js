//! Task 1

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// const person = new Person("Alice", 30);
// console.log(person.greet()); //* Output: Hello, my name is Alice and I am 30 years old.

//! Task 2

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }

//   updateAge(newAge) {
//     this.age = newAge;
//     console.log(`Updated age: ${this.age}`);
//   }
// }

// const person = new Person("Alice", 30);
// person.updateAge(31); //* Output: Updated age: 31

//! Task 3

// class Student extends Person {
//   constructor(name, age, studentId) {
//     super(name, age);
//     this.studentId = studentId;
//   }

//   getStudentId() {
//     return this.studentId;
//   }
// }

// const student = new Student("Bob", 22, "S12345");
// console.log(student.getStudentId()); //* Output: S12345

//! Task 4

// class Student1 extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return this.studentId;
//     }

//     greet() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
// }

// const student1 = new Student1('Bob', 22, 'S12345');
// console.log(student1.greet()); //* Output: Hello, my name is Bob, I am 22 years old, and my student ID is S12345.

//! Task 5

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     static genericGreeting() {
//         return "Hello! Welcome to our system.";
//     }
// }

// console.log(Person.genericGreeting()); //* Output: Hello! Welcome to our system.

//! Task 6

// class Student extends Person {
//     static studentCount = 0;

//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//     }

//     getStudentId() {
//         return this.studentId;
//     }

//     greet() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
// }

// const student1 = new Student('Bob', 22, 'S12345');
// const student2 = new Student('Alice', 21, 'S67890');
// console.log(Student.studentCount); //* Output: 2

//! Task 7

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     greet() {
//         return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
//     }
// }

// const person = new Person('John', 'Doe', 30);
// console.log(person.fullName); //* Output: John Doe

//! Task 8

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

    greet() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

const person = new Person('John', 'Doe', 30);
person.fullName = 'Jane Smith';
console.log(person.fullName); //* Output: Jane Smith

//! Task 9

class Account {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// const account = new Account();
// account.deposit(100);
// account.withdraw(30);
// console.log(account.getBalance()); //* Output: 70

//! Task 10

const account = new Account();
console.log(account.getBalance()); //* Output: 0
account.deposit(100);
console.log(account.getBalance()); //* Output: 100
account.withdraw(40);
console.log(account.getBalance()); //* Output: 60
