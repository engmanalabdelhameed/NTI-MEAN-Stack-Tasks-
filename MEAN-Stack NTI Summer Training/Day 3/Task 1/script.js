// PART A STRING 
// PART A STRING 1
var fullName = "Ahmed Ali";
console.log(fullName.length);
console.log("-------------------------------------------------");

// PART A STRING 2
var str1 = "I am learning JavaScript";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log("-------------------------------------------------");

// PART A STRING 3
var email = "student@nti.com";
var check = email.includes("@")
console.log(check);
console.log("-------------------------------------------------");

// PART A STRING 4
var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);
console.log("-------------------------------------------------");

// PART A STRING 5
var weather = "This is a bad day";
var weatherR = weather.replace("bad", "good")
console.log(weatherR);
console.log("-------------------------------------------------");

// PART A STRING 6
var str2 = "I love coding";
var str2Array = str2.split(" ");
console.log(str2Array);
console.log(str2Array.join("-"));
console.log("-------------------------------------------------");

// PART A STRING 7
var str3 = " nti egypt training ";
var str3Rspace = str3.trim()
// console.log(str3Rspace);
// console.log(str3Rspace.toUpperCase());
// console.log(str3Rspace.replace("egypt", "cairo"));

var result = str3.trim().toUpperCase().replace("EGYPT", "CAIRO");
console.log(result);
console.log("-------------------------------------------------");


// PART B NUMBER & MATH
// PART B NUMBER & MATH 8
var num1 =  parseFloat("45.8");
console.log(num1);
console.log("-------------------------------------------------");

// PART B NUMBER & MATH 9
var num = 7.6;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log("-------------------------------------------------");

// PART B NUMBER & MATH 10
var maxVal = Math.max(12, 5, 28, 9);
var minVal = Math.min(12, 5, 28, 9);
console.log("Largest", maxVal);
console.log("Smallest", minVal);
console.log("-------------------------------------------------");

// PART B NUMBER & MATH 11
var randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);
console.log("-------------------------------------------------");

// PART B NUMBER & MATH 12
var price = 19.4567;
console.log(price.toFixed(2));
console.log("-------------------------------------------------");

// PART B NUMBER & MATH 13
var randoms = [];
for (let i = 0; i < 5; i++) {
  randoms.push(Math.floor(Math.random() * 50) + 1);
}
var maxRandom = Math.max(...randoms);
var minRandom = Math.min(...randoms);
var avgRandom = (randoms.reduce((sum, n) => sum + n, 0) / randoms.length).toFixed(2);
console.log("Numbers is:", randoms);
console.log("Largest is:", maxRandom);
console.log("Smallest is:", minRandom);
console.log("Average is:", avgRandom);
console.log("-------------------------------------------------");


// PART C LOOPS 
// PART C LOOPS 14
for (var i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("-------------------------------------------------");

// PART C LOOPS 15
for (var i = 1; i <= 15; i += 2) {
  console.log(i);
}
console.log("-------------------------------------------------");

// PART C LOOPS 16
var DownCount = 10;
while (DownCount >= 1) {
  console.log(DownCount);
  DownCount--;
}
console.log("-------------------------------------------------");

// PART C LOOPS 17
var Names = ["Sara", "Omar", "Mona", "Youssef"];
for (var Name of Names) {
  console.log(Name);
}
console.log("-------------------------------------------------");

// PART C LOOPS 18
for (var i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
console.log("-------------------------------------------------");

// PART C LOOPS 19
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
console.log("-------------------------------------------------");

// PART C LOOPS 20
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) continue;
  if (i == 25) break;
  console.log(i);
}
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS)
// PART D MIX (STRING & NUMBERS & LOOPS) 21
var str4 = "HELLO";
for (let i = 0; i < str4.length; i++) {
  console.log(str4[i]);
}
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS) 22
var Num4 = [10, 20, 30, 40];
var sum = 0;
for (var n of Num4) {
  sum += n;
}
console.log(sum);
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS) 23
var str5 = "JavaScript is amazing and awesome";
var Aa = 0;
for (var char of str5) {
  if (char.toLowerCase() === "a") {
    Aa++;
  }
}
console.log(Aa);
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS) 24
var grades = [70, 85, 92, 60, 77, 88];
for (var grade of grades) {
  if (grade % 2 === 0) {
    console.log(grade);
  }
}
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS) 25
for (var i = 1; i <= 4; i++) {
  var star = "";
  for (var j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
console.log("-------------------------------------------------");

// PART D MIX (STRING & NUMBERS & LOOPS) 26
var stdName = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchCount = 0;
for (var student of stdName) {
  var upperName = student.toUpperCase();
  if (upperName.startsWith("A") || upperName.startsWith("S")) {
    console.log(upperName);
    matchCount++;
  }
}
console.log(matchCount);
console.log("-------------------------------------------------");