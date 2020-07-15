//var
console.log("This is an example of var variable");
var a = 10;
console.log(a); //output 10
if(true){
    var a=20;
    console.log(a); //output 20
}
console.log(a); //output 20

//let
console.log("This is an example of let variable");
let b=10;
console.log(b); //output 10
if(true){
    let b=20;
    console.log(b); // output 20
}
console.log(b); //output 10

//const
console.log("This is an example of const variable");
const ab = 100;
console.log(ab); //output 100
//var ab=200;
//console.log(ab);// it will show error because ab variable is already declared as const