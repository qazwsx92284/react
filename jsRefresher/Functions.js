// traditional way
function printName_old(name) {
    console.log(name);
}
printName_old('max')

// using arrow function
const printName_arrow = (name) => {
    console.log(name);
}
printName_arrow('john')

// if one param, () can be removed. after => single statement, {} can be removed.
const printName_arrow_simple = name => console.log(name);
printName_arrow_simple('ann');

// no param, () is required.
const printAngela = () => console.log('Angela');
printAngela();

// function has return and multiple statements
const greeting = (time, name) => {
    let greet;
    if(time>12)
        greet = 'Good afterNoon'
    else if(time<12)
        greet = 'Good morning'
    else
        greet = 'Good night'
    return greet+', '+name;
}
console.log(greeting(14, 'David'))

// function has return and single statement, {} and return keyword can be removed.
const getFullName = (firstName, lastName) => firstName +' '+ lastName;
console.log(getFullName('Will', 'Smith'))