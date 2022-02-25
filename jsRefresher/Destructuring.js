// Destructuring : easily extract array elements or object properties and store them in variables.
// Spread와의 가장 큰 차이점은 spread copies all elements in array, all properties object
// but destructuring allows us to pull out single element/properties and store in variable. 

// Example 1. Destructuring array
const nums = [1,2,3];
[num1, num2] = nums;
console.log(num1, num2);

// Example 1-1. If I want 3, make blank space for 2. !order matters in destructuring in array
[num1, , num3] = nums;
console.log(num1, num3)

// Example 2. Destructuring object. !name matters
// {name} = {name:'Max', age:28}
// console.log(name)
