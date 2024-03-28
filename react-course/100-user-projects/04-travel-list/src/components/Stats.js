export default function Stats({ items }) {
  // Base State
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list and they will appear here.</em>
      </footer>
    );
  }

  // Derived State
  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentOfPackedItems = Math.round(
    (packedItems / numOfItems) * 100 || 0
  );

  return (
    <footer className="stats">
      <em>
        You have {numOfItems} items on your list, and you already packed{" "}
        {packedItems} ({percentOfPackedItems}%)
      </em>
    </footer>
  );
}
