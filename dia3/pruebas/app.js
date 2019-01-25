/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// for (let i = 0; i < 100; i = +prompt("Ingrese un numero: "));

// let num = prompt("Insert a number");

// nextInt: for (let i = 2; i <= num; ++i) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextInt;
//   }

//   alert(i);
// }

// switch (browser) {
//     case "Edge":
//       alert("You've got the Edge!");
//       break;

//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//       alert("Okay we support these browsers too");
//       break;

//     default:
//       alert("We hope that this page looks ok!");
//   }

//   if(browser = "Edge"){
//       alert("You've got the edge!")
//   }else if(browser = "Chrome" || "Firefox" || "Safari" || "Opera"){
//     alert("Okay we support those too")
//   }else{
//       alert("We hope that this page looks ok!")
//   }

/*

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2, 3");
    break;
}

*/

let age = 15;

if (age >= 14 && age <= 90) {
  alert("El bicho");
}

//lo contrario

let age = 14;

if (!(age >= 14 && age <= 90)) {
  alert("El bicho.");
}

// cual de estos alerts se va a ejecuta

let input = prompt("Insert input: ");

function isCanceled(str) {
  return str == "" || str == null;
}

if (input == "admin") {
  let pass = prompt("Insert password: ");
  if (pass == "The Master") {
    alert("Welcome");
  } else if (isCanceled) {
    alert("canceled");
  } else {
    alert("Wrong password.");
  }
} else if (isCanceled) {
  alert("canceled");
} else {
  alert("No te conozco");
}

// crear una función que convierta un número entero en un número roman
