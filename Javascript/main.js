//var,let,const
//String,Numbers,Boolean,null,undefined,symbol

const name= 'Jane';
const age = 300;
// const rating = 4.5;
// const isHot = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof x)

//Concatenation
// console.log('My name is'+ name+'and I am'+ age);
//Template String
// const hello =`My name is ${name}and Iam ${age}`;


// const s ='Hello,World!, book';
 // console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(','))

//Arrays - variables that hold multiple values
// const fruits = ['apples','grapes','pawpaw','peach',28,true]
// const numbers = new Array(1,2,3,4,5)

// fruits[3] = "oranges";
// fruits.push('mangoes')
// fruits.unshift('strawberries')
// fruits.pop()

// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('peach'))
// console.log(numbers)
// console.log(fruits)

//Object Literals
// const person ={
//     firstName:'Clinton',
//     lastName:'Jac',
//     age:30,
//     hobbies:['music','movies','gamePlay'],
//     address:{
//         street:'38 mohammed st',
//         city:'Lagos',
//         state:'Lagos'
//     }
// }
// console.log(person.address.state)

// destructuring
// const {firstName,lastName,address:{street}} = person;
// console.log(street)

// person.email = 'clintonjac20@gmail.com'
// console.log(person)


// const todos = [
//     {
//         id:1,
//         text:'take me out',
//         isCompleted:true

//     },
//     {
//         id:2,
//         text:'i want to be spoiled',
//         isCompleted:true

//     },
//     {
//         id:3,
//         text:'Self-love all the way',
//         isCompleted:false

//     }
// ]
// console.log(todos[1].text)

//For
// for(let i=0; i<=10;i++){
//    console.log(`For Loop Number: ${i}`)
// }

//While
// let i =0;
// while(1<10){
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// looping through arrays
// for(let i=0; i<todos.length;i++){
//     console.log(todos[i].text)
// }

// for(let todo of todos){
//     console.log(todo.id)
// }

//High Order Array Methods(forEach,map,filter)
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// const todoText = todos.map(function(todo){
//     return todo.text
// })

// const todosCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted)


// const x = 4;
// const y = 10;


// if(x === 10){
//     console.log('x is 10');
// }else if(x > 10){
//     console.log('x is greater than 10')
// }else{
//     console.log('x is less than 10')
// }

// if(x > 5|| y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }else if(x > 10){
//     console.log('x is greater than 10')
// }else{
//     console.log('x is less than 10')
// }


// ternary operator
// const x = 10;

// const  color = x > 10 ? 'red':'green';


// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');  
//         break;  
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// Functions
// function addNums(num1,num2){
//     console.log(num1 + num2);
// }
// console.log(addNums(5,5))

//Arrow Functions
// const addNums = (num1,num2)=> num1 + num2;

// console.log(addNums(5,5))

// const plusNums = num1 => num1 + 5;

// console.log(plusNums(6))


//Constructor Function
// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// Person.prototype.getBirthYear = function(){
//     return `${this.firstName} ${this.lastName}`
// }

//Class
// class Person {
//     constructor(firstName,lastName,dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

//Instantiate object
// const person1 = new Person('Abiodun','Jac','15-03-2000')
// const person2 = new Person('Babatunde','Jac','20-10-2020')
// console.log(person2.getBirthYear())
// console.log(person1.getFullName())