class Human {
    gender = "male";
    printGender =  () => {
      console.log(this.gender);
    }
  }
  class Person extends Human {
    // simple way to add properties is using constructor
      //becuase super class Human does not have constructor anymore, super() is not needed.
      name = "Max";
      gender = 'female';
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  // Instantiate class and store in constant
  const person = new Person();
  person.printMyName();
  person.printGender();