// CAMELIZE

// function camelize(str) {
//   let arr = str.split("-");
//   let result = arr.map(function(item, index, array) {
//     if (index > 0) {
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     } else {
//       return item;
//     }
//   });
//   result = result.join("");
//   return result;
// }

// alert(camelize("cara-de-sapo"));

// FILTER RANGE

// function filterRange(arr, a, b) {
//   return arr.filter(item => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(arr);
// alert(filtered);

// FILTER RANGE IN PLACE

// SORT IN REVERSE ORDER

// let arr = [5, 2, 1, -10, 8];
// arr = arr.reverse();
// alert(arr);

// COPY AND SORT ARRAY

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted);
// alert(arr);

// MAP TO NAMES

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(function(item, index, array) {
//   return item.name + " " + item.age;
// });

// alert(names);

// CREATE AN EXTENDABLE CALCULATOR

// function Calculator(){

// }

// let calc = new Calculator()

// calc = function calculate(str){

// }

// MAP TO OBJECTS

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(user => ({
//   fullName: user.name + " " + user.surname,
//   id: user.id
// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith
