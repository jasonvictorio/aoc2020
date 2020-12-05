import input from './day02-input'

type PasswordAndRule = {
  pos1: number
  pos2: number
  character: string
  password: string
}

const day02a = (input: string) => {
  const parser = (input: string) => input.split('\n').map(passwordMap)
  const passwordMap = (passwordAndRule: string) => {
    const r = /^(\d+)-(\d+) (\w): (\w+)/
    const [, pos1, pos2, character, password] = passwordAndRule.match(r)
    return { pos1: Number(pos1), pos2: Number(pos2), character, password }
  }

  const isValid = (passwordAndRule: PasswordAndRule) => {
    const { pos1, pos2, character, password } = passwordAndRule
    return (password[pos1 - 1] != character) != (password[pos2 - 1] != character)
  }

  const parsedInput = parser(input)
  return parsedInput.reduce((validCount: number, passwordAndRule: PasswordAndRule) => {
    return isValid(passwordAndRule) ? validCount + 1 : validCount
  }, 0)
}

console.log(day02a(input))
