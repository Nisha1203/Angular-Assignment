function ChkString1(value: string): boolean {
  var check: string = "Marvellous";

  var valueLength: number = value.length;
  var checkLength: number = check.length;

  for (var i = 0; i <= valueLength - checkLength; i++) {
    var match: boolean = true;
    for (var j = 0; j < checkLength; j++) {
      if (value[i + j] !== check[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return true;
    }
  }

  return false;
}

var Value: string = "Pune Kothrud Marvellous Infosystems";
var Result: boolean;

Result = ChkString1(Value);

if (Result) {
  console.log("String contains Marvellous in it");
} else {
  console.log("String does not contain Marvellous in it");
}
