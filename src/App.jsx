import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "../src/components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <ProductsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </ProductsProvider>
      </Router>
    </>
  );
}

export default App;
