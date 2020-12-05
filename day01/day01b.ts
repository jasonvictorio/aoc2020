import input from './day01-input'

const day01b = (input: string) => {
  const parse = (input: string) => input.split('\n').map(Number)
  const foo = (a: number, b: number, c: number) => a + b + c == 2020
  const bar = (a: number, b: number, c: number) => a * b * c

  const parsedInput = parse(input)
  for (let i = 0; i < parsedInput.length; i++) {
    const a = parsedInput[i]
    for (let j = i + 1; j < parsedInput.length; j++) {
      const b = parsedInput[j]
      for (let k = j + 1; k < parsedInput.length; k++) {
        const c = parsedInput[k]
        if (foo(a, b, c)) return bar(a, b, c)
      }
    }
  }
}

console.log(day01b(input))
