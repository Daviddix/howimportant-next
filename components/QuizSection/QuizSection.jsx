import "./QuizSection.css"

function QuizSection() {
  return (
    <section className="quiz">
        <div className="quiz-inner">
          <h1>Take a simple quiz</h1>
          <p className="question">
            Arrays in JavaScript can store any data type
          </p>
          <div className="answers">
            <button>True</button>
            <button>False</button>
          </div>
        </div>
      </section>
  )
}

export default QuizSection