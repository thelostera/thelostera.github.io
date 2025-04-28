


// Load our song
let song = new Audio("assets/sounds/side_a.wav");
// Get the play button so we can talk to it
const playButton = document.getElementById("music-button");
// Tell our button what to do when we click it
playButton.addEventListener("click", toggleMusic);

// Toggles the music
function toggleMusic() {
    // Check if the song is paused
    if (song.paused) {
        // If it is, then play it
        song.play();
    }
    else {
        // If it isn't, then pause it
        song.pause();
    }
}