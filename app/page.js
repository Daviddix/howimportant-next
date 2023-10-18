import Test from '../components/Test/Test.jsx'
import SearchContainer from '../components/SearchContainer/SearchContainer.jsx'
import "./Homepage.css"


const topicsToTest = [{topicName : "Arrays in JavaScript", topicDescription : "Arrays in JavaScript are data structures that are used to store multiple values and those values can be...", topicLink : "/arrays/javascript"},
 {topicName : "Strings in Python", topicDescription : `Strings in Python are sequences of characters enclosed in single quotes ('') or double quotes (""). They are...`, topicLink : "/Strings/Python"},
  {topicName : "Functions in Python", topicDescription : "Functions in Python are used to group a set of statements together to perform a specific task. They can be...", topicLink : "Functions/Python"},
  {topicName : "Loops in Lua", topicDescription : "Loops in Lua are used to execute a block of code repeatedly. The most common types of loops in Lua are...", topicLink : "Loops/Lua"}
]

const mappedTopicTests = topicsToTest.map(({topicName, topicDescription, topicLink})=>{
  return <Test key={topicName} topicName={topicName} topicDescription={topicDescription} topicLink={topicLink} />
})

function Homepage({params}) {
  return (
    <main>
      <header className="homepage-header">
        <div className="homepage-inner">
        <h1>Discover Useful Ratings for Programming Topics</h1>
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