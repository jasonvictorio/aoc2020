import input from './day05-input'

const day05b = (input: string) => {
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

  return seatIds
    .sort((a, b) => a - b)
    .filter((seatId, i) => seatIds[i + 1] == seatId + 2)
    .map(seatId => seatId + 1)
}

console.log(day05b(input))
