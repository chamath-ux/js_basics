const a = 2;
let b = 3;
const user = {
    name:'chamath',
    age:26
}

let {name, age, job} = user;

function assignValue()
{
   //const updateUser = {...user, job:'work'}
   

    return job='work';
}
console.log(assignValue());