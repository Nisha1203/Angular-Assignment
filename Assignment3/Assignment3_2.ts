class Circle {
  // Characteristics
  Radius: number;
  PI: number;
  area: number;

  // Parametrized constructor
  constructor(A: number) {
    this.Radius = A;
    this.PI = 3.14;
    this.area = 0;
  }

  // Behaviour
  Area() {
    this.area = this.PI * this.Radius * this.Radius;
    console.log(
      "Area of circle with radius " + this.Radius + " is " + this.area
    );
  }
}

var obj4 = new Circle(5);
var obj2 = new Circle(7);

obj4.Area();
obj2.Area();
