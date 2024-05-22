import axios from "axios";
import React, { useState } from "react";
import config from "../axios/Config";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    productDescription: "",
    category: "",
    price: "",
    sizes: "",
    color: "",
    image: "",
    gender: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("access_token");
      const response = await axios.post(
        `${config.BASE_URL}/collection`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleClear();
      console.log("Successful login", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClear = () => {
    setFormData({
      productName: "",
      quantity: "",
      productDescription: "",
      category: "",
      price: "",
      sizes: "",
      color: "",
      image: "",
      gender: "",
      brand: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "500px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Add Product</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ flex: "1", marginRight: "10px" }}>
              Product Name:
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </label>
            <label style={{ flex: "1" }}>
              Gender:
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ flex: "1", marginRight: "10px" }}>
              Brand:
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </label>
            <label style={{ flex: "1" }}>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ flex: "1", marginRight: "10px" }}>
              Sizes:
              <input
                type="number"
                name="sizes"
                value={formData.sizes}
                onChange={handleChange}
                required
              />
            </label>
            <label style={{ flex: "1" }}>
              Color:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ flex: "1", marginRight: "10px" }}>
              Image:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </label>
            <label style={{ flex: "1" }}>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Product Description:
              <input
                type="text"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
