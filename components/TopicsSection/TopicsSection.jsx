import Image from "next/image"
import topicsIcon from "../../assets/icons/topics-icon.svg"
import SingleTopic from "../SingleTopic/SingleTopic"
import "./TopicsSection.css"

function TopicsSection({relatedTopics}) {
  const mappedTopics = relatedTopics.map((topic) => {
    return <SingleTopic topic={topic.topicName} language={topic.language} />
  })
  return (
    <section className="topics">
        <div className="topics-inner">
          <div className="topics-heading">
          <Image src={topicsIcon} alt="topics icon" />
          <h2>Related Topics</h2>
          </div>

          <div className="topics-body">
          {mappedTopics}
        </div>
        </div>

        
      </section>
  )
}

export default TopicsSection