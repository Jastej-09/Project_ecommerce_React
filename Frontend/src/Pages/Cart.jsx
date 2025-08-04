import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios.get('https://project-ecommerce-react.onrender.com/cart')
      .then((response) => {
        const grouped = groupByProduct(response.data);
        setCart(grouped);
      })
      .catch((error) => console.error('Error fetching cart:', error));
  };

  const groupByProduct = (items) => {
    const map = new Map();

    for (const item of items) {
      const id = item.productId._id;
      if (map.has(id)) {
        map.get(id).quantity += 1;
      } else {
        map.set(id, { ...item.productId, quantity: 1 });
      }
    }

    return Array.from(map.values());
  };

  const reduceQuantity = (productId) => {
    axios.delete(`http://localhost:3000/cart/reduce/${productId}`)
      .then(() => fetchCart())
      .catch((err) => console.error('Error reducing quantity:', err));
  };

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:3000/cart/delete/${productId}`)
      .then(() => fetchCart())
      .catch((err) => console.error('Error deleting product:', err));
  };

  return (
    <div>
      <div className='head'>
        <h2>Your Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="no"><p>No items in cart</p></div>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item._id} className="cart-card">
              <img
                src={item.image}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>

              <div className="cart-buttons">
                <button onClick={() => reduceQuantity(item._id)}>−</button>
                <button className="delete" onClick={() => deleteProduct(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
