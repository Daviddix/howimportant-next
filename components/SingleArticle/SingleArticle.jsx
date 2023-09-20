import "./SingleArticle.css"
import bookIcon from "../../assets/icons/book.svg"
import rightArrow from "../../assets/icons/arrow-up-right.svg"
import Image from "next/image"

function SingleArticle() {
  return (
    <div className="article">
              <Image src={bookIcon} alt="book icon" />
              
              <div className="other-info">
                <div className="article-heading">
                  <h1>A deeper dive into JavaScript Objects</h1>
                  <Image src={rightArrow} alt="arrow icon" />
                </div>
                <p className="source">Medium</p>
              </div>
            </div>
  )
}

export default SingleArticle