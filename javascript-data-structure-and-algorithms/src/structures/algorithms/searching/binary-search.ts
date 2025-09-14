type BinarySearchResult = { index: number, iterations: number };

export class BinarySearch {
  private arr: number[]

  constructor(arr: number[]) {
    this.arr = arr
  }

  public maxIterations(): number {
    return Math.ceil(Math.log2(this.arr.length))
  }

  public search(target: number): BinarySearchResult {
    let bottomIndex = 0;
    let topIndex = this.arr.length - 1;
    let iterations = 0;

    while (bottomIndex <= topIndex) {
      const midIndex = Math.floor((bottomIndex + topIndex) / 2);
      const midValue = this.arr[midIndex];
      iterations++;

      if (midValue === target) return { index: midIndex, iterations };

      if (midValue > target) {
        topIndex = midIndex - 1
      }

      if (midValue < target) {
        bottomIndex = midIndex + 1
      }
    }

    return { index: -1, iterations };
  }
}