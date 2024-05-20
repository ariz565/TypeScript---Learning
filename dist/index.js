"use strict";
// tsc command to compile: tsc sample.ts
// typescript compiler will generate a sample.js file
// const a = 4444;
// console.log(a);
// -w watch mode to watch for changes and compile

// tsc sample.ts -w
// let a = "{565}";
// let xyz = 4444;
// let check;

// any type can be assigned to any type
// let b: any = 4;
//  let abc = <string> "ExWhyZed";

// union type
// let unionType: number | string;

// const func = (a: number, b: number) => {
//   //   return a + b;
//   return String(a + b);
// };

// const func = (a, b) => {
//     return String(a + b);
// };

// const user = {
//     name: "John",
//     age: 25,
// };

// const UserName = (n: number, m: number) => number;
// const func: UserName = (n, m) => {
//   return n + m;
// };

// Array

const arr: number[] = [1, 2, 3, 4, 5];

//
const arr1: Array<number> = [1, 2, 3, 4, 5];

const arr2: Array<string | number> = [1, 2, 3, 4, 5, "Hello"]; 
