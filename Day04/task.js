//! Task 1 

let i = 1;
for (i; i <= 10; i++) {
    console.log(i);
}

//! Task 2

for (let n = 1; n <= 10; n++) {
    console.log(5 * n);
}

//! Task 3 

let l = 1;
while (l <= 10) {
    console.log(l);
    l++;
}

//! Task 4

let h = 10;
while(h >=1){
    console.log(h);
    h--;
}

//! Task 5 

let num = 1
do {
    console.log(num);
    num++;
}while (num <=5) 
   
//! Task 6 

let numb = 5;
let result = 1; 
let o = 1;
do {
    result *= i;
    o++;
} while (o <= numb);
console.log(`${result}`);

//! Task 7 

for (let col = 1; col <= 5; col++) {
    for (let row = 1; row <= col; row++) {
        process.stdout.write("*");
    }
    console.log(" ");
}

//! Task 8 

for (number = 0; number <=10; number++){
    if(number == 5){
        continue;
    }
    console.log(number);
}

//! Task 9 

for (loop = 0; loop <= 10; loop++){
    if(loop == 7){
        break;
    }
    console.log(loop);
}