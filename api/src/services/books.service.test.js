const BooksService = require('./books.service')

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter fake 1'
  },
  {
    _id: 2,
    name: 'Harry Potter fake 2'
  },
]

const MongoLibSub = {
  getAll: () => [...fakeBooks],
  create: () => {},
}

// Cuando se llame esta libreria, quiero hacer remplazarla
jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibSub))

describe('Test for BooksService', () => {
  let service
  beforeEach(() => {
    service = new BooksService()
    jest.clearAllMocks() // Limpiar todos los mocks que se realizaron antes de cada caso de prueba
  })

  describe('test for getBooks', () => {
    test('should retunr list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks()
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books.length).toEqual(2)
    })

    test('should retunr name of the first book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks()
      console.log('👽 ~ test ~ books:', books)
      // Assert
      expect(books[0].name).toEqual('Harry Potter fake 1')
    })
  })
})
