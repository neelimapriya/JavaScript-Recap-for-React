/*falsy
'', 0, false ,null, undefine
*/

/*truthy
 'anyName', 23, true, {}, []
*/

// check truthy
let myVar = 500;
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

// check falsy
let myMoney = 50;
if (!myMoney) {
}

let food;
const money = 800;
if (money > 100) {
  food = "biriani";
} else {
  food = "cha coffee";
}

// ternary
let food1 = money > 100 ? "biriany" : "cha coffee";

console.log(food1);

let drink = money > 100 && myVar > 100 ? "coke" : "filter water";
console.log(drink);

// number to string conversion
const num1 = 34;
console.log(num1); //34 number
const numStr = num1 + "";
console.log(numStr); //34 string

const input = "345";
console.log(input); //345 string
const inputNum = +input;
console.log(inputNum); //345 number

// ternary
let isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executive
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle(uporer value true thakle false hobe false thakle true hobe)
isActive = !isActive;
