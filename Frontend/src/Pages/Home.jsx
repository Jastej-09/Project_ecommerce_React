import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const AdminStore = () => {
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
    <div className="admin-store-page">
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
          <h2 className="nav-link" onClick={() => navigate('/cart')}>
            <i className="ri-shopping-cart-fill"></i>
          </h2>
          <h2 className="nav-link" onClick={() => navigate('/admin/products/add')}>
            Add Product
          </h2>
        </div>
      </nav>

      <div className="admin-store-grid">
        {productData.map((elem, index) => (
          <div className="admin-store-card" key={index}>
            <div className="admin-store-card-img">
              <img src={elem.image} alt={elem.title} width="200px" />
            </div>
            <div className="admin-store-card-details">
              <Link to={`/products/detail/${elem._id}`}><h1>{elem.title}</h1></Link>
              <h4>Price: ₹{elem.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStore;
