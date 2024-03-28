import React from "react";
import "./App.css";

function App() {
  const [bill, setBill] = React.useState(0);
  const [userTip, setUserTip] = React.useState(0);
  const [friendTip, setFriendTip] = React.useState(0);

  function handleReset(e) {
    e.preventDefault();
    e.stopPropagation();
    setBill(0);
    setUserTip(0);
    setFriendTip(0);
  }

  return (
    <form className="App">
      <BillAmount bill={bill} setBill={setBill}>
        How much was the bill?
      </BillAmount>
      <ServiceSatisfaction id="you_like" tip={userTip} setTip={setUserTip}>
        How did you like the service?
      </ServiceSatisfaction>
      <ServiceSatisfaction
        id="friend_like"
        tip={friendTip}
        setTip={setFriendTip}
      >
        How did your friend like the service?
      </ServiceSatisfaction>
      <TipAmountDisplay bill={bill} userTip={userTip} friendTip={friendTip} />
      <ResetButton onClick={handleReset} />
    </form>
  );
}

function BillAmount({ bill, setBill, children }) {
  return (
    <div>
      <label htmlFor="bill_amount">{children}</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        name="bill_amount"
        id="bill_amount"
      />
    </div>
  );
}

function ServiceSatisfaction({ id, children, tip, setTip }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select
        name={id}
        id={id}
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      >
        <TipAmount tip_value="0">Disatisfied (0%)</TipAmount>
        <TipAmount tip_value="10">It was good (10%)</TipAmount>
        <TipAmount tip_value="20">Absolutely Amazing (20%)</TipAmount>
      </select>
    </div>
  );
}

function TipAmount({ tip_value, children }) {
  return <option value={tip_value}>{children}</option>;
}

function TipAmountDisplay({ bill, userTip, friendTip }) {
  if (bill === 0) return null;

  const message = getCalculatedSummary();

  function getCalculatedSummary() {
    const justBill = Number(bill);
    const averageTip = (Number(userTip) + Number(friendTip)) / 2;
    const tipAmount = (averageTip / 100) * bill;
    const totalBill = Number(bill) + tipAmount;

    return `
      You pay $${totalBill.toFixed(2)} ($${justBill.toFixed(2)} 
      + $${tipAmount.toFixed(2)})`;
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

function ResetButton({ onClick }) {
  return (
    <div>
      <br />
      <button type="reset" onClick={(e) => onClick(e)}>
        Reset
      </button>
    </div>
  );
}

export default App;
