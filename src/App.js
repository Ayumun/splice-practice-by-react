import "./styles.css";

export default function App() {
  /* splice(start, deleteCount, item1) */
  const items = ["item1", "item2", "item3"];
  //items =>  ["item2", "item1", "item3"];
  const remove = items.splice(0, 1);
  items.splice(1, 0, remove[0]);
  console.log(items);
  // const result = items.splice(1, 0, tmp);
  // console.log(result);
  return (
    <div className="App">
      <h1>splice関数のお勉強</h1>
    </div>
  );
}
