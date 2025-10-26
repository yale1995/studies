import {it, describe, expect, vi} from 'vitest'
import {printAlternates} from '@/exercises/arrays/print-alternates'
import {findIndexAtUnsortedArr} from '@/exercises/arrays/find-index-at-unsorted'
import {reverseArray} from '@/exercises/arrays/reverse-array'
import {hourglassSum} from '@/exercises/arrays/hour-glass-sum'

describe('Array exercises', () => {
  it('should print alternate elements', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const numbersList = [1,3,5,7,9]
    printAlternates(numbersList)

    const calls = spy.mock.calls.map(([arg]) => arg)
    expect(calls).toEqual([1,5,9])

  })

  it('should find index at unsorted array', () => {
    const numbersList = [23,77,25,14,12,1,2]
    const index = findIndexAtUnsortedArr(numbersList, 1)

    expect(index).toEqual(5)
  })

  it('should reverse the array elements', () => {
    const arr = [2, 4, 6, 8, 10]
    const reversedArr = reverseArray(arr)
    expect(reversedArr).toEqual([10, 8, 6, 4, 2])
  })

    it('should find the highest hour glass sum', () => {
     const arr6x6 = [[-9, -9, -9, 1, 1, 1],[0, -9, 0, 4, 3, 2],[-9, -9, -9, 1, 2, 3],
     [0, 0, 8, 6, 6, 0],[0, 0, 0, -2, 0, 0],[0, 0, 1, 2, 4, 0]]

     const highestHourGlass = hourglassSum(arr6x6)

     expect(highestHourGlass).toEqual(28)
  })
})