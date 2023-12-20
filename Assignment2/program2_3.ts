function Maximum(): number {
  var No: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
  var firstMax: number = 0;
  var secondMax: number = 0;

  for (var i = 0; i < No.length; ++i) {
    if (No[i] > firstMax) {
      secondMax = firstMax;
      firstMax = No[i];
    } else if (No[i] > secondMax && No[i] != firstMax) {
      secondMax = No[i];
    }
  }

  return secondMax;
}

var Arr: number;
Arr = Maximum();

console.log("Second Maximum number is : " + Arr);
