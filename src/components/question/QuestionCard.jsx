import './QuestionCard.css'


function QuestionCard({question,selectedAnswer,onAnswer}){

    return(
        <div className='question-and-answer-options'>
            <div className='question'>
                <h4>Question {question.id}</h4>
                <p>{question.question}</p>
            </div>
            
            <label className='answer-options'>
                {question.options.map((option,index) => (
                    <div className='answer-option' key={index}>
                         <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() => onAnswer(question.id, option)}
                        />
                        <span>{option}</span>
                    </div>
                ))}
            </label>

        </div>
    );
}

export default QuestionCard