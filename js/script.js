var btn_next = document.querySelector(".next");
var btn_prev = document.querySelector(".prev");
var songs = document.querySelectorAll(".song");
var audio_sources = document.querySelectorAll(".audio-source");
var song_played = 0;
let swaper;

var firstClone = songs[0].cloneNode(true);
var lastClone = songs[songs.length - 1].cloneNode(true);

songs.append(firstClone);
songs.prepend(lastClone);

btn_next.addEventListener('click', (e) => {
    e.preventDefault();
});

btn_prev.addEventListener('click', (e) => {
    e.preventDefault();

});

