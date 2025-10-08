export function printAlternates(arr: number[]) {
  const arrSize = arr.length

  for(let i=0; i < arrSize; i+=2 ) {
    console.log(arr[i])
  }
}