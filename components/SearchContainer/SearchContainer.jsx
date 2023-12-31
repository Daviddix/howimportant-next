"use client"

import Image from "next/image"
import searchIcon from "../../assets/icons/Group.svg"
import "./SearchContainer.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'


function SearchContainer({params}) {
  const languageFromBar = params.language
  const topicFromBar = params.topic
  const [topic, setTopic] = useState(topicFromBar || "")
  const [language, setLanguage] = useState(languageFromBar ||"JavaScript")
  const router = useRouter()

  const programmingLanguages = [
    "JavaScript",
    "Java",
    "C++",
    "Python",
    "C#",
    "Ruby",
    "Swift",
    "Go",
    "Rust",
    "Kotlin",
    "PHP",
    "Scala",
    "Haskell",
    "Perl",
    "Lua",
    "R",
    "Objective-C",
    "Elixir",
    "Clojure",
    "F#",
    "Groovy",
    "COBOL",
    "Ada",
    "Fortran",
    "Lisp",
    "Assembly"
  ]

  function handleSearch(e){
    e.preventDefault()
    if(topic && language){
      router.push(`/${encodeURIComponent(topic.trim())}/${encodeURIComponent(language.trim())}`)
    }
  }

  useEffect(()=>{
    if(languageFromBar && topicFromBar){
      setLanguage(decodeURIComponent(languageFromBar).charAt(0).toUpperCase() + decodeURIComponent(languageFromBar).slice(1))
      setTopic(decodeURIComponent(topicFromBar))
    }
  }, [])

  return (
    <form>
            <div className="input-container">
              <label htmlFor="topic">Programming Topic</label>

              <div className="input-and-select">
                <input
                  type="search"
                  name="topic"
                  autoComplete="true"
                  placeholder="Objects"
                  id="topic"
                  required
                  value={topic}
                  onChange={(e)=> setTopic(e.target.value)}
                />

                <select 
                value={language}
                onChange={(e)=> setLanguage(e.target.value)}
                className="fake-select">
                  {programmingLanguages.map((language)=>{
                    return <option key={language} onClick={(e)=> setLanguage(e.target.value)} defaultValue={language}>{language}</option>
                  })}
                </select>

                <Image alt="search-icon" src={searchIcon} className="search-icon"/>
              </div>
            </div>

            <button
            onClick={(e)=> handleSearch(e)}
             type="submit">Search</button>
          </form>
  )
}

export default SearchContainer