"use strict";
const num1E = document.getElementById("num1");
const num2E = document.getElementById("num2");
const buttonE = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 == 'string' && typeof num2 == 'string') {
        return num1 + " " + num2;
    }
    return num1 + " " + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonE.addEventListener('click', () => {
    const num1 = num1E.value;
    const num2 = num2E.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(+num1, +num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
    //console.log(result)
    //console.log(stringResult)
});
//console.log(add(1,6));
//console.log(add("1","6"));
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
