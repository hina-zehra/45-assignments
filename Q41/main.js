// Q 41 : Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["magician1", "magician2", "magician3"];
// function showMagicians(magicians:string[]){
//     magicians.forEach(magician=>{
//         console.log(magician);
//     })
// }
// showMagicians(magicians);
// for of
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
