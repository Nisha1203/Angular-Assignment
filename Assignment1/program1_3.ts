function DisplayFunction(No: number): void {
  for (var i = 1; i < No; i++) {
    if (No % i == 0) {
      console.log(i);
    }
  }
}

var No: number = 20;
DisplayFunction(No);
