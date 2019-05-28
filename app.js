const person = { 
  firstName: 'Steve',
  lastName: 'Smith',
  age: 35,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}
let val

person.name = 'Sara';
person.age = 32