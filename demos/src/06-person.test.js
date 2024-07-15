const Person = require('./06-person')

// AAA
// Arrange  / Given
// Act      / When
// Assert   / Then

describe('Test for Person class', () => {
  let person
  // Arrange  / Given
  beforeEach(() => {
    person = new Person('Lorem', 1, 1)
  })
  test('should return down', () => {
    // Arrange  / Given
    person.weight = 45
    person.height = 1.7
    // Act      / When
    const imc = person.calcIMC()
    // Assert   / Then
    expect(imc).toBe('down')
  })

  test('should return normal', () => {
    // Arrange  / Given
    person.weight = 59
    person.height = 1.7
    // Act      / When
    const imc = person.calcIMC()
    // Assert   / Then
    expect(imc).toBe('normal')
  })
})
