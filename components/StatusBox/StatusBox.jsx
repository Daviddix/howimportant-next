import "./StatusBox.css"

function StatusBox({currentStatus}) {
  return (
    <div className="status">
              <h4>Status</h4>
              <div className={currentStatus.toLowerCase() == "in use"? "chip-high" : "chip-low"}>
                {currentStatus}
              </div>
            </div>
  )
}

export default StatusBox