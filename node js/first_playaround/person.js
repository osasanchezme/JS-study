// First
// const person = {
//     name: 'Jhon Doe',
//     age: '30'
// };
// module.exports = person;


// Second
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.exports = Person;

// console.log( __dirname, __filename)