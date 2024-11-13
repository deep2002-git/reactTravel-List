export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in the list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Ready to go ✈️"
          : ` 💼 You have ${numItems} item in your , and you already packed numPacked ${" "}
        ${numPacked} (${percentage}%.)`}
      </em>
    </footer>
  );
}
