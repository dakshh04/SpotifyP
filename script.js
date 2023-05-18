console.log("Welcome ");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Heroes Tonight ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Heroes Tonight ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex - parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
