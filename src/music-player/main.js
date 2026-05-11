import { showPlaylist, showSong as displayShowSong } from './modules/display.js'
import * as player from './modules/player.js'
import songs from './modules/songs.js'
import './styles/theme.js'

console.log("🎶 Добро пожаловать в музыкальный плеер!")
 
// Показываем весь плейлист
showPlaylist(songs)
 
// Включаем первую песню
displayShowSong(songs[0])

player.play()
player.pause()
player.stop()
player.showSong(songs[0])
player.showSong(songs[1])