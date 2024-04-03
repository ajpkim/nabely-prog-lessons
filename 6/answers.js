// Variables and Data Types

// 1. What is a variable in JavaScript?
// Answer: A variable in JavaScript is a symbolic name representing a value.

// 2. How do you declare a variable in JavaScript?
// Answer: Variables are declared using the `var`, `let`, or `const` keywords followed by the variable name.

// 3. What are the basic data types in JavaScript?
// Answer: The basic data types in JavaScript are Number, String, Boolean, Undefined, Null, Object, and Symbol.

// 4. Provide examples of each basic data type in JavaScript.
// Answer:
let num = 10;           // Number
let str = "Hello";      // String
let isTrue = true;      // Boolean
let undefVar;           // Undefined
let nullVar = null;     // Null
let obj = {             // Object
    key: "value"
};
let sym = Symbol();     // Symbol

// Arrays

// 5. What is an array? Provide an example of an array with three elements.
// Answer: An array is a data structure that stores a collection of elements. Example: let arr = [1, 2, 3];

// 6. How do you access elements in an array in JavaScript?
// Answer: Elements in an array are accessed using their index. Example: let element = arr[0];

// 7. How do you add a new element to the end of an array in JavaScript?
// Answer: You can use the `push()` method to add a new element to the end of an array.

// 8. What method do you use to remove the last element of an array in JavaScript?
// Answer: You can use the `pop()` method to remove the last element of an array.

// 9. How do you find the length of an array in JavaScript?
// Answer: You can use the `length` property of an array to find its length.

// 10. What method do you use to join two arrays together in JavaScript?
// Answer: You can use the `concat()` method to join two arrays together.

// Objects

// 11. What is an object? Provide an example of an object with two properties.
// Answer: An object is a collection of key-value pairs. Example: let obj = { key1: "value1", key2: "value2" };

// 12. How do you access properties of an object in JavaScript?
// Answer: Properties of an object are accessed using dot notation or bracket notation. Example: obj.key1 or obj['key1'];

// 13. How do you add a new property to an existing object in JavaScript?
// Answer: You can add a new property to an existing object by simply assigning a value to a new key. Example: obj.newKey = "value";

// 14. What is the difference between dot notation and bracket notation when accessing object properties?
// Answer: Dot notation is used when the property name is known at coding time, while bracket notation is used when the property name is dynamic or contains special characters.

// 15. How do you remove a property from an object in JavaScript?
// Answer: You can use the `delete` keyword to remove a property from an object. Example: delete obj.key;

// 16. How do you check if an object has a specific property in JavaScript?
// Answer: You can use the `hasOwnProperty()` method to check if an object has a specific property.

// Functions

// 17. What is a function in JavaScript? Provide an example of a function declaration.
// Answer: A function is a block of code that performs a specific task. Example:
function greet() {
    console.log("Hello!");
}

// 18. What is a parameter? Provide an example of a function with a parameter.
// Answer: A parameter is a variable in a function definition. Example:
function greet(name) {
    console.log("Hello, " + name + "!");
}

// 19. How do you call a function in JavaScript?
// Answer: You call a function by using its name followed by parentheses. Example: greet();

// 20. What is a return statement in a function? Provide an example.
// Answer: The return statement specifies the value returned by the function. Example:
function add(a, b) {
    return a + b;
}

// 21. How do you pass arguments to a function in JavaScript?
// Answer: Arguments are passed to a function by placing them within the parentheses when calling the function. Example: add(2, 3);

// 22. What is a function expression in JavaScript?
// Answer: A function expression is when a function is assigned to a variable. Example:
const myFunc = function() {
    console.log("Function expression");
};

// Looping

// 23. What is a loop in JavaScript?
// Answer: A loop is a programming construct that repeats a block of code until a specified condition is met.

// 24. How do you create a loop in JavaScript?
// Answer: You can create a loop using constructs like `for`, `while`, and `do-while`.

// 25. What is the purpose of the "for" loop in JavaScript?
// Answer: The purpose of the `for` loop is to execute a block of code repeatedly for a specified number of times.

// 26. How do you iterate over elements in an array using a loop?
// Answer: You can use a `for` loop or a `forEach` method to iterate over elements in an array.

// 27. What is an infinite loop and how do you avoid it?
// Answer: An infinite loop is a loop that continues to execute indefinitely. To avoid it, ensure that the loop condition eventually becomes false.

// 28. What is the purpose of the "while" loop in JavaScript?
// Answer: The purpose of the `while` loop is to execute a block of code repeatedly as long as a specified condition is true.
