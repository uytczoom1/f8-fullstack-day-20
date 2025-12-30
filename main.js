// Part 1: Variable & console.log Declaration (Basic)

// 1. Initialize 3 variables:

// const name = "Trương Công Uy";
// const age = 24;
// const isStudent = false;
// console.log(`Name: ${name}
//     Age: ${age}
//     Is student: ${isStudent} `);

// 2. Initialize and change values

// let a = 5;
// let b = 10;
// a = 15;
// b = 20;
// console.log(`a = ${a}
// b = ${b}`);


// Part 2: const/let/var

// 1.What is different from let?

// - const: không thể gán lại giá trị sau khi đã khởi tạo
// - let: có thể thay đổi (gán lại) giá trị sau khi khởi tạo

// 2.When to take const?

// - Khi biến KHÔNG cần thay đổi giá trị trong suốt chương trình
// - Nên ưu tiên dùng const trước, nếu cần thay đổi thì mới dùng let

// 3.The following code is FALSE:

// const x = 10;
// x = 20;

// 4.Explanation:

// - x được khai báo bằng const nên không được phép gán lại giá trị mới
// - Dòng x = 20 sẽ làm chương trình báo lỗi


// Part 3: Data type

// 1.Define the data type of the following values (write a comment):

// 100	                                 number
// 100	                                 number
// TRUE	                                 Boolean
// [1, 2, 3]	                         array
// { name: "An", age: 20 }	             object
// null	                                 null
// undefined			                 underfined

// 2.Create an object student that includes:

// const student = {name: "Trương Công Uy",
// age: 20,
// scores: [10, 10, 10]};
// console.log(student);


// Part 4: Type casting

// 1.Conversion:

// "1000" -> number

// const strNum = "1000";
// const convertedNum = Number(strNum);
// console.log(convertedNum, typeof convertedNum);

// 1000 -> string

// const num = 1000;
// const convertedStr = String(num);
// console.log(convertedStr, typeof convertedStr);

// true -> string

// const bool = true;
// const boolToStr = String(bool);
// console.log(boolToStr, typeof boolToStr);


// Part 5: Truth/Falsehood (Logical Thinking)

// 1.Predict the result (true / false):

// Boolean(0)        // false
// // 0 là số 0 → Falsy

// Boolean(1)        // true
// // Số khác 0 → Truthy

// Boolean("")       // false
// // Chuỗi rỗng → Falsy

// Boolean("hello")  // true
// // Chuỗi có nội dung → Truthy

// Boolean(null)     // false
// // null → Falsy

// Boolean([])       // true
// // Mảng rỗng NHƯNG vẫn là object → Truthy


// Part 6: Arrays & Memory (RAM Diagram Relationship)

// 1.Print out the element:

const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// 2.Verbal explanation (no code required):

// Khi tạo mảng numbers thì các giá trị [4, 3, 1, 5, 1] được lưu vào 1 vùng nhớ trong RAM và numbers chính là tên địa chỉ, nên khi gán const a = numbers; thì a và number cùng trỏ đến địa chỉ đó



 