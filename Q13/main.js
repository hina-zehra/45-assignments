// Q13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transports = ["Harley-Davidson Fat Boy", "Indian Roadmaster", "Ducati Diavel", "BMW R1250GS Adventure"];
transports.forEach(function (transport) {
    console.log(" I would like to own a ".concat(transport, ". It has an undeniable charisma with a blend of performance and style."));
});