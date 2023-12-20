function Area(radius: number): number {
  var Result: number = 0;
  Result = 3.14 * radius * radius;
  return Result;
}

var Ans: number = 0;
Ans = Area(5);
console.log("Area is : " + Ans);
