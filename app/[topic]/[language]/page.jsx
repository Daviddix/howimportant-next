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

import Loading from "./loading"

import { useEffect, useState } from 'react'
import Error from './ErrorComponent/error'

// export const metadata = {
//   title : "HowImportant | Objects in JavaScript",
//   description : "Result page"
// }

function Resultpage({params}) {
  const language = decodeURIComponent(params.language)
  const topic = decodeURIComponent(params.topic)

  const [isLoading, setIsLoading] = useState(true) 
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [usageInPercent, setUsageInPercent] = useState(0)
  const [currentStatus, setCurrentStatus] = useState("")
  const [docs, setDocs] = useState("")
  const [overview, setOverview] = useState("")
  const [codeExample, setCodeExample] = useState("")
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [articles, setArticles] = useState([])
  const [relatedTopics, setRelatedTopics] = useState([])
  const [quiz, setQuiz] = useState({})


  useEffect(()=>{
    setIsError(false)
    setIsLoading(true)
    fetch(`https://howimportant-server.onrender.com/${topic}/${language}`)
    .then((raw)=> raw.json())
    .then((data)=>{
      const gptResponse = JSON.parse(data.chatGPTValue)
      
      if(gptResponse.status.toLowerCase() == "failed"){
        setIsLoading(false)
        setIsError(true)
        throw new Error("Not Found")
        return
      }
      setUsageInPercent(gptResponse.usageInPercentage)
      setCurrentStatus(gptResponse.currentStatus)
      setDocs(gptResponse.documentation)
      setOverview(gptResponse.overviewOfTopic)
      setCodeExample(gptResponse.syntaxExample)
      setYoutubeVideos(data.youtubeValue)
      
      setArticles(gptResponse.articles)
      setRelatedTopics(gptResponse.relatedTopics)
      setQuiz(gptResponse.simpleQuiz)
      setIsLoading(false)
    })
    .catch((err)=>{
      setIsLoading(false)
      setIsError(true)
      setErrorMessage(err)
    })
  }, [])


  
  if (isLoading == false) {
    if(isError == true){
      return (<>
      <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer params={params} />
        </div>
    </header>
      <Error topic={topic} language={language} errorMessage={errorMessage} />
      </>)
    }
    return (
      <>
      <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer params={params} />
        </div>
    </header>
    <main className="result-main">

      <section className="result-head">
        <div className="result-head-inner">
          <h1>{topic} <span>in</span> {language}</h1>

          <div className="boxes">
            <UsageBox usageInPercent={usageInPercent} />
            
            <StatusBox currentStatus={currentStatus}  />

            <DocsBox docs={docs} />
          </div>

        </div>
      </section>

      <OverviewSection overview={overview} />

      <CodeSection codeExample={codeExample} language={language} />

      <ResourcesSection youtubeVideos={youtubeVideos} articles={articles} />

      <TopicsSection relatedTopics={relatedTopics} />

      <QuizSection quiz={quiz} />
    </main></>
  )
  }else{
    if(isError == true){
      return <Error topic={topic} language={language} />
    }
    return (
      <>
      <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer params={params} />
        </div>
    </header>
    
    <Loading />
    </>
      )
  }
  
}

export default Resultpage