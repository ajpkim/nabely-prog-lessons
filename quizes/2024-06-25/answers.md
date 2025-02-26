# JavaScript and Programming Concepts Check-In Questions

1. **Data Types**
   - **Question:** What are the different data types available in JavaScript? Provide an example of each.
   - **Answer:**
     ```javascript
     // String
     let name = "Alice";
     // Number
     let age = 25;
     // Boolean
     let isStudent = true;
     // Null
     let emptyValue = null;
     // Undefined
     let undefinedValue;
     // Object
     let person = { firstName: "John", lastName: "Doe" };
     // Array
     let colors = ["red", "green", "blue"];
     ```

2. **Functions**
   - **Question:** How do you declare a function in JavaScript that takes two numbers as arguments and returns their sum? Write the code for it.
   - **Answer:**
     ```javascript
     function addNumbers(a, b) {
       return a + b;
     }
     ```

3. **Loops**
   - **Question:** Write a `for` loop that prints the numbers from 1 to 10 in the console.
   - **Answer:**
     ```javascript
     for (let i = 1; i <= 10; i++) {
       console.log(i);
     }
     ```

4. **Conditionals**
   - **Question:** How do you write an `if-else` statement that checks if a number is positive, negative, or zero? Provide an example.
   - **Answer:**
     ```javascript
     let number = 5;
     if (number > 0) {
       console.log("Positive");
     } else if (number < 0) {
       console.log("Negative");
     } else {
       console.log("Zero");
     }
     ```

5. **Objects**
   - **Question:** How do you create an object representing a car with properties for make, model, and year? Provide an example.
   - **Answer:**
     ```javascript
     let car = {
       make: "Toyota",
       model: "Corolla",
       year: 2021
     };
     ```

6. **Arrays**
   - **Question:** How do you create an array of colors and access the second color in the array? Provide an example.
   - **Answer:**
     ```javascript
     let colors = ["red", "green", "blue"];
     let secondColor = colors[1];
     ```

7. **Basic HTML Integration**
   - **Question:** How do you create a button in HTML that, when clicked, calls a JavaScript function named `showAlert` that displays an alert with the message "Button clicked!"? Provide the HTML and JavaScript code.
   - **Answer:**
     ```html
     <button onclick="showAlert()">Click Me</button>

     <script>
       function showAlert() {
         alert("Button clicked!");
       }
     </script>
     ```

8. **CSS Integration**
   - **Question:** How do you change the background color of a `<div>` element to blue using JavaScript? Provide an example.
   - **Answer:**
     ```javascript
     document.getElementById("myDiv").style.backgroundColor = "blue";
     ```

9. **Basic DOM Manipulation**
   - **Question:** How do you change the text of a `<p>` element with the id `text` to "Hello, World!" using JavaScript? Provide an example.
   - **Answer:**
     ```javascript
     document.getElementById("text").innerText = "Hello, World!";
     ```

10. **Events**
    - **Question:** Write a JavaScript function that logs "Mouse over!" to the console when the mouse is over a `<div>` element with the id `hoverDiv`. Provide the HTML and JavaScript code.
    - **Answer:**
      ```html
      <div id="hoverDiv">Hover over me!</div>

      <script>
        document.getElementById("hoverDiv").addEventListener("mouseover", function() {
          console.log("Mouse over!");
        });
      </script>
      ```
