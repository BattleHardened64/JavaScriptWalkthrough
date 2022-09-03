function gettime(){
  document.getElementById("time").innerHTML = Date();
}

function warning(){
  alert("you push a button!");
}
/*
function animateskelyboi(){
  //var elem = document.getElementById("animate").style;
  var img = $("#skele"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

    function animate() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animate);
    }

    animate();
 //alert("you clik skele");
 
}*/


function playmusic(){
var elem = document.getElementById("music");
var num = Math.floor(Math.random() * 2);
if (num === 1)
{
  var audio = new Audio("files/among-us-drip-audiotrimmer.mp3");
}
else{
  var audio = new Audio("files/bluelobster.mp4");
}
audio.play();
}

function music(){
  var elem = document.getElementById("snekmusic");
  var audio = new Audio("files/among-us-drip-audiotrimmer.mp3");
  if (typeof audio.loop == 'boolean')
{
    audio.loop = true;
}
else
{
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
  audio.play();
}
