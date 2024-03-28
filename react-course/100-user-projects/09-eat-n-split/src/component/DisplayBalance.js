export default function DisplayBalance({ name, balance }) {
  if (balance < 0) {
    return (
      <p className="red">
        You owe {name} ${Math.abs(balance).toFixed(2)}
      </p>
    );
  } else if (balance > 0) {
    return (
      <p className="green">
        {name} owes you ${balance.toFixed(2)}
      </p>
    );
  } else {
    return <p>You and {name} are even</p>;
  }
}
