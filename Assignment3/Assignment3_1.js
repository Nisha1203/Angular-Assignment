var Arithmetic = /** @class */ (function () {
    // Parametrized constructor
    function Arithmetic(A, B) {
        console.log("Inside Parametrized constructor");
        this.Number1 = A;
        this.Number2 = B;
        this.result = 0;
    }
    // Behaviour
    Arithmetic.prototype.Addition = function () {
        this.result = this.Number1 + this.Number2;
        console.log("Addition is : " + this.result);
    };
    Arithmetic.prototype.Subtraction = function () {
        this.result = this.Number1 - this.Number2;
        console.log("Subtraction is : " + this.result);
    };
    Arithmetic.prototype.Multiplication = function () {
        this.result = this.Number1 * this.Number2;
        console.log("Multiplication is : " + this.result);
    };
    Arithmetic.prototype.Division = function () {
        this.result = this.Number1 / this.Number2;
        console.log("Division is : " + this.result);
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 2);
obj1.Addition(); //12
obj1.Subtraction(); //8
obj1.Multiplication(); //20
obj1.Division(); //5
