import { MyArray } from "./array"

export class Stack<T> {
  private items: { [key: number]: T }
  private size: number

  constructor() {
    this.items = {}
    this.size = 0
  }

  push(item: T) {
    this.items[this.size] = item
    this.size++
  }

  pop() {
    const item = this.items[this.size - 1]
    delete this.items[this.size - 1]
    this.size--
    return item
  }

  peek() {
    return this.items[this.size - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}

export class StackBasedOnArray<T> {
  private items: MyArray<T>
  

  constructor() {
    this.items = new MyArray<T>([])
  }

  push(item: T) {
    this.items.items[this.items.items.length] = item
  }

  pop() {
    const newArray = new MyArray<T>([])
    const lastItem = this.items.items[this.items.items.length - 1]

    for (let i = 0; i < this.items.items.length - 1; i++) {
      newArray.items[i] = this.items.items[i]
    }

    this.items = newArray
    return lastItem

  }

  peek() {
    return this.items.items[this.items.items.length - 1]
  }

  isEmpty() {
    return this.items.items.length === 0
  }

  length() {
    return this.items.items.length
  }
  
}