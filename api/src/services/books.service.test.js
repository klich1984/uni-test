const BooksService = require('./books.service')

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter fake 1',
  },
  {
    _id: 2,
    name: 'Harry Potter fake 2',
  },
]

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
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({})
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books.length).toEqual(2)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })

    test('should retunr name of the first book', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([
        {
          _id: 3,
          name: 'Harry Potter fake 1',
        },
      ])
      // Act
      const books = await service.getBooks()
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books[0].name).toEqual('Harry Potter fake 1')
    })
  })
})
