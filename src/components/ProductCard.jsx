function ProductCard({ name, price, image }) {
  const orderItem = () => {
    const phone = "919876543210";
    const message = `Hello, I want to order:\n${name} - ₹${price}/kg`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}/kg</p>
      <button onClick={orderItem}>Order</button>
    </div>
  );
}

export default ProductCard;