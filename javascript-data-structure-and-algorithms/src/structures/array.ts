export class MyArray<T> {
   items: T[]

  constructor(items: T[]) {
    this.items = items
  }

  unshift(...items: T[]) {
    const inputSize = items.length
    if (inputSize === 0) return this.items
    
    for(let i = this.items.length - 1; i >= 0; i--) {
      this.items[i + inputSize] = this.items[i]
    }

    for(let i = 0; i < inputSize; i++) {
      this.items[i] = items[i]
    }


    return this.items
  }

  push(...items: T[]) {
    const inputSize = items.length
    const initialSize = this.items.length
    if (inputSize === 0) return this.items

    for(let i = 0; i < inputSize; i++) {
      this.items[initialSize + i] = items[i]
    }

    return this.items
  }

  shift() {
    const newArray = new MyArray<T>([])

    for (let i = 0; i < this.items.length -1; i++) {
      newArray.items[i] = this.items[i + 1]
    }

    this.items = newArray.items
    return this.items
  }

  pop() {
    const newArray = new MyArray<T>([])
    const lastItem = this.items[this.items.length - 1]

    for (let i = 0; i < this.items.length - 1; i++) {
      newArray.items[i] = this.items[i]
    }

    this.items = newArray.items
    return lastItem
  }

  map(callback: (item: T, index: number) => T) {
    const newArray = new MyArray<T>([])

    for (let i = 0; i < this.items.length; i++) {
      newArray.items[i] = callback(this.items[i], i)
    }

    return newArray.items
  }
  
}