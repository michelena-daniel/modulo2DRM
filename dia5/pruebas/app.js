// let calculator = {
//   read() {
//     this.x = +prompt("Insert number 1: ", 0);
//     this.y = +prompt("Insert number 2: ", 0);
//   },
//   sum() {
//     return this.x + this.y;
//   },
//   mul() {
//     return this.x * this.y;
//   }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// // chaining
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   }
// };
// ladder
//   .up()
//   .up()
//   .down()
//   .up()
//   .down()
//   .showStep();
// crear un nuevo objeto con new y pasarle una función de saludar y un parametro con el nombre de a quien quieres saludar
// let persona = new Object();
// persona.name = "Jack";
// persona.name2 = "Jill";
// persona.name3 = "Tom";
// function sayHi() {
//   alert(this.name);
// }
// user.sayHi();
// function Persona(func, name) {
//   this.sayHi = func;
//   this.name = name;
// }
// let persona = new Persona(function(name) {
//   return "Hi " + this.name;
// }, "Daniel");
// alert(persona.sayHi());
//
// function Accumulator(startingValue) {
//   this.accumulatorValue = startingValue + userInput;
// }
// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(userInput);
// alert(accumulator.value); // shows the sum of these values
// // solution
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("How much to add?", 0);
//   };
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

class Clock {
  constructor({ template }) {
    this._template = template;
  }
  _render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;
    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
  stop() {
    clearInterval(this._timer);
  }
  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}
