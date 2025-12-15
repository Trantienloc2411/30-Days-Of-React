/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

const { getUserInput } = require("../../getUserInput.js");

(async () => {
  const scoresInput = await getUserInput("Please enter your score: ");
  const score = Number(scoresInput);

  switch (true) {
    case score >= 0 && score <= 49:
      console.log("F");
      break;
    case score >= 50 && score <= 59:
      console.log("D");
      break;
    case score >= 60 && score <= 69:
      console.log("C");
      break;
    case score >= 70 && score <= 79:
      console.log("B");
      break;
    case score >= 80 && score <= 100:
      console.log("A");
      break;
    default:
      console.log("Error!");
      break;
  }
})();
