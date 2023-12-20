function ChkString(value) {
    var check = "Marvellous";
    var valueLength = value.length;
    var checkLength = check.length;
    for (var i = 0; i <= valueLength - checkLength; i++) {
        var match = true;
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
var Value = "Pune Kothrud Marvellous Infosystems";
var Result;
Result = ChkString(Value);
if (Result) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String does not contain Marvellous in it");
}
