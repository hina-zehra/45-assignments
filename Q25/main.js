// Q 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alienColor = "yellow";
if (alienColor == "yellow") {
    console.log("congrats! you've earned 10 points!");
}
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alienColor = "red";
if (alienColor == "green") {
    console.log("congrats youve earned 2 points"); // no output because condition doesnt fulfill the criteria
}