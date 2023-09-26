import Link from 'next/link'
import React from 'react'

function SingleTopic({topic, language}) {
  return (
    <Link
    href={`/${topic}/${language}`}
    >
    <p>{topic} in {language}</p>
    </Link>
  )
}

export default SingleTopic