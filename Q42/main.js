// Q 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["magician1", "magician2", "magician3"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    magicians.forEach(function (magician, i) {
        magicians[i] = "the Great " + magician;
    });
}
//with for loop 
// function makeGreat(magicians:string[]){
//     for(let i = 0 ; i<magicians.length ; i++){
//       magicians[i] = magicians[i]+" the great!"
//     }
// }
make_great(magicians);
showMagicians(magicians);
