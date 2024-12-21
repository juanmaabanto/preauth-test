export function getSetFromArray(numbers: number[], n: number): number[] {
  if(numbers.length < 2) {
    return [];
  }

  return numbers;
}

let M = [2, 5, 8, 14, 0];
let N = 10;

console.log(getSetFromArray(M, N));