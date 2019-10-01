// Create a function that converts Farenheight to Celsius. 
// Takes a single argument which represents degrees in Farenheight.
// Converts the argument and returns the degrees in celsius.

// Create another function that converts Celsius to Farenheight.
// Takes an argument in Celsius and returns the degrees in Farenheight.

// Implement convert(isFtoC, from, to).
// If isFtoC = true, degrees must be converted from Farenheight to Celsius.
// If isFtoC = false, degrees must be converted from Celcius to Farenheight.

//Function must convert every degree in the specified range and show each degree and the converted result on the page. 

//loop "from" until "to";

let from = parseInt(document.getElementById('from').value); 
let to = parseInt(document.getElementById('to').value); 

function convert(isFtoC, from, to) {
    if (document.getElementById('convert').value == "celsius") {
        let isFtoC = true;
        convertFtoC(from, to);

    }
    else {
        let isFtoC = false;
    }
}

