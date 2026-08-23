// Task 1: Console Intro
console.log("JS is running successfully");
//-------------------------------------------------------------------


// Task 2: Start Alert
window.alert("Ready to practice!");
//-------------------------------------------------------------------


// Task 3: Product Variables
var productName = "Laptop";
var price = 15000;
var isAvailable = true;
console.log(productName);
console.log(typeof productName);
console.log(price);
console.log(typeof price);  
console.log(isAvailable);
console.log(typeof isAvailable);
//-------------------------------------------------------------------


// Task 4: Change Page Title
document.getElementById("mainTitle").innerHTML = "Practice Time";
//-------------------------------------------------------------------


//  Task 5: City Label with +
var city = "Cairo";
var country = "Egypt";
var cityCountry = city + ", " + country;
console.log(cityCountry);
//-------------------------------------------------------------------


// Task 6: City Label with Template Literals
var cityCountryTemplate = `Location: ${city}, ${country}`;
console.log(cityCountryTemplate);
//-------------------------------------------------------------------


// Task 7: Shop Math
var itemPrice = 120 ; 
var quantity = 3;
var totalPrice = itemPrice * quantity;
// console.log(`Total Price: ${totalPrice}`);
console.log("Total Price:", totalPrice);
var difference = 400 - totalPrice;
console.log("Difference:", difference);
var multiplication = itemPrice * quantity;
console.log("Multiplication:", multiplication);
var division = itemPrice / quantity;
console.log("Division:", division);
var remainder = itemPrice % quantity;
console.log("Remainder:", remainder);
var power =  quantity ** 2;
console.log("Power:", power);
//-------------------------------------------------------------------


// Task 8: Ask Favorite Color
var favoriteColor = window.prompt("What is your favorite color?");
console.log("Your favorite color is:", favoriteColor);
//-------------------------------------------------------------------


// Task 9: Loose vs Strict
var score = 20;
var textScore = "20";
console.log(score == textScore); // true (loose equality) compares values only
console.log(score === textScore); // false (strict equality) compares values and types
//-------------------------------------------------------------------


// Task 10: Convert Quantity
var NumberOfItems = window.prompt("Enter the number of items:");
console.log(NumberOfItems);
console.log(typeof NumberOfItems);
console.log(typeof parseInt(NumberOfItems));
console.log(typeof Number(NumberOfItems));
console.log(typeof +NumberOfItems);
//-------------------------------------------------------------------


// Task 11: Fruits List
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); 
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits); 
//-------------------------------------------------------------------


// Task 12: Course Object
var course = {title: "Mean Stack", hours: 120, level: "Beginner"};
course.title = "JavaScript Basics";
console.log(course.hours);
console.log(course);
//-------------------------------------------------------------------


// Task 13: Access Check
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);
//-------------------------------------------------------------------


//Task 14: Update Balance
var balance = 50;
balance += 30
balance *= 2
balance -= 20
console.log(balance);
//-------------------------------------------------------------------



// Task 15: Booking Summary
var Hotel = window.prompt("Enter the hotel name:");
var Nights = window.prompt("Enter the number of nights:");
var Confirmed = window.confirm("Do you want to confirm the booking?");
console.log(`"Hotel: " ${Hotel}, "Nights: " ${Nights}, "Confirmed: " ${Confirmed}`);
//-------------------------------------------------------------------


// Task 16: Predict the Output
console.log(2 + 8 + "0"); // 100
console.log("2" + 8 + 0); // 280
console.log(2 + "8" + 0); // 280
//-------------------------------------------------------------------


// Task 17: Copy Behavior
// Task 17: Copy Behavior part 1
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); // Alex Giza
// primitives are copied by value, so changing city2 does not affect city1
// Task 17: Copy Behavior part 2
var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2); // { brand: "Honda" } { brand: "Honda" }
// non-primitives (objects) are copied by reference, so changing car2 also affects car1
// Task 17: Copy Behavior part 3
var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);
car2.brand = "Honda";
console.log(car1, car2); // { brand: "Toyota" } { brand: "Honda" }
//----------------------------------------------------------------


// Task 18: Mixed Bag
var mixedBag = ["hello", 42, true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(typeof mixedBag[0]);  // string
console.log(typeof mixedBag[1]);  // number
console.log(typeof mixedBag[2]);  // boolean
console.log(typeof mixedBag[3]);  // object type of null is object in JavaScript
console.log(typeof mixedBag[4]);  // undefined
console.log(typeof mixedBag[5]);  // object
console.log(typeof mixedBag[6]);  // object
//-------------------------------------------------------------------


// Task 19: Order Message (IPO)
var customerName = window.prompt("Enter your name:");
var price = window.prompt("Enter the price of the item:");
var paid = window.confirm("Have you paid for the item?");
results = `Customer Name: ${customerName}, Price: ${Number(price)}, Paid: ${paid}`;
console.log(results);
window.alert(results);
document.getElementById("result").innerHTML = results;
//-------------------------------------------------------------------


// Task 20: Two Numbers Report
var num1 = window.prompt("Enter the first number:");
var num2 = window.prompt("Enter the second number:");
num1 = Number(num1);
num2 = Number(num2);
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
//-------------------------------------------------------------------


// Task 21: Fix the Total
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + Number(c) + d + e); // 210      convert c to number before adding
//-------------------------------------------------------------------


// Task 24: Compare Values
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };
console.log(a , b, c, d, e, f);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);
console.log(a == 15);
console.log(b == 15);
console.log(c == 15);
console.log(d == 15);
console.log(e == 15);
console.log(f == 15);
console.log(a === 15);
console.log(b === 15);
console.log(c === 15);
console.log(d === 15);
console.log(e === 15);
console.log(f === 15);
//-------------------------------------------------------------------


// Task 25: Product Card App
var productName = window.prompt("Enter Product Name:");
var brand = window.prompt("Enter Brand:");
var price = window.prompt("Enter Price:");
var category = window.prompt("Enter Category:");
var isInStock = window.confirm("Is this product in stock?");
price = Number(price);
var productInfo = {productName: productName, brand: brand, price: price, category: category, isInStock: isInStock};
var message = `Product Name: ${productInfo.productName} Brand: ${productInfo.brand} Price: $${productInfo.price} Category: ${productInfo.category} In Stock: ${productInfo.isInStock ? "Yes" : "No"}`;
console.log(productInfo);
alert(message);
var resultElement = document.getElementById("results1");
resultElement.innerHTML = alert(message);
var titleElement = document.getElementById("mainTitle2");
titleElement.innerHTML = alert(productInfo.productName);
//-------------------------------------------------------------------