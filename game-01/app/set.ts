/**
 * get the first subset of 2 numbers of 'numbers' which sum 'n'
 * @param numbers 
 * @param n 
 * @returns array with the first pair
 */
export function getSetFromArray(numbers: number[], n: number): number[] {
  if(numbers.length < 2) {
    return [];
  }

  const checked = new Set<number>();
  
  for(const num of numbers) {
    const complement = n - num;

    if (checked.has(complement)) {
      return [complement, num];
    }

    checked.add(num);
  }

  return [];
}

let M = [2, 5, 8, 14, 0];
let N = 10;

console.log(getSetFromArray(M, N));