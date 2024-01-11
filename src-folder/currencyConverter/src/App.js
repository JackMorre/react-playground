import { useEffect, useState } from "react";

// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchange, setExchange] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const fetchData = async () => {
        if (!amount) return;
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setExchange(data.rates[toCurrency]);
        setIsLoading(false);
      };

      if (fromCurrency === toCurrency) return setExchange(amount);
      fetchData();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => {
          setfromCurrency(e.target.value);
        }}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => {
          setToCurrency(Number(e.target.value));
        }}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {!isLoading ? (
        <p>
          {exchange} {toCurrency}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
