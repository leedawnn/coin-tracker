import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins!</h1>
      {loading ? '' : <h3>{coins.length}개의 코인이 있습니다.</h3>}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map(coin => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

// TODO: input창 만들어서 내가 가진 달러로 얼만큼의 비트코인을 살 수 있는지 확인하기
// TODO: 에러 없애기..

export default App;
