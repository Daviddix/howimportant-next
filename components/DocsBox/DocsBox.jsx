import "./DocsBox.css"

function DocsBox({docs}) {
  return (
    <div className="docs">
              <h4>Documentation</h4>

              <a href={docs || ""} target="_blank">
                {docs?.substr(0, 25)}...
              </a>
            </div>
  )
}

export default DocsBox