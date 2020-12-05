import { reduceEachLeadingCommentRange } from 'typescript'
import input from './day03-input'

type Slope = {
  right: number
  down: number
}

const day03a = (input: string): number => {
  const parse = (input: string) => input.split('\n')
  const parsedInput = parse(input)
  const tree = '#'
  const slope = { right: 3, down: 1 }

  const slide = (map: string[], { right, down }): number => {
    let position = { x: 0, y: 0 }
    let treeCount = 0

    while (position.y < map.length) {
      position = { x: position.x + right, y: position.y + down }
      const mapRow = map[position.y]
      treeCount = mapRow?.[position.x % mapRow.length] == tree ? treeCount + 1 : treeCount
    }

    return treeCount
  }

  return slide(parsedInput, slope)
}

console.log(day03a(input))
