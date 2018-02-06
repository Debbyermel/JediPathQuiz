var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Images Object
 var images = {
    bg:"img/cover.jpg",  
  };

  //Global Variables
  var board;
  var box;
  var frames = 0;


  function startGame(){ 
    frames = 0;
    board = new Board();
    box = new Box();
 UpdateGame()
  }

   function UpdateGame(){
     frames ++;
    setTimeout(function(){
      box.draw();

    },500)
}

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
     this.draw = function(){
      ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
      box.draw();
    }
  }

  function Box(){
    this.x = 600;
    this.y =150;
    this.width = canvas.width;
    this.height = canvas.height;
    this.draw = function(){
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fillRect(this.x,this.y, 650, 435);
    }
  }


  startGame();
 

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