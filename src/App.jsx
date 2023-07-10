import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout/layout";
import ItemListContainer from "./components/page/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/page/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          {/* Aca deberian aparecer Item Detail Container, el cual dentro debe tener el Item Detail*/}
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          {/* Aca deberian aparecer el carrito con todo dentro, por ahora no necesario*/}
          <Route path="/carrito" element={<h1>Carrito is work in progress</h1>} />
          <Route exact path="*" element={<h1>Wilkommen to 404 Market App</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
