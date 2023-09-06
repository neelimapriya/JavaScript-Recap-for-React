const products=[
    {name:'laptop', price:32000, brand:'lenovo', color:'silver'},
    {name:'phone', price:2000, brand:'iphone', color:'golden'},
    {name:'camera', price:10000, brand:'sony', color:'white'},
    {name:'watch', price:400, brand:'casio', color:'black'},
    {name:'sunglass', price:1000, brand:'dior', color:'gray'}
]

// map gives us array
const brands =products.map(product => product.brand)
const price =products.map(product=>product.price)

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))


// console.log(brands)
// console.log(price)


// filter 
const cheap =products.filter(product=> product.price <= 5000)
// console.log(cheap)

// includes
const specificName =products.filter(product => product.name.includes('n'))
// console.log(specificName)

// find
const special =products.find(p=>p.name.includes('n'));
// console.log(special)

// const [first,second]= [30,45]
const [first,second]=box(30,45)
console.log(box(30,45))


