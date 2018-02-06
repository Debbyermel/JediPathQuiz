var canvas = document.getElementById("canvas-box");
var ctx = canvas.getContext("2d");

//main variables
var board;
var ship;
var logo;
var interval;
var frames = 0;
var mySound;// r2 music
var myMusic;// theme music

var images = {
    bg:"img/bg.png",
    ship:"img/mFalcon.png",
    logo:"img/logo.png"
   };


function Ship(){
    this.x = 640;
    this.y = 500;
    this.width = 180;
    this.height = 250;
    this.speed = 0;
    this.img = new Image();
    this.img.src = images.ship;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    this.getUp = function(){
        console.log(this.y)
        if(this.y >398){
            this.y-=1;
            this.speed = 0;
        }else{
            
        }
    }
  }

  function Logo(){
    this.x = 450;
    this.y = 190;
    this.width = 600;
    this.height = 280;
    this.speed = 0;
    this.img = new Image();
    this.img.src = images.logo;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    this.moveUp = function(){
        console.log(this.y)
        if(this.y >100){
            this.y-=1;
            this.speed = 0;
        }else{
            
        }
    }
  }

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

//Main function
function startGame(){
    //mySound = new sound("sounds/R2-alarm.mp3");
    myMusic = new sound("sounds/themeGame.mp3");
    myMusic.play();
    frames = 0;
    board = new Board();
    ship = new Ship();
    logo = new Logo();
    interval = setInterval(updateGame,1000/20);
  }

  function updateGame(){
    frames++;
    //Borrar todo antes
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //chars
    board.draw();
    ship.draw();
    ship.getUp();
    logo.draw();
    logo.moveUp();
    //get the pipes
    ctx.font = "50px Arial";
    ctx.fillText(Math.floor(frames/8), 100,150);
  }

  function sound(src) {
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
}
  
  startGame();

  
   var startBtn = document.getElementById('start-btn');
    startBtn.onclick = function(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/Scripts/filename.js."; 
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;
}
  





