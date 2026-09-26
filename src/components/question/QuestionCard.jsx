import './QuestionCard.css'


function QuestionCard({question,selectedAnswer,onAnswer}){

    return(
        <div>
            <h3>Question {question.id}</h3>
            <p>{question.question}</p>
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