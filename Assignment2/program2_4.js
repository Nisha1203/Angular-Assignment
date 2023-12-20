function ChkArmstrong(No) {
    var originalNo = No; // Store the original number
    var result = 0, r;
    while (No > 0) {
        r = No % 10;
        result = result + r * r * r;
        No = Math.floor(No / 10);
    }
    // Compare result with the original number
    if (result == originalNo) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 153;
var Result;
Result = ChkArmstrong(Value);
if (Result == true) {
    console.log("It is an Armstrong number");
}
else {
    console.log("It is not an Armstrong number");
}
