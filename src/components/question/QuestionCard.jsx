import './QuestionCard.css'


function QuestionCard({question,selectedAnswer,onAnswer}){
return ( <div className='question-and-answer-options'>
     <div className='question'>
         <h4>Question {question.id}</h4>
          <p>{question.question}</p>
           </div>
            <div className='answer-options'>
                 {question.options.map((option, index) => ( 
                    <button className={`answer-option ${ selectedAnswer === option ? 'selected' : '' }`}
                     key={index} onClick={() => onAnswer(question.id, option)} > {option} </button> ))} 
                     </div> 
                     </div> );
}

export default QuestionCard