var btn_next = document.querySelector(".next");
var btn_prev = document.querySelector(".prev");
var songs = document.querySelectorAll(".song");
var audio_sources = document.querySelectorAll(".audio-source");
var song_played = 0;
let swaper;

btn_next.addEventListener('click', (e) => {
    e.preventDefault();
    song_played++;
    if(song_played < songs.length){
        songs[song_played-1].classList.add("song-display");
        songs[song_played].classList.remove("song-display");
        swaper = audio_sources[song_played-1];
        audio_sources[song_played-1] = audio_sources[song_played];
        audio_sources[song_played] = swaper;
        audio_sources = document.querySelectorAll(".audio-source");
    }
    else{
        songs[song_played-1].classList.add("song-display");
        song_played = 0;
        songs[song_played].classList.remove("song-display");
    }
});

btn_prev.addEventListener('click', (e) => {
    e.preventDefault();
    song_played--;
    if(song_played > -1){
        songs[song_played].classList.remove("song-display");
        songs[song_played+1].classList.add("song-display");
    }
    else{
        songs[song_played+1].classList.add("song-display");
        song_played = 4;
        songs[song_played].classList.remove("song-display");
    }
});