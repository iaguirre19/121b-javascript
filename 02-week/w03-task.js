/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

const add = (number1, number2) => {
    return number1 + number2;
    
}
const addNumbers = () => {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */


const subtract = (subtract1, subtract2) => {
  return subtract1 - subtract2;
};

const subtractNumbers = () => {
  console.log("click en la substracción");
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)


/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) =>{
    return factor1 * factor2
}

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}


document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => {
    return dividend / divisor
} 

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);

}

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);
/* Decision Structure */


const checkMember = () => document.querySelector("#member").checked;

const applyingDiscount = (subTotal, discount) =>
  discount ? Number(subTotal - (subTotal * discount) / 100) : Number(subTotal);


const getTotalDue = () => {
  const subTotalValue = Number(document.querySelector("#subtotal").value);
  const hasDiscount = checkMember();
  document.querySelector("#total").textContent = applyingDiscount(subTotalValue, hasDiscount ? 20 : 0);
};

document.querySelector("#getTotal").addEventListener("click", getTotalDue)



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers;
/* Output Evens Only Array */

let evenNumbers = numbersArray.filter((number) => number % 2 === 0);

document.querySelector("#evens").textContent = evenNumbers.join(", ");



/* Output Sum of Org. Array */

let sum = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
document.querySelector("#sumOfArray").textContent = sum;



/* Output Multiplied by 2 Array */

let multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = numbersArray
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
