export function verifyWinner(word: string, writedLettrs: number | undefined | null) : boolean {
  return word.length === writedLettrs
}