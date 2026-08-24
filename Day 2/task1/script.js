// Task 1: Attendance Sheet
for (var i = 1; i <= 10; i++) {
    console.log("Seat number: " + i);
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 2: Even Seat Numbers
for (var i = 2; i <= 20; i += 2) {
    console.log("Even Seat: " + i);
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 3: Daily Sales Total
var totalSales = 0;
for (var day = 1; day <= 15; day++) {
    totalSales += day;
}
console.log(`Total sales = ${totalSales}`);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 4: Queue Tickets
var ticket = 1;
while (ticket <= 7) {
    console.log("Ticket number: " + ticket);
    ticket++;
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 5: Rocket Launch Countdown
var count = 8;
while (count >= 1) {
    console.log("Countdown: " + count);
    count--;
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 6: First Login Welcome
var num = 1;
do {
    console.log("Welcome " + num);
    num++;
} while (num <= 5);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 7: Empty Cart vs First Visit
var itemsInCart = 10;
// while doesn't execute the code because the condition is false 
while (itemsInCart < 5) {
    console.log("Empty Cart");
}
// do...while  executes the code first and then checks the condition
do {
    console.log("First Visit");
}
 while (itemsInCart < 5);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 8: Student Profile Card
var userName = "Ali";
var userAge = 22;
var isStudent = true;
console.log(userName + " is type of " + typeof userName);
console.log(userAge + " is type of " + typeof userAge);
console.log(isStudent + " is type of " + typeof isStudent);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 9: Price Match Bug
var dbPrice = 10;
var inputPrice = "10";
console.log(dbPrice == inputPrice);  // true because == checks for value only
console.log(dbPrice === inputPrice);  // false because === checks for both value and type
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 10: App Welcome Screen
var Name = window.prompt("Enter your name:");
var welcomeMsg = `Welcome, ${Name}`;
alert(welcomeMsg);
console.log(welcomeMsg);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 11: Checkout Quantity
var quantity = window.prompt("Enter quantity:");
var quantity1 = parseInt(quantity);
console.log(quantity1+ " is type of " + typeof quantity1);
var quantity2 = Number(quantity);
console.log(quantity2+ " is type of " + typeof quantity2);
var quantity3 = +quantity;
console.log(quantity3+ " is type of " + typeof quantity3);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 12: Mini Calculator
var a = 10 ,b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 13: Cinema Age Gate
var Age = window.prompt("Enter your age:");
Age = parseInt(Age);
if (Age >= 18) {
    console.log("You can enter");
} else {
    console.log("Sorry, underage");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 14: Exam Result Letter
var grade = window.prompt("Enter your grade:");
grade = parseInt(grade);
if (grade >= 90) {
    console.log("Grade: A");
}
else if (grade >= 80) {
    console.log("Grade: B");
}
else if (grade >= 70) {
    console.log("Grade: C");
} 
else if (grade >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 15: Quick Age Label
var age = window.prompt("Enter your age:");
age = parseInt(age);    
var label = age >= 18 ? "Adult" : "Minor";
console.log(label);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 16: Workday Message
var day = window.prompt("Enter a day of the week: ");

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break ;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Today is a weekday.");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 17: Product Price Table
var unitPrice = Number(window.prompt("Enter unit price:"));
for (var i = 1; i <= 10; i++) {
    console.log(`${i} x ${unitPrice} = ${i * unitPrice}`);
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 18: Download Progress
var fileSize = Number(window.prompt("Enter file size:"));
if (fileSize > 0) {
    for (var i = 1; i <= fileSize; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid file size");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 19: Order IDs Parity
var start = Number(window.prompt("Enter start order ID:"));
var end = Number(window.prompt("Enter end order ID:"));

for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(`Order ${i}: express`);
    } else {
        console.log(`Order ${i}: normal`);
    }
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 20: Class Roster
var students = ["Ahmed", "Sara", "Ali", "Fatima", "Omar"];
for (var i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 21: Weekly Expense Average
var Expense = 0;
for (var i = 1; i <= 5; i++) {
    var expense = Number(window.prompt(`Enter expense for day ${i}:`));
    Expense += expense;
}
var avgExpense = Expense / 5;
console.log(`Total Expense = ${Expense}`);
console.log(`Average Expense = ${avgExpense}`);
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 22: ATM PIN Retry
var correctPin = "1234";
var attempts = 0;
var isSuccess = false;
while (attempts < 3) {
    var enteredPin = window.prompt("Enter your PIN:");
    attempts++;
    if (enteredPin === correctPin) {
        isSuccess = true;
        break;
    }
}
if (isSuccess) {
    console.log("Successful");
} else {
    console.log("Failed");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 23: Account Verification Gate
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!hasAccount);
if (hasAccount && isVerified) {
    console.log("Welcome back");
} else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
} else {
    console.log("Please sign up");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 24: Broken Invoice Total
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
var Total = a + b + Number(c) + d + e;
console.log("Total =", Total); 
if (Total < 20) {
    for (var i = 1; i <= Total; i++) {
        console.log(i);
    }
} else {
    console.log("Too big to print line by line.");
}
//-------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");

// Task 25: Promo Code Combinations
var n = Number(window.prompt("Enter n for factorial:"));
if (n < 0) {
    console.log("No Factorial for negative numbers");
    alert("No Factorial for negative numbers");
} else {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    var outputMsg = `${n}! = ${factorial}`;
    console.log(outputMsg);
    alert(outputMsg);
}
//--------------------------------------------------------------------------------
console.log("--------------------------------------------------------------");