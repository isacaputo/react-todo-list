import { renderHook } from '@testing-library/react-hooks'
import useLocalStorage from './useLocalStorage'

describe('useLocalStorage', () => {
  afterEach(() => {
    window.localStorage.removeItem('name')
  })

  test('should storage the state', () => {
    const value = 'jonas'
    const { result } = renderHook(() => useLocalStorage('name', value))
    const [state] = result.current

    expect(state).toBe(value)
    expect(window.localStorage.getItem('name')).toBe(`"${value}"`)
  })
})
