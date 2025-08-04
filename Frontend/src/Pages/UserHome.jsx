import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserHome.css";
import { Link, useNavigate } from "react-router-dom";

const UserHome = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://project-ecommerce-react.onrender.com/store")
      .then((res) => {
        console.log(res.data.products);
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="store-page">
      <nav className="navbar-container">
        <div className="navbar-left">
          <h2 className="nav-link" onClick={() => navigate('/')}>Gamezone</h2>
        </div>

        <div className="navbar-center">
          <input type="text" placeholder="Search..." className="nav-search" />
        </div>

        <div className="navbar-right">
          <h2 className="nav-link" onClick={() => navigate('/store')}>Store</h2>
          <h2 className="nav-link" onClick={() => navigate('/About')}>About Us</h2>
          <h2 className="nav-link" onClick={() => navigate('/users')}>Login</h2>
          <h2 className="nav-link cart-icon" onClick={() => navigate('/cart')}>
            <i className="ri-shopping-cart-fill"></i>
          </h2>
        </div>
      </nav>

      <div className="store-grid">
        {productData.map((elem) => (
          <div className="store-card" key={elem._id}>
            <div className="store-card-img">
              <img
                src={elem.image}
                alt="product"
                width="200px"
              />
            </div>
            <div className="store-card-details">
              <Link to={`/products/detail/${elem._id}`}><h1>{elem.title}</h1></Link>
              <h4>Price : ₹{elem.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;
