// Q 27 : Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.



// • If the alien is green, print a message that the player earned 5 points.

let alienColor = "green";
if(alienColor=="green"){
    console.log("you just earned 5 points")
}
else if (alienColor=="yellow"){
    console.log("you just earned 10 points")
}
else if (alienColor== "red"){
    console.log("you earned 15 points ")
}
else{
    console.log("try again!")
}

// • If the alien is yellow, print a message that the player earned 10 points.

alienColor = "yellow";
if(alienColor=="green"){
    console.log("you just earned 5 points")
}
else if (alienColor=="yellow"){
    console.log("you just earned 10 points")
}
else if (alienColor== "red"){
    console.log("you earned 15 points ")
}
else{
    console.log("try again!")
}

// • If the alien is red, print a message that the player earned 15 points.

alienColor = "red";
if(alienColor=="green"){
    console.log("you just earned 5 points")
}
else if (alienColor=="yellow"){
    console.log("you just earned 10 points")
}
else if (alienColor== "red"){
    console.log("you earned 15 points ")
}
else{
    console.log("try again!")
}
// added an extra alien for checking else

alienColor = "white"
if(alienColor=="green"){
    console.log("you just earned 5 points")
}
else if (alienColor=="yellow"){
    console.log("you just earned 10 points")
}
else if (alienColor== "red"){
    console.log("you earned 15 points ")
}
else{
    console.log("-10")
}
