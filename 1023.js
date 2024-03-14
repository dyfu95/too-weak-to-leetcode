
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
  
  const n = Number(lines[0])
  //leaf and space
  for(let i = 1; i <= n; i++){
    const str = repeat(2 * i - 1 )
    const space = createSpace(n - i)
    console.log(`${space}${str}`)
  }
  //wood and space
  for(let j = 1; j <= n-1; j ++){
    const wood = "|"
    const space = createSpace(n - 1)
    console.log(`${space}${wood}`)
  }
}

function repeat(n){
  let str = ''
  for(let i =1; i<=n; i ++){
    str += "*"
  }
  return str
}

function createSpace(n){
  let space = ""
  for(let j = 1; j<= n; j ++ ){
    space += " "
  }
  return space
}