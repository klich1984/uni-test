// matchers

test('test obj', () => {
  const data = { name: 'klich' }
  data.lastname = 'usuga'

  expect(data).toEqual({ name: 'klich', lastname: 'usuga' })
})

test('is null', () => {
  const data = null

  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('is Booleans', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
})

test('is string', () => {
  expect('Carlos').toMatch(/arl/)
})

test('is arrays', () => {
  const numbers = [1,2,3,4]
  expect(numbers).toContain(3)
})