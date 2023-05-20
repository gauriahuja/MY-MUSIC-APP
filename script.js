console.log("welcome to my music app!!");
//initialize the variables
let songsIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay1");

let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
  {songsName:"Let me love you", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
  {songsName:"sakhiyaan", filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
  {songsName:"rabba", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
  {songsName:"janji", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
  {songsName:"cutiepie", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
  {songsName:"billo rani", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
  {songsName:"rabta", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
  {songsName:"cool for the summer", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
  {songsName:"bhula dena", filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
  {songsName:"Na jana", filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},

]
songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songsName;

})



// audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity=0;

    }

})
// listen to  events
audioElement.addEventListener("timeupdate", ()=>{
   
    //update seekbar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100 );
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })


}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src='songs/${index+1}'.mp3;
        audioElement.currentTime=0;
        audioElement.play(); 
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
       
    })


})