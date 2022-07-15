const output = fizzBuzz(11);
console.log(output);
function fizzBuzz(input) {
  let dividedBy3 = input % 3 === 0;
  let dividedBy5 = input % 5 === 0;
  let dividedByBoth = dividedBy3 && dividedBy5;
  if (typeof input !== "number") {
    return "Not a number";
  }
  if (dividedByBoth) {
    return "FizzBuzz";
  }
  if (dividedBy3) {
    return "Fizz";
  }
  if (dividedBy5) {
    return "Buzz";
  }

  return input;
}
