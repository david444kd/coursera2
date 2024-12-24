import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../src/redux/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Total: ${getTotal()}</h3>
        <button disabled>Coming Soon</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartPage;
