// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currenciesList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currenciesList
  return (
    <li className="item-row">
      <div className="currency-name-row">
        <img src={currencyLogo} alt={currencyName} className="currency" />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="usd-euro-row">
        <p className="usdValue">{usdValue}</p>
        <p className="euroValue">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
