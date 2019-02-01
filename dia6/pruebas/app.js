// ucFirst("john");

// function ucFirst(str) {
//   return str[0].toUpperCase + str.slice(1);
// }

//

// function checkSpam(str) {
//   str = str.toLowerCase();
//   if (str.includes("viagra") || str.includes("xxx")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// alert(checkSpam("buy pato"));

//

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.substr(0, maxlength - 1) + "…";
//   }
// }

// alert(truncate("Hey whatsuuuuup heeeeeey añasdfa ñasdfa", 6));

//

// function extract(str) {
//   return +str.slice(1);
// }

// alert(extract("$120"));

//

//

// styles = ["Jazz", "Blues"];

// styles.push("Rock-n-roll");

// alert(styles);

// function replace(arr) {
//   arr[Math.floor([arr.length / 2])] = "Classics";
// }

// replace(styles);

// alert(styles);

// alert(styles.shift());

// styles.unshift("Rap", "Reggae");

// alert(styles);

//

// let arr = [];

// while (true) {
//   let valorUsuario = +prompt("Introduzca un valor ");
//   if (
//     // typeof valorUsuario != "number" ||
//     !isFinite(valorUsuario) ||
//     valorUsuario === null ||
//     valorUsuario === ""
//   ) {
//     break;
//   } else {
//     arr.push(valorUsuario);
//   }
// }

// alert(arr);

//

// MAXIMAL SUBARRAY

arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
  let sum = 0;
  let arr2 = [];
  for (let elem of arr) {
    sum += elem;
    arr2.push(sum);
    if (elem < 0) {
      sum = 0;
    }
  }
  return Math.max(...arr2);
}
alert(getMaxSubSum(arr));

//
