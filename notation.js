const person ={
    name:'lal nul holud mia',
    profession:'Traffic surgeon',
    age:45,
    445:'summer',
    'son-name':'sunny',
    address:'shahabag'
}

// dot notation
const prof1 =person.profession

// bracket notation
const prof2 =person['profession']
console.log(prof2)
const pName ='profession';
const prof3=person[pName];
console.log(prof3)

const season =person[445];
console.log(season)

const son=person['son-name']