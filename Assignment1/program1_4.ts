function CheckPrime(No: number): boolean {
  if (No <= 1) return false;

  for (var i = 2; i <= No / 2; i++)
    if (No % i == 0) {
      return false;
    }

  return true;
}

var Value: number = 11;
var Result: boolean;

Result = CheckPrime(Value);
if (Result == true) {
  console.log("It is a prime number");
} else {
  console.log("It is not a prime number");
}
