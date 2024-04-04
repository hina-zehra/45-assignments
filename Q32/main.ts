// Q 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currentUsers : string[] = ["hina","waliha","amna","Zehra","fatima"];
let newUsers : string[]= ["Hina","AMNa","mariam","Zehra","khadija"];

newUsers.forEach((newUser) =>{
    if(
        currentUsers.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase() )
        ){console.log(`${newUser} is already in use , enter a new username`)}else{
                console.log(`${newUser} is available.`)
        }
})

// sol with for of loop is below:

// let currentUsers : string[] = ["hina","waliha","amna","Zehra","fatima"];
// let newUsers : string[]= ["Hina","AMNA","mariam","Zehra","khadija"];

// for(let newUser of newUsers){
//     if(
//         currentUsers.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()) 
//     ){
//         console.log(`${newUser} is already in use , try another username`)
//     }else{
//         console.log(`${newUser} is available`)
//     }
// }
