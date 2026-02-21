import { useState, useEffect } from "react";
import "./Product.css";

function Products() {
  const phone = "916393594508";

  const defaultProducts = [
    { name: "Mutton", price: 750, image: "/mutton.jpg", premium: true },
    { name: "Broiler Chicken", price: 220, image: "/boilerchicken.jpg" },
    { name: "Country Chicken", price: 450, image: "/country.jpg" },
    { name: "Chicken Breast", price: 320, image: "/chickenbreast.jpg" },
    { name: "Chicken Leg Piece", price: 300, image: "/ChickenLegPiece.jpg" },
    { name: "Chicken Curry Cut", price: 260, image: "/ChickenCurryCut.jpg" },
    { name: "Chicken Biryani Cut", price: 280, image: "/ChickenBiryaniCut.jpg" },
  ];

  const [products, setProducts] = useState(defaultProducts);

  // 🔥 Only update prices, not images
  useEffect(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      const updatedPrices = JSON.parse(saved);

      const merged = defaultProducts.map((item, index) => ({
        ...item,
        price: updatedPrices[index]?.price || item.price,
      }));

      setProducts(merged);
    }
  }, []);

  const [quantities, setQuantities] = useState(
    defaultProducts.map(() => 1)
  );

  const increaseQty = (index) => {
    const newQty = [...quantities];
    newQty[index] += 1;
    setQuantities(newQty);
  };

  const decreaseQty = (index) => {
    const newQty = [...quantities];
    if (newQty[index] > 1) {
      newQty[index] -= 1;
      setQuantities(newQty);
    }
  };

  const handleOrder = (product, qty) => {
    const total = product.price * qty;

    const message = `Hello 🐔,
I want to order:

Product: ${product.name}
Price per KG: ₹${product.price}
Quantity: ${qty} KG
Total: ₹${total}

Please confirm my order.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="products">
      {products.map((item, index) => (
        <div key={index} className="card">

          {item.premium && <span className="badge">Premium</span>}

          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price} / kg</p>

          <div className="qty-box">
            <button onClick={() => decreaseQty(index)}>-</button>
            <span>{quantities[index]} kg</span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <p className="total">
            Total: ₹{item.price * quantities[index]}
          </p>

          <button
            className="order-btn"
            onClick={() => handleOrder(item, quantities[index])}
          >
            Order on WhatsApp
          </button>
        </div>
      ))}
    </section>
  );
}

export default Products;