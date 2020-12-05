import { reduceEachLeadingCommentRange } from 'typescript'
import input from './day03-input'

const day03b = (input: string): number => {
  const parse = (input: string) => input.split('\n')
  const parsedInput = parse(input)
  const tree = '#'
  const slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ]

  const slide = (map: string[], { right, down }): number => {
    let position = { x: 0, y: 0 }
    let treeCount = 0

    while (position.y < map.length) {
      position = { x: position.x + right, y: position.y + down }
      const mapRow = map[position.y]
      treeCount = mapRow?.[position.x % mapRow.length] == tree ? treeCount + 1 : treeCount
      console.log(treeCount, position, mapRow)
    }

    console.log({ right, down }, treeCount)
    return treeCount
  }

  return slopes.map(slope => slide(parsedInput, slope)).reduce((product, treeCount) => product * treeCount, 1)
}

console.log(day03b(input))
