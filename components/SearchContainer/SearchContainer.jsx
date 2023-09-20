import Image from "next/image"
import searchIcon from "../../assets/icons/Group.svg"
import arrow from "../../assets/icons/right-arrow.svg"
import "./SearchContainer.css"

function SearchContainer() {
  return (
    <form>
            <div className="input-container">
              <label htmlFor="topic">Programming Topic</label>

              <div className="input-and-select">
                <input
                  type="text"
                  name="topic"
                  autoComplete="true"
                  placeholder="Objects"
                  id="topic"
                />

                <select name="" id="" className="fake-select">
                  <option value="">JavaScript</option>
                </select>

                <Image src={searchIcon} className="search-icon"/>
              </div>
            </div>

            <button type="submit">Search</button>
          </form>
  )
}

export default SearchContainer