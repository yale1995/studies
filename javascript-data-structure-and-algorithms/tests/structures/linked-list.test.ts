import { describe, it, expect } from "vitest";
import { LinkedList } from "@/index";

describe("Linked List", () => {
  it("should create an linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeDefined()
  });

  it("should get an element at an index", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(10);
    linkedList.push(27);
    expect(linkedList.getElementAt(5)).toEqual({ value: 27, next: null });
  });
});
