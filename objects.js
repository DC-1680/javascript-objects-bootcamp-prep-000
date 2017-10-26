var playlist = {
  badSuns: "Heart Breaker",
  }

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, { ['Phil Ochs']: "Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.[Phil Ochs];
}