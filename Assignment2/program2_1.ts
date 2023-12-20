function maximum1(): number[] {
  var input: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
  return input;
}

var arr: number[];
arr = maximum1();

var i: number = 0;
var max: number = 0;
for (i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log("Maximum number is : " + max);
