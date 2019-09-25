# Assignment 2 (Functions)

## Instructions:

1.  Download assignment2.html 
2.  Create a file named assignment2.js in the same directory as the html file
3.  Implement ```function convert(isFtoC, from, to)``` according to the instructions below
4.  In order to show a string on the page, call ```show(string)```, e.g. ```show("hello")``` displays the string ```"hello"```

## Program Description:

Write a program according to the follow requirements:
* Create a function that converts Fahrenheit to Celsius. It takes a single argument which represents degrees in Fahrenheit. It converts it and returns the degrees in Celsius.
* Create another function that converts Celsius to Fahrenheit. It takes a argument in Celsius and returns the degrees in Fahrenheit.
* Implement the function ```convert(isFtoC, from, to)``` below. It takes the following three arguments:
> * **isFtoC**: a boolean that is true if degrees must be converted from Fahrenheit to Celsius or false if degrees must be converted from Celsius to Fahrenheit
> * **from**: this represents the first value in a range of degrees that will be converted
> * **to**: this represents the last value in a range of degrees to be converted
* The function must convert every degree in the specified range and show each degree and the converted result on the page. Call ```show(str)``` to display a string on the page.
```
          function convert(isFtoC, from, to) {
                    // your code here
          }
```

**Note**: Use ```.toFixed(2)``` to limit the decimal digits to 2, e.g. ```num.toFixed(2)```

**WARNING**: If you're program does not execute due to syntax errors, you will lose 50% or more of total points.

**Submission**: Submit a single .js file named **assignment2.js**.