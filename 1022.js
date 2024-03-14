
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
	const N = Number(lines[0])
  for( let  i = 1; i < N + 1 ; i ++ ){
    parseLayer(i, N)
  }
}
  
function parseLayer(i, n){
  const str = repeat(' ', n - i) + repeat('*', 2*i - 1)
  console.log(str)
}

function repeat(str, n){
  let s = ""
  for(let i = 1; i <= n ;i ++){
    s += str
  }
  return s
}