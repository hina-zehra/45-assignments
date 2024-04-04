// Q24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



// • Tests for equality and inequality with strings
console.log("mango" == "Mango"); //SHOWS ERR IN TS BEFORE THE TEsT BCS TS IS MORE STRICTER THAN JS..
console.log("mango"=="mango");

// • Tests using the lower case function
console.log("AMNA".toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number:number=22;
console.log(number==23);
console.log(number<23);
console.log(number>23);
console.log(number!=23);
console.log(number<=25);
console.log(number>=98);


// • Tests using "or" operators
console.log(true || true );//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false
// • Tests using "and" operators
console.log(true && true );//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

// • Test whether an item is in a array
let fruits = ["apple","mango"]
console.log(fruits.includes("kiwi"));//false
// • Test whether an item is not in a array
let fruits2 = ["apple","mango"]
console.log(!fruits2.includes("kiwi"));//true

