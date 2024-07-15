const Person = require('./06-person')

describe('Test for Person class', () => {
  let person

  beforeEach(() => {
    person = new Person('Lorem', 1, 1)
  })
  test('should return down', () => {
    person.weight = 45
    person.height = 1.7
    const imc = person.calcIMC()

    expect(imc).toBe('down')
  })

  test('should return normal', () => {
    person.weight = 59
    person.height = 1.7
    const imc = person.calcIMC()

    expect(imc).toBe('normal')
  })
})
