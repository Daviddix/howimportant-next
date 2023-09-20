import SearchContainer from '../../components/SearchContainer/SearchContainer'
import "./result.css"

import UsageBox from '../../components/UsageBox/UsageBox'

import StatusBox from '../../components/StatusBox/StatusBox'

import DocsBox from '../../components/DocsBox/DocsBox'

import OverviewSection from '../../components/OverviewSection/OverviewSection'

import CodeSection from '../../components/CodeSection/CodeSection'

import ResourcesSection from '../../components/ResourcesSection/ResourcesSection'

import TopicsSection from '../../components/TopicsSection/TopicsSection'

import QuizSection from '../../components/QuizSection/QuizSection'

import ErrorComponent from '../../components/ErrorComponent/ErrorComponent'

export const metadata = {
  title : "HowImportant | Objects in JavaScript",
  description : "Result page"
}

function Resultpage() {
  return (
    <main className="result-main">
    <header className="homepage-header">
        <div className="homepage-inner">
          <SearchContainer />
        </div>
    </header>

    {/* <ErrorComponent /> */}

      <section className="result-head">
        <div className="result-head-inner">
          <h1>Objects in JavaScript</h1>

          <div className="boxes">
            <UsageBox />
            
            <StatusBox />

            <DocsBox />
          </div>

        </div>
      </section>

      <OverviewSection />

      <CodeSection />

      <ResourcesSection />

      <TopicsSection />

      <QuizSection />
    </main>
  )
}

export default Resultpage