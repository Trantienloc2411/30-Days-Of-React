/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

const { getUserInput } = require("../../getUserInput.js");

(async () => {
  const monthInput = await getUserInput(
    "Please enter the month (text) you want to check: ",
  );

  const month = monthInput.trim().toLowerCase();

  if (["september", "october", "november"].includes(month)) {
    console.log("Autumn");
  } else if (["december", "january", "february"].includes(month)) {
    console.log("Winter");
  } else if (["march", "april", "may"].includes(month)) {
    console.log("Spring");
  } else if (["june", "july", "august"].includes(month)) {
    console.log("Summer");
  } else {
    console.error("Invalid month");
  }
})();
