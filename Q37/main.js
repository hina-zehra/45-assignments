// Q37 : Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TS"; }
    console.log("making a t-shirt with a size : ".concat(size, " , and a message :").concat(message, " printed on it.!"));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "surviving");
