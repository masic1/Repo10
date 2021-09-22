// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
// End of lion object

function myFunction(prop, value) { // Change this line
// Only change line below this code
    lion[prop] = value;
    return lion;
// Only change line above this code
}
myFunction("roar", "roar-roar"); // Change this line
module.exports = myFunction;