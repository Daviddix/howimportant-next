"use client"
import Image from "next/image"
import codeIcon from "../../assets/icons/code-icon.svg"
import "./CodeSection.css"
import "react-highlight/node_modules/highlight.js/styles/vs2015.css";
import Highlight from 'react-highlight'

function CodeSection({codeExample, language}) {
  
  return (
    <section className="code-example">
        <div className="code-example-inner">
          <div className="code-example-heading">
          <Image src={codeIcon} alt="" />
          <h2>Code Example</h2>
          </div>

          <div className="code-diagram">
            <div className="code-diagram-header">
              <p>{language}</p>
            </div>
            <Highlight className={language}>
              {codeExample}
              </Highlight>
          </div>

        </div>
      </section>
  )
}

export default CodeSection