// AdminPage.js
import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit product data to the server or perform other actions
    console.log('Product Data:', productData);
    // Reset the form after submission
    setProductData({
      productName: '',
      description: '',
      price: '',
      imageUrl: '',
    });
  };

  return (
    <div className="admin-page">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPage;
