export function Item({ item, onDeleteItem, onToggle }) {
  console.log(item.packed);
  return (
    <li>
      <input
        type="checkBox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {"."}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
