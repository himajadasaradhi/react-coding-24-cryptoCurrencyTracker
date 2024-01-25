// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

/* const currenciesList = [
  {
    currencyName: 'Bitcoin',
    usdValue: '46750.63',
    euroValue: '39596.07',
    id: '6e937df9-1345-4c2f-8ace-babff0e5108f',
    currencyLogo: 'https://www.cryptocompare.com/media/19633/btc.png',
  },
  {
    currencyName: 'Bitcoin',
    usdValue: '46750.63',
    euroValue: '39596.07',
    id: '6e937df9-1345-4c2f-8ace-babff0e5108f',
    currencyLogo: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
  },
] */

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount = () => {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({currenciesList: updatedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <div>
              <div className="green-bg">
                <h1 className="coin-type">Coin Type</h1>
                <div className="usd-euro">
                  <h1 className="usd">USD</h1>
                  <h1 className="euro">EURO</h1>
                </div>
              </div>
              <ul>
                {currenciesList.map(eachList => (
                  <CryptocurrencyItem
                    currenciesList={eachList}
                    key={eachList.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
