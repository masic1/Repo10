function myFunction(myObj, checkProp) {
    // Only change code below this line
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}
module.exports = myFunction;