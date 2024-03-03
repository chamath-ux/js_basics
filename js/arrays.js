const cars = ['BMW','Benze','Nissan','Toyota','Toyota'];
const modals = ['n17','corolla'];
const numbers = [1,2,3,4,5,6,7]

function usingAt(index)
{
    let value = cars.at(index); // returns value of specific index

    return (value) ? value : 'No value';
}

function usingConcat()
{
    const concatenatedArray = cars.concat(modals);

    return concatenatedArray;
}

function usingCopyWith()
{
   return cars.copyWithin(1,3) // copy values within array (index that copied value to, index that copies value from)
}

function usingEvery()
{
    let value = numbers.every((number) => number > 2);  // this check condition in every element of the array and gives true false;

    return value;
}

function usingFilter() //this created a filtered array from original array
{
    const filteredIndexArray = numbers.filter((index)=> index > 3);
    const filteredArrayEven = numbers.filter((number)=> number % 2 === 0);
    const filteredArrayOdd = numbers.filter((number)=> number % 2 === 1);
    const concatenatedArray = filteredArrayEven.concat(filteredArrayOdd);
    

    return [filteredIndexArray, filteredArrayEven, filteredArrayOdd, concatenatedArray];
}

function usingFind() // this returns the first element that found in array 
{
    const findFirst = cars.find((car)=> car === 'Toyota'); // this gives the first element that satisfy the condition
    const findNumber =  numbers.find((number) => number % 2 === 1);
    const findIndex = numbers.findIndex((number)=> number % 2 === 0); // this gives the index of the array element n here we can use conditions for find index
    const findLast = cars.findLast((car) => car === 'Toyota') // this gives the last of the element of condition
    const findLastIndex = cars.findLastIndex((car) => car === 'Toyota'); // this gives the last index of the given condition
    const indexOf = cars.indexOf('Toyota'); // this gives the indexof the given element in here we cannot use conditions only element
    const lastIndex = cars.lastIndexOf('Toyota');

    return [findFirst, findNumber, findIndex, findLast, findLastIndex, indexOf, lastIndex];
}

function usingFor() 
{
    let forLoop = 0;

    numbers.forEach((number)=>{

        if(number % 2 === 0)
        {
            forLoop += number;
        }
    
    });

    return forLoop;
}

function usingInclude()
{
    return numbers.includes(4);
}

function usingIsArray()
{
    return Array.isArray(numbers); //from this we can check is it array or not
}

function usingJoin()
{
    return numbers.join('/'); //from this the array elements concat and create a string we can give a method to concat
}

function usingMap() // we can do modifications to a array using this
{
    let map = numbers.map((number)=>{

        if(number % 2 === 0)
        {
           return number + '-even';
        }else {
            return number + '-odd';
        }
        
        
    });

    return map;
}

function usingPop()
{
    const lastElement = numbers.pop(); // we can get the last element of an array
    return lastElement;
}

function usingPush()
{
    numbers.push(10,11);
   const numbersNew = usingMap();

   const filtered = numbersNew.filter((number,index)=> index > 3)

    return filtered;
}

function usingReduce()
{
    const reduce = numbers.reduce((acc, cur)=>{

        return acc;
    });

    return reduce;
}

function usingShift()
{
    const shift = numbers.shift(); //return the first element of the array

    return shift;
}

function usingSlice()
{
    const slice = numbers.slice(1,3);
    const sliceMin = numbers.slice(-3,-1)

    return sliceMin;
}

function usingSome() // this gives boolean value is if one of the elements fulfill the condition
{
    const some = numbers.some((number)=> number % 2 === 0);
    return some;
}


console.log(usingSome());