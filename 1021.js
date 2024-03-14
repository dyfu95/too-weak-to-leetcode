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
  for( let i = 1; i < N + 1 ; i  ++ ){
    // parseStar(i)
    let stars = ""
    for(let j = 1; j < i + 1 ; j++){
      stars += "*"
    }
    console.log(stars)
  }
}
  
function parseStar(n){
  let stars = ""
  for(let j = 1; j <= n ; j++){
    stars += "*"
  }
  console.log(stars)
  //TODO: 印出N個星星
}