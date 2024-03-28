import "./styles.css";
import React from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [currency, setCurrency] = React.useState("0");
  const [currencyFrom, setCurrencyFrom] = React.useState("EUR");
  const [currencyTo, setCurrencyTo] = React.useState("USD");

  function handleSetCurrencyFrom(e) {
    console.log(e.target.value);
    if (e.target.value !== currencyTo) {
      setCurrencyFrom(e.target.value);
    }
  }

  function handleSetCurrencyTo(e) {
    if (e.target.value !== currencyFrom) {
      setCurrencyTo(e.target.value);
    }
  }

  React.useEffect(() => {
    fetch(
      `https://api.frankfurter.app/latest?amount=${currency}&from=${currencyFrom}&to=${currencyTo}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrency(data.rates[currencyTo]);
      });
  }, [currencyFrom, currencyTo]);

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <select value={currencyFrom} onChange={handleSetCurrencyFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currencyTo} onChange={handleSetCurrencyTo}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}
