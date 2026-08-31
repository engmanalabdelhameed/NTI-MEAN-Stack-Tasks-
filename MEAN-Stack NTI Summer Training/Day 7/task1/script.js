// Part A — "use strict"
// Part A — "use strict" 1
function test1withoutStrict() {
    myVar = "I am a global variable";
}
test1withoutStrict();
console.log(myVar); // I am a global variable
console.log("------------------------------------------------");

// Part A — "use strict" 2
function test2withStrict() {
    "use strict";
    try {
        strictVar = "strict mode test";
    } catch (error) {
        console.log("Strict Mode Error:", error.message);
    }
}
test2withStrict(); // Strict Mode Error: strictVar is not defined
console.log("------------------------------------------------");

 // Part A — "use strict" 3
function testDeleteStrict() {
    "use strict";
    var localVar = "test";
    try {
        // delete localVar; 
    } catch (error) {
        console.log("Delete Error:", error.message);
    }

    // Allowed deletion: Deleting an object property
    var Obj1 = { name: "john" };
    delete Obj1.name;
    console.log("After deleting property:", Obj1);
}
testDeleteStrict();
console.log("------------------------------------------------");

// Part B — Hoisting
// Part B — Hoisting 4
console.log(x); // undwfined
var x = 10;
console.log(x); // 10
console.log("------------------------------------------------");

// Part B — Hoisting 5
// Case 1
sayHi();
function sayHi() {
console.log("Hi"); // Hi 
}
console.log("------------------------------------------------");
// Case 2
// sayBye();
var sayBye = function () {
console.log("Bye"); // Error Because sayBye isn't a function
};
console.log("------------------------------------------------");

// Part B — Hoisting 6
// console.log(a);  // ReferenceError (TDZ)
let a = 5;
console.log("------------------------------------------------");

// Part B — Hoisting 7
var n = 1;
function demo() {
console.log(n); // undefined
var n = 2;
console.log(n); // 2
}
demo();
console.log(n); //1
console.log("------------------------------------------------");

// Part C — var vs let vs const
// Part C — var vs let vs const 8
function test3VarScope() {
    if (true) {
        var insideIf = "Access the function";
    }
    console.log(insideIf); // Access the function
}
test3VarScope();
console.log("------------------------------------------------");

// Part C — var vs let vs const 9 
function test4BlockScope() {
    if (true) {
        let blockLet = "Inside block only";
        const blockConst = "Inside block only";
    }
    // console.log(blockLet);   // ReferenceError
    // console.log(blockConst); // ReferenceError
}
test4BlockScope();
console.log("------------------------------------------------");

// Part C — var vs let vs const 10
var reDecVar = "First";
console.log("1 ", reDecVar); // 1 First
var reDecVar = "Second"; 
console.log("2 ", reDecVar); // 2 Second

let reDecLet = "First";
console.log("3 ", reDecLet); // 3 First 
// let reDecLet = "Second"; 
// console.log("2 ", reDecLet); // Error
console.log("------------------------------------------------");

// Part C — var vs let vs const 11
const student = {
    name: "Ali",
    age: 20,
    city: "Egypt"
};

student.age = 25; // New Age {name: 'Ali', age: 25, city: 'Egypt'}
console.log("New Age", student);

student.grade = "A"; // grade: {name: 'Ali', age: 25, city: 'Egypt', grade: 'A'}
console.log("grade:", student);

delete student.city; // Delete city: {name: 'Ali', age: 25, grade: 'A'}
console.log("Delete city:", student);

try {
    student = { name: "Ayan" }; // TypeError
} catch (e) {
    console.log("Reassignment Error:", e.message); // Reassignment Error: Assignment to constant variable.
}
console.log("------------------------------------------------");

// Part C — var vs let vs const 12
const nums = [1, 2, 3];
nums.push(4); 
console.log("After push: ", nums); //After push:  (4) [1, 2, 3, 4]
nums[0] = 10; 
console.log("Modified array:", nums); // Modified array: (4) [10, 2, 3, 4]

try {
    nums = [5, 6, 7]; // Not allowed (TypeError)
} catch (e) {
    console.log("Array Reassignment Error:", e.message); //Allowed : Array Reassignment Error: Assignment to constant variable.
}
console.log("------------------------------------------------");

// Part C — var vs let vs const 13
var a1; // valid
let b1; // valid
// const c; // SyntaxError: Missing initializer in const declaration
console.log("------------------------------------------------");

// Part C — var vs let vs const 14 
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1); // var global
console.log(window.g2); // undefined
console.log(window.g3); // undefined
console.log("------------------------------------------------");

// Part C — var vs let vs const 15
const handlers = {};
for (let i = 0; i < 3; i++) { 
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0()); // index: 0
console.log(handlers.fn2()); // index: 2
console.log("------------------------------------------------");

// Part D — Arrow Functions & Template Literals
// Part D — Arrow Functions & Template Literals 16
// function welcome(name) {
// return "Welcome, " + name + "!";
// }
// Arrow Function 
const welcome = name => `Welcome, ${name}!`;
console.log(welcome("Lola")); // Welcome, Lola!
console.log("------------------------------------------------");

// Part D — Arrow Functions & Template Literals 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Manal", "Abdelhameed", 20));
console.log("------------------------------------------------");

// Part D — Arrow Functions & Template Literals 18
const multiply = (a, b) => a * b;
const Sum = (a, b) => {
    console.log("First num: ", a, ",Second num: ", b);  // First num:  4 ,Second num:  5
    return a + b;
};
console.log("Product:", multiply(4, 5));  // Product: 20
console.log("Sum:", Sum(4, 5));  // Sum: 9
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread
// Part E — Destructuring, Default, Rest, Spread 19
const product = {
title: "Laptop",
price: 15000,
inStock: true,
brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title, price, inStock); // Laptop 15000 true
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 20
const techStack = ["HTML", "CSS", "JS", "React"];
const [Tech1 , Tech2] = techStack;
console.log(Tech1, Tech2); // HTML CSS
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 21
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;
console.log(greet("lena", "Hi")); // Hi, lena!
console.log(greet("Sara"));     // Hello, Sara!
console.log(greet());           // Hello, Guest!
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 22
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll(1, 2, 3));         // 6
console.log(sumAll(10, 20, 30, 40));  // 100
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 23
const mergedArr = [...[1, 2], ...[3, 4, 5]];
console.log("Merged:", mergedArr);  // Merged: [1, 2, 3, 4, 5]
const originalArr = [10, 20, 30];
const copiedArr = [...originalArr];
copiedArr.push(40);
console.log("Original:", originalArr); // Original: [10, 20, 30]
console.log("Copied:", copiedArr);     // Copied: [10, 20, 30, 40]
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergedUser = { ...user, ...contact };
console.log(mergedUser); // {name: 'Sara', age: 23, email: 'sara@nti.com'}
console.log("------------------------------------------------");

// Part E — Destructuring, Default, Rest, Spread 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log("Total:", total(...values)); // Total: 20
console.log("------------------------------------------------");

// Part F — Memory & Copying
// Part F — Memory & Copying 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); // Output: "Omar"
console.log("------------------------------------------------");

// Part F — Memory & Copying 27
const originalObj = {
    name: "Mona",
    details: { city: "Cairo" }
};
const shallowCopy = { ...originalObj };
shallowCopy.name = "Ahmed";
shallowCopy.details.city = "Alex";
console.log("Original:", originalObj); // Original: { name: 'Mona', details: { city: 'Alex' } }
console.log("Shallow Copy:", shallowCopy); // Shallow Copy: { name: 'Ahmed', details: { city: 'Alex' } }  
console.log("------------------------------------------------");

// Part F — Memory & Copying 28 
const original = {
    name: "Mona",
    details: { city: "Cairo" }
};
const deepCopy = structuredClone(original);
deepCopy.details.city = "Giza";
console.log("Original City:", original.details.city); // Original City: Cairo
console.log("Deep Copy City:", deepCopy.details.city); // Deep Copy City: Giza
console.log("------------------------------------------------");

// Part F — Memory & Copying 29
const storageData = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(storageData));
const retrievedDataStr = localStorage.getItem("userdata");
const parsedData = JSON.parse(retrievedDataStr);
console.log("Type:", typeof parsedData); // Type: object
console.log("Values:", parsedData); // Values: {name: 'Ahmed', age: 26, city: 'Alex'}
localStorage.removeItem("userdata");
console.log("------------------------------------------------");

// Part G — Challenge Mix
// Part G — Challenge Mix 30
const APP_CONFIG = {
    name: "MyApp",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("Authentication");
console.log("Modified APP_CONFIG:", APP_CONFIG); // Modified APP_CONFIG: {name: 'MyApp', version: '1.0.0', api: {…}, features: Array(1)}
try {
    APP_CONFIG = {}; // TypeError
} catch (e) {
    console.log("Error:", e.message); // Error: Assignment to constant variable.
}
console.log("------------------------------------------------");

// Part G — Challenge Mix 31
const createCard = (title, price = 0, ...tags) => {
    return {
        title,
        price,
        tags,
        label: `${title} ${price} EGP`
    };
};
const card1 = createCard("Laptop", 15000, "tech", "dell", "new");
const card2 = createCard("Mouse");
console.log(card1); // {title: 'Laptop', price: 15000, tags: Array(3), label: 'Laptop 15000 EGP'}
console.log(card2); // {title: 'Mouse', price: 0, tags: Array(0), label: 'Mouse 0 EGP'}
console.log("------------------------------------------------");

// Part G — Challenge Mix 32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`); // Omar scored 80   , Mona scored 90   , Ali scored 70
}
console.log("------------------------------------------------");