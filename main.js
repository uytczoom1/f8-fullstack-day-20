Part 1: Variable & console.log Declaration (Basic)

1. Initialize 3 variables:

const name = "Trương Công Uy";
const age = 24;
const isStudent = false;
console.log(`Name: ${name}
    Age: ${age}
    Is student: ${isStudent} `);

2. Initialize and change values

let a = 5;
let b = 10;
a = 15;
b = 20;
console.log(`a = ${a}
b = ${b}`);


Part 2: const/let/var

1.What is different from let?

 const: cannot be reassigned after it has been initialized
 let: can be changed (reassigned) after it has been initialized

2.When to take const?

 When a variable does NOT need to change its value throughout the program
 You should prefer using const first; only use let if the value needs to change

3.The following code is FALSE:

const x = 10;
x = 20;

4.Explanation:

x is declared with const, so it is not allowed to be reassigned
The line x = 20 will cause the program to throw an error

Part 3: Data type

1.Define the data type of the following values (write a comment):

100	                                 number
100	                                 number
TRUE	                             Boolean
[1, 2, 3]	                         array
{ name: "An", age: 20 }	             object
null	                             null
undefined			                 undefined

2.Create an object student that includes:

const student = {name: "Trương Công Uy",
age: 20,
scores: [10, 10, 10]};
console.log(student);


Part 4: Type casting

1.Conversion:

// "1000" -> number

const strNum = "1000";
const convertedNum = Number(strNum);
console.log(convertedNum, typeof convertedNum);

// 1000 -> string

const num = 1000;
const convertedStr = String(num);
console.log(convertedStr, typeof convertedStr);

// true -> string

const bool = true;
const boolToStr = String(bool);
console.log(boolToStr, typeof boolToStr);


Part 5: Truth/Falsehood (Logical Thinking)

1.Predict the result (true / false):

Boolean(0)        // false
// 0 is the number zero → Falsy

Boolean(1)        // true
// Numbers other than 0 → Truthy

Boolean("")       // false
// Empty string → Falsy

Boolean("hello")  // true
// Non-empty string → Truthy

Boolean(null)     // false
// null → Falsy

Boolean([])       // true
// Empty array BUT it is still an object → Truthy


Part 6: Arrays & Memory (RAM Diagram Relationship)

1.Print out the element:

const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

2.Verbal explanation (no code required):

When the numbers array is created, the values [4, 3, 1, 5, 1] are stored in a memory location in RAM, and numbers is the reference (address) to that location. Therefore, when assigning const a = numbers;, both a and numbers point to the same memory address.


 