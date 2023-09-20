import girl from "../../assets/images/Bad-Signal.svg"
import "./ErrorComponent.css"

function ErrorComponent() {
  return (
    <main className="error">
        <img src={girl} alt="girl holding a phone" />

    <p>
        Sorry, it seems like we can't find any info on "Projectors in JavaScript", try searching for a different term
    </p>

    <h1>You can Try</h1>

    <a href="">Functions in JavaScript</a>
    <a href="">Loops in Python</a>
    <a href="">Lists in Python</a>
    <a href="">Functions in JavaScript</a>
    </main>
  )
}

export default ErrorComponent