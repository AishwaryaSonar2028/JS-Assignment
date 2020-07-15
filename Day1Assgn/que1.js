// Various methods in Console Function 
// 1.console.log() -  
console.log("Aishwarya Sonar");//String
console.log(20);//Integer
console.log(true);//Boolean
console.log(null);//Null
console.log([1,2,3,4,5]);//array integer
console.log(["A","B","C"]);//array string
console.log({name:'Aish',age:20,city:'Pune'});//object

//2.console.error() - it is used to give error
console.error("This is an Error");

//3.console.warn() - it is used to give warning
console.warn("This is Warning");

//4.console.clear() - it is used to clear the console
console.clear();

//5.console.time() and console.timeEnd() - it is used to tell the time that required to exceute the code
console.time("Time");
console.log("Hiii");
console.log("Hello");
console.log("Namsakar");
console.log("Namaste");
console.timeEnd("Time");

//6.console.table() - it is used to print the data in table format
console.table({Name:'Aishwarya',Age:20,City:'Pune'});

//7.console.count() - it is used to count the number  
for (let i=1;i<=5;i++)
{
    console.count(i);
}

//8.console.group() and console.groupEnd() - it is used to create a group in a seperate block
console.group("Here the block is started");
console.log("Hiii");
console.log("Hello");
console.log("Namsakar");
console.log("Namaste");
console.groupEnd("Here the block End");


