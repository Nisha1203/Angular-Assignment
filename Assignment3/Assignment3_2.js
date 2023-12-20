var Circle = /** @class */ (function () {
    // Parametrized constructor
    function Circle(A) {
        this.Radius = A;
        this.PI = 3.14;
        this.area = 0;
    }
    // Behaviour
    Circle.prototype.Area = function () {
        this.area = this.PI * this.Radius * this.Radius;
        console.log("Area of circle with radius " + this.Radius + " is " + this.area);
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(7);
obj1.Area();
obj2.Area();
