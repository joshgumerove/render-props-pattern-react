import "./App.css";
import Input from "./Input";

function App() {
  const showValue = (value) => <>The value is {value}</>;

  const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>;

  return (
    <div className="App">
      <h1>Render Props</h1>
      <Input renderTextBelow={showValue} />

      <Input renderTextBelow={multiplyByTen} />
    </div>
  );
}

export default App;

// render props: props itself is a function that returns a JSX element
