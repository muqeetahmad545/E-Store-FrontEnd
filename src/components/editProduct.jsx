import axios from "axios";
import React, { useState } from "react";
import config from "../axios/config";
const EditProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    productDescription: "",
    category: "",
    price: "",
    sizes: [],
    colors: [],
    images: [],
    gender: "",
    brand: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sizes" || name === "colors" || name === "images") {
      setFormData({
        ...formData,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
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
      sizes: [],
      colors: [],
      images: [],
      gender: "",
      brand: "",
      discount: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h2 style={{ textAlign: "center" }}>Edit Product</h2>
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
                type="text"
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
                value={formData.colors}
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
                value={formData.images}
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
          <div style={{ display: "flex", marginBottom: "10px" }}>
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
            <div style={{ marginBottom: "10px", height: "50px" }}>
              <label>
                Product Discount:
                <input
                  type="text"
                  name="productDiscount"
                  value={formData.discount}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div>
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
            Update Product
          </button>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "red",
              color: "white",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
