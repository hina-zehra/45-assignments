// Q16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//-• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.


let guests : string[] = ["Waliha","Amna","Khadija"];
console.log("congrats! , i've found a bigger table !!");

guests.unshift("Fatima");
guests.splice(guests.length/2 , 0 , "Musfira" );
guests.push("Mariam");

guests.forEach(guest =>{
    console.log(`Hi! ${guest} , i would like to inform you that you are invited for a dinner at hotel del luna! `)
});
