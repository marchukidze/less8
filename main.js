
var n = 10;
var m = 10;

var arr = [];
var sumArr = [];
var revArr = [];

var temp = 0;

for (var i = 0; i < n; i++) {
  arr[i] = [];
  for (var j = 0; j < m; j++) {
    arr[i][j] = Math.floor(Math.random() * 41 - 20);
  }
}
console.log(arr);

for (var i = 0; i < n; i++) {
  sumArr[i] = [];
  var sum = 0;
 
  for (var j = 0; j < m; j++) {
    sum += arr[j][i]    
  }

  if (sum >= 0) {
    for (var j = 0; j < m; j++) {
      sumArr[temp].push(arr[j][i]);
    }
    temp++;
  }  
}

for (var i = 0; i < n; i++) {
  revArr[i] = [];
  for (var j = 0; j < temp; j++) {
    revArr[i][j] = sumArr[j][i];
  }
}

console.log(revArr);

