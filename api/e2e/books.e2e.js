/// En las pruebas de integración no debemos tocar las bases de datos

const request = require('supertest')
const { MongoClient } = require('mongodb')

const createApp = require('../src/app')
const { config } = require('../src/config')

const DB_NAME = config.dbName
const MONGO_URI = config.dbUrl

describe('Test for books', () => {
  let app = null
  let server = null
  let database = null

  beforeAll(async () => {
    app = createApp()
    server = app.listen(3001)

    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    await client.connect()
    database = client.db(DB_NAME)
  })

  afterAll(async () => {
    await server.close()

    // Podemos agragar aca un borrado de la base de datos para qeu la base de datos quede limpia
    await database.dropDatabase()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arange
      const seeData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'Carlos',
        },
        {
          name: 'Book 2',
          year: 1999,
          author: 'Carlos',
        },
      ])

      console.log('👽 ~ test ~ seeData:', seeData)
      // Act
      const response = await request(app).get('/api/v1/books') // El primer slash (/) es obligatorio
      // Assert
      console.log('👽 ~ test ~ body:', response.body)

      expect(response.statusCode).toEqual(200)
      expect(response.body.length).toEqual(2)
    })
  })
})
