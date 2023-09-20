import Test from '../components/Test/Test.jsx'
import SearchContainer from '../components/SearchContainer/SearchContainer.jsx'
import "./Homepage.css"

export const metadata = {
  title : "HowImportant",
  description : "Home page"
}

function Homepage() {
  return (
    <main>
      <header className="homepage-header">
        <div className="homepage-inner">
          <h1>Discover Useful Ratings for Programming Topics</h1>

          <SearchContainer />
        </div>
      </header>

      <div className="test-content">
        <h1>Test it out!</h1>

        <div className="tests">
          <Test />

       
        </div>

        

      </div>
    </main>
  );
}

export default Homepage