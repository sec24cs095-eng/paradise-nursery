import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 350,
        image: "photo-1501004318641-b39e6451bec6"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 450,
        image: "photo-1497250681960-ef046c08a56e"
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 250,
        image: "photo-1459156212016-c812468e2115"
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 550,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 400,
        image: "photo-1509423350716-97f9360b4e09"
      },
      {
        id: 6,
        name: "Aloe Vera",
        price: 200,
        image: "photo-1509423350716-97f9360b4e09"
      }
    ]
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      {
        id: 7,
        name: "ZZ Plant",
        price: 500,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 300,
        image: "photo-1501004318641-b39e6451bec6"
      },
      {
        id: 9,
        name: "Pothos",
        price: 250,
        image: "photo-1497250681960-ef046c08a56e"
      },
      {
        id: 10,
        name: "Lucky Bamboo",
        price: 350,
        image: "photo-1459156212016-c812468e2115"
      },
      {
        id: 11,
        name: "Aglaonema",
        price: 450,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 12,
        name: "Dracaena",
        price: 400,
        image: "photo-1509423350716-97f9360b4e09"
      }
    ]
  },
  {
    name: "Decorative Plants",
    plants: [
      {
        id: 13,
        name: "Monstera",
        price: 600,
        image: "photo-1501004318641-b39e6451bec6"
      },
      {
        id: 14,
        name: "Fiddle Leaf Fig",
        price: 750,
        image: "photo-1485955900006-10f4d324d411"
      },
      {
        id: 15,
        name: "Calathea",
        price: 500,
        image: "photo-1497250681960-ef046c08a56e"
      },
      {
        id: 16,
        name: "Philodendron",
        price: 400,
        image: "photo-1459156212016-c812468e2115"
      },
      {
        id: 17,
        name: "Bird of Paradise",
        price: 850,
        image: "photo-1509423350716-97f9360b4e09"
      },
      {
        id: 18,
        name: "Boston Fern",
        price: 300,
        image: "photo-1485955900006-10f4d324d411"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Our Houseplants 🌿</h1>

      <h3 style={{ textAlign: "center" }}>
        Items in your cart: {cartCount}
      </h3>

      {categories.map((category) => (
        <section key={category.name}>
          <h2 className="category-title">
            {category.name}
          </h2>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <article
                  className="plant-card"
                  key={plant.id}
                >
                  <img
                    src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    className="add-btn"
                    disabled={added}
                    onClick={() =>
                      dispatch(addToCart(plant))
                    }
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;