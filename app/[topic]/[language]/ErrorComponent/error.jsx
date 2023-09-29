"use client"
import "./error.css"
import signal from "../../../../assets/images/illustration.svg"
import BS from "../../../../assets/images/Bad-Signal.svg"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"


function Error({topic, language, errorMessage}) {

  useEffect(()=>{
    console.log(errorMessage)
    console.log(errorMessage.toString())  
  }, [])
  
    if(errorMessage.toString() == "TypeError: NetworkError when attempting to fetch resource."){
      return (<main className="error">
      <Image src={BS} alt="girl holding a phone" />

  <p>
      {`Oops, it seems like there's an issue with your internet connection. Please fix it up and try again`}
  </p>
  </main>)
    }
    else{    
    return (
    <main className="error">
        <Image src={signal} alt="girl holding a phone" />

    <p>
        {`Sorry, it seems like we can't find any info on ${topic} in ${language}, try searching for a different term`}
    </p>

    <h1>You can Try</h1>

    <Link href="/functions/javascript">Functions in JavaScript</Link>
    <Link href="/loops/python">Loops in Python</Link>
    <Link href="/functions/rust">Functions in Rust</Link>
    <Link href="/lists/python">Lists in Python</Link>
    </main>
  )
    }
}

export default Error