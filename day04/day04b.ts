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

  const validationRules = {
    byr: (value: string) => Number(value) >= 1920 && Number(value) <= 2002,
    iyr: (value: string) => Number(value) >= 2010 && Number(value) <= 2020,
    eyr: (value: string) => Number(value) >= 2020 && Number(value) <= 2030,
    hgt: (value: string) => {
      const [, _height, unit] = value.match(/(\d+)(cm|in)/) ?? []
      const height = Number(_height)
      if (unit == 'cm') return height >= 150 && height <= 193
      if (unit == 'in') return height >= 59 && height <= 76
      return false
    },
    hcl: (value: string) => /^#[0-9a-f]{6}$/.test(value),
    ecl: (value: string) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value),
    pid: (value: string) => /^\d{9}$/.test(value),
  }

  const xx = passports
    .filter((passport: object) => isPassportValid(passport))
    .filter((passport: object) => {
      let valid = true
      Object.entries(passport).forEach(([key, value]) => {
        console.log(validationRules[key], key, value)
        if (key == 'cid') return
        if (!validationRules[key](value)) valid = false
      })

      return valid
    })
  return xx.length
}

console.log(day04a(input))
