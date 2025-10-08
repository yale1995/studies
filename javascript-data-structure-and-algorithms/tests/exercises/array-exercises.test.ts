import {it, describe, expect, vi} from 'vitest'
import {printAlternates} from '@/exercises/arrays/print-alternates'
import {findIndexAtUnsortedArr} from '@/exercises/arrays/find-index-at-unsorted'




describe('Array exercises', () => {
  it('print alternate elements', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const numbersList = [1,3,5,7,9]
    printAlternates(numbersList)

    const calls = spy.mock.calls.map(([arg]) => arg)
    expect(calls).toEqual([1,5,9])

  })

  it('find index at unsorted array', () => {
    const numbersList = [23,77,25,14,12,1,2]
    const index = findIndexAtUnsortedArr(numbersList, 1)

    expect(index).toEqual(5)
  })
})