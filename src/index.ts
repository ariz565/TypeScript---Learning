// tsc command to compile: tsc sample.ts
// typescript compiler will generate a sample.js file

// const a = 4444;
// console.log(a);

// -w watch mode to watch for changes and compile
// tsc sample.ts -w

let a: string = "{565}";
let xyz: number = 4444;
let check: boolean;

// any type can be assigned to any type
// let b: any = 4;

//  let abc = <string> "ExWhyZed";

// union type
// let unionType: number | string;

// const func = (a: number, b: number) => {
//   //   return a + b;
//   return String(a + b);
// };

const func = (a: number, b: number): string => {
  return String(a + b);
};

// type keyword is used to create a type alias
// interface keyword is used to create an interface

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 25,
};
