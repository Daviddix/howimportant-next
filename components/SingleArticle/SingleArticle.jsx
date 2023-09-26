import "./SingleArticle.css"
import bookIcon from "../../assets/icons/book.svg"
import rightArrow from "../../assets/icons/arrow-up-right.svg"
import Image from "next/image"

function SingleArticle({title, site, link}) {
  return (
    <a href={link} target="_blank">
    <div className="article">
              <Image src={bookIcon} alt="book icon" />
              
              <div className="other-info">
                <div className="article-heading">
                  <h1>{title}</h1>
                  <Image src={rightArrow} alt="arrow icon" />
                </div>
                <p className="source">{site}</p>
              </div>
            </div>
            </a>
  )
}

export default SingleArticle