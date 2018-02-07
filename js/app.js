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
  var myScore;
  var question;
  var quiz;
  var content = "The Jedi Path";
  var interval;


  function startGame(){ 
    frames = 0;
    board = new Board();
    box = new Box();
    question = new Question();
    //question = new Quiz();
    interval = setInterval(updateGame,1000/60);
  }

   function updateGame(){
    frames ++;
    board.draw();
    box.draw();
    question.drawQuestion();   
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
    this.x = 670;
    this.y =50;
    this.width = canvas.width;
    this.height = canvas.height;
    this.draw = function(){
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(this.x,this.y,800, 535);
    }
  }

  function gameName(){
    this.x = 100;
    this.y =150;
    this.width = canvas.width;
    this.height = canvas.height;
    this.draw = function(){
    this.font = "24px Starjedi";
    this.fillStyle = "red";
    this.textBaseline = "top";
  }
}

  startGame();
