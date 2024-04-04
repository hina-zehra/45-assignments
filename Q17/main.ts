// Q17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


//prev ANS:

let guests : string[] = ["Waliha","Amna","Khadija"];
console.log("congrats! , i've found a bigger table !!");

guests.unshift("Fatima");
guests.splice(guests.length/2 , 0 , "Musfira" );
guests.push("Mariam");

guests.forEach(guest =>{
    console.log(`Hi! ${guest} , i would like to inform you that you are invited for a dinner at hotel del luna! `)
});

//Q17 sol:

console.log("sorry! i can invite only 2 people");

while(guests.length>2){
    let removed = guests.pop()
    console.log(`sorry! ${removed}, you're not invited at today's dinner`);
}
guests.forEach(guest => {
    console.log(`Hi ${guest}, you're still invited please be there on time!`);
})

guests.splice(0,2);
console.log(guests);



// OR 

// let guests : string[] = ["Waliha","Amna","Khadija","Musfira","Fatima","Mariam"];

// console.log("sorry ! our table won't be empty at our decided time for dinner! , i can only invite 2 people");

// let removed = guests.pop();
// console.log(`sorry ${removed}! i can't invite you to have a dinner with me!`)

// let removed1 = guests.pop();
// console.log(`sorry ${removed1}! i can't invite you to have a dinner with me!`)

// let removed2 = guests.pop();
// console.log(`sorry ${removed2}! i can't invite you to have a dinner with me!`)

// let removed3 = guests.pop();
// console.log(`sorry ${removed3}! i can't invite you to have a dinner with me!`)

// let invited = guests.shift()
// console.log(`Hi ${invited}! please be there on time , you're still invited!`)

// let invited1 = guests.shift()
// console.log(`Hi ${invited1}! please be there on time , you're still invited!`)

// console.log(guests);
