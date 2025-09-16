import { describe, it, expect } from 'vitest'
import { InterpolationSearch } from '@/structures/algorithms/searching/interpolation-search'
import { BinarySearch } from '@/index'

describe('Interpolation Search', () => {
  it('should return the index of the target value', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 2
    const interpolationSearch = new InterpolationSearch(arr)
    const result = interpolationSearch.search(target)
    expect(result).toEqual({ index: 1, iterations: 1 })
    expect(result.index).toBe(arr.indexOf(target))
  })

  it('should return -1 if the target value is not found', () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 6
    const interpolationSearch = new InterpolationSearch(arr)
    const result = interpolationSearch.search(target)
    expect(result).toEqual({ index: -1, iterations: 0 })
    expect(result.iterations).toBeLessThanOrEqual(interpolationSearch.maxIterations())
  })

  it('interpolation can take more iterations on skewed data', () => {
    const arr = [1,2,3,4,5,6,7, 1000,1001,1002,1003,1004,1005,1006,1007,1008]
    const target = 7
    const interpolationSearch = new InterpolationSearch(arr)
    const binarySearch = new BinarySearch(arr)
  
    const interp = interpolationSearch.search(target)
    const bin = binarySearch.search(target)
  
    expect(interp.index).toBe(arr.indexOf(target))
    expect(bin.index).toBe(arr.indexOf(target))
    expect(interp.iterations).toBeGreaterThan(bin.iterations)
  })

  it('should return the iterations shorter or equal than the maximum possible iterations', () => {
    const arr = Array.from({ length: 1000 }, (_, index) => index)
    const target = 999
    const binarySearch = new InterpolationSearch(arr)
    const result = binarySearch.search(target)
    expect(result.iterations).toBeLessThanOrEqual(binarySearch.maxIterations())
    expect(result.index).toBe(arr.indexOf(target))
  })
})