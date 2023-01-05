import "./App.css";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <Input
        renderTextBelow={(value) => {
          return <>The value is {value}</>;
        }}
      />

      <Input
        renderTextBelow={(value) => {
          return <>The multiplied value is {value * 10}</>;
        }}
      />
    </div>
  );
}

export default App;

// render props: props itself is a function that returns a JSX element
