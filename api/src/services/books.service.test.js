const { generateManyBooks } = require('../fakes/book.fake')
const BooksService = require('./books.service')

const mockGetAll = jest.fn()

const MongoLibSub = {
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => {},
}

// Cuando se llame esta libreria, quiero hacer remplazarla
jest.mock('../lib/mongo.lib.js', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
)

describe('Test for BooksService', () => {
  let service
  beforeEach(() => {
    service = new BooksService()
    jest.clearAllMocks() // Limpiar todos los mocks que se realizaron antes de cada caso de prueba
  })

  describe('test for getBooks', () => {
    test('should retunr list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({})
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books.length).toEqual(fakeBooks.length)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })

    test('should retunr name of the first book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(3)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({})
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name)
    })
  })
})
