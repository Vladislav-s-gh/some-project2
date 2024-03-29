const questions = [
  {
    question: "Вкажіть ритм який Ви бачите на даній ЕКГ",
    answers: [
      {text: "Синусовий правильний", correct: false},
      {text: "Синусова аритмія", correct: true},
      {text: "Синусова брадикардія", correct: false},
      {text: "Інші порушення ритму", correct: false}
    ],
    comment: "Зверніть увагу на зубці P1"
  },
  {
    question: "Вкажіть ритм який Ви бачите на даній ЕКГ",
    answers: [
      {text: "Синусовий правильний", correct: true},
      {text: "Синусова аритмія", correct: false},
      {text: "Синусова брадикардія", correct: false},
      {text: "Інші порушення ритму", correct: false}
    ],
    comment: "Зверніть увагу на зубці P2"
  },
  {
    question: "Вкажіть ритм який Ви бачите на даній ЕКГ",
    answers: [
      {text: "Синусовий правильний", correct: false},
      {text: "Синусова аритмія", correct: false},
      {text: "Синусова брадикардія", correct: false},
      {text: "Інші порушення ритму", correct: true}
    ],
    comment: "Зверніть увагу на зубці P3"
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("image");
const commentElement = document.getElementById("commentText")

let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML = "Далі";
  showQuestion();
    
}

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question

  currentQuestion.answers.forEach(answer =>{const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  
//here i create comment
commentElement.innerHTML = currentQuestion.comment

  if(answer.correct){
    button.dataset.correct =answer.correct;
  }
  button.addEventListener("click", selsctAnswer);
  });

  if (currentQuestionIndex ==0){
    document.getElementById("img-whale").style.display = "block";
    document.getElementById("img-mause").style.display = "none";
    document.getElementById("img-cat").style.display = "none";
  } if (currentQuestionIndex ==1){
    document.getElementById("img-whale").style.display = "none";
    document.getElementById("img-mause").style.display = "block"
    document.getElementById("img-cat").style.display = "none"
  } if (currentQuestionIndex ==2){
    document.getElementById("img-whale").style.display = "none";
    document.getElementById("img-mause").style.display = "none";
    document.getElementById("img-cat").style.display = "block";
  }





 }

 function resetState(){
  nextButton.style.display = "none";
  comment.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  };
 }

function selsctAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=> {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled =true;
  })
  nextButton.style.display = "block"
  comment.style.display = "block"
}

function showScore(){
  resetState();
  questionElement.innerHTML =`Правильних відповідей ${score} з ${questions.length}!`;
  nextButton.innerHTML = "Повторити";
  nextButton.style.display = "block";
  comment.style.display = "none";
  commentText.style.display = "none";
  imageElement.style.background = "tranparent";
  document.getElementById("img-whale").style.display = "none";
  document.getElementById("img-mause").style.display = "none";
  document.getElementById("img-cat").style.display = "none";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScore();
  }
  
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});
nextButton.addEventListener("click", ()=>{showComment();})


comment.addEventListener("click", ()=>{
  ///commentText.innerHTML = "yes";
  if(commentText.style.display != "block"){commentText.style.display = "block"
}else{commentText.style.display = "none"
}

});


function showComment(){commentText.style.display = "none"}



showComment();
startQuiz(); 
