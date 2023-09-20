import Image from "next/image"
import overviewIcon from "../../assets/icons/overview-icon.svg"
import "./OverviewSection.css"

function OverviewSection() {
  return (
    <section className="overview">
        <div className="overview-inner">
          <div className="overview-heading">
          <Image src={overviewIcon} alt="overview icon" />
          <h2>Overview</h2>
          </div>
          <p className="overview-body">
            JavaScript objects is a data type that allows you to store multiple collections of data. Each collection has a name and an associated value. Objects can store different forms of data e.g strings, functions, arrays e.t.c
          </p>
        </div>
      </section>
  )
}

export default OverviewSection