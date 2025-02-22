console.log('Happy developing ✨')
//Single Line Comment
/*
this is a multi
line comment
 */

//Variables
var variable_name = 'Welcome to variables'
console.log(variable_name);

//Preferred syntax
let variable = 'Another variable'
console.log(variable);

const variable_v2 = 'variable v2'
console.log(variable_v2);

//Data Types

//Strings
console.log('Hello, World!');

const single = 'Hello';
console.log(single);

const double = "World";
console.log(double);

// const name = 'Mike'
// const backtick = `Hey, ${name}` //It allows embedding variables in strings
// console.log(backtick);

//Numbers
const whole_number = 5;
const decimal_number = 5.2;
console.log(whole_number);
console.log(decimal_number);

const first_number = 5;
const second_number = 4;

const addition = first_number + second_number;
console.log(addition);
const subtraction = first_number - second_number;
console.log(subtraction);

//Booleans
//True = yes, correct, 1
//False = No, incorrect, 0
const is_cool = true
if(is_cool){
    console.log("Hi man, you're cool")
}
else{
    console.log("Hey!, you're not cool")
}

// // //Null value
// // const age = null
//
// console.log(age);
// //Undefined
// let x;
// console.log(x);

//Objects
const person = {
    name: "John",
    age: 25,
}
// Dot notation
console.log(person);
console.log(person.age);
console.log(person.name);

//Comparison = true/false
const a = 5;
const b = 10;
console.log(a>b);
console.log(a<b)

//Strict Equality
console.log(true === 1);

//Logical Operators
// AND && = All operands are true
console.log(true && true);
//OR || = At least one operand is true
console.log(false || true);
//NOT !
console.log(!true);

//Logic and Control flow
const age = 18;
if(age > 18){
    console.log("You may enter");
}
else if(age === 18){
    console.log("You just turned 18, you're welcome");
}
else{
    console.log("You are not old enough");
}

//While loop
let i = 0;
while (i < 10){
    console.log(i);
    i++
}
//For loop
// for ([initialisation]; [condition]; [final-expression],)
for (let i = 0; i < 10; i++){
    console.log(i);
}

//Functions
function  square(number){
    return number * number;
}
const result = square(5);
console.log(result);

function sayHello(name){
    console.log(`Hello, ${name}`);
}
sayHello('John');

//Arrow functions
const sq_power = (no) => {
    return no * no;
}
const answer = sq_power(10)
console.log(answer);
