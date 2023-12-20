function fibonacci(no: number): number {
  if (no <= 1) {
    return no;
  } else {
    return fibonacci(no - 1) + fibonacci(no - 2);
  }
}

const n: number = 21;

for (let i = 0; fibonacci(i) <= n; ++i) {
  console.log(fibonacci(i));
}
