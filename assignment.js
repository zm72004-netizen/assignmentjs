/*  Convert the string "123" to a number and add 7. (0.5 Grade) 
 • Output Example: 130*/
let num = "123"
console.log(Number(num) + 7)

/*Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade) 
• Input Example: 0 
•  Output Example: "Invalid"*/
function check(x) {
    if (!x) {
        return ("invalid")
    } else {
        return ("valid")
    }
}
console.log(check(0))
// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade) 
// • Output Example:1, 3, 5, 7, 9
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue
    console.log(i)
}
// Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) 
// • Input Example: [1, 2, 3, 4, 5] 
// • Output Example: [2,4] 
let y = [1, 2, 3, 4, 5]
let even = y.filter(ele => {
    return ele % 2 == 0
})
console.log(even)
// Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade) 
// • Input Example: [1, 2, 3], [4, 5, 6] 
// • Output Example: [1, 2, 3, 4, 5, 6] 
function merage(arr1, arr2) {
    return [...arr1, ...arr2]
}
console.log(merage([1, 2, 3], [4, 5, 6]))
// Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade) 
// • Input Example: 2 
// • Output Example: “Monday” 
function day(day) {
    switch (day) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday")
    }
}
console.log(day(1))
//  Create an array of strings and return their lengths using map method (0.5 Grade) 
// • Input: ["a", "ab", "abc"] 
// • Output Example: [1, 2, 3] 
let a = ["a", "ab", "abc"]
let mapMethod = a.map((ele) => {
    return ele.length
}
)
console.log(mapMethod)
//  Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade) 
// • Input Example: 15 
// • Output Example: “Divisible by both”
function number(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Divisible by both"
    } else {
        "not Divisible by both"
    }
}
console.log(number(15))
//  Write a function using arrow syntax to return the square of a number (0.5 Grade) 
// • Input Example: 5 
// • Output Example: 25 
let square = (paramt) => {
    return paramt ** 2
}
console.log(square(5))
// . Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade) 
// • Input Example: const person = {name: 'John', age: 25} 
// • Output Example: 'John is 25 years old'
function person(name, age) {
    return (name + " is " + age + " years old")
}

console.log(person("ziad", 18))
// . Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade) 
// • Input Example: 1, 2, 3, 4, 5 
// • Output Example: 15



//  Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade) 
// • Output Example: “Success”
function promise() {
    setTimeout(() => {
        console.log("success")
    }, 3000)
}
console.log(promise())
// Write a function to find the largest number in an array. (0.5 Grade) 
// •  Input Example: [1, 3, 7, 2, 4] 
// • Output Example: 7 
function largeNmber(arr) {
    return Math.max(...arr)
}
console.log(largeNmber([1, 3, 7, 2, 4]))
//  Write a function that takes an object and returns an array containing only its keys. (0.5 Grade) 
// •  Input Example: name: "John", age: 30} 
// •  Output Example: ["name", "age"] 
let obj = {
    name: "john",
    age: 28
}
console.log(Object.keys(obj))
//  Write a function that splits a string into an array of words based on spaces. (0.5 Grade) 
// • Input: "The quick brown fox" 
// • Output: ["The", "quick", "brown", "fox"]
function splitIntoWords(str) {
    return str.split(" ");
}
console.log(splitIntoWords("The quick brown fox"));
