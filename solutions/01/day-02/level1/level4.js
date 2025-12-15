//Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?
//

const { getUserInput } = require("../../getUserInput.js");

(async () => {
  const numberInput = await getUserInput("Enter a number: ");
  const num = Number(numberInput);

  console.log(
    num % 2 === 0 ? `${num} is an even number.` : `${num} is an odd number.`,
  );
})();
