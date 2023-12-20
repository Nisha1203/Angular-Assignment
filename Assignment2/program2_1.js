function maximum1() {
    var input = [23, 89, 6, 29, 56, 45, 77, 32];
    return input;
}
var arr;
arr = maximum1();
var i = 0;
var max = 0;
for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log("Elements of array are : " + max);
