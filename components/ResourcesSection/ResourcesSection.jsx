import resourcesIcon from "../../assets/icons/resources-icon.svg"
import youtubeIcon from "../../assets/icons/yt-icon.svg"
import articlesIcon from "../../assets/icons/article-icon.svg"

import "./ResourcesSection.css"
import SingleArticle from "../SingleArticle/SingleArticle"
import SingleVideo from "../SingleVideo/SingleVideo"
import Image from "next/image"

function ResourcesSection() {
  return (
    <section className="resources">
      <div className="resources-inner">
        <div className="resources-heading">
          <Image src={resourcesIcon} alt="" />
          <h2>Helpful Resources</h2>
          </div>

          <div className="resources-tab">

            <button className="youtube">
              <Image src={youtubeIcon} alt="youtube icon" />
              <p>Youtube Tutorials</p>
            </button>

            <button className="articles active">
              <Image src={articlesIcon} alt="articles icon" />
              <p>Articles</p>
            </button>


          </div>

          {/* <div className="youtube-resources">
            

           <SingleVideo />
          </div> */}

          <div className="article-resources">
            <SingleArticle />

             
          </div>

      </div>

      </section>
  )
}

export default ResourcesSection