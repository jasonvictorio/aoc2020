import input from './day05-input'

const day05a = (input: string): number => {
  const parse = (input: string) => input.split('\n')
  const search = ([a, ...rest]: string[], lower: number, upper: number): number => {
    if (lower == upper) return lower
    if (a == 'F' || a == 'L') {
      const newUpper = lower + Math.floor((upper - lower) / 2)
      return search(rest, lower, newUpper)
    } else {
      const newLower = lower + Math.ceil((upper - lower) / 2)
      return search(rest, newLower, upper)
    }
  }

  const seatIds = parse(input).map(boardingPass => {
    const rows = boardingPass.slice(0, 7).split('')
    const columns = boardingPass.slice(7).split('')
    const row = search(rows, 0, 127)
    const column = search(columns, 0, 7)
    return row * 8 + column
  })

  return Math.max(...seatIds)
}

console.log(day05a(input))
