import { useState } from "react";
import "./index.css";
import { Logo } from "./Components2/Logo";
import { Form } from "./Components2/Form";
import { PackingList } from "./Components/PackingList";
import { Stats } from "./Components2/Stats";
// console.log("out of the app component");
const initialItem = [
  { id: 1, description: "passPort", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 3, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
];
export default function App2() {
  // console.log("inside the app component");
  const [items, setItems] = useState(initialItem);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    // setItems((items) => items.push(item));
  }
  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirm = window.confirm("are you want to clear all items");

    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggle={handleToggleItem}
        onClear={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
