const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

const emptyArray = [];
const fiveElementArray = [
    'First',
    'Second',
    'Third',
    'Four',
    'Five',
    'Six'
];

console.log(fiveElementArray[0]);
console.log(fiveElementArray[Math.floor(fiveElementArray.length / 2)]);
console.log(fiveElementArray[fiveElementArray.length-1]);


const mixedDataTypes =  [
    'Javascript',
    'Node',
    211,
    true,
    User = {
        Name : 'Loc',
        Address : '127.0.0.1',
    },
    null
];

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];



console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)])

itCompanies.map(itCompanies => {
    console.log(itCompanies.toLocaleUpperCase());
});


let results = "";

for(let i = 0; i < itCompanies.length; i++) {
    if(i === itCompanies.length - 1) {
        results += "and " + itCompanies[i] + " are big IT companies";
    }
    else {
        results += `${itCompanies[i]}, `
        if(i === itCompanies.length - 2) {
            results += itCompanies[i]+" ";
        }
    }
}


const resultFilter = [];

itCompanies.map(itCompanies => {
    let count = 0;
    for (let item of itCompanies.toLowerCase()) {
        if(item === 'o') count++;

    }
    if(count > 1) resultFilter.push(itCompanies);
});
console.log('resultFilter:' + resultFilter);


console.log(results);
console.log(itCompanies.includes('Facebook'));
console.log(itCompanies.includes(User));
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.length = 0;
console.log("After delete all : " + itCompanies);







