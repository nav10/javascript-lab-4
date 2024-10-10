function greet(name) {
    return "Hello " + name;
}

console.log(greet("Navi"));

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(10,5));

//declaring global variable
let x = 10;

console.log("Global x before function call:", x); 

function changeValue() {
    //declaring a new local variable with the same name
    let x = 20;
    console.log("Local x inside function:", x);
}

//calling the function
changeValue();

//log the global variable again after function call, logs 10 because it is still the global value
console.log("Global x after function call:", x);

function outerFunction() {
    let count = 0; //local variable in the outer function

    return function() {
        count++; //updates count every time the inner function is called
        return count;
    }
}

//creating an instance of the outer function
const updateCount = outerFunction();

//calling inner function multiple times and displaying result
console.log(updateCount()); 
console.log(updateCount()); 
console.log(updateCount());
