import './Score.css';

function Score({ questions, answers }) {
    let score = 0;

    questions.forEach((question) => {
        if (answers[question.id] === question.correctAnswer) {
            score++;
        }
    });

    return (
        <div className="score">
            <h2>Your Score</h2>
            <p>{score} / {questions.length}</p>
        </div>
    );
}

export default Score;

