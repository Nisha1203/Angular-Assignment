function Summation(): number {
  var No: number[] = [23, 6, 7, 4, 5, 7];
  var Sum: number = 0;

  for (var i = 0; i < No.length; i++) {
    Sum = Sum + No[i];
  }

  return Sum;
}

var Arr: number;
Arr = Summation();

console.log("Addition is : " + Arr);
