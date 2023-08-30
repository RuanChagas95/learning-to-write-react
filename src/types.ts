export type DataType = {
    [category: string]: {
      [item: string]: {
        img: string
      }
    }
}

export type GamePropsType = {
  name: string,
  word: string,
  writedLetters?: string
}

export type RootReducerType = {
  gameData: GamePropsType
}