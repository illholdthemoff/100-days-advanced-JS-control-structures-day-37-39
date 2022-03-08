//for loops - loop through whatever n number of times

//for of loops - loop through all elements of array <-- used a lot

//for in loops - loop through all properties of an object <-- used a lot

// while loops - loop as long as a condition is met

// for loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for of loops
const users = ["Sanetomo", "Dalton", "Hephaestion", "moff"];

for (const user of users) {
  console.log(user);
}

//for in loops
const loggedInUser = {
  name: "moff",
  age: "??",
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]); // how you would get the property values, note that you're putting in the helper value to grab each of the property values
}

let isFinished = false;

//while loops
while (!isFinished) {
  isFinished = confirm("quit?"); //note that you're passing in the variable
}

console.log("done");
