// Q 15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guests : string[] = ["Waliha","Amna","Khadija","Musfira","Fatima"];

let unAbleTojoin = "Fatima";
console.log(`${unAbleTojoin} can't make it to dinner tonight!`)

let newInvite : string ="Mariam";
 guests[guests.indexOf(unAbleTojoin)] = newInvite ;

guests.forEach(guest => {
    console.log(`Hi ${guest} , I would like to invite you for a dinner tonight at hotel TAJ MAHAL `)
});












// or
// used for of loop ..

// let invitees : string[] = ["Waliha","Amna","Khadija","Musfira","Fatima"];

// let unAbleTocome = "Fatima";
// console.log(`${unAbleTocome} can't make it to dinner today!`)
// let newInvitee = "mariam"
// invitees[invitees.indexOf(unAbleTocome)] = newInvitee;

// for(let invitee of invitees){
//     console.log(`Hi ${invitee} would you like to join me for a dinner today at hotel Taj Mahal.?`)
// }


// or 
// used splice method to change in array replaced fatima with mariam and simply printed array with loop.

// let myGuests : string[] = ["Waliha","Amna","Khadija","Musfira","Fatima"];

// let unAbleToAttnd = "Fatima";
// console.log(`${unAbleToAttnd} can't make it to dinner today!`)
// let newinvitation = "mariam"

// myGuests.splice(4,1,"mariam");
// for( let i=0 ; i<myGuests.length; i++){
//     console.log(`hi ${myGuests[i]}, can you join me for dinner at taj mahal tonight? `)
// }