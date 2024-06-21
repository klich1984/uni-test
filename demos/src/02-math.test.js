const { sum, multiply, divide, isPair } = require('./02-math')

test('adds 3 + 1 should be 4', () => {
  const rta = sum(3, 1)

  expect(rta).toBe(4)
})

test('should be 4', () => {
  const rta = multiply(2, 2)

  expect(rta).toBe(4)
})

test('should divide', () => {
  const rta = divide(10, 5)
  const rta1 = divide(5, 2)
  const rta2 = divide(10, 2)
  // Divide for 0
  const rtafor0 = divide(5, 0)

  expect(rta).toBe(2)
  expect(rta1).toBe(2.5)
  expect(rta2).toBe(5)
  expect(rtafor0).toBeNull()
})

test('should show is pair or odd', () => {
  const rta1 = isPair()
  const rta2 = isPair(8)
  const rta3 = isPair(5)

  expect(rta1).toBe('Debes pasar un parametro')
  expect(rta2).toBe('El número es par')
  expect(rta3).toBe('El número es impar')
})
