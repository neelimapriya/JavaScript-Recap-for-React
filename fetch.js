// 1.json

const student = {
    name: "cat",
    age: "2",
    eat: ["fish", "meat"],
};
const studentJSON =JSON.stringify(student)
console.log(student)
console.log(studentJSON)

const studentObj =JSON.parse(studentJSON)
console.log(studentObj)


// 2.fetch
// fetch('url')
// .then(res => res.json())
// .then(data=> console.log(data))

// keys,values
const keys =Object.keys(student)
const values=Object.values(student)


// for
const number =[2,4,56,7,8,98,89]
number.forEach(num =>console.log(num));
number.map(num => num*2)


// for of on array like object
// loop on an object using for in



// add or remove from an array
const products=[
    {name:'laptop', price:32000, brand:'lenovo', color:'silver'},
    {name:'phone', price:2000, brand:'iphone', color:'golden'},
    {name:'camera', price:10000, brand:'sony', color:'white'},
    {name:'watch', price:400, brand:'casio', color:'black'},
    {name:'sunglass', price:1000, brand:'dior', color:'gray'}
];

const newProduct ={name:'webCam', price:700, brand:'lal'};

// copy products array and then add newProduct
const newProducts=[...products,newProduct]
console.log(newProducts)

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining =products.filter(p=>p.name !== 'phone')
console.log(remaining) //phone chara baki sob pawa jabe