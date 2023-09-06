// how to declare a variable using let and const

const number = [3,45,56,76,7]
for (let i=0; i<number.length; i++){
    const num=number[1]
    console.log(num)
}

function multiply(a,b){
    const result =a*b
    return result;
}

const num =multiply(3,5)
console.log(num)


// object
const student ={
    name:'cat',
    age:'2',
    eat:['fish','meat']
}
console.log(student.age)
console.log(student.eat[1])