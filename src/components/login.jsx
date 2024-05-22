import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../axios/Config";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/user/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Successful login", response.data);
      sessionStorage.setItem("user_Id", response.data.content._id);
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem("first_Name", response.data.content.firstName);
      navigate("/");
      handleClear();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleClear = () => {
    setData({
      email: "",
      password: "",
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
                    <h3>Welcom Back</h3>
                    <h6>Enter Your credential to login</h6>
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
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      required
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary"
                        type="submit"
                        style={{ backgroundColor: "#4CAF50", color: "white" }}
                      >
                        Log in now
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
                      to="/forgetPass"
                      className="link-secondary text-decoration-none"
                      style={{
                        textDecoration: "underline !important",
                        color: "blue",
                      }}
                    >
                      Forgot password
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

export default Login;
