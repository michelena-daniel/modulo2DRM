function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() {
    alert("You agreed.");
  },
  function() {
    alert("You canceled the execution.");
  }
);

// to arrow functions

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",

  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//excecise HELLO OBJECT

let user = new Object();

user = {
  name: "John",
  surname: "Smith"
};

user.name = "Pete";

delete user.surname;

alert(user.name + " " + user.surname);

//excercise isEmpty

function isEmpty(schedule) {
  for (let key in schedule) {
      return false;
    }
    return true;
  }
  
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// excercise const object

const user = {
  name: "John"
};

*!*
// does it work?
user.name = "Pete";
*/!*

// Sí, es posible

//excercise SUM OBJECT PROPERTIES

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0, i;

for(i in salaries){
  sum += salaries[i]
}

// Multiply numeric propertie by 2

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(objmenu){
  for(let key in menu){
    if(typeof menu[key] == "number")
    menu[key] *=2;
  }
}

multiplyNumeric(menu);

alert(menu.title);


// objeto que tenga una propiedad o dos y la tercera sea name. Crear una función que modifique esa propiedad name y la capitalize.

let object = {
  casa: "grande",
  perro: "diero",
  name: "dani"
}

function capitalize(object){
  for(let key in obj){

  object[key] = toUpperCase();
  
}
}
alert(object.name);

