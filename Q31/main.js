// Q 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = [];
if (usernames.length == 0) {
    console.log("we need to find some users");
}
else {
    console.log("hello ".concat(usernames, ",thankyou for logging in!"));
}
;
//just to check if the else part is working fine..
//to check the code with names run the code below..
// usernames = ["hina","waliha"];
// if(usernames.length==0){
//     console.log("we need to find some users")
// }else{
//     for(let name of usernames){
//     console.log(`hello ${name},thankyou for logging in!`)}
// };
