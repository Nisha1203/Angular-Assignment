function maximum(): number[] {
  var input: number[] = [29, 86, 6];
  return input;
}

var arr: number[];
arr = maximum();

var i: number = 0;
var max: number = 0;
for (i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log("Elements of array are : " + max);
