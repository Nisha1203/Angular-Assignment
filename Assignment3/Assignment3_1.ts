class Arithmetic {
  // Characteristics
  Number1: number;
  Number2: number;
  result: number;

  // Parametrized constructor
  constructor(A: number, B: number) {
    this.Number1 = A;
    this.Number2 = B;
    this.result = 0;
  }

  // Behaviour
  Addition() {
    this.result = this.Number1 + this.Number2;
    console.log("Addition is : " + this.result);
  }

  Subtraction() {
    this.result = this.Number1 - this.Number2;
    console.log("Subtraction is : " + this.result);
  }

  Multiplication() {
    this.result = this.Number1 * this.Number2;
    console.log("Multiplication is : " + this.result);
  }

  Division() {
    this.result = this.Number1 / this.Number2;
    console.log("Division is : " + this.result);
  }
}

var obj1 = new Arithmetic(10, 2);

obj1.Addition(); //12
obj1.Subtraction(); //8
obj1.Multiplication(); //20
obj1.Division(); //5
