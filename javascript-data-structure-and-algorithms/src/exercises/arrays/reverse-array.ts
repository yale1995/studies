export const reverseArray = <T>(arr: T[]) => {
  for(let i = 0, j = arr.length -1; i < j; i++, j-- ) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}