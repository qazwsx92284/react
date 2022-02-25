class Person {
    // simple way to add properties is using constructor
    constructor() {
        this.name = 'Max';
    }
    printMyName() {
        console.log(this.name);
    }
}

// Instantiate class and store in constant
const person = new Person();
person.printMyName();