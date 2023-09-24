"use client"

import SearchContainer from '../../../components/SearchContainer/SearchContainer'
import "./result.css"

import UsageBox from '../../../components/UsageBox/UsageBox'

import StatusBox from '../../../components/StatusBox/StatusBox'

import DocsBox from '../../../components/DocsBox/DocsBox'

import OverviewSection from '../../../components/OverviewSection/OverviewSection'

import CodeSection from '../../../components/CodeSection/CodeSection'

import ResourcesSection from '../../../components/ResourcesSection/ResourcesSection'

import TopicsSection from '../../../components/TopicsSection/TopicsSection'

import QuizSection from '../../../components/QuizSection/QuizSection'

import ErrorComponent from '../../../components/ErrorComponent/ErrorComponent'
import { useEffect, useState } from 'react'

// export const metadata = {
//   title : "HowImportant | Objects in JavaScript",
//   description : "Result page"
// }

function Resultpage({params}) {
  const language = params.language
  const topic = params.topic

  
  const [usageInPercent, setUsageInPercent] = useState(0)
  const [currentStatus, setCurrentStatus] = useState("")
  const [docs, setDocs] = useState("")
  const [overview, setOverview] = useState("")
  const [codeExample, setCodeExample] = useState("")
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [articles, setArticles] = useState([])
  const [relatedTopics, setRelatedTopics] = useState([])


  useEffect(()=>{
    fetch(`http://localhost:3001/${topic}/${language}`)
    .then((raw)=> raw.json())
    .then((data)=>{
      const gptResponse = JSON.parse(data.chatGPTValue)
      setUsageInPercent(gptResponse.usageInPercentage)
      setCurrentStatus(gptResponse.currentStatus)
      setDocs(gptResponse.documentation)
      setOverview(gptResponse.overviewOfTopic)
      setCodeExample(gptResponse.syntaxExample)
      setYoutubeVideos(data.youtubeValue)
    })
    .catch((err)=>{
      throw new Error
    })
  }, [])


  return (
    <main className="result-main">
    <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer />
        </div>
    </header>

    {/* <ErrorComponent /> */}

      <section className="result-head">
        <div className="result-head-inner">
          <h1>{topic} in {language}</h1>

          <div className="boxes">
            <UsageBox usageInPercent={usageInPercent} />
            
            <StatusBox currentStatus={currentStatus}  />

            <DocsBox docs={docs} />
          </div>

        </div>
      </section>

      <OverviewSection overview={overview} />

      <CodeSection codeExample={codeExample} language={language} />

      <ResourcesSection youtubeVideos={youtubeVideos} />

      <TopicsSection />

      <QuizSection />
    </main>
  )
}

export default Resultpage