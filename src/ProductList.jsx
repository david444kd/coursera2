import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image: "/images/aloe.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Succulents",
    image: "/images/snake_plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 30,
    category: "Flowering",
    image: "/images/peace_lily.jpg",
  },
  {
    id: 4,
    name: "Cactus",
    price: 25,
    category: "Succulents",
    image: "/images/cactus.jpg",
  },
  {
    id: 5,
    name: "Orchid",
    price: 40,
    category: "Flowering",
    image: "/images/orchid.jpg",
  },
  {
    id: 6,
    name: "Ficus",
    price: 35,
    category: "Foliage",
    image: "/images/ficus.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
