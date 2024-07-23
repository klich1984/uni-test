// Es una prueba recorriendo todo el flujo
const request = require('supertest')

const createApp = require('../src/app')

describe('Test for hello endponit', () => {
  let app = null
  let server = null
  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /', () => {
    test('should return Hello World!', async () => {
      const response = await request(app).get('/')

      console.log('👽 ~ test ~ response:', response.statusCode)

      expect(response.statusCode).toEqual(200)
      expect(response.text).toEqual('Hello World!')
    })
  })
})
