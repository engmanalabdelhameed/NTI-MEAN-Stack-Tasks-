// Part A — Objects
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2026,
    color: "Black"
};

// Part A — Objects 1 
console.log(car);

// Part A — Objects 2
console.log(car.brand);   
console.log(car["year"]); 

// Part A — Objects 3

car.color = "silver";
car.price = 250000;
console.log(car);

// Part A — Objects 4
delete car.year;
console.log(car.year); // undefined
console.log("----------------------------------------------");


// Part A — Objects 5
var student = {
    "student-name": "Sara",
    age: 20
};
console.log(student["student-name"]);
console.log("----------------------------------------------");


// Part A — Objects 6
var book = {
    title: "JavaScript",
    author: {
        firstName: "Mona",
        lastName: "Ali"
    }
};
console.log(book.author.lastName);
console.log("----------------------------------------------");


// Part A — Objects 7
var person = {
     name: "Ali",
     age: 25, 
     city: "Cairo"
     };
console.log(Object.keys(person));                  
console.log(Object.values(person));                
console.log(person.hasOwnProperty("job"));         
console.log("----------------------------------------------");


// Part A — Objects 8
var settings = {
    theme: "dark",
    lang: "en"
};
Object.freeze(settings);
settings.theme = "light"; // Ignored ==> freeze can't edit 
settings.fontSize = 16;   // Ignored ==> freeze can't add new value
console.log(settings);    
console.log("----------------------------------------------");



// Part B — Arrays Basics
var cities = ["Cairo", "Alex", "Egypt", "Aswan", "Luxor"];
// Part B — Arrays Basics 9
console.log(cities);
console.log(cities.length); 

// Part B — Arrays Basics 10
console.log(cities[0]);                 
console.log(cities[1]);                
console.log(cities[cities.length - 1]); 

// Part B — Arrays Basics 11
cities.push("Mansoura");
console.log(cities);
cities.unshift("Tanta");
console.log(cities);

// Part B — Arrays Basics 12 
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);
console.log("----------------------------------------------");


// Part B — Arrays Basics 13
var frontend = ["HTML", "CSS", "JS", "React"];
console.log(frontend.indexOf("JS"));      
console.log(frontend.includes("Python")); 
console.log("----------------------------------------------");


// Part B — Arrays Basics 14
var items = ["pen", "book", "bag"];
items.forEach(function (item, index) {
    console.log(index + " : " + item);
});
console.log("----------------------------------------------");


// Part B — Arrays Basics 15
var colors = ["red", "green", "blue", "yellow"];
for (var color of colors) {
    if (color == "blue") {
        break;
    }
    console.log(color); 
}
console.log("----------------------------------------------");


// Part B — Arrays Basics 16
var arr = ["A", "B", "C"];
arr.push("D", "E");
arr.shift();
console.log(arr);        
console.log(arr.length); 
console.log("----------------------------------------------");


// Part C — Array Methods
// Part C — Array Methods 17
var fruits = ["apple", "banana", "cherry"];
var upperFruits = fruits.map(function (f) {
    return f.toUpperCase();
});
console.log(upperFruits); 
console.log(fruits);     
console.log("----------------------------------------------");


// Part C — Array Methods 18
var numbers = [10, 55, 30, 80, 45, 90];
var Nums = numbers.filter(function (num) {
    return num > 50;
});
console.log(Nums); 
console.log("----------------------------------------------");


// Part C — Array Methods 19
var cityList = ["Cairo", "Giza", "Alex", "Aswan"];
var City = cityList.find(function (c) {
    return c.startsWith("A");
});
var foundIndex = cityList.findIndex(function (c) {
    return c.startsWith("A");
});
console.log(City);  
console.log(foundIndex); 
console.log("----------------------------------------------");


// Part C — Array Methods 20
var letters = ["a", "b", "c", "d", "e"];
var slicedLetters = letters.slice(1, 4);
console.log(slicedLetters); 
console.log(letters);       
console.log("----------------------------------------------");


// Part C — Array Methods 21
var nums = ["one", "two", "three", "four", "five"];
console.log(nums.splice(1, 2)); 
console.log(nums);   
console.log("----------------------------------------------");


// Part C — Array Methods 22
var sortedNums = [40, 100, 1, 5, 25].sort(function (a, b) {
    return a - b;
});
console.log(sortedNums);
console.log("----------------------------------------------");


// Part C — Array Methods 23
var ages = [16, 21, 17, 19];
var agesA = ages.some(function (age) { return age >= 18; });
var agesS = ages.every(function (age) { return age >= 18; });
console.log(agesA);   
console.log(agesS); 
console.log("----------------------------------------------");


// Part C — Array Methods 24
var Numbs = [5, 10, 15, 20];
var totalSum = Numbs.reduce(function (acc, current) {
    return acc + current;
}, 0);
console.log(totalSum); 
console.log("----------------------------------------------");


// Part D — Mix (Objects + Arrays)
var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
// Part D — Mix (Objects + Arrays) 25 
for (var studentItem of students) {
    console.log(studentItem.name, studentItem.grade);
}

// Part D — Mix (Objects + Arrays) 26
var highScorers = students.filter(function (s) { return s.grade >= 80; }).map(function (s) { return s.name; });
console.log(highScorers); 
console.log("----------------------------------------------");


// Part D — Mix (Objects + Arrays) 27
var products = [
    { name: "Laptop", price: 15000 },
    { name: "HeadPhone", price: 300 },
    { name: "Keyboard", price: 700 }
];
var totalPrice = products.reduce(function (acc, p) {
    return acc + p.price;
}, 0);
console.log(totalPrice); 
console.log("----------------------------------------------");


// Part D — Mix (Objects + Arrays) 28
var lang = ["js", "html", "css", "js", "react", "js"];
var NJs = lang.filter(function (tag) {
    return tag === "js";
}).length;
console.log(NJs); // 3
console.log("----------------------------------------------");


// Part D — Mix (Objects + Arrays) 29
var classroom = {
    teacher: "Mr.Mohamed",
    students: ["Hassan", "Kareem", "Nour", "Salma"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);
console.log("----------------------------------------------");


// Part D — Mix (Objects + Arrays) 30
var itemsList = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];
// 1. Titles in uppercase
var uppercaseTitles = itemsList.map(function (item) {
    return item.title.toUpperCase();
});
console.log("Uppercase Titles:", uppercaseTitles); 

// 2. Products with price < 30
var cheapProducts = itemsList.filter(function (item) {
    return item.price < 30;
});
console.log(cheapProducts); 

// 3. Total of all prices
var totalItemsPrice = itemsList.reduce(function (acc, item) {
    return acc + item.price;
}, 0);
console.log(totalItemsPrice);
console.log("----------------------------------------------");

