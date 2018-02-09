var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Images Object
 var images = {
    bg:"img/cover.jpg", 
 };

  //Global Variables
  var board;
  var box;
  var BoardEnd;
  var frames = 0;
  var question;
  var quiz;
  var score = 0;
  var showingScore = false;
  var interval;
  var userInput;


  function startGame(){ 
    frames = 0;
    board = new Board();
    boardEnd = new BoardEnd();
    
    box = new Box();
    question = new Question();
    interval = setInterval(updateGame,1000/60);

  }

   function updateGame(){
    frames ++;
    board.draw();
    box.draw();
    if(endGame){

      ctx.fillStyle = "#f9d566";
      ctx.textBaseline = "middle";
      ctx.font = "40px Starjedi";

      ctx.fillText(score + " points", 980,400)
      if(score < 5){
        ctx.fillText("You still a Padawan",850,300);
      }else{
        ctx.fillText("You are a true Jedi",850,300);
      }
    }else{
      question.drawQuestion();
    }
     
    drawScore();     
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

  function BoardEnd(){
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
     
    }
  }


// make bb8 moves
$(document).ready(function() {

    function beeLeft() {
        $("#b").animate({left: "-=200"}, 1500, "swing", beeRight);
    }
    function beeRight() {
        $("#b").animate({left: "+=200"}, 1500, "swing", beeLeft);
    }
    
    beeRight();
    
});
  startGame();




