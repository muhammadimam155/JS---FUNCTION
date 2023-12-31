// Q1
document.write("<h2> Q1 </h2>")
function date(){

var day = new Date()
document.write(day)
}
date()

// Q2
document.write("<h2> Q2 </h2>")
function fullName(){
var firstName = prompt("write your first name ")
var lastName = prompt("write your second name ")
document.write( "your name is " +   firstName + " " + lastName)
}
fullName()


// Q3
document.write("<h2> Q3 </h2>")
function add(){
var firstNumber = prompt("write your first number")
var secondNumber = prompt("write your second number")
var covertFirstNumber = Number(firstNumber)
var covertSecondNumber = Number(secondNumber)
document.write( firstNumber + " " + "+" + " " + secondNumber  + " " + "="   +  " "    +     parseInt(covertFirstNumber + covertSecondNumber) )
} 
add()


// Q4
document.write("<h2> Q4 </h2>")
function calculator(){
var calculatorFirstNumber = prompt("apna pahla number likho jis ko tum calculate krna chatay hu")
var covertFirstNumberOfCalculator = Number(calculatorFirstNumber)
var calculatorSecondNumber = prompt("apna dosra number likho jis ko tum calculate krna chatay hu")
var covertSecondNumberOfCalculator = Number(calculatorSecondNumber)
var operator = prompt("apna operator likho (+,-,*,/)")
if (operator == "+"){
    document.write( `${calculatorFirstNumber}  +   ${calculatorSecondNumber}   =     ${covertFirstNumberOfCalculator   +   covertSecondNumberOfCalculator}`)
} else if(operator == "-" ) {
    document.write( `${calculatorFirstNumber}  -   ${calculatorSecondNumber}   =     ${covertFirstNumberOfCalculator   -   covertSecondNumberOfCalculator}`)
}else if(operator == "*" ) {
    document.write( `${calculatorFirstNumber}  *   ${calculatorSecondNumber}   =     ${covertFirstNumberOfCalculator   *   covertSecondNumberOfCalculator}`)
}else if(operator == "/" ) {
    document.write( `${calculatorFirstNumber}  /   ${calculatorSecondNumber}   =     ${covertFirstNumberOfCalculator   /   covertSecondNumberOfCalculator}`)
}else{
    document.write("write correct operator plz")
}

}
calculator()


// Q5
document.write("<h2> Q5 </h2>")
function argument(a,b){
document.write(`5 * 6 = ${a*b} `)
}
argument(5,6)


// Q6
document.write("<h2> Q6 </h2>")
function factorial(number){
if (number == 0 || number == 1 ){
    return 1;
}else if(number < 0){
   return("factorial is not defined")
} else{
  var lop = 1;
  for(var i = 2 ; i<=number;i++){
      lop *=i
  } 
  return lop
}
}

var num = prompt("write a num")
var result = factorial(num)
document.write("the factorial of ",num,"is",result )




//Q7
document.write("<H2> Q7</H2>")
function displayCounting(start, end) {
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            document.write(i + '<br>');
        }
    } else {
        for (let i = start; i >= end; i--) {
            document.write(i + '<br>');
        }
    }
}

var startNumber = 10;
var endNumber = 1;

displayCounting(startNumber, endNumber);




// Q8
document.write("<h2> Q8 </h2>")
function calculateHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }

    function hypotenuseSquared(base, perpendicular) {
        return square(base) + square(perpendicular);
    }

    return Math.sqrt(hypotenuseSquared(base, perpendicular));
}
var baseLength = 3;
var perpendicularLength = 4;
var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
document.write(`The hypotenuse of the triangle is: ${hypotenuse}`);




//Q9
document.write("<h2> Q9 </h2>")
function calculateAreaWithValue(width, height) {
    return width * height;
}
function calculateAreaWithVariables() {
    var width = arguments[0];
    var height = arguments[1];
    return width * height;
}
var areaWithValue = calculateAreaWithValue(5, 8);
document.write("Area with arguments as values:", areaWithValue);
var width = 6;
var height = 10;
var areaWithVariables = calculateAreaWithVariables(width, height);
document.write(" <br> Area with arguments as variables:", areaWithVariables);




//10
document.write("<h2> Q10 </h2>")
function isPalindrome(str) {
    var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    var reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
}
var inputString = prompt("apna koi bhi word likhay jis ko ap palindrome check krna chatay hu");
var result = isPalindrome(inputString);

if (result) {
    document.write(`${inputString} is a palindrome.`);
} else {
    document.write(`${inputString} is not a palindrome.`);
}




//11
document.write("<h2> Q11 </h2>")
function capitalizeFirstLetter(str) {
    var words = str.split(' ');

    var capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}
var inputString = 'the quick brown fox';
var result = capitalizeFirstLetter(inputString);
document.write(`without converted string : ${inputString} <br>`)
document.write("Converted string:", result);




//12
document.write("<h2> Q12 </h2>")
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var inputString = 'Web Development Tutorial';
var longest = findLongestWord(inputString);
document.write(`input string ${inputString} <br>`)
document.write("Longest word:", longest);




//13
document.write("<h2> Q13 </h2>")
function countOccurrences(str, letter) {
    var count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}
var inputString = 'JSResourceS.com';
var specifiedLetter = 'S';
var occurrences = countOccurrences(inputString, specifiedLetter);
document.write(`input string : (${inputString} )<br>`  )
document.write(`The letter '${specifiedLetter}' occurs ${occurrences} times in the string.`);




// //14
// document.write("<h2> Q14 </h2>")
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write(`The circumference is ${circumference.toFixed(2)} <br>`);
// }

// function calcArea(radius) {
//     var area = Math.PI * radius ** 2;
//     document.write(`The area is ${area.toFixed(2)}`);
// }
// var circleRadius = 5;

// calcCircumference(circleRadius);
// calcArea(circleRadius);






