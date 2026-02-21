import { useState } from "react";
import "./Map.css";

function Admin() {
  // 🔐 SHA-256 hash of your real password
  const AD =
    "2f73357290709b86c5989c1211c60d370d9f7edd587edc25c23564fbf4a7f2cf";

  const defaultProducts = [
    { name: "Mutton", price: 750 },
    { name: "Broiler Chicken", price: 220 },
    { name: "Country Chicken", price: 450 },
    { name: "Chicken Breast", price: 320 },
    { name: "Chicken Leg Piece", price: 300 },
    { name: "Chicken Curry Cut", price: 260 },
    { name: "Chicken Biryani Cut", price: 280 },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("adminAuth") === "true"
  );

  const [password, setPassword] = useState("");

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  // 🔐 SHA-256 hashing function
  async function hashPassword(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const userHash = await hashPassword(password);

    if (userHash === AD) {
      localStorage.setItem("adminAuth", "true");
      setIsLoggedIn(true);
    } else {
      alert("Wrong Password ❌");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsLoggedIn(false);
  };

  const handleChange = (index, value) => {
    const updated = [...products];
    updated[index].price = Number(value);
    setProducts(updated);
  };

  const savePrices = () => {
    localStorage.setItem("products", JSON.stringify(products));
    alert("Prices Updated Successfully ✅");
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <form onSubmit={handleLogin} className="login-card">
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="admin-header">
          <h2>Update Product Prices</h2>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

        {products.map((item, index) => (
          <div key={index} className="admin-row">
            <span>{item.name}</span>
            <input
              type="number"
              value={item.price}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}

        <button onClick={savePrices} className="save-btn">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Admin;