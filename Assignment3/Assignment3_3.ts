class Circle1 {
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

class CircleX extends Circle1 {
  // Constructor calls the base class constructor
  constructor(radius: number) {
    super(radius);
  }

  // Additional behavior to calculate circumference
  Circumference() {
    const circumference = 2 * this.PI * this.Radius;
    console.log(
      "Circumference of circle with radius " +
        this.Radius +
        " is " +
        circumference
    );
  }
}

// Usage
var obj5 = new CircleX(5);
var obj7 = new CircleX(7);

obj5.Area();
obj5.Circumference();

obj7.Area();
obj7.Circumference();
