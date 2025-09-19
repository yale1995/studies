import { Stack } from "@/structures/stack"
import { describe, expect, it } from "vitest"

describe("Stack", () => {
  it("should create a stack", () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.length()).toBe(0)
  })

  it("should push an item", () => {
    const stack = new Stack<number>()
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.length()).toBe(1)
    expect(stack.peek()).toBe(1)
  })

  it("should pop an item", () => {
    const stack = new Stack<number>()
    stack.push(1)
    expect(stack.pop()).toBe(1)
    expect(stack.isEmpty()).toBe(true)
    expect(stack.length()).toBe(0)
  })

  it("should peek an item", () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.length()).toBe(3)
  })
  
  it("should be empty", () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.length()).toBe(0)
  })

  it("should return the length of the stack", () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length()).toBe(3)
  })
})