import input from './day01-input'

const day01a = (input: string) => {
  const parse = (input: string) => input.split('\n').map(Number)
  const foo = (a: number, b: number) => a + b == 2020
  const bar = (a: number, b: number) => a * b

  const parsedInput = parse(input)
  for (let i = 0; i < parsedInput.length; i++) {
    const a = parsedInput[i]
    for (let j = i + 1; j < parsedInput.length; j++) {
      const b = parsedInput[j]
      if (foo(a, b)) return bar(a, b)
    }
  }
}

console.log(day01a(input))
