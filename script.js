console.log("Welcome ");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')


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
 