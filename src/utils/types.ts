export type DataType = {
    [category: string]: {
      [item: string]: {
        img: string
      }
    } | {
      default: string
      all: string[]
    }
}

export type GamePropsType = {
  name: string,
  word: string,
  writedLetters: number
}

export type RootReducerType = {
  gameData: GamePropsType
}
export type InitialRootReducerType = {
  gameData : {
    name: null,
    word: null,
    writedLetters: number
}
}