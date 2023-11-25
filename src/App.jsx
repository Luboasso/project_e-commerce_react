import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "../src/components/Products/Products";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <ProductsProvider>
          <Header />
          <Routes>
            <Route path="/shop" element={<Products />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ProductsProvider>
      </Router>
    </>
  );
}

export default App;
