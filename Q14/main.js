// Q14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Waliha", "Musfira", "Khadija", "Amna"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", would you like to join me for a dinner? "));
}
// or
// casual invitations..!
// let friends = ["amna","fatima","marry"]
// friends.forEach(friend =>{
//     console.log(`hi ${friend}, can you come over for a dinner ?`)
// })
