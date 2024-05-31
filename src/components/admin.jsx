import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./AddProduct";
import EditProductForm from "./EditProduct";

const AdminPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const products = [
    { id: 1, name: "Product 1", quantity: 10, gender: "Men", action: "red" },
    { id: 2, name: "Product 2", quantity: 5, gender: "Women" },
    { id: 3, name: "Product 3", quantity: 15, gender: "Unisex" },
    { id: 4, name: "Product 4", quantity: 8, gender: "Men" },
    { id: 5, name: "Product 5", quantity: 12, gender: "Women" },
  ];

  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
    setShowEditForm(true);
  };

  const handleEditFormClose = () => {
    setShowEditForm(false);
    setSelectedProductId(null);
  };

  return (
    <div
      className="product"
      style={{
        textAlign: "center",
        height: "100vh",
        marginTop: "1%",
        backgroundColor: "#b78876",
        position: "relative",
      }}
    >
      <h3>Products</h3>
      <div
        className="button"
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          display: "flex",
          position: "absolute",
          right: 20,
        }}
      >
        <button
          style={{
            marginTop: "10%",
            backgroundColor: "#4CAF50",
            borderRadius: "5px",
            height: "50px",
            width: "120px",
          }}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Close Form" : "Add Product"}
        </button>
      </div>
      {showAddForm && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#b78876",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
          }}
        >
          <AddProductForm />{" "}
        </div>
      )}
      {showEditForm && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#b78876",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
          }}
        >
          <EditProductForm
            productId={selectedProductId}
            onClose={handleEditFormClose}
          />
        </div>
      )}
      <div
        className=""
        style={{
          borderRadius: "5px",
          border: "1px solid",
          margin: "10px",
          color: "gray",
          height: "100vh",
        }}
      >
        <table
          className="table"
          style={{
            marginTop: "3.5%",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.gender}</td>
                <td>
                  <FaEdit
                    style={{
                      marginRight: "5px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEditClick(product.id)}
                  />
                  <FaTrash style={{ color: "red", cursor: "pointer" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
