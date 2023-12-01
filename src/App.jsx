import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "../src/components/Products/Products";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Header />
            <Routes>
              <Route path="/shop" element={<Products />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
