var keylog = "";
var endGame = false;
//Questions Control
function Question(){
  this.text;
  this.choices;
  this.answer;
  this.randomQ();
}

Question.prototype.randomQ = function(){
    //1.-random questions 
  index = Math.floor(Math.random()*questionsOne.length);
  var q = questionsOne[index];
  this.text = q.text;
  this.choices = q.choices;
  this.answer = q.answer;
  this.choicePairs = []
  this.key;
  //asignamos letras
  var chars = [65,66,67];

  this.choices.forEach(choice=>{

    var letterIndex = Math.floor(Math.random()*chars.length);
    //console.log(letterIndex)
    if(choice === this.answer){
     // console.log("asignando solucion")
       this.key = chars[letterIndex];
    }
    this.choicePairs.push({key:chars[letterIndex],choice:choice});
    //console.log(this.choicePairs)
 
    chars.splice(letterIndex,1); 
    keylog = this.key

  });
  //console.log(keylog)
}

Question.prototype.drawQuestion = function(){
  var dic = {
    65:"A",
    66:"B",
    67:"C"
  }
  var y = 250;
  ctx.fillStyle = "#f9d566";
  ctx.textBaseline = "middle";
  ctx.font = "33px Starjedi";
  ctx.fillText(this.text,700,130);
  this.choicePairs.sort(function(a, b) {
    return a.key - b.key;
});
  this.choicePairs.forEach(pair=>{
    ctx.font = "40px Starjedi";
    ctx.fillText(pair.choice,770,y)
    ctx.fillText(dic[pair.key], 700,y + 1); 
    y+=82;
  });
}
 
document.addEventListener("keydown", function(e){
  if(questionsOne.length < 1){
    endGame = true;
  }
  if(e.keyCode === 65 || e.keyCode === 66 || e.keyCode === 67){
    // getting keyCode of A,B,C;
    // console.log("verdad: ",keylog);
    if(e.keyCode === keylog){
      score+=1;
      questionsOne.splice(index, 1);
      if (questionsOne.length==0){
        //End of the game
        BoardEnd();
        endGame = true;
      }

      startGame();
      $('#input').val(' '); // clean input text every time the function iniciated.
     
    } else if(e.keyCode !== keylog){
      score = score;
      questionsOne.splice(index, 1);
    }
    startGame(); 
  }
 
});
