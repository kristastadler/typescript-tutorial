// explicit types 
var character;
var age;
var isLoggedIn;
//age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
// ninjas = [15, 'krista']
ninjas = ['krista', 'david', 'james'];
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
ninjaOne = {
    name: 'patrick'
};
// ninjaOne = 'steve'
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "purple"
};
// ninjaTwo = {
//               name: "mario",
//               age: '20',
//               beltColor: "purple"
// };
// ninjaTwo = {
//             name: "krista",
//             age: 32
// };
