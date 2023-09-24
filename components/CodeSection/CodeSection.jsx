import Image from "next/image"
import codeIcon from "../../assets/icons/code-icon.svg"
import "./CodeSection.css"

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
            <code >
              <pre>

              {codeExample}
              </pre>
              {/* const person = &#123; <br /> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; name : "John", <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; age : 20 <br />
              &#125; ; */}
            </code>
          </div>

        </div>
      </section>
  )
}

export default CodeSection