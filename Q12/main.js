// Q12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ["Waliha", "Amna", "Mariam", "Fatima", "Musfira", "Khadija"];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log("Dear ".concat(friend, ", Let's chase dreams together and create memories that last a lifetime."));
}
