export type DataItemType = {word: string, img?: string, question?: string}

export type DataType = {
    [category: string]:  DataItemType[]
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