import { describe, it, expect } from 'vitest'
import { BinarySearch } from '@/structures/algorithms/searching/binary-search'

describe('Binary Search', () => {
  it('should return the index of the target value', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 2
    const binarySearch = new BinarySearch(arr)
    const result = binarySearch.search(target)
    expect(result).toEqual({ index: 1, iterations: 3 })
    expect(result.index).toBe(arr.indexOf(target))
  })

  it('should return -1 if the target value is not found', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 6
    const binarySearch = new BinarySearch(arr)
    const result = binarySearch.search(target)
    expect(result).toEqual({ index: -1, iterations: 0 })
    expect(result.iterations).toBeLessThanOrEqual(binarySearch.maxIterations())
  })

  it('should return the iterations shorter or equal than the maximum possible iterations', () => {
    const arr = Array.from({ length: 1000 }, (_, index) => index)
    const target = 999
    const binarySearch = new BinarySearch(arr)
    const result = binarySearch.search(target)
    expect(result.iterations).toBeLessThanOrEqual(binarySearch.maxIterations())
    expect(result.index).toBe(arr.indexOf(target))
  })
})