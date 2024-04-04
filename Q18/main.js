//  Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var wishToVisit = ["Turkey", "Korea", "China", "Japan", "Iceland", "France", "New zealand"];
// • Print your array in its original order.
console.log('original order : ', wishToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log(["Turkey", "Korea", "China", "Japan", "Iceland", "France", "New zealand"].sort());
// • Show that your array is still in its original order by printing it.
console.log('original order: ', wishToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(["Turkey", "Korea", "China", "Japan", "Iceland", "France", "New zealand"].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log('original order: ', wishToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
wishToVisit.reverse();
console.log('reversed: ', wishToVisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
wishToVisit.reverse();
console.log('original order: ', wishToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
wishToVisit.sort();
console.log('alphabetical order: ', wishToVisit);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
wishToVisit.reverse();
console.log('reversed alphabetical order: ', wishToVisit);
