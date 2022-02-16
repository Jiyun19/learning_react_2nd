// https://github.com/MoonHighway/learning-react

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//The const Keyword

/*
var div, container =document.getElementById("container");
for (var i=0; i<5; i++){
  div= document.createElement("div");
  div.onclick =function(){
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

*/

//The let Keyword

/*var div, container =document.getElementById("container");

for (let i=0; i<5; i++){
  div =document.createElement("div");
  div.onclick=function(){
    alert("This is box#"+ i);
  };
  container.appendChild(div);
}
*/

/*
document.body.innerHTML = `
<section>
<header>
<h1>The React Blog</h1>
</header>
<article>
<h2>${article.title}</h2>
${article.body}
</article>
<footer>
<p>copyright ${new Date().getYear()} | The React Blog</p>
</footer>
</section>
`;


function logCompliment() {
  console.log("You're doing great!");
}

logCompliment();

const logCompliment2 = function () {
  console.log("You're doing great!");
};

logCompliment2();

//#PASSING ARGUMENTS

const logCompliment3 =function(firstname){
  console.log(`You're doing great, ${firstname}`);
};

logCompliment3("Molly!");

const logCompliment4 =function(firstname, message){
  console.log(`${message}, ${firstname}`);
};

logCompliment4("Molly!", "Hello~");



const createCompliment = function (firstName, message) {
  return `${firstName}: ${message}`;
};

createCompliment('Molly', "You're so cool");
console.log(createCompliment('Molly', "You're so cool"));

function logActivity(name = 'Shane McConkey', activity = 'skiing') {
  console.log(`${name} loves ${activity}`);
}
logActivity();
logActivity('Jiyun', 'coding');

const defaultPerson = {
  name: {
    first: 'Shane',
    last: 'McConkey',
  },
  favActivity: 'skiing',
};

function logActivity2(person = defaultPerson) {
  console.log(`${person.name.first} loves ${person.favActivity}`);
}

logActivity2();

//Arrow Functions
const lordify =function(firstName){
  return `${firstName} of Canterbury`
};

console.log(lordify("Dale"));

const lordify2 = firstName =>`${firstName} of Canterbury`
console.log(lordify2("Jiyun"));

const lordify3 = (firstName, land)=>`${firstName} of ${land}`;

console.log(lordify3("Don","Picastaway"));

const lordify4 = (firstName, land) => {
  if(!firstName){
    throw new Error("A firstName is required to lordify");}

  if(!land){
    throw new Error("A lord must have a land");
  }
  return `${firstName} of ${land}`
}

console.log(lordify4("Kelly", "Sonoma"));
console.log(lordify4("Kelly"));


const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});

console.log(person('Flad', 'Hanson'));

//ARROW FUNCTIONS AND SCOPE

const tahoe={
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay=1000){
    setTimeout(() =>{
      console.log(this.mountains.join(","));}, delay);
    }
  };
  
  tahoe.print();

const sandwich={
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings:["lettuce", "tomato", "mustard"]
};
const {bread,meat} =sandwich;
console.log(bread, meat)


const lordify = regularPerson => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};

const regularPerson ={
  firstname:"Bill",
  lastname: "Wilson"
};

lordify(regularPerson);


const regularPerson ={
  firstname:"Bill",
  lastname:"Wilson",
  spouse: {
    firstname: "Phil",
    lastname: "Wilson"
  }
};

const lordify =({spouse :{firstname}})=>{
  console.log(`${firstname} of Canterbury`)
};

lordify(regularPerson);


const [firstAnimal]= ["Horse", "Mouse", "Cat"];
console.log(firstAnimal);

const[ , , thirdAnimal]=["Horse", "Mouse", "Cat"];
console.log(thirdAnimal);

*/

const name ="Tallac";
const elevation =9378;
const print=function(){
  console.log(`Mt.${this.name} is ${this.elevation} feet tall`);
};

const funHike = {name,elevation, print};
funHike.print();