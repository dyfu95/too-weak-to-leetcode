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
	const answers = lines[0].split(' ');
  if(answers[0] === answers[1]){
    console.log('Yes')
   }else {
    console.log('No')
   }
}
  