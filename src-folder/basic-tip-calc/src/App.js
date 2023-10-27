import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [personOnePercentage, setPersonOnePercentage] = useState(0);
  const [personTwoPercentage, setPersonTwoPercentage] = useState(0);

  const updateBill = function ({ target }) {
    setBill(Number(target.value));
  };

  const updatePecentages = function ({ target }, funct) {
    funct(Number(target.value));
  };

  function handleReset() {
    setBill(0);
    setPersonOnePercentage(0);
    setPersonTwoPercentage(0);
  }

  const tip = (bill * (personOnePercentage + personTwoPercentage)) / 2 / 100;
  return (
    <div className="App">
      <div>
        <label for="bill-total">How much was the bill?</label>
        <input
          type="text"
          id="bill-total"
          name="bill-total"
          value={bill}
          onChange={updateBill}
        ></input>
      </div>
      <div>
        <label for="person-one-service">How did you like your service?</label>
        <select
          type="text"
          id="person-one-service"
          name="person-one-service"
          value={personOnePercentage}
          onChange={(e) => {
            updatePecentages(e, setPersonOnePercentage);
          }}
        >
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>
      </div>

      <div>
        <label for="person-two-service">
          How did you friend like the service?
        </label>
        <select
          type="text"
          id="person-two-service"
          name="person-two-service"
          value={personTwoPercentage}
          onChange={(e) => {
            updatePecentages(e, setPersonTwoPercentage);
          }}
        >
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>
      </div>
      <h2>
        You pay £{Math.floor(bill + tip)}(£{!bill ? 0 : bill}+£{tip} tip)
      </h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
