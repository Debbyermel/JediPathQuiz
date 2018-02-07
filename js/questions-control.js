
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
}


Question.prototype.drawQuestion = function(){
  var y = 290;
  ctx.font = "40px Starjedi";
  ctx.fillStyle = "#f9d566";
  ctx.textBaseline = "middle";
  //dibujar la pregunta tambien
  console.log(this.text)
 
  this.choices.forEach(choice=>{
    ctx.fillText(choice,770,y);
   y+=82;
  });
  ctx.font = "30px Starjedi";
  ctx.fillText(this.text,720,120);
 

  
 
  // asignarle una letra 
  //A,B,C
  //A === answer
  //listener key
}

Question.prototype.checkKeyCode = function(keyCode){
  if(event.keyCode !== 48 || event.keyCode !== 49 || event.keyCode !== 50.){
  }

  keyCode === this.answer
    //ctx Right answer y sumo puntos
}

Question.prototype.checkAnswer = function(keyCode){
  keyCode === this.answer
    //ctx Right answer y sumo puntos
}
Question.prototype.correctAnswer = function(choice){
  return choice === this.answer;
}

//Quiz Control
function Quiz(questions){
 this.score = 0;
 this.questions = questions;
 this.questionIndex = 0;
}

Quiz.prototype.setQuestionIndex = function(){
   return this.questions[questionIndex];
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

