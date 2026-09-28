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
    const [showHelp, setShowHelp] =useState(false);

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
                    <div className='question-area'>
                        <QuestionCard
                             question={currentQuestionData}
                             selectedAnswer={answers[currentQuestionData.id]}
                             onAnswer={handleAnswer}
                        />
                    </div>

                    <div className='navigation-area'>
                        <button onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>

                    <div className='explanation-area'>
                        <h4>Explanation</h4>
                        <p>{currentQuestionData.explanation}</p>
                    </div>
                </section>

                <aside className='quiz-sidebar'>

                    <div className="sidebar-top">
                        <div className="qtn-progress">
                            Question {currentQuestion + 1}/{questions.length}
                        </div>

                        <div className="need-help">
                            <button onClick={() => setShowHelp(!showHelp)}>
                                Need Help?
                            </button>
                            {showHelp &&(
                                <div>
                                    <h4>How to use the quiz</h4>
                                    <p>Select an answer for each question, then click Next to continue or click next number button</p>
                                    <p>Answer all questions before submitting the quiz</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <QuestionNavigation
                        questions={questions}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        onQuestionSelect={setCurrentQuestion}
                        submitted ={submitted}
                    /> 

                </aside>

            </div>


            {showSubmitPage && (
                <div className="submit-overlay">
                    <div className="submit-modal">
                        {!submitted ? (
                            <>
                                <h2>Ready to submit?</h2>
                                <p>If you're ready, click Submit. <br />If not, click Cancel to return <br />to the questions.</p>

                                <div className="submit-actions">
                                    <button onClick={() => setShowSubmitPage(false)}> Cancel </button>
                                    <button onClick={handleSubmit}> Submit </button>  
                                </div>
                            </>
                        ) : (
                            <>
                                <Score questions={questions} answers={answers} />
                                <button className="close-score-btn" onClick={() => setShowSubmitPage(false)} > Close </button>     
                            </> 

                        )}
                    </div>
                </div>

            )}

        </div>
    );
}

export default App;
