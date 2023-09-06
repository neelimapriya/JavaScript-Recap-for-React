const number = [3, 45, 56, 76, 7];

const student = {
  name: "cat",
  age: "2",
  eat: ["fish", "meat"],
};

//1. template string
const about = `My Name is ${student.name} age is ${student.age} has number ${number[2]} also like eat ${student.eat[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree =(x,y,z)=> x+y+z;
const doMath =(num1, num2)=>{
    const sum =num1+num2;
    return sum;
}

// spread operator
const newNumber =[...number];

number.push(99)

// Create a new array from an older array and add an element
const currentNumbers=[...number, 55]

console.log(number) //[ 3, 45, 56, 76, 7, 99 ]

console.log(newNumber) //[ 3, 45, 56, 76, 7 ]
console.log(currentNumbers) //[ 3, 45, 56, 76, 7, 99, 55]
