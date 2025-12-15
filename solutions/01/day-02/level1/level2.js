//Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
//

const { getUserInput } = require("../../getUserInput");

(async () => {
  const ageInput = await getUserInput("Enter your age: ");
  const age = Number(ageInput);

  if (age > 22) {
    console.log(`You are ${age - 22} years older than me.`);
  } else if (age < 22) {
    console.log(`You are ${22 - age} years younger than me.`);
  } else {
    console.log("You and me have a same age.");
  }
})();
