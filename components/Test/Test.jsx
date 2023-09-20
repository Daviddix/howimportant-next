import Image from "next/image"
import arrow from "../../assets/icons/right-arrow.svg"
import "./Test.css"

function Test() {
  return (
    <div tabIndex={0} className="test-container">
          <div className="text-content">
            <h2>Arrays in JavaScript</h2>
            <p>
              Arrays in JavaScript are data structures that are used to store
              multiple values and those values can be...
            </p>
          </div>

          <Image src={arrow} alt="arrow svg" />
        </div>
  )
}

export default Test