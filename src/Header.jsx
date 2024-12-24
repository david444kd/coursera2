import { Link } from "react-router-dom";

function Header({ cartItemCount }) {
  return (
    <header>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <span>Cart ({cartItemCount})</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
