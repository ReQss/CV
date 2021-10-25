//MENU
function speaker(){
	if(audio.volume!=0){
	audio.volume=0;
	if(audio.volume==0)
	document.getElementById("speaker1").src = "Obrazy/speakercrossed.png";
	}
	else{
		audio.volume=range.value;
		document.getElementById("speaker1").src = "Obrazy/speaker.png";
		
	}
}


// change volume
function changeVolume() {
var range = document.getElementById('range');
audio.volume=range.value;
if(audio.volume==0){
	document.getElementById("speaker1").src = "Obrazy/speakercrossed.png";
	
}
if(audio.volume!=0)
	document.getElementById("speaker1").src = "Obrazy/speaker.png";
}
//title


//RED - 256,0,0 GREEN 0,256,0 BLUE 0,0,256
var r=255;
var g=0;
var b=0;
var stage=0;
function rgb(){
  var author = document.getElementById("rgb").style.color =`rgb(${r},${g},${b})`;
 
if(stage==0){
  r-=1; 
  g+=1;
  if(g==255)
  stage=1;
  }
  if(stage==1){
    g-=1;
    b+=1;
    if(b==255)
    stage=2;
  }
  if(stage==2){
    b-=1;
    r+=1;
    if(r==255)
    stage=0;
  }
}
var myInterval = setInterval(rgb, 8);
function currentSong(){
	
	if(number == 0){
document.getElementById("current-song-name").innerHTML = "Unknown ";
	}
else if(number ==1){
document.getElementById("current-song-name").innerHTML = "Maze of Mayo";
	}
  else if(number ==2){
    document.getElementById("current-song-name").innerHTML = "All time";
      }
      else if(number ==3){
        document.getElementById("current-song-name").innerHTML = "Bossfight - Milky Ways";
          }
          else if(number ==4){
            document.getElementById("current-song-name").innerHTML = "Outbreaker";
              }
}
var number;
var music = [
  
  'Muzyka/muzyka1.mp3',
  'Muzyka/mazeofmayo.mp3',
  'Muzyka/alltime.mp4',
  'Muzyka/milkyways.mp3',
  'Muzyka/outbreaker.mp3',
  'Muzyka/kradness.mp3',
  'Muzyka/catgroove.mp3',
  'Muzyka/undertale.mp3',
  'Muzyka/supermario.mp3',
  'Muzyka/kilimanjaro.mp3',
  'Muzyka/hinkik.mp3'
];
//radio
number = Math.floor(Math.random() * music.length);
console.log(music[number]);
var audio = new Audio(`${music[number]}`);
function play(){
 audio.volume = range.value;
audio.play();
 }
 
 