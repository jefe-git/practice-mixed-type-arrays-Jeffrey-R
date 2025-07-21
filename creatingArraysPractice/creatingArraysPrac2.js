// Start Assignment

// Create and fill array
let greetings = new Array(7).fill("Hello");
console.log(greetings); 

//confirmed

//fill partially with a different value
greetings.fill("Suprise!", 3, 5);
console.log(greetings);

//confrimed 

//populate new array with a for loop 

let numbers = new Array(5);
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10;
}

console.log(numbers);