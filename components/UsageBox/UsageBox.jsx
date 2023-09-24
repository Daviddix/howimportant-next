"use client"
import { useEffect, useState } from "react"
import "./UsageBox.css"

function UsageBox({usageInPercent}) {
  const [usageClassName, setUsageClassName] = useState("")

  useEffect(()=>{
    if (usageInPercent <= 49) {
     setUsageClassName("usage low") 
    }else if(usageInPercent <= 79){
      setUsageClassName("usage med") 
    }else{
      setUsageClassName("usage high") 
    }
  }, [usageInPercent])

  return (
    <div className={usageClassName}>
              <h4>Usage</h4>
              <p>{usageInPercent}%</p>
    </div>
  )
}

export default UsageBox