// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumArray(array) {
    for(
        var
        index = 0,
        length = array.length,
        sum = 0;
        index < length;
        sum += array[index++]
    );
    return sum;
}


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
 function is_an_even_number(array){
    var count = 0;
    for(let i = 0 ; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] != "" && array[i] != []){
            count++;
        }
    }
    return count;
}


/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
 function cToF(celsius) 
 {
   var cTemp = celsius;
   var cToFahr = cTemp * 9 / 5 + 32;
   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
     console.log(message);
 }
 
 function fToC(fahrenheit) 
 {
   var fTemp = fahrenheit;
   var fToCel = (fTemp - 32) * 5 / 9;
   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
     console.log(message);
 } 
 cToF(60);
 fToC(45);



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

