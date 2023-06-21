import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <h1>Market App</h1>
        <Navbar />
        <ItemListContainer message="Bienvenido" name="Yablo!" />
      </div>
    </>
  );
}

export default App;
