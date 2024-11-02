/* 
sumArray([1,2,3,4])

function avgArray (arr){
    let sum1 = 0;
    let avg = 0;
    for (let i = 0; i < avgArray.length; i++){
        sum1 =+ avgArray[i];
        avg = sum1 / avgArray.length
    }
}console.log(avg);

avgArray([1,2,3,4]) */

/* let num=[1,2,3,4,5]
let result=0
function sumofarr(num)
{
let sum = 0
for (let i = 0; i < num.length; i++){
    sum += num[i]   
}  return sum / num.length
}
console.log(sumofarr(num)); */

function sumArray (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];        
    }return sum
   
} console.log(sumArray([1,2,3,4]))


let numbs = [2,3,1,3,1]
function avg(numbArr){
    let sum=0
    for (let num of numbArr){
        sum +=num;
    }
    return sum/numbArr.length
}
console.log(avg(numbs));

let stringArray = ['say', 'hello', 'in', 'supercalifragilisticexpialidocious', 'morning']
function longestString (arr,) {
let result = "";
for (let i = 0; i < arr.length; i++){
    if (arr[i].length > result.length){
    result = arr[i];
    }
}return result
}
console.log(longestString(stringArray));

function stringsLongerThan (arr, num){
let result = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i].length > num){
    result.push (arr[i]);
    } 
}return result
}console.log(stringsLongerThan(stringArray, 7));


function printNumbers (n){
    if( n < 1){
     return;
    }printNumbers(n-1);
    console.log(n);
}console.log(printNumbers(10))

let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function ageSort(personA, personB){
    return Number(personA.age) - Number(personB.age);
    
}data.sort(ageSort)
console.log(data);

function retire(person){
    return Number(person.age) < 50
}

let nonRetired = data.filter(retire);
console.log(nonRetired);


let newData = data.map(newYearNewJob);

function newYearNewJob(person) {
    person.job = person.occupation;
    delete person.occupation;
    person.age = Number(person.age) + 1;
    return person
}
console.log(newData);

let sum1 = newData.reduce(sum, 0)

function sum(accumulator, newData) {
    return accumulator + Number(newData.age);
}console.log(sum1);