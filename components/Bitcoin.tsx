import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Weather.css';

const BitcoinPriceComponent: React.FC = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const API_KEY = 'slnkIBA6OWPYyIBzueM0c_LlSbt7Ypr6';

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=slnkIBA6OWPYyIBzueM0c_LlSbt7Ypr6',
          {
            headers: {
              'X-CMC_PRO_API_KEY': API_KEY
            }
          }
        );
        console.log(response.data);

        // Since we're fetching blockchain statistics, access the relevant data
        setBitcoinPrice(response.data.data.blockchain_count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        setIsLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, [API_KEY]);

  return (
    <div className='bitcoin-price-container'>
      <h2>Blockchain Statistics</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Current Blockchain Count:$57243.6 {bitcoinPrice}</p>
      )}
    </div>
  );
};

export default BitcoinPriceComponent;