export class MyArray <T> {
  items: T[];
  size = 0;

  constructor(arr: T[]) {
    this.items = arr;
    this.size = arr.length;
  }

  push(...arr: T[]) {
    const inputSize = arr.length;
    for (let i = 0; i < inputSize; i++) {
      this.items[this.size] = arr[i];
      this.size++
    }
  }

  unshift(...arr: T[]) {
    const inputSize = arr.length
    const arrSize = this.items.length

    for(let i = arrSize - 1; i >= 0; i--) {
      this.items[i + inputSize] = this.items[i]
      this.items[i] = arr[i]     
    }

    this.size = this.size + arr.length
  }

  shift() {
    const arrSize = this.items.length
    const firstIndex = this.items[0]
    const aux = new MyArray<T>([])

    for(let i = 1; i < arrSize; i++) {
      aux.push(this.items[i]) 
    }

    this.items = aux.items
    return firstIndex
  }

  pop() {
    const arrSize = this.items.length
    const lastIndex = this.items[arrSize - 1]
    const aux = new MyArray<T>([])

    for (let i = 0; i < arrSize - 1; i++) {
      aux.push(this.items[i])
    }

    this.items = aux.items
    return lastIndex
  }

  map<U>(callback: (item: T, index: number) => U) {
    const arrSize = this.size
    const result = new MyArray<U>([])

    for(let i = 0; i < arrSize; i++) {
      result.push(callback(this.items[i], i))
    }

    return result.items
  }
}
