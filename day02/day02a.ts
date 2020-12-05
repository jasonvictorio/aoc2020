import input from './day02-input'

type PasswordAndRule = {
  min: number
  max: number
  character: string
  password: string
}

const day02a = (input: string) => {
  const parser = (input: string) => input.split('\n').map(passwordMap)
  const passwordMap = (passwordAndRule: string) => {
    const r = /^(\d+)-(\d+) (\w): (\w+)/
    const [, min, max, character, password] = passwordAndRule.match(r)
    return { min: Number(min), max: Number(max), character, password }
  }

  const isValid = (passwordAndRule: PasswordAndRule) => {
    const { min, max, character, password } = passwordAndRule
    const r = new RegExp(`(${character})`, 'g')
    const count = password.match(r)?.length ?? 0
    return count >= min && count <= max
  }

  const parsedInput = parser(input)
  return parsedInput.reduce((validCount: number, passwordAndRule: PasswordAndRule) => {
    return isValid(passwordAndRule) ? validCount + 1 : validCount
  }, 0)
}

console.log(day02a(input))
