var keylog = "";
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
    console.log(letterIndex)
    if(choice === this.answer){
      console.log("asignando solucion")
       this.key = chars[letterIndex];
    }
    this.choicePairs.push({key:chars[letterIndex],choice:choice});
    console.log(this.choicePairs)
 
    chars.splice(letterIndex,1); 
    keylog = this.key

  });
  console.log(keylog)
}

Question.prototype.drawQuestion = function(){
  var dic = {
    65:"A",
    66:"B",
    67:"C"
  }
  var y = 290;
  ctx.fillStyle = "#f9d566";
  ctx.textBaseline = "middle";
  ctx.font = "30px Starjedi";
  ctx.fillText(this.text,720,120);
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
  if(e.keyCode === 65 || e.keyCode === 66 || e.keyCode === 67){
    // console.log("El user:",e.keyCode);
    // console.log("verdad: ",keylog);
    if(e.keyCode === keylog){
      console.log("score: ",score)
      score+=1;
      questionsOne.splice(index, 1);
      if (questionsOne.length===0){
        console.log(score);
        //Codigo que se acabo el juego
      }
      console.log("score: ",score)
      startGame();
      //alert("Acertaste!")
    }else{
      alert("estas bien wey")
    }

  //   if(e.keyCode === keylog){
  //     return score += 1;
  //     console.log(score);
  //   }
  //   else {
  //      score += 0;
  //   }
  // }
  // else{
  //   console.log("Enter A, B OR C");
  // }  
  }
});



/*
Quiz Control
function Quiz(questions){
 this.score = 0;
 this.questions = questions;
 this.questionIndex = 0;
}

Quiz.prototype.gameEnd = function(){
  return this.questions.lenght === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
  this.questionIndex++;
  if(this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
   }
}

Quiz.prototype.displayMessage = function(numberCorrect, totalQuestions) {
  var message = 'You got ' + numberCorrect + ' questions right out of ' + 
    totalQuestions + '. Would you like to try again?';
};
*/
