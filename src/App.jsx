
import './App.css'
import Header from './components/header/Header.jsx';
import QuestionCard from './components/question/QuestionCard.jsx';
import questions from './data/questions.js';
import React, {useState} from 'react';

function App() {

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const currentQuestionData = questions[currentQuestion];

  function handleAnswer(questionId, answer) {
    setAnswers({
      ...answers,
      [questionId]: answer
    });

  }

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(previousQuestion => previousQuestion + 1);
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(previousQuestion => previousQuestion - 1);
    }
  }



  return(
    <div className='app'>
      <Header />
      <div className='quiz-layout'>
        <section className='quiz-content'>
          <div className='question-area'>
            <QuestionCard 
              question={currentQuestionData}
              selectedAnswer={answers[currentQuestionData.id]}
              onAnswer={handleAnswer}
            />
          </div>

          <div className='navigation-area'>
             <button onClick={handlePrevious}> Previous </button>
             <button onClick={handleNext}> Next </button>
          </div>

          <div className='explanation-area'>
            Explanations
          </div>
        </section>

        <aside className='quiz-sidebar'>
          {/* Right Side content*/}
        </aside>
      </div>
    </div>
  );
}

export default App
