import Test from '../components/Test/Test.jsx'
import SearchContainer from '../components/SearchContainer/SearchContainer.jsx'
import "./Homepage.css"


const topicsToTest = [{topicName : "Arrays in JavaScript", topicDescription : "Arrays in JavaScript are data structures that are used to store multiple values and those values can be...", topicLink : "/arrays/javascript"},
 {topicName : "Lists in Python", topicDescription : "Arrays in JavaScript are data structures that are used to store multiple values and those values can be...", topicLink : "/List/Python"},
  {topicName : "Functions in Rust", topicDescription : "Arrays in JavaScript are data structures that are used to store multiple values and those values can be...", topicLink : "Functions/Rust"}]

const mappedTopicTests = topicsToTest.map(({topicName, topicDescription, topicLink})=>{
  return <Test key={topicName} topicName={topicName} topicDescription={topicDescription} topicLink={topicLink} />
})

function Homepage({params}) {
  return (
    <main>
      <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer params={params} />
        </div>
    </header>
      <div className="test-content">
        <h1>Test it out!</h1>

        <div className="tests">
          {mappedTopicTests}       
        </div>

        

      </div>
    </main>
  );
}

export default Homepage