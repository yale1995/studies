export class LinkedList<T> {
  private count: number;
  private head: Node<T> | null;

  constructor() {
    this.count = 0; // list size
    this.head = null; // first node
  }

  push(element: T) {
    const node = new Node<T>(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if(index >= 0 && index < this.count) {
      let currentNode = this.head

      for(let i = 0; i < index; i++) {
        currentNode = currentNode!.next
      }

      return currentNode
    }

    return undefined;
  }


  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let currentNode = this.head;

      if (index === 0) {
        this.head = currentNode!.next;
      } else {
        let previousNode

        for (let i = 0; i < index; i++) {
          previousNode = currentNode
          currentNode = currentNode!.next
        }

        previousNode!.next = currentNode!.next;
        }

      this.count--;
      return currentNode
    }

    return undefined;
  }
}

export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
