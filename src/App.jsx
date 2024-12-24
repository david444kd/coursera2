import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProductList from "./ProductList";
import CartPage from "./CartPage";
import { useSelector } from "react-redux";

function App() {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <Router>
      <Header cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
