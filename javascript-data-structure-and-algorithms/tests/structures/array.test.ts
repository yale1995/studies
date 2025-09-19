import { describe, it, expect } from "vitest";
import { MyArray } from "@/index";

describe("Array", () => {
  it("should create an array", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    expect(array.items).toEqual([1, 2, 3, 4, 5]);
  });

  it("should create an empty array", () => {
    const array = new MyArray([]);
    expect(array.items).toEqual([]);
  });

  it("should unshift an item", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.unshift(0);
    expect(array.items).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should unshift multiple items", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.unshift(0, 6);
    expect(array.items).toEqual([0, 6, 1, 2, 3, 4, 5]);
  });

  it("should push an item", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.push(6);
    expect(array.items).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should push multiple items", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.push(6, 7);
    expect(array.items).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should shift an item", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.shift();
    expect(array.items).toEqual([2, 3, 4, 5]);
  });

  it("should pop an item", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    array.pop();
    expect(array.items).toEqual([1, 2, 3, 4]);
  });

  it("should map an array", () => {
    const array = new MyArray([1, 2, 3, 4, 5]);
    const mappedArray = array.map((item, index) => item * 2);
    expect(mappedArray).toEqual([2, 4, 6, 8, 10]);
  });
});
