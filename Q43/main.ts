// Q 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magicians: string[] = ["magician1", "magician2", "magician3"];

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(` ${magician} the Great `);
    });
    return greatMagicians;
}

function showMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let greatMagicians = makeGreat(magicians.slice());

showMagicians(magicians);
showMagicians(greatMagicians); // Showing the great magicians as well

