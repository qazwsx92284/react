class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  // simple way to add properties is using constructor
  constructor() {
    //when extends class, must call super constuctor in derived class. super() needed.
    super();
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name);
  }
}

// Instantiate class and store in constant
const person = new Person();
person.printMyName();
person.printGender();
