//MENU
//folder
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

// the songs to be played!

//end

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
function currentSong(){
	
	if(audio.src == "https://reqs2.000webhostapp.com/muzyka/milkyways.mp3"){
document.getElementById("current-song-name").innerHTML = "Bossfight - Milky Ways ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/outbreaker.mp3"){
document.getElementById("current-song-name").innerHTML = "Hinkik - Outbreaker";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/mazeofmayo.mp3"){
document.getElementById("current-song-name").innerHTML = "Bossfight - The Maze Of Mayonnaise";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/alltime.mp4"){
document.getElementById("current-song-name").innerHTML = "Keys N Krates - All The Time (Tove Lo Flip) ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/kradness.mp3"){
document.getElementById("current-song-name").innerHTML = " ?kradness&???? ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/muzyka1.mp3"){
document.getElementById("current-song-name").innerHTML = " Shawn Lees Ping Pong Orchestra feat. Nino Mochella - Kiss The Sky ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/catgroove.mp3"){
document.getElementById("current-song-name").innerHTML = "Parov Stelar - Catgroove";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/undertale.mp3"){
document.getElementById("current-song-name").innerHTML = "Undertale OST 100 - Megalovania";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/supermario.mp3"){
document.getElementById("current-song-name").innerHTML = "Yoshis Island Music - Athletic";
	}	
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/kilimanjaro.mp3"){
document.getElementById("current-song-name").innerHTML = "Yu-Dachi - Kilimanjaro";
}	
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/hinkik.mp3"){
document.getElementById("current-song-name").innerHTML = "[Electro] Hinkik - Skystrike";
}	
}

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
 