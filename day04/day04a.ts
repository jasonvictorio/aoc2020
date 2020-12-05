import { reduceEachLeadingCommentRange } from 'typescript'
import input from './day04-input'

const day04a = (input: string): number => {
  const parse = (input: string) => input.split('\n\n').map(row => row.split('\n').join(' '))
  const properties = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  const isPassportValid = (passport: object) => properties.every(property => passport.hasOwnProperty(property))
  const mapPassport = (passport: string) =>
    passport
      .split(' ')
      .map(x => [...x.split(':')])
      .reduce((passport, property) => ({ ...passport, [property[0]]: property[1] }), {})

  const passports = parse(input).map(mapPassport)

  const xx = passports.reduce((validCount: number, passport: object): number => {
    return isPassportValid(passport) ? validCount + 1 : validCount
  }, 0 as number)

  return xx as number
}

console.log(day04a(input))
