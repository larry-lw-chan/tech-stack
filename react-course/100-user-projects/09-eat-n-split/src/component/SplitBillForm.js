import React from "react";

export default function SplitBillForm({ selectedFriend, friends, setFriends }) {
  const [bill, setBill] = React.useState(0);
  const [yourExpense, setYourExpense] = React.useState(0);
  const [theirExpense, setTheirExpense] = React.useState(0);
  const [whoPay, setWhoPay] = React.useState("you");

  function handleSplitBill(e) {
    e.preventDefault();

    if (whoPay === "you") {
      selectedFriend.balance = selectedFriend.balance + (bill - yourExpense);
    } else {
      selectedFriend.balance = selectedFriend.balance - (bill - theirExpense);
    }

    const newFriendsList = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return selectedFriend;
      } else {
        return friend;
      }
    });
    setFriends(newFriendsList);
  }

  if (selectedFriend === null) {
    return <p className="info">Select a friend to split the bill</p>;
  }
  return (
    <form className="form-split-bill">
      <h3>Split a bill with {selectedFriend.name}</h3>
      <div></div>

      <label htmlFor="bill">💰Bill value</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label htmlFor="your_expense">🧍Your expense</label>
      <input
        type="number"
        id="your_expense"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />

      <label htmlFor="their_expense">🧍‍♀️{selectedFriend.name}'s expense</label>
      <input
        type="number"
        id="their_expense"
        value={theirExpense}
        onChange={(e) => setTheirExpense(e.target.value)}
      />

      <label htmlFor="who_pay">🤮Who's paying the bill?</label>
      <select
        id="who_pay"
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="you">You</option>
        <option value="they">{selectedFriend.name}</option>
      </select>

      <button className="button" onClick={(e) => handleSplitBill(e)}>
        Split bill
      </button>
    </form>
  );
}
