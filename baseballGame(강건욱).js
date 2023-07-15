function getRandomNumber() { 
    return Math.floor(Math.random()*10)
}

function generateQuiz() {
  let quiz = "";
  while(quiz.length < 3)
  {
    random = getRandomNumber().toString();
    if(quiz.includes(random)) continue;
    quiz += random;
  }
  return quiz;
}

const quiz = generateQuiz();
console.log(quiz); 
var pattern1 = /[0-9]/;
quizCount = 1;
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reAsk();

function reAsk() {
  reader.question(quizCount + "번쨰 시도 : ", x => {
    if (x === "" || !pattern1.test(x)){
      console.log("숫자를 입력하세요.");
      quizCount++;
      reAsk();
    }
    if (x.length !== 3 || !pattern1.test(x)){
      console.log("3개의 숫자를 입력해주세요");
      quizCount++;
      reAsk();
  }
    else {
      if (x === quiz) {
        console.log("3S");
        console.log(`정답입니다! ${quizCount}번만에 맞추셨습니다.`);
        console.log("게임을 종료합니다.");
        reader.close();
      } else {
        checkQuiz(quiz, x);
        quizCount++;
         reAsk();
      }
    }

  });
}

function checkQuiz(x,y) {
  strike =0;
  ball =0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if(x[i]===y[j]&&i===j)  strike++;
      else if(x[i]===y[j]&&i!==j) ball++;
    }
  }
  if(strike === 0&&ball === 0) console.log(`${strike}S${ball}B`);
  else if(strike === 0) console.log(`${ball}B`)
  else if(ball === 0) console.log(`${strike}S`)
  else console.log(`${strike}S${ball}B`);
}




