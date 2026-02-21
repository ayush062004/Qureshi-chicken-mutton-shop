import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-img">
          <img src="/qureshi.jpg" alt="Qureshi Shop" />
        </div>
        <h2 className="logo-text">Qureshi Mutton & Chicken Shop</h2>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? "nav active" : "nav"}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/order" onClick={() => setOpen(false)}>Order</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

