
import './QuestionNavigation.css';

function QuestionNavigation({ questions, answers, currentQuestion, onQuestionSelect }) {

	return (
		<div className="question-navigation">

			<h3>Questions</h3>

			<div className="question-numbers">
				{questions.map((question, index) => (

					<button
						key={question.id}
						onClick={() => onQuestionSelect(index)}
						className={
							currentQuestion === index ? "current": answers[question.id] ? "answered": "unanswered"
						}
					>
						{question.id}
					</button>

				))}
			</div>

		</div>
	);
}

export default QuestionNavigation;
