import Link from 'next/link'
import React from 'react'
import "./SingleTopic.css"

function SingleTopic({topic, language}) {
  return (
    <Link
    href={`/${topic.replace("/", "-")}/${language}`}
    >
    <p className="topic">{topic} in {language}</p>
    </Link>
  )
}

export default SingleTopic