import { describe, it, expect } from 'vitest'
import { hotPotato } from '@/index'

describe('Hot Potato', () => {
  it('should return the winner', () => {
    const names = ['John', 'Jane', 'Jim', 'Jill']
    const num = 2
    const winner = hotPotato(names, num)
    expect(winner).toBeDefined()
  })

  it('should return the winner', () => {
    const names = ['John', 'Jane', 'Jim', 'Jill']
    const num = 6
    const winner = hotPotato(names, num)
    expect(winner).toBeDefined()
  })
})