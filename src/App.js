import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      news: []
    }
  }


  componentDidMount() {
    const imageUrlPrefix = 'https://www.cryptocompare.com/';
    const coinUrl = 'https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=BTC,ETH,ZEC,REP,DASH,BCH,LTC,XMR,XRP,TRX,ADA,USDT,ETC,XTZ&tsyms=USD,EUR,GHS';
    const newsUrl = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

    axios.get(coinUrl)
      .then(result => {
        const cryptos = result.data.Data;
        console.log('cryptos', cryptos);
        this.setState({ cryptos});
    });

    axios.get(newsUrl)
      .then(result => {
        const news = result.data;
        console.log('news', news);
        this.setState({
          news
        })
      });
  }


  render () {
    return (
      <div className="App">
        {Object.entries(this.state.cryptos).map(
          (crypto, index) => (
            <div className="crypto-container" key={index}>
              <span>{crypto[1].CoinInfo.FullName}</span>
              <span>{crypto[1].CoinInfo.AssetLaunchDate}</span>
              <span>{crypto[1].CoinInfo.Name}</span>
              <span>{crypto[1].CoinInfo.ImageUrl}</span>
              <span>{crypto[1].CoinInfo.Url}</span>
              <span>{crypto[1].CoinInfo.TotalCoinsMined}</span>
              <span>{crypto[1].Price.USD}</span>
              <span>{crypto[1].Price.EUR}</span>
              <span>{crypto[1].Price.GHS}</span>
            </div>
          ),
          // console.log('cr', crypto[1].CoinInfo.AssetLaunchDate);
        )}
      {/* </div>

      <div className="News"> */}
        {Object.entries(this.state.news).map(
          (item, index) => (
            <div className="crypto-container" key={index}>
              {/* <span>{item[1].CoinInfo.FullName}</span>
              <span>{item[1].CoinInfo.AssetLaunchDate}</span>
              <span>{item[1].CoinInfo.Name}</span>
              <span>{item[1].CoinInfo.ImageUrl}</span>
              <span>{item[1].CoinInfo.Url}</span>
              <span>{item[1].CoinInfo.TotalCoinsMined}</span>
              <span>{item[1].Price.USD}</span>
              <span>{item[1].Price.EUR}</span>
              <span>{item[1].Price.GHS}</span> */}
            </div>
          ),
          // console.log('cr', crypto[1].CoinInfo.AssetLaunchDate);
        )}
      </div>
    );
  }
}

export default App;
