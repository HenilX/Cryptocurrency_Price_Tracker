import React, { useState, useEffect } from "react";
import Coin from "./coin";
import axios from "axios";

export default function Name() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="coin-search my-3">
        <form className="coin-search  ">
          <input
            class="form-control me-2"
            type="text"
            onChange={handleChange}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="coin-show">
        <div className="name">Name</div>
        <div className="symbol">Symbol</div>
        <div className="price">Price</div>
        <div className="volume">Volume</div>
        <div className="per">Percentage</div>
        <div className="mar">Market Cap</div>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <>
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          </>
        );
      })}
    </>
  );
}
