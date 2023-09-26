"use client"
import { useState } from "react"
import "./QuizSection.css"

function QuizSection({quiz}) {
  const answer = quiz?.a?.toString()
  const wrongAnswer =  answer?.toLowerCase() == "false" ? "true" : "false"

  const [clicked, setClicked] = useState("")

  return (
    <section className="quiz">
        <div className="quiz-inner">
          <h1>Take a simple quiz</h1>
          <p className="question">
            {quiz.q}
          </p>

          <div className="answers">
            <button
            className={clicked == "clicked-right"? "clicked-right" : ""}
            onClick={()=> setClicked("clicked-right")}
            >{answer}</button>
            <button
            className={clicked == "clicked-wrong"? "clicked-wrong" : ""}
            onClick={()=> setClicked("clicked-wrong")}
            >{wrongAnswer}</button>
          </div>

        </div>
      </section>
  )
}

export default QuizSection