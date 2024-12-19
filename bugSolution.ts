function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return add(a,b);
  } else {
    console.error('Invalid input. Both arguments must be numbers.');
    return 0; // or throw an error
  }
}

let result1 = addSafe(1, 2); // Works fine
let result2 = addSafe(1, "2"); // Returns 0 and logs an error message
let result3 = addSafe("1", 2); //Returns 0 and logs an error message
let result4 = addSafe("1","2"); //Returns 0 and logs an error message