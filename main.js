
var num = 0,
  num2 = 2;

// first
if (num > 0) console.log("positive");
else if (num === 0) console.log("Equal");
else console.log("negative");

// Second

if (num === num2) console.log("Equal");
else console.log("Not Equal");

//   third

var string = "";

if (string === "") console.log("Is Empty");
else console.log("Not EMpty");

// Fourth

var celsious = 23;

var fahrenheit = celsious * 1.8 + 32;

console.log("Fahrenheit:" + fahrenheit);

var arrayNum = [10, 5, 8];
var largest = arrayNum[0];

for (var i = 1; i < arrayNum.length; i++)
  if (arrayNum[i] > largest) largest = arrayNum[i];

console.log("Big:" + largest);

//   Fifth

var vowelornot = "b";

if (
  vowelornot === "a" ||
  vowelornot === "e" ||
  vowelornot === "i" ||
  vowelornot === "o" ||
  vowelornot === "u"
)
  console.log("vowel");

// sixth

var leapyear = 2024;

if (leapyear % 4 === 0 && !(leapyear % 100 === 0)) console.log("leap year");

// seventh

var day = 0;

if (day > 7 || day <= 0) console.log("Please Enter Valid Day From 1-7");
else if (day === 1) console.log("Reshon");
else if (day === 2) console.log("Sheni");
else if (day === 3) console.log("Shelishi");
else if (day === 4) console.log("Revi");
else if (day === 5) console.log("Hamishi");
else if (day === 6) console.log("SHishi");
else if (day === 7) console.log("Shabat");

// eighth

var number1 = 4,
  number2 = 3;

if (number1 % number2 === 0) console.log("divisible");
else console.log("not divisible");

// ninth

var squarenum = 1;

if (Number.isInteger(Math.sqrt(squarenum))) console.log("Square");

