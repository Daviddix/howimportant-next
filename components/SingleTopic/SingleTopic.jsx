import Link from 'next/link'
import React from 'react'

function SingleTopic({topic, language}) {
  return (
    <Link
    href={`/${topic.replace("/", "-")}/${language}`}
    >
    <p>{topic} in {language}</p>
    </Link>
  )
}

export default SingleTopic