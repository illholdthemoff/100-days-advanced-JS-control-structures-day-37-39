const myName = "moff";

if (myName === "moff") {
  console.log("hello");
}

const isLoggedIn = true;

if (isLoggedIn) {
  // you can use this without the comparison since the value is set to true, typiing that normally would be like saying 'if true is true'
  console.log("user logged");
} else if (!isLoggedIn) {
  // note that you can have the ! in front to basically say 'if whatever is NOT true'
  console.log("no");
}

const enteredUserName = "moff"; // if empty below boolean will not fire. Since the string is empty, it is interpreted by JS as being 'falsy'. Same applies to 0 (the number not a string with 0)

if (enteredUserName) {
  // this can be used to check if fields have any text input in them instead of checking if enteredUserName.length is greater than 0. If you try with enteredUserName set to "" it will not output. Neat stuff.
  console.log("valud");
}

//for loops - loop through whatever n number of times

//for of loops - loop through all elements of array <-- used a lot

//for in loops - loop through all properties of an object <-- used a lot

// while loops - loop as long as a condition is met
