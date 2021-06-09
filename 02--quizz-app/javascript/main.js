const quizData = [
  {
    question: 'Question #1',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'a',
  },
  {
    question: 'Question #2',
    a: '50',
    b: '60',
    c: '70',
    d: '80',
    correct: 'b',
  },
  {
    question: 'Question #3',
    a: '90',
    b: '100',
    c: '110',
    d: '120',
    correct: 'c',
  },
  {
    question: 'Question #4',
    a: '130',
    b: '140',
    c: '150',
    d: '160',
    correct: 'd',
  },
];

const answersElements = document.querySelectorAll('.answer');
const questionsElement = document.getElementById('questions');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');
const score = document.getElementById('score');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let currentScore = 0;

const deselectAnswer = () => {
  answersElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
};

//set quiz data with local data
const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  console.log(currentQuizData);

  questionsElement.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;

  score.innerHTML = currentScore;
  quizLength.innerHTML = quizData.length;
};

loadQuiz();

//get selected answer
const getSelected = () => {
  let answer = undefined;

  answersElements.forEach((answerElement) => {
    // console.log(answerElement);
    // console.log(answerElement.checked);

    if (answerElement.checked) {
      answer = answerElement.id;
      console.log(answerElement.id);
    }
  });
  console.log(answer);
  return answer;
};

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      currentScore++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>Score: ${currentScore}/${quizData.length}</h2>
      <div id="refreshBtn">
              <button class='refreshBtn' onclick="location.reload()">Reload</button></div>
      `;
    }
  }
});
