export function Stats({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  console.log(numItem);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got every thing ! ready to go ✈️"
          : `💼You have ${numItem} items and your list already packed ${numPacked} items , (${percentage}%)`}
      </em>
    </footer>
  );
}
