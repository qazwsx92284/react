// spread : used to split up array eleemtns OR object properties
// spread example 1. array
const nums = [1,2,3,4];
// take out the elements in nums array and bring those eleements to newNums array.
const newNums = [...nums, 5, 6]; 
console.log(newNums); 
// output : [ 1, 2, 3, 4, 5, 6 ]

// without ... nums will be included as a element
const newNums2= [nums, 5, 6]; 
console.log(newNums2); 
// output : [ [ 1, 2, 3, 4 ], 5, 6 ]

// spread example 2. object
const person = {
    name: 'Max'
};

const newPerson = {
    ...person, // copy all the properties from the person object
    age: 28
}
console.log(newPerson)
// likewise without ... entire person obj will be brought output will be { person: { name: 'Max' }, age: 28 }


// rest : used to merge a list of function arguments into an array.(function argument list)
const filter = (...args) => {
    return args.filter(element => element ===1 );
}
console.log(filter(1,2,3));
