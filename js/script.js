var btn_next = document.querySelector(".next");
var btn_prev = document.querySelector(".prev");
var songs = document.querySelectorAll(".song");
var audio_sources = document.querySelectorAll(".audio-source");
var playerFull = document.querySelector(".player-full");
var playerOverflow = document.querySelector(".player-overflow");
var song_played = 0;
let swaper;
let i = 1;

var firstClone = songs[0].cloneNode(true);
var lastClone = songs[songs.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

playerFull.append(firstClone);
playerFull.prepend(lastClone);

const songWidth = playerOverflow.clientWidth;

playerFull.style.transform = `translateX(${-songWidth * i}px)`;

songs = document.querySelectorAll(".song");

songs[i].style.width = "300px";
songs[i].style.height = "300px";
songs[i].style.margin = "40px";

playerFull.addEventListener('transitionend', () => {
    songs = document.querySelectorAll(".song");
    if (songs[i].id === firstClone.id) {
        playerFull.style.transition = "none";
        i = 1;
        songs[i].style.transition = "none";
        songs[i].style.width = "300px";
        songs[i].style.height = "300px";
        songs[i].style.margin = "40px";
        songs[songs.length - 1].style.width = "240px";
        songs[songs.length - 1].style.height = "240px";
        songs[songs.length - 1].style.margin = "70px";
        playerFull.style.transform = `translateX(${-songWidth * i}px)`;
    }
    songs = document.querySelectorAll(".song");
    if (songs[i].id === lastClone.id) {
        playerFull.style.transition = "none";
        i = songs.length - 2;
        songs[i].style.transition = "none";
        songs[i].style.width = "300px";
        songs[i].style.height = "300px";
        songs[i].style.margin = "40px";
        songs[1].style.width = "240px";
        songs[1].style.height = "240px";
        songs[1].style.margin = "70px";
        playerFull.style.transform = `translateX(${-songWidth * i}px)`;
    }
});

btn_next.addEventListener('click', () => {
    songs = document.querySelectorAll(".song");
    if(i >= songs.length - 1){return;}
    i++;
    playerFull.style.transform = `translateX(${-songWidth * i}px)`;
    songs[i].style.width = "300px";
    songs[i].style.height = "300px";
    songs[i].style.margin = "40px";
    songs[i-1].style.width = "240px";
    songs[i-1].style.height = "240px";
    songs[i-1].style.margin = "70px";
    songs[i].style.transition = ".7s";
    songs[i-1].style.transition = ".7s";
    playerFull.style.transition = ".7s";
});

btn_prev.addEventListener('click', () => {
    songs = document.querySelectorAll(".song");
    if(i <= 0){return;}
    i--;
    songs[i].style.width = "300px";
    songs[i].style.height = "300px";
    songs[i].style.margin = "40px";
    songs[i+1].style.width = "240px";
    songs[i+1].style.height = "240px";
    songs[i+1].style.margin = "70px";
    playerFull.style.transform = `translateX(${-songWidth * i}px)`;
    playerFull.style.transition = ".7s";
    songs[i].style.transition = ".7s";
    songs[i+1].style.transition = ".7s";
});

