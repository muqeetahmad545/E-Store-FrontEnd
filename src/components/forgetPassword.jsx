import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import config from "../axios/Config";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("access_token");
      const response = await axios.put(
        `${config.BASE_URL}/user/forgetPass`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Successful password reset", response.data);
      navigate("/login");
      handleClear();
    } catch (error) {
      console.error("Error:", error);
      // Handle error here, e.g., display an error message to the user
    }
  };

  const handleClear = () => {
    setData({
      email: "",
      newPassword: "",
    });
  };

  return (
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5" style={{ textAlign: "center" }}>
                    <h3>Reset account password</h3>
                    <h6>Enter a new password for E-Store.com</h6>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="email@gmail.com"
                      required
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="newPassword" className="form-label">
                      New Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      id="newPassword"
                      placeholder="New Password"
                      required
                      value={data.newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary"
                        style={{ backgroundColor: "#4CAF50", color: "white" }}
                        type="submit"
                      >
                        Reset password
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                    <Link
                      to="/signUp"
                      className="link-secondary text-decoration-none"
                      style={{ textDecoration: "underline", color: "blue" }}
                    >
                      Create new account
                    </Link>
                    <Link
                      to="/login"
                      className="link-secondary text-decoration-none"
                      style={{
                        textDecoration: "underline !important",
                        color: "blue",
                      }}
                    >
                      Login account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
