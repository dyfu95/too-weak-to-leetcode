//執行 cat input.ext | node xxxx.js 

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  const input = lines[0].split(' ')
  
  //write your code in here.
  /** @type {number} */
  const n = Number(input[0])
  const m = Number(input[1])
  for(let i = n; i <= m; i ++){
    //確定幾位數
    const length = getNumberLength(i)
    //確定水仙花數
    const isNarcissistic = getIsNarcissistic(i, length)
    if(isNarcissistic){
      console.log(i)
    }      
  }
}
/**
 * 
 * @param {number} n
 * @return {number} 
 */
function getNumberLength(n){
  return Math.floor(Math.log10(n)) + 1
}
/**
 * 
 * @param {number} i 
 * @param {number} length 
 */
function getIsNarcissistic(i, length){
  let n  = i
  let sum = 0
  while(n !== 0){
    let num = n % 10
    sum += num ** length
    n = Math.floor( n / 10)
  } 
  return sum === i
}