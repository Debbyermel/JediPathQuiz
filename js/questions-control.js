
//Questions Control
function Question(){
  this.text;
  this.choices;
  this.answer;
  this.randomQ();
}

Question.prototype.randomQ = function(){
    //1.-random questions 
  var index = Math.floor(Math.random()*questionsOne.length);
  var q = questionsOne[index];
  this.text = q.text;
  this.choices = q.choices;
  this.answer = q.answer;
  this.choicePairs = []
  this.key;
  //asignamos letras
  var chars = [48,49,50];

  this.choices.forEach(choice=>{

    var letterIndex = Math.floor(Math.random()*chars.length);
    if(choice === this.answer){
       this.key = chars[letterIndex];
    }
    this.choicePairs.push({key:chars[letterIndex],choice:choice});
    console.log(this.choicePairs)
 
    chars.splice(letterIndex,1); 

  });
}

Question.prototype.drawQuestion = function(){
  var dic = {
    48:"A",
    49:"B",
    50:"C"
  }
  var y = 290;
  ctx.fillStyle = "#f9d566";
  ctx.textBaseline = "middle";
  ctx.font = "30px Starjedi";
  ctx.fillText(this.text,720,120);
  this.choicePairs.sort(function(a, b) {
    return a.key - b.key;
});
console.log(this.choicePairs)
  this.choicePairs.forEach(pair=>{
    ctx.font = "40px Starjedi";
    ctx.fillText(pair.choice,770,y)
    ctx.fillText(dic[pair.key], 700,y + 1); 
    y+=82;
  });

}
 
addEventListener("keydown", function(keyCode){
  if(keyCode === 48 || keyCode === 49 || keyCode === 50){
    if(key === answer){
      myScore = MyScore + 1;
      console.log(myScore);
    }
  }
})

//Quiz Control
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

