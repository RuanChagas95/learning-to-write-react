export type DataItemType = {img?: string, question?: string, word: string}

export type DataType = {
    [category: string]:  DataItemType[]
}

export type GamePropsType = {
  name: string,
  writedLetters: number
} & DataItemType

export type RootReducerType = {
  gameData: GamePropsType
}
export type InitialRootReducerType = {
  gameData : {
    name: null,
    word: null,
    writedLetters: number,
    img: null,
}
}