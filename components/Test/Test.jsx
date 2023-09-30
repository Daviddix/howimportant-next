"use client"
import Image from "next/image"
import arrow from "../../assets/icons/right-arrow.svg"
import "./Test.css"
import Link from "next/link"

function Test({topicName, topicDescription, topicLink}) {
  
  return (
      <Link href={topicLink}>
    <div 
    tabIndex={0} className="test-container">
          <div className="text-content">
            <h2>{topicName}</h2>
            <p>
              {topicDescription}
            </p>
          </div>

          <Image src={arrow} alt="arrow svg" />
        </div>
        </Link>
  )
}

export default Test