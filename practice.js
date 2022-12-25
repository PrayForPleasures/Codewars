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

// function encode(str) {
//   for (const letter in str) {
//     if ("e" && "0") return "h2ll4";
//   }
// }

// function decode(str) {
//   for (const letter in str) {
//     if ("2" && "4") return "hello";
//   }
// }

// console.log(encode("hello"));
// console.log(decode(encode("hello")));

// const arr = ["a", "e", "i", "o", "u"];

// function encode(str) {
//   let nstr = str.split("");
//   let narr = nstr.map((el) => {
//     let ind = arr.indexOf(el);
//     return ind !== -1 ? ind + 1 : el;
//   });
//   return narr.join("");
// }

// function decode(str) {
//   const obj = {
//     1: "a",
//     2: "e",
//     3: "i",
//     4: "o",
//     5: "u",
//   };
//   let nstr = str.split("");
//   console.log(nstr);
//   let narr = nstr.map((el) => {
//     return isNaN(el) ? el : obj[el];
//   });
//   return narr.join("");
// }

// console.log(encode("hello"));
// console.log(decode(encode("hello")));

// console.log(isNaN("d"));
// console.log(isNaN(32));
// console.log(isNaN("1"));

// 10

// let str = "You got this!";

// function remChar(str) {
//   let arr = str.split("");
//   arr.pop();
//   arr.shift();
//   return arr.join("");
// }

// console.log(remChar(str));

// 11

// let sheeps = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   let nArr = arrayOfSheep.map((el) => {
//     if (el == true) {
//       return 1;
//     } else return 0;
//   });
//   return nArr.reduce((acc, value) => acc + value);
// }

// console.log(countSheeps(sheeps));

// function countSheeps(arr) {
//   return arr.filter(Boolean).length;
// }

// console.log(countSheeps(sheeps));

// 12

// let arr = [true, false, false, true, true];

// function bts(arr) {
//   return arr.map((el) => el.toString()).join(", ");
// }

// console.log(bts(arr));

// 13

// const arr = [1, 2, 3, 4, 5, 7, 8, 9, 0, 1234, 1235];

// function fstNonCon(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1] - 1) {
//       console.log(arr[i]);
//     }
//   }
// }

// fstNonCon(arr);

// 14

// function pod(sp) {
//   let res = sp * 27.78;
//   return Math.floor(res);
// }

// console.log(pod(1));

// 15

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPosSumNeg(arr) {
//   let newArr = [];
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count += 1;
//     }
//     if (arr[i] < 0) {
//       sum += arr[i];
//     }
//   }
//   newArr.push(count);
//   newArr.push(sum);

//   return newArr;
// }

// console.log(countPosSumNeg(arr));

// 16

// let str = "Hi, everybody!Glad to see you in our school!";

// function noSpace(x) {
//   return x.replace(/ /g, "");
// }

// console.log(noSpace(str));

// 17

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
  }
}
