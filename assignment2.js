let from = parseInt(document.getElementById('from').value); 
let to = parseInt(document.getElementById('to').value); 
let isFtoC = true;

// Create a function that converts Farenheight to Celsius. 
function convertFtoC(fDeg) {
    // takes the input that's typed into "from" on the HTML page
    fDeg = document.getElementById("from").value;

    // finds the "output" id and writes the f to c conversion number
    document.getElementById("output").innerHTML = ((fDeg-32)/1.8).toFixed(2);  
};

//same thing as above but with C to F.
function convertCtoF(cDeg) {
    cDeg = document.getElementById("from").value;
    document.getElementById("output").innerHTML = ((cDeg*1.8)+32).toFixed(2);
};

function convert(isFtoC, from, to) {
    if (document.getElementById('convert').value == "celsius") {
        let isFtoC = true;
        convertFtoC(from, to);
    }
    else {
        let isFtoC = false;
        convertCtoF(from, to);
    }
}