import hit from '/songs/hit.mp3'
import winner from '/songs/winner.mp3'

export function playHitAudio() {
  const audio = new Audio(hit)
  audio.volume = 0.2
  audio.currentTime = 0
  audio.play()
}
export function playWinnerAudio() {
  const audio = new Audio(winner)
  audio.volume = 0.4
  audio.currentTime = 0
  audio.play()
}