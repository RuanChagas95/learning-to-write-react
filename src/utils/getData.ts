import data from '../data'
import { DataItemType } from './types'

export function getCategoriesKeys(): string[] {
  return Object.keys(data)
}

export function getRandomCategory() {
  const categories = getCategoriesKeys()
  return categories[Math.floor(Math.random() * categories.length)]
}

export function getRandomWord(category : string = getRandomCategory()): DataItemType {
  const words = data[category]
  return words[Math.floor(Math.random() * words.length)]
}
