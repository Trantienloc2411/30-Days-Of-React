import countries from "./countries.js";
import webTechs from "./web_techs.js";

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const cleaned = text.replace(/[^a-zA-Z\s]/g, "");
const words = cleaned.split(" ");

console.log(words);

//3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added

if (shoppingCart.at(1).toLowerCase() !== "meat") {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// 3.2 add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.at(shoppingCart.length - 1).toLowerCase() !== "sugar") {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// 3.3 remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

// 3.4 modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

if (countries.indexOf("Ethiopia") > 0) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

// 5.In the web_techs array check if Sass exists in the array
// and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 6.Concatenate the following two variables and store it in a fullStack variable.
//
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
