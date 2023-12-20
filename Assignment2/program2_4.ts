function ChkArmstrong(No: number): boolean {
  var originalNo: number = No; // Store the original number
  var result: number = 0,
    r: number;

  while (No > 0) {
    r = No % 10;
    result = result + r * r * r;
    No = Math.floor(No / 10);
  }

  // Compare result with the original number
  if (result == originalNo) {
    return true;
  } else {
    return false;
  }
}

var Value1: number = 153;
var Result: boolean;

Result = ChkArmstrong(Value1);

if (Result == true) {
  console.log("It is an Armstrong number");
} else {
  console.log("It is not an Armstrong number");
}
