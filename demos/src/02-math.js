function sum(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) return null

  return a / b
}

const isPair = (a) => {
  if (!a) return 'Debes pasar un parametro'

  if (a < 0) a *= -1

  if (a % 2 === 0) {
    return 'El número es par'
  } else {
    return 'El número es impar'
  }
}

module.exports = {
  sum,
  multiply,
  divide,
  isPair,
}
