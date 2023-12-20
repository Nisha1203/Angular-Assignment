function Summation() {
    var No = [23, 6, 7, 4, 5, 7];
    var Sum = 0;
    for (var i = 0; i < No.length; i++) {
        Sum = Sum + No[i];
    }
    return Sum;
}
var Arr;
Arr = Summation();
console.log("Addition is : " + Arr);
