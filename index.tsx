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

*/

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
