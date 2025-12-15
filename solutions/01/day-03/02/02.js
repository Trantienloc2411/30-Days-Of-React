import users from "./users.js";
//Find the person who has many skills in the users object.

var usersSkilles = {};
let maxSkills = 0;
for (const user in users) {
  const skillCount = users[user].skills.length;

  if (skillCount > maxSkills) {
    maxSkills = skillCount;
    usersSkilles = user;
  }
}

console.log(usersSkilles);
console.log(maxSkills);

// Count logged in users,count users having greater than equal to 50 points from the following object.
//
//
let loggedUser = 0;
let pointLargerThan50 = 0;
for (const user in users) {
  if (users[user].isLoggedIn === true) {
    loggedUser++;
  }
  if (users[user].points >= 50) {
    pointLargerThan50++;
  }
}
console.log(loggedUser);
console.log(pointLargerThan50);

//Find people who are MERN stack developer from the users object
//
const mern = ["MongoDB", "Express", "React", "Node"];

for (const user in users) {
  const hasAllMernSkills = mern.every((skill) =>
    users[user].skills.includes(skill),
  );

  if (hasAllMernSkills) {
    console.log(user);
  }
}
