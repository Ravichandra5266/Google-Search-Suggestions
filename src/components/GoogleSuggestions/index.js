import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchResult: ''}

  onSearchInput = event => {
    this.setState({searchResult: event.target.value})
  }

  userTrigger = value => {
    this.setState({searchResult: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchResult} = this.state
    const filterResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchResult.toLowerCase()),
    )

    return (
      <div className="container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="google logo"
          />
        </div>

        <ul className="ul-card">
          <div className="inputEle">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
              alt="search icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.onSearchInput}
            />
          </div>
          {filterResult.map(eachItem => (
            <SuggestionItem
              eachItemDetails={eachItem}
              key={eachItem.id}
              userTrigger={this.userTrigger}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
