import { describe, it, expect } from 'vitest'
import { BinarySearch } from '@/structures/algorithms/searching/binary-search'

describe('Binary Search', () => {
  it('should return the index of the target value', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 2
    const result = BinarySearch.search(arr, target)
    expect(result).toEqual({ index: 1, iterations: 3 })
  })

  it('should return -1 if the target value is not found', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 6
    const result = BinarySearch.search(arr, target)
    expect(result).toEqual({ index: -1, iterations: 3 })
  })

  it('should return the iterations shorter or equal than the maximum possible iterations', () => {
    const arr = Array.from({ length: 1000 }, (_, index) => index)
    const target = 999
    const result = BinarySearch.search(arr, target)
    console.log(result)
    expect(result.iterations).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length)))
    expect(result.index).toBe(target)
  })
})