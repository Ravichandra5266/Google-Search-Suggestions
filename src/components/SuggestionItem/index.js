import './index.css'

const SuggestionItem = props => {
  const {eachItemDetails, userTrigger} = props
  const {id, suggestion} = eachItemDetails
  const search = () => {
    userTrigger(suggestion)
  }

  return (
    <li className="li-card">
      <p className="li-para">{suggestion}</p>
      <button type="button" className="li-btn" onClick={search}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="li-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
