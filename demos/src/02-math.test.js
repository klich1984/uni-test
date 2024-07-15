const { sum, multiply, divide, isPair } = require('./02-math')

describe('Test for math', () => {
  describe('tests for sum', () => {
    test('adds 3 + 1 should be 4', () => {
      const rta = sum(3, 1)

      expect(rta).toBe(4)
    })
  })

  describe('tests for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(2, 2)

      expect(rta).toBe(4)
    })
  })

  describe('tests for divide', () => {
    test('should divide', () => {
      const rta = divide(10, 5)
      const rta1 = divide(5, 2)
      const rta2 = divide(10, 2)

      expect(rta).toBe(2)
      expect(rta1).toBe(2.5)
      expect(rta2).toBe(5)
    })
    test('should divide for zero', () => {
      const rtafor0 = divide(5, 0)

      expect(rtafor0).toBeNull()
    })
  })

  describe('tests is pair or odd', () => {
    test('should show is pair or odd', () => {
      const rta1 = isPair()
      const rta2 = isPair(8)
      const rta3 = isPair(5)

      expect(rta1).toBe('Debes pasar un parametro')
      expect(rta2).toBe('El número es par')
      expect(rta3).toBe('El número es impar')
    })
  })
})
