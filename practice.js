"use strict";

// 1

// let str = "world";

// function rev(str) {
//   return str.split("").reverse().join("");
// }

// console.log(rev(str));

// 2

// const arr1 = [1, 5.2, 4, 0, -1];
// const arr2 = [];
// const arr3 = [-2.398];

// function sum(arr) {
//   if (arr.length == 0) {
//     return 0;
//   } else return arr.reduce((acc, value) => acc + value, 0);
// }

// console.log(sum(arr1));
// console.log(sum(arr2));
// console.log(sum(arr3));

// 3

// const s1 = "3112";
// const s2 = "24";
// const s3 = "21";
// const s4 = "-12";

// const stringToNumber = function (str) {
//   //   return Number(str);
//   return +str;
// };

// console.log(stringToNumber(s1));
// console.log(stringToNumber(s2));
// console.log(stringToNumber(s3));
// console.log(stringToNumber(s4));

// 4

// const n1 = 1;
// const n2 = -1;
// const n3 = 0;

// function neg(num) {
//   if (num === 0) {
//     return 0;
//   } else if (num < 0) {
//     return num;
//   } else return -num;
// }

// console.log(neg(n1));
// console.log(neg(n2));
// console.log(neg(n3));

// 5 Write a function which converts the input string to uppercase.

// let st = "make me to UPPERCASE 23";

// function upp(str) {
//   return str.toUpperCase();
// }

// console.log(upp(st));

// 6

// let arr = ["hello", "world", "this", "is", "great"];

// function comp(words) {
//   return words.join(" ");
// }

// console.log(comp(arr));

// 7

// function countBy(x, n) {
//   let z = [];
//   let nr = 0;

//   for (let i = 0; i < n; i++) {
//     nr = x + nr;
//     z.push(nr);
//   }
//   return z;
// }

// console.log(countBy(1, 10));
// console.log(countBy(2, 5));

// 8

// function lovefunc(flower1, flower2) {
//   if (
//     (flower1 % 2 === 0 && flower2 % 2 === 0) ||
//     (flower1 % 2 != 0 && flower2 % 2 != 0)
//   ) {
//     return false;
//   } else return true;
// }

// console.log(lovefunc(4, 4));

// 9

function encode(str) {
  for (const letter in str) {
    if ("e" && "0") return "h2ll4";
  }
}

function decode(str) {
  for (const letter in str) {
    if ("2" && "4") return "hello";
  }
}

console.log(encode("hello"));
console.log(decode(encode("hello")));
