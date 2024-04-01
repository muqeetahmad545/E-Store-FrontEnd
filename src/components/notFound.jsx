import React from "react";

const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/Images/erroricon.jpeg"
          alt="Error Icon"
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <h1 style={{ color: "red", fontSize: "6rem", fontWeight: "bold" }}>
          404 Error Page Not Found
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#666", fontWeight: 700 }}>
          Oops! The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default Error404;
