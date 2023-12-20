function fibonacci(no) {
    if (no <= 1) {
        return no;
    }
    else {
        return fibonacci(no - 1) + fibonacci(no - 2);
    }
}
var n = 21;
for (var i = 0; fibonacci(i) <= n; ++i) {
    console.log(fibonacci(i));
}
