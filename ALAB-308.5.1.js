// function sumArray (arr){
//     let sum = 0;
//     for (let i = 0; i < sumArray.length; i++){
//         sum =+ sumArray[i];
//     }
// }console.log(sum);

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
// console.log(longestString(stringArray));

function stringsLongerThan (arr, num){
let result = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i].length > num){
    result.push (arr[i]);
    } 
}return result
}console.log(stringsLongerThan(stringArray, 7));

