import {useContext, useEffect, useState} from 'react';import './Coin.css';
import {useParams} from 'react-router-dom';
import {CoinContext} from '../../context/coinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const {coinId} = useParams();

  const [HistoricalData, setHistoricalData] = useState();
  const [coinData, setCoinData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-M2R6dzFxr5SGLffUh7LsPhtC',
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-M2R6dzFxr5SGLffUh7LsPhtC',
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && HistoricalData) {
    return (
      <div className='coin'>
        <div className='coin-name'>
          <img
            src={coinData.image.large}
            alt=''
          />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()}){' '}
            </b>
          </p>
        </div>
        <div className='coin-chart'>
          <LineChart HistoricalData={HistoricalData} />
        </div>

        <div className='coin-info'>
          <ul>
            <li>Crypto Market Rank </li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          {/*  */}
          <ul>
            <li>Current Price </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>

          <ul>
            <li>Market Cap </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.market_cap[currency.link]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.high_24h[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.low_24h[currency.name]?.toLocaleString()}
            </li>
{/*             <li>
      {coinData.description[currency.name]?.toLocaleString()}
            </li> */}
          </ul>

          <p>
            {coinData.description.en}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    );
  }
};

export default Coin;
