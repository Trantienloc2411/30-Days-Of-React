/*
Check if a day is weekend day or a working day.
Your script will take day as an input.
*/
const { getUserInput } = require("../../../getUserInput.js");

(async () => {
  const dayInput = await getUserInput("What is the day today? ");
  const dayValue = String(dayInput).trim().toLowerCase();
  const workingDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const weekend = ["saturday", "sunday"];

  if (workingDay.includes(dayValue)) {
    console.log(
      `${dayValue.charAt(0).toUpperCase() + dayValue.slice(1)} is the working day.`,
    );
  } else if (weekend.includes(dayValue)) {
    console.log(
      `${dayValue.charAt(0).toUpperCase() + dayValue.slice(1)} is the weekend.`,
    );
  } else {
    console.log("Error!");
  }
})();
