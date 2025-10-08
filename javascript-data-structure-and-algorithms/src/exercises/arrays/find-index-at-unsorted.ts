export function findIndexAtUnsortedArr(arr: number[], target: number) {
  const arrSize = arr.length
  for(let i = 0; i < arrSize; i++) {
    if(arr[i] === target) {
      return i
    }
  }

  return -1
}