// var example 
var a = 15
function f() {
  var b = 30
  console.log(a, b) // output: 15 30
}
f();
console.log(a); // 15

// let example
let a = 20
function f() {
  let b = 7
  console.log(b); // output: 7
  console.log(a); // output: 20
}
f();

// const example 
const a = 12;
function f() {
  a = 8
  console.log(a) // output: TypeError : Assignment to constant variable.
}
f();