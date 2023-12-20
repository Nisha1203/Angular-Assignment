function DisplayFunction(No) {
    for (var i = 1; i < No; i++) {
        if (No % i == 0) {
            console.log(i);
        }
    }
}
var No = 20;
DisplayFunction(No);
