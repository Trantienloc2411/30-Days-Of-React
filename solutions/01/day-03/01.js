/*
Create an empty object called dog
*/
const dog = {};

// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "JavaScript";
dog.legs = 4;
dog.color = "Yellow";
dog.age = 3;
dog.bark = function () {
  return "Woof woff";
};
// Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//
// Set new properties the dog object: breed, getDogInfo

dog.breed = function () {
  return "IDK what is the next step!";
};

dog.getDogInfo = function () {
  return `Name : ${dog.name} \nLegs: ${dog.legs} \nColor: ${dog.color} \nAge: ${dog.age}`;
};

console.log(dog.breed());
console.log(dog.getDogInfo());
