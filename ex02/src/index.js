// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
}

function myFunction(myObj) {
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoeValue = myObj.shoes;
    return {hatValue, shirtValue, shoeValue};
}
// Only change code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);