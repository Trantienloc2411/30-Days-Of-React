import countries from "../level2/countries.js";
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
const solution1 = ages.sort();
console.log(solution1.at(0));
console.log(solution1.at(solution1.length - 1));
// - Find the median age(one middle item or two middle items divided by two)
let median = 0;
if (solution1.length % 2 === 0) {
  median =
    (solution1.at(Math.floor((solution1.length - 1) / 2)) +
      solution1.at(Math.ceil((solution1.length - 1) / 2))) /
    2;
} else {
  median = solution1.at(solution1.length / 2);
}
console.log(median);
// - Find the average age(all items divided by number of items)
function roundNumber(value, roundNumber) {
  return value.toFix(roundNumber);
}

let sum = 0;
solution1.map((_) => {
  sum += _;
});
console.log(sum / solution1.length, 3);
// - Find the range of the ages(max minus min)

console.log(solution1);
// - Compare the value of (min - average) and (max - average), use abs() method

// 2.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// 3.Find the middle country(ies) in the countries array
let middleCountries = [];
if (countries.length % 2 === 0) {
  middleCountries.push(countries[countries.length / 2 - 1]);
  middleCountries.push(countries[countries.length / 2]);
  //assume that should add twice country in countries.length/2
} else {
  middleCountries.push(countries.at(Math.floor(countries.length / 2)));
}
console.log(middleCountries);

// 4.Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.
let countriesListFirst = [];
let countriesListSecond = [];
if (countries.length % 2 !== 0) {
  countries.push("VietNam");
}
countriesListFirst = countries.slice(0, countries.length / 2 - 1);
countriesListSecond = countries.slice(
  countries.length / 2,
  countries.length - 1,
);

console.log(countriesListFirst);
console.log(countriesListSecond);
