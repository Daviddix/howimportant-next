import "./SingleVideo.css"

function SingleVideo({videoTitle, thumbnail, channelName, id}) {
  return (
    <div className="youtube-video-container">
              <iframe
  id="inlineFrameExample"
  title={videoTitle}
  
  src={"https://www.youtube.com/embed/" + id}
  className="video"
>
</iframe>

              <div className="name-and-duration">
                <p className='video-name'>{videoTitle}</p>
              </div>
              <p className="creator">{channelName}</p>
            </div>
  )
}

export default SingleVideo