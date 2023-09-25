"use client"
import {useState} from "react"

import resourcesIcon from "../../assets/icons/resources-icon.svg"
import youtubeIcon from "../../assets/icons/yt-icon.svg"
import articlesIcon from "../../assets/icons/article-icon.svg"

import "./ResourcesSection.css"
import SingleArticle from "../SingleArticle/SingleArticle"
import SingleVideo from "../SingleVideo/SingleVideo"
import Image from "next/image"

function ResourcesSection({youtubeVideos, articles}) {
  const [activeTab, setActiveTab] = useState("youtube")
  const mappedVideos = youtubeVideos.map((video)=>{
    return <SingleVideo id={video.id.videoId} key={video.id.videoId} videoTitle={video.snippet.title} thumbnail={video.snippet.thumbnails.high.url} channelName={video.snippet.channelTitle} />
  })

  const mappedArticles = articles.map((article)=>{
    return <SingleArticle title={article.title} site={article.site} link={article.link} />
  })
  return (
    <section className="resources">
      <div className="resources-inner">
        <div className="resources-heading">
          <Image src={resourcesIcon} alt="" />
          <h2>Helpful Resources</h2>
          </div>

          <div className="resources-tab">

            <button 
            onClick={()=> setActiveTab("youtube")}
            className={activeTab == "youtube"? "youtube active" : "youtube"}>
              <Image src={youtubeIcon} alt="youtube icon" />
              <p>Youtube Tutorials</p>
            </button>

            <button 
             onClick={()=> setActiveTab("articles")}
            className={activeTab == "articles"? "articles active" : "articles"}>
              <Image src={articlesIcon} alt="articles icon" />
              <p>Articles</p>
            </button>


          </div>

          {activeTab == "youtube" && <div className="youtube-resources">            

           {mappedVideos}
          </div> }

          {activeTab == "articles" && <div className="article-resources">
            {mappedArticles}
          </div>}

      </div>

      </section>
  )
}

export default ResourcesSection