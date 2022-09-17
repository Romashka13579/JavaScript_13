var btn_next = document.querySelector(".next");
var btn_prev = document.querySelector(".prev");
var songs = document.querySelectorAll(".song");
var controls = document.querySelectorAll(".control");
var playerFull = document.querySelector(".player-full");
var playerOverflow = document.querySelector(".player-overflow");
var song_played = 0;
var timer = true;
let swaper;
let i = 1;
let c = 1;

var firstClone = songs[0].cloneNode(true);
var lastClone = songs[songs.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

playerFull.append(firstClone);
playerFull.prepend(lastClone);

const songWidth = playerOverflow.clientWidth;

playerFull.style.left = "" + (-songWidth * i) + "px";

songs = document.querySelectorAll(".song");

songs[i].style.width = "300px";
songs[i].style.height = "300px";
songs[i].style.margin = "40px";

playerFull.addEventListener('transitionend', () => {
    songs = document.querySelectorAll(".song");
    if (songs[i].id === firstClone.id) {
        i = 1;
        playerFull.style.transition = "none";
        songs[i].style.transition = "none";
        SizeChange(songs[i], songs[songs.length - 1]);
        playerFull.style.left = "" + -songWidth * i + "px";
    }
    songs = document.querySelectorAll(".song");
    if (songs[i].id === lastClone.id) {
        i = songs.length - 2;
        playerFull.style.transition = "none";
        songs[i].style.transition = "none";
        SizeChange(songs[i], songs[1]);
        playerFull.style.left = "" + (-songWidth * i) + "px";
    }
});

btn_next.addEventListener('click', () => {
    songs = document.querySelectorAll(".song");
    if (i >= songs.length - 1) { return; }
    if (timer == true) {
        if (c <= controls.length - 1)
        {
            controls[c - 1].classList.add("display-none");
            controls[c].classList.remove("display-none");
            c++;
        }
        i++;
        playerFull.style.left = "" + (-songWidth * i) + "px";
        SizeChange(songs[i], songs[i - 1]);
        songs[i].style.transition = ".7s";
        songs[i - 1].style.transition = ".7s";
        playerFull.style.transition = ".7s";
        timer = false;
        setTimeout(() => { timer = true; }, 700);
    }
});

btn_prev.addEventListener('click', () => {
    songs = document.querySelectorAll(".song");
    if (i <= 0) { return; }
    if (timer == true) {
        i--;
        if (c > 0)
        {
            controls[c - 1].classList.add("display-none");
            controls[c - 2].classList.remove("display-none");
            c--;
        }
        SizeChange(songs[i], songs[i + 1]);
        playerFull.style.left = "" + (-songWidth * i) + "px";
        playerFull.style.transition = ".7s";
        songs[i].style.transition = ".7s";
        songs[i + 1].style.transition = ".7s";
        timer = false;
        setTimeout(() => { timer = true; }, 700);
    }
});

function SizeChange(obj1, obj2) {
    obj1.style.width = "300px";
    obj1.style.height = "300px";
    obj1.style.margin = "40px";
    obj2.style.width = "240px";
    obj2.style.height = "240px";
    obj2.style.margin = "70px";
}
