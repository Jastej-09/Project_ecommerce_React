import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ProductDetail.css";
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail();
  }, [productId]);

  const getProductDetail = async () => {
    await axios.get("https://project-ecommerce-react.onrender.com/products/" + productId)
      .then((res) => {
        console.log(res);
        setProductData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = () => {
    axios.post(`https://project-ecommerce-react.onrender.com/cart/add/${productId}`)
      .then(response => alert('Product added to cart!'))
      .catch(error => console.error('Error adding to cart:', error));
  };

  return (
    <div className='product-page'>
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
            <h2 className="nav-link" onClick={() => navigate('/admin/products/add')}>
            Add Product
          </h2>
          </h2>
        </div>
      </nav>

      <div className="product-container">
        <div className="product-image">
          <img src={productData.image} alt="Product" height="450px" />
        </div>
        <div className="product-info">
          <h1>{productData.title}</h1>
          <h2>Price: ₹{productData.price}</h2>
          <p>{productData.description}</p>
          <p><b>Category:</b> {productData.category}</p>

          <div className="product-buttons">
            <button className="buy-btn">Buy</button>
            <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
