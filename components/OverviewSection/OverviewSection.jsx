import Image from "next/image"
import overviewIcon from "../../assets/icons/overview-icon.svg"
import "./OverviewSection.css"

function OverviewSection({overview}) {
  return (
    <section className="overview">
        <div className="overview-inner">
          <div className="overview-heading">
          <Image src={overviewIcon} alt="overview icon" />
          <h2>Overview</h2>
          </div>
          <p className="overview-body">
            {overview}
          </p>
        </div>
      </section>
  )
}

export default OverviewSection