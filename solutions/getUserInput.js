const readline = require("readline");

function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

module.exports = { getUserInput };

/// How to use it
//
/*
const { getUserInput } = require("./input");

(async () => {
  const ageInput = await getUserInput("Enter your age: ");
  const age = Number(ageInput);

  if (age >= 18) {
    console.log("You are old enough to drive.");
  } else {
    console.log(`You are left with ${18 - age} years to drive.`);
  }
})();


*/
//
