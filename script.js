console.log("Welcome ");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroes Tonight ", filePath: "1.mp3", coverPath: "covers/1.jpg"},
]


// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
})