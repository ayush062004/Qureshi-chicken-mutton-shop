import { useState } from "react";
import "./Order.css";

function Order() {
  const phone = "916393594508";

  const [formData, setFormData] = useState({
    name: "",
    item: "Mutton",
    qty: 1,
  });

  const products = [
    "Mutton",
    "Broiler Chicken",
    "Country Chicken",
    "Chicken Breast",
    "Chicken Leg Piece",
    "Chicken Curry Cut",
    "Chicken Biryani Cut",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseQty = () => {
    setFormData({ ...formData, qty: Number(formData.qty) + 1 });
  };

  const decreaseQty = () => {
    if (formData.qty > 1) {
      setFormData({ ...formData, qty: Number(formData.qty) - 1 });
    }
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const message = `Hello 🐔,
New Order Details:

Name: ${formData.name}
Product: ${formData.item}
Quantity: ${formData.qty} KG

Please confirm my order.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="order-page">
      <div className="order-card">
        <h2>Place Your Order</h2>

        <form onSubmit={sendOrder}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
          >
            {products.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="qty-box">
            <button type="button" onClick={decreaseQty}>-</button>
            <span>{formData.qty} kg</span>
            <button type="button" onClick={increaseQty}>+</button>
          </div>

          <button type="submit" className="order-btn">
            Order on WhatsApp
          </button>

        </form>
      </div>
    </section>
  );
}

export default Order;