// Your JavaScript quiz application code here
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  }
];

function displayQuestion(index) {
  const currentQuestion = questions[index];
  console.log(currentQuestion.question);
  console.log('Options:');
  currentQuestion.options.forEach((option, i) => {
    console.log(`${i + 1}. ${option}`);
  });
}

// Example usage
displayQuestion(0);
