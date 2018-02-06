var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 
 var images = {
    bg:"img/cover.jpg",
    flappy:"http://www.idoctormt.com/wp-content/uploads/2016/04/Flappy-Bird.png"   
  };

  //Global Variables
  var board;


  //main Functions
  function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = images.bg;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    //mas importante de todos:
    this.draw = function(){
      ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
    }
  }
  Board();


 /* function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}*/