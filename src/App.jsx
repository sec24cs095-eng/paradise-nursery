import CartItem from "./CartItem.jsx";
import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("plants")}>Plants</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("cart")}>🛒 Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>
              Bring nature home with our beautiful collection of
              indoor plants. Find the perfect green companion
              for your space.
            </p>

            <button
              className="primary-btn"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>
          </div>
        </section>
      )}

      {page === "plants" && <ProductList />}

      {page === "about" && <AboutUs />}

      {page === "cart" && <CartItem />}

      <footer>
        <p>© 2026 Paradise Nursery | Grow Happiness 🌱</p>
      </footer>
    </div>
  );
}

export default App;