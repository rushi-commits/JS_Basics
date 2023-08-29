// TO master js Objects and browser web events have to master
// primitive

//7 Types  : string , Number , boolean , null , undefined , symbol ,Bigint

const name = "Ram";
const score = 100;
const val = true;
const outsideTemp = null;
let userName;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const BigNumber = 5559986484848484849n;

//Reference (Non Primitive)

//Array Objects
const heros = ["ironMan", "Hulk", "Thor", "SpiderMan"];
let myObj = {
  name: "rushi",
  age: 23,
};

const myFunction = function () {
  // type function Object
  console.log();
};

console.log(typeof myFunction);
