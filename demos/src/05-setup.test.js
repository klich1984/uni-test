// Dentro de describe se pueden realizar varias pruebas
describe('Grupo 1', () => {
  beforeAll(() => {
    // Up db
    console.log('👽 BeforeAll Grupo 1 ')
  })

  beforeEach(() => {
    console.log('👽 BeforeEach Grupo 1 ')
  })

  afterEach(() => {
    console.log('👽 afterEach Grupo 1 ')
  })

  test('Case 1', () => {
    console.log('👽 case 1')
    expect(1 + 1).toBe(2)
  })

  test('Case 2', () => {
    console.log('👽 case 2')
    expect(1 + 4).toBe(5)
  })

  // Se puede tener otro grupo de esenario de pruebas o set de preubas
  describe(('Grupo 2'), () => {
    beforeAll(() => {
      // Up db
      console.log('👽 beforeAll Grupo 2')
    })

    afterAll(() => {
      // Down db
      console.log('👽 afterAll Grupo 2')
    })

    test('Case 3', () => {
      console.log('👽 case 3')
      expect(1 + 5).toBe(6)
    })

    test('Case 4', () => {
      console.log('👽 case 4')
      expect(4 + 4).toBe(8)
    })
  })
})