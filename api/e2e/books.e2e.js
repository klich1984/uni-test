/// En las pruebas de integración no debemos tocar las bases de datos

const request = require('supertest')
const mockGetAll = jest.fn()

const createApp = require('../src/app')
const { generateManyBooks } = require('../src/fakes/book.fake')

// Cuando se llame esta libreria, quiero hacer remplazarla
jest.mock('../src/lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
)

describe('Test for books', () => {
  let app = null
  let server = null
  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arange
      const fakeBooks = generateManyBooks(3)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const response = await request(app).get('/api/v1/books') // El primer slash (/) es obligatorio
      // Assert
      console.log('👽 ~ test ~ body:', response.body)

      expect(response.statusCode).toEqual(200)
      expect(response.body.length).toEqual(fakeBooks.length)
    })
  })
})
