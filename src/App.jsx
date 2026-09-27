import './App.css'
import Header from './components/header/Header.jsx';
import QuestionCard from './components/question/QuestionCard.jsx';
import Score from './components/score/Score.jsx';
import QuestionNavigation from './components/questionNavigation/QuestionNavigation.jsx';
import questions from './data/questions.json';
import React, { useState } from 'react';

function App() {

    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showSubmitPage, setShowSubmitPage] = useState(false);

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
          
         else {
            if (Object.keys(answers).length === questions.length) {
             setShowSubmitPage(true);
        } else {
            alert("Please answer all questions before submitting.");
        }
       
    }
    }

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(previousQuestion => previousQuestion - 1);
        }
    }

    function handleSubmit() {
          setSubmitted(true);
    }

    return (
        <div className='app'>
            <Header />

            <div className='quiz-layout'>

                <section className='quiz-content'>
       
       
    {showSubmitPage ? (

        <div className="submit-page">
            <h2>Ready to submit?</h2>

            <button onClick={handleSubmit}>
                Submit
            </button>
             {submitted && (
                        <Score
                            questions={questions}
                            answers={answers}
                        />
                    )} 
        </div>
   
    ) : (

        <>
            <div className='question-area'>
                <QuestionCard
                    question={currentQuestionData}
                    selectedAnswer={answers[currentQuestionData.id]}
                    onAnswer={handleAnswer}
                />
            </div>

            <div className='navigation-area'>
                <button onClick={handlePrevious}>
                    Previous
                </button>

                <button onClick={handleNext}>
                    Next
                </button>
            </div>

           <div className='explanation-area'>
              <h4>Explanation</h4>
              <p>{currentQuestionData.explanation}</p>
            </div>
        </>

    )}

</section>

                <aside className='quiz-sidebar'>

                    <div className="sidebar-top">
                        <div className="qtn-progress">
                            Question {currentQuestion + 1}/{questions.length}
                        </div>

                        <div className="need-help">
                            Need Help?
                        </div>
                    </div>

                    <QuestionNavigation
                        questions={questions}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        onQuestionSelect={setCurrentQuestion}
                    />

                    

                </aside>

            </div>
        </div>
    );
}

export default App;
