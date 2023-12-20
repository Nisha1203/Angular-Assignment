var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle1 = /** @class */ (function () {
    // Parametrized constructor
    function Circle1(A) {
        this.Radius = A;
        this.PI = 3.14;
        this.area = 0;
    }
    // Behaviour
    Circle1.prototype.Area = function () {
        this.area = this.PI * this.Radius * this.Radius;
        console.log("Area of circle with radius " + this.Radius + " is " + this.area);
    };
    return Circle1;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    // Constructor calls the base class constructor
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    // Additional behavior to calculate circumference
    CircleX.prototype.Circumference = function () {
        var circumference = 2 * this.PI * this.Radius;
        console.log("Circumference of circle with radius " +
            this.Radius +
            " is " +
            circumference);
    };
    return CircleX;
}(Circle1));
// Usage
var obj5 = new CircleX(5);
var obj7 = new CircleX(7);
obj5.Area();
obj5.Circumference();
obj7.Area();
obj7.Circumference();
